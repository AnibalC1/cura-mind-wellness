# Cura Mind & Wellness — Website

A premium luxury psychiatric practice website for Dr. Vivian Emuobe's Cura Mind & Wellness.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom luxury palette)
- **Framer Motion** (animations)

## Design System

| Token | Value |
|-------|-------|
| Background | `#0D0F0F` |
| Card surface | `#161A1A` |
| Ivory text | `#F5EFE6` / `#E8E0D5` |
| Gold accent | `#C9A96E` |
| Sage | `#7A9E7E` |
| Heading font | Cormorant Garamond |
| UI font | Inter |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, provider, philosophy, locations, CTA |
| `/about` | Dr. Emuobe bio, credentials timeline, clinical approach |
| `/services` | All 9 services with full descriptions and state availability |
| `/locations` | 4 location cards (MA, TX, CA, OR) + telehealth section |
| `/contact` | Intake form + phone/hours sidebar |

## ChatWidget

The `ChatWidget` component at `src/components/ChatWidget.tsx` is a floating FAQ + lead-capture bot:
- Rule-based intent detection (no external API required)
- Handles: services, locations, insurance, appointment, hours, provider, telehealth, crisis
- Lead capture flow: name → email → phone → service → location
- Shows appointment CTA when lead is complete
- Swap in a real LLM by replacing the `getBotResponse` function in `src/lib/chatbot.ts` with an API call

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: GitHub → Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo
4. Framework: **Next.js** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `.next`
7. Click Deploy

No environment variables required for the static version. Add them if connecting to a real API/CRM.

## Connecting a Real LLM (optional)

To replace the rule-based chatbot with an LLM:

1. Add your API key to `.env.local`:
   ```
   OPENAI_API_KEY=sk-...
   ```

2. Create `src/app/api/chat/route.ts`:
   ```typescript
   import OpenAI from "openai";
   const openai = new OpenAI();

   export async function POST(req: Request) {
     const { messages } = await req.json();
     const completion = await openai.chat.completions.create({
       model: "gpt-4o-mini",
       messages: [
         { role: "system", content: "You are a helpful assistant for Cura Mind & Wellness..." },
         ...messages,
       ],
     });
     return Response.json({ content: completion.choices[0].message.content });
   }
   ```

3. Update `ChatWidget.tsx` to call `/api/chat` instead of `getBotResponse`.

## Connecting a Contact Form Backend

The contact form in `src/app/contact/components/ContactForm.tsx` currently simulates submission. To wire it up:

- **Resend / Nodemailer**: Create `src/app/api/contact/route.ts` to send email notifications
- **Airtable / Notion**: Push form data to a database
- **Calendly**: Replace the form with a Calendly embed
- **HubSpot / Salesforce**: Use their form API to create contacts directly

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Nav + Footer + ChatWidget)
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── locations/          # Locations page
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Navigation, Footer
│   ├── home/               # Hero, Services, Provider, etc.
│   └── ChatWidget.tsx      # Floating chatbot
└── lib/
    ├── data.ts             # All practice content (single source of truth)
    ├── chatbot.ts          # Rule-based response engine
    └── utils.ts            # Utility functions
```

## Content Updates

All business content (services, locations, provider info, hours) lives in `src/lib/data.ts`. Edit there and it propagates across all pages.
