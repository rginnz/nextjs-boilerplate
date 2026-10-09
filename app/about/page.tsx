import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <svg viewBox="0 0 200 280" className="w-8 h-10" xmlns="http://www.w3.org/2000/svg">
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
            <Link href="/about" className="text-blue-900 font-semibold">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
        <p className="text-xl text-gray-600">20+ years making incompatible devices work together.</p>
      </section>

      {/* Background Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Background</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a registered electrician and telecom software architect based in New Zealand with two decades of experience bridging hardware and software systems.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My background spans everything from electrical installation to network architecture, but I've found my real passion in solving the specific problem: when you need solar inverters, battery controllers, monitoring systems, and cloud platforms all talking to each other—but they're made by different manufacturers with incompatible protocols.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That's where I come in.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3">→</span>
                  <span className="text-gray-600"><strong>Registered Electrician</strong> — electrical installation, safety, compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3">→</span>
                  <span className="text-gray-600"><strong>Telecom Architect</strong> — network design, infrastructure, distributed systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3">→</span>
                  <span className="text-gray-600"><strong>Victron Service Engineer</strong> — battery systems, inverters, monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3">→</span>
                  <span className="text-gray-600"><strong>Protocol Integration</strong> — CSIP, OpenADR, Modbus, proprietary systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 font-bold mr-3">→</span>
                  <span className="text-gray-600"><strong>Custom Hardware</strong> — ESP32 gateways, real-time telemetry, display controllers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reliability Over Complexity</h3>
            <p className="text-gray-600">Your system shouldn't require a degree to operate. I build integrations that are robust, simple to troubleshoot, and survive firmware updates.</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">You Own It</h3>
            <p className="text-gray-600">I'm not building vendor lock-in. You get documentation, training, and the ability to support or modify the system without me.</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Real-World Testing</h3>
            <p className="text-gray-600">Every integration I build is tested against actual devices in actual conditions, not just in theory.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Got a system that needs to talk?</h2>
          <p className="text-lg text-blue-100 mb-8">Let's discuss your specific setup.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; 2026 RG Energy Integration Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
