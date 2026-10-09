'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Solar & Battery Integration',
      description: 'Connect solar inverters, battery controllers, and monitoring systems that speak different languages.',
      points: [
        'Multi-inverter systems',
        'Battery BMS integration',
        'Real-time monitoring',
        'Load shifting & optimization'
      ],
      icon: '☀️'
    },
    {
      title: 'Protocol Translation',
      description: 'Your devices speak different languages. I build the real-time translators between them.',
      points: [
        'CSIP (Clean Energy Council)',
        'OpenADR (grid integration)',
        'Modbus (industrial standard)',
        'Proprietary APIs & protocols'
      ],
      icon: '🔗'
    },
    {
      title: 'Custom Hardware Gateways',
      description: 'Purpose-built ESP32 controllers that sit between incompatible devices and make them work.',
      points: [
        'Custom device drivers',
        'Real-time telemetry',
        'Display controllers & dashboards',
        'Failsafe & redundancy logic'
      ],
      icon: '⚙️'
    },
    {
      title: 'System Design & Consulting',
      description: "Before building, let's map out your entire system to ensure every piece works together.",
      points: [
        'Equipment compatibility audit',
        'Integration feasibility study',
        'Architecture & design review',
        'Technical documentation'
      ],
      icon: '📋'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Understand Your Setup',
      description: 'We map out exactly what devices you have, what protocols they support, and what needs to flow between them.'
    },
    {
      step: '02',
      title: 'Design the Bridge',
      description: 'I design the integration architecture—whether that\'s a custom gateway, firmware modification, or protocol translator.'
    },
    {
      step: '03',
      title: 'Build & Test',
      description: 'Code, assemble, and test against your actual devices and real-world conditions until everything works reliably.'
    },
    {
      step: '04',
      title: 'Deploy & Train',
      description: 'Installation, configuration, and full training so you can operate and maintain it independently.'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <svg viewBox="0 0 200 280" className="w-5 h-7" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="120" r="20" fill="white" stroke="#0F3D7B" strokeWidth="4"/>
              <line x1="100" y1="95" x2="100" y2="30" stroke="#0F3D7B" strokeWidth="5" strokeLinecap="round"/>
              <path d="M 80 15 L 100 0 L 120 15 Z" fill="white" stroke="#0F3D7B" strokeWidth="4" strokeLinejoin="round"/>
              <line x1="82" y1="110" x2="25" y2="80" stroke="#0F3D7B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="15" cy="75" r="16" fill="white" stroke="#0F3D7B" strokeWidth="4"/>
              <line x1="118" y1="110" x2="170" y2="70" stroke="#0F3D7B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="158" y="54" width="30" height="30" fill="white" stroke="#0F3D7B" strokeWidth="4" rx="4"/>
              <line x1="100" y1="145" x2="100" y2="220" stroke="#0F3D7B" strokeWidth="5" strokeLinecap="round"/>
              <circle cx="100" cy="240" r="16" fill="white" stroke="#0F3D7B" strokeWidth="4"/>
            </svg>
            <span className="text-base sm:text-xl font-bold text-gray-900 leading-tight">RG Energy Integration Solutions</span>
          </Link>
          <div className="flex gap-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/services" className="text-blue-900 font-semibold">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Integration Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl">
            Making incompatible hardware and software work seamlessly together. From consulting to full custom integration.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-900 font-bold mt-1">→</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How I Work */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">How I Work</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            A proven 4-step process to get your systems communicating.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 relative">
                <div className="text-blue-900 font-bold text-4xl mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-300 text-3xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-blue-900 text-white rounded-2xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Work With Me?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">20+ Years</h3>
              <p className="text-blue-100">Registered New Zealand electrician working with Australia and New Zealand standards, telecom software architect, and Victron service engineer with deep expertise in energy systems.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Hands-On</h3>
              <p className="text-blue-100">I don't just design—I build, test, and deploy. I understand what actually works in the field.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Local</h3>
              <p className="text-blue-100">Based in New Zealand, I understand the Australasian local solar/battery installer ecosystem inside out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to integrate your system?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's talk about your specific setup and what we can build together.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition text-lg"
        >
          Start a Conversation
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; 2026 Raymond Greenfield, RG Energy Integration Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
