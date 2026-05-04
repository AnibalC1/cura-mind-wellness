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
  Mail,
  ArrowRight,
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
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="container-luxury text-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <span className="label-eyebrow mb-4 inline-block">New Patients</span>
            <h1 className="font-cormorant text-display-xl font-light text-ivory mb-6">
              Welcome to{' '}
              <span className="italic text-gold-gradient">Cura Mind & Wellness</span>
            </h1>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-ivory/50 max-w-2xl mx-auto text-base leading-relaxed font-light">
              We're honored that you're considering us for your mental health care.
              Here's everything you need to know to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="section-padding">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="label-eyebrow mb-4 inline-block">The Process</span>
            <h2 className="font-cormorant text-display-lg font-light text-ivory mb-6">
              Getting Started is{' '}
              <span className="italic text-gold-gradient">Simple</span>
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-ivory/50 max-w-xl mx-auto text-base leading-relaxed font-light">
              We've streamlined the process to make beginning your care as easy as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="card-luxury h-full p-8 hover:bg-bg-elevated transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                        <step.icon size={20} className="text-gold" />
                      </div>
                      <span className="font-cormorant text-2xl font-light text-gold/40 block text-center">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-dm text-xl text-ivory mb-3">
                        {step.title}
                      </h3>
                      <p className="text-ivory/40 text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link href="/contact" className="btn-primary">
              <Calendar size={14} />
              Schedule Your First Appointment
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-bg-card/50">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-eyebrow mb-4 inline-block">Your First Visit</span>
              <h2 className="font-cormorant text-display-lg font-light text-ivory mb-6">
                What to Expect at{' '}
                <span className="italic text-gold-gradient">Your First Visit</span>
              </h2>
              <div className="gold-divider mb-10" />

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Clock size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-dm text-lg text-ivory mb-2">
                      60-90 Minute Comprehensive Evaluation
                    </h3>
                    <p className="text-ivory/40 text-sm leading-relaxed font-light">
                      Your first appointment is longer than typical follow-ups, giving us time to truly understand your story, symptoms, and goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <User size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-dm text-lg text-ivory mb-2">
                      One-on-One with Your Psychiatrist
                    </h3>
                    <p className="text-ivory/40 text-sm leading-relaxed font-light">
                      You'll meet directly with our board-certified psychiatrist who will guide your care throughout your journey with us.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <CheckCircle size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-dm text-lg text-ivory mb-2">
                      Personalized Treatment Plan
                    </h3>
                    <p className="text-ivory/40 text-sm leading-relaxed font-light">
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
              className="space-y-5"
            >
              <div className="card-luxury p-8">
                <h3 className="font-dm text-2xl text-ivory mb-6">
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
                      <CheckCircle size={18} className="text-gold/60 flex-shrink-0 mt-0.5" />
                      <span className="text-ivory/50 text-sm font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-luxury p-8">
                <h3 className="font-dm text-2xl text-ivory mb-3">
                  Need Help Getting Started?
                </h3>
                <p className="text-ivory/40 text-sm font-light leading-relaxed mb-6">
                  Our patient care coordinators are here to answer any questions and help you prepare for your first visit.
                </p>
                <a href="tel:6177777982" className="btn-outline">
                  <Phone size={14} />
                  Call (617) 777-7982
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance & Payment */}
      <section className="section-padding">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="label-eyebrow mb-4 inline-block">Coverage</span>
            <h2 className="font-cormorant text-display-lg font-light text-ivory mb-6">
              Insurance &{' '}
              <span className="italic text-gold-gradient">Payment Options</span>
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-ivory/50 max-w-xl mx-auto text-base leading-relaxed font-light">
              We accept most major insurance plans and offer flexible payment options to make care accessible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-luxury p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                <CreditCard size={20} className="text-gold" />
              </div>
              <h3 className="font-dm text-2xl text-ivory mb-4">
                Insurance Accepted
              </h3>
              <p className="text-ivory/40 text-sm font-light mb-6">
                We're in-network with most major insurance providers:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {insuranceProviders.map((provider, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-ivory/50 font-light"
                  >
                    <div className="w-1 h-1 bg-gold/60 rounded-full" />
                    {provider}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-ivory/30 italic">
                Don't see your provider? Contact us to verify coverage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <div className="card-luxury p-8">
                <h3 className="font-dm text-2xl text-ivory mb-3">Self-Pay Options</h3>
                <p className="text-ivory/40 text-sm font-light leading-relaxed mb-4">
                  For patients without insurance or who prefer to self-pay, we offer competitive rates and flexible payment plans.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-xs tracking-widest uppercase font-inter transition-colors"
                >
                  Contact us for pricing
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="card-luxury p-8">
                <h3 className="font-dm text-2xl text-ivory mb-3">
                  Financial Assistance
                </h3>
                <p className="text-ivory/40 text-sm font-light leading-relaxed">
                  We offer sliding scale fees and financial assistance programs for qualifying patients. No one should go without care due to cost.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="section-padding bg-bg-card/50">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="label-eyebrow mb-4 inline-block">Paperwork</span>
            <h2 className="font-cormorant text-display-lg font-light text-ivory mb-6">
              Patient{' '}
              <span className="italic text-gold-gradient">Forms</span>
            </h2>
            <div className="gold-divider mx-auto mb-6" />
            <p className="text-ivory/50 text-base font-light leading-relaxed mb-10">
              Download and complete these forms before your first appointment to save time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary">
                <Download size={14} />
                Download Intake Forms
              </a>
              <Link href="/contact" className="btn-outline">
                <Mail size={14} />
                Request Forms by Email
              </Link>
            </div>
            <p className="mt-6 text-xs text-ivory/30 italic">
              Forms will be sent automatically when you schedule your appointment
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
