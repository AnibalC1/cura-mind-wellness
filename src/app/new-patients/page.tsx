'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ClipboardList,
  CreditCard,
  Calendar,
  User,
  CheckCircle,
  Clock,
  Phone,
  Download,
  Mail
} from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const steps = [
  {
    icon: Calendar,
    title: 'Schedule Your Appointment',
    description:
      'Call us at (617) 777-7982 or fill out our online contact form. Our team will reach out within 24 hours to schedule your first appointment.',
  },
  {
    icon: ClipboardList,
    title: 'Complete Intake Forms',
    description:
      "We'll send you secure intake paperwork to complete before your first visit. This helps us understand your health history and concerns.",
  },
  {
    icon: User,
    title: 'Initial Consultation',
    description:
      'Your first visit is a comprehensive 60-90 minute evaluation with our psychiatrist to discuss your concerns and goals.',
  },
  {
    icon: CheckCircle,
    title: 'Personalized Treatment Plan',
    description:
      "Together, we'll develop a customized treatment plan tailored to your unique needs, preferences, and goals.",
  },
]

const insuranceProviders = [
  'Blue Cross Blue Shield',
  'Aetna',
  'UnitedHealthcare',
  'Cigna',
  'Medicare',
  'Medicaid',
  'Humana',
  'And many more...',
]

export default function NewPatientsPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg-card to-bg opacity-90" />

        <div className="container relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full text-gold mb-8">
              <ClipboardList size={20} />
              <span className="font-medium tracking-wide">New Patients</span>
            </div>

            <h1 className="heading-display text-5xl md:text-7xl mb-8">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-gold via-gold-light to-sage bg-clip-text text-transparent">
                Cura Mind & Wellness
              </span>
            </h1>

            <p className="text-xl text-ivory-muted leading-relaxed max-w-2xl mx-auto">
              We're honored that you're considering us for your mental health care.
              Here's everything you need to know to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-display text-4xl md:text-5xl text-ivory mb-6">
              Getting Started is{' '}
              <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                Simple
              </span>
            </h2>
            <p className="text-xl text-ivory-muted">
              We've streamlined the process to make beginning your care as easy as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full p-8 bg-bg-card border border-ivory/8 rounded-2xl hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mb-4">
                        <step.icon size={28} className="text-bg" />
                      </div>
                      <div className="text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-gold/20 text-gold border border-gold/30 rounded-full font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-ivory mb-3">
                        {step.title}
                      </h3>
                      <p className="text-ivory-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-bg font-medium rounded-xl hover:shadow-lg hover:shadow-gold/25 transition-all duration-300"
            >
              <Calendar size={20} />
              Schedule Your First Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-bg-card/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-display text-4xl md:text-5xl text-ivory mb-8">
                What to Expect at{' '}
                <span className="bg-gradient-to-r from-gold to-sage bg-clip-text text-transparent">
                  Your First Visit
                </span>
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 border border-gold/30 rounded-xl flex items-center justify-center">
                    <Clock size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-ivory mb-2">
                      60-90 Minute Comprehensive Evaluation
                    </h3>
                    <p className="text-ivory-muted leading-relaxed">
                      Your first appointment is longer than typical follow-ups, giving us time to truly understand your story, symptoms, and goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-sage/20 border border-sage/30 rounded-xl flex items-center justify-center">
                    <User size={24} className="text-sage" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-ivory mb-2">
                      One-on-One with Your Psychiatrist
                    </h3>
                    <p className="text-ivory-muted leading-relaxed">
                      You'll meet directly with our board-certified psychiatrist who will guide your care throughout your journey with us.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/20 border border-gold/30 rounded-xl flex items-center justify-center">
                    <CheckCircle size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-ivory mb-2">
                      Personalized Treatment Plan
                    </h3>
                    <p className="text-ivory-muted leading-relaxed">
                      We'll work together to create a treatment plan that aligns with your goals, lifestyle, and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-bg-card border border-ivory/8 rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-ivory mb-6">
                  What to Bring
                </h3>
                <ul className="space-y-4">
                  {[
                    'Photo ID and insurance card',
                    'List of current medications',
                    'Relevant medical records (if available)',
                    'List of questions or concerns',
                    'Insurance co-pay (if applicable)',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-ivory-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gold/20 to-gold-light/20 border border-gold/30 rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-ivory mb-4">
                  Need Help Getting Started?
                </h3>
                <p className="mb-6 text-ivory-muted">
                  Our patient care coordinators are here to answer any questions and help you prepare for your first visit.
                </p>
                <a
                  href="tel:6177777982"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg font-medium rounded-lg hover:bg-gold-light transition-all"
                >
                  <Phone size={18} />
                  Call (617) 777-7982
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-display text-4xl md:text-5xl text-ivory mb-6">
              Insurance &{' '}
              <span className="bg-gradient-to-r from-gold to-sage bg-clip-text text-transparent">
                Payment Options
              </span>
            </h2>
            <p className="text-xl text-ivory-muted">
              We accept most major insurance plans and offer flexible payment options to make care accessible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-bg-card border border-ivory/8 rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-light rounded-2xl flex items-center justify-center mb-6">
                <CreditCard size={28} className="text-bg" />
              </div>
              <h3 className="text-2xl font-medium text-ivory mb-4">
                Insurance Accepted
              </h3>
              <p className="text-ivory-muted mb-6">
                We're in-network with most major insurance providers:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-ivory-muted"
                  >
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    {provider}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-ivory/60">
                Don't see your provider? Contact us to verify coverage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-bg-card border border-ivory/8 rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-ivory mb-4">Self-Pay Options</h3>
                <p className="text-ivory-muted mb-4">
                  For patients without insurance or who prefer to self-pay, we offer competitive rates and flexible payment plans.
                </p>
                <Link
                  href="/contact"
                  className="text-gold font-medium hover:text-gold-light transition-colors"
                >
                  Contact us for pricing →
                </Link>
              </div>

              <div className="bg-bg-card border border-ivory/8 rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-ivory mb-4">
                  Financial Assistance
                </h3>
                <p className="text-ivory-muted">
                  We offer sliding scale fees and financial assistance programs for qualifying patients. No one should go without care due to cost.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 bg-bg-card/50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-display text-4xl md:text-5xl text-ivory mb-6">
              Patient{' '}
              <span className="bg-gradient-to-r from-gold to-sage bg-clip-text text-transparent">
                Forms
              </span>
            </h2>
            <p className="text-xl text-ivory-muted mb-8">
              Download and complete these forms before your first appointment to save time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg font-medium rounded-lg hover:bg-gold-light transition-all"
              >
                <Download size={18} />
                Download Intake Forms
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold font-medium rounded-lg hover:border-gold/60 transition-all"
              >
                <Mail size={18} />
                Request Forms by Email
              </Link>
            </div>
            <p className="mt-6 text-sm text-ivory/60">
              Forms will be sent automatically when you schedule your appointment
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}