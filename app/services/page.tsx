import Link from 'next/link';

export default function Services() {
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
            <span className="text-xl font-bold text-gray-900">RG Energy</span>
          </Link>
          <div className="flex gap-8">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/services" className="text-blue-900 font-semibold">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Services</h1>
        <p className="text-xl text-gray-600">Making incompatible systems work together.</p>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solar & Battery Integration</h3>
              <p className="text-gray-600 mb-6">
                Connect solar inverters (Fronius, SMA, etc.), battery controllers (Victron, LG, etc.), and monitoring systems that refuse to talk to each other.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Multi-inverter systems</li>
                <li>• Battery BMS integration</li>
                <li>• Real-time monitoring aggregation</li>
                <li>• Load shifting and optimization</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Protocol Translation</h3>
              <p className="text-gray-600 mb-6">
                Your devices speak different languages. I build the translator that lets them understand each other.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• CSIP (Clean Energy Council)</li>
                <li>• OpenADR (grid integration)</li>
                <li>• Modbus (industrial standard)</li>
                <li>• Proprietary APIs and protocols</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Hardware Gateways</h3>
              <p className="text-gray-600 mb-6">
                ESP32-based gateways that sit between incompatible devices and handle real-time translation, monitoring, and control.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Custom device drivers</li>
                <li>• Real-time telemetry</li>
                <li>• Display controllers & dashboards</li>
                <li>• Failsafe and redundancy logic</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">System Design & Consulting</h3>
              <p className="text-gray-600 mb-6">
                Designing a solar+battery system and need to know if all the pieces will actually work together? That's my specialty.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Equipment compatibility audit</li>
                <li>• Integration feasibility study</li>
                <li>• Architecture & wiring design</li>
                <li>• Training and documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">How I Work</h2>
        <div className="space-y-8">
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Understand Your Setup</h3>
              <p className="text-gray-600">We map out exactly what devices you have, what protocols they support, and what data needs to flow between them.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design the Bridge</h3>
              <p className="text-gray-600">I design the integration architecture—whether it's a custom gateway, firmware modification, or protocol translator.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build & Test</h3>
              <p className="text-gray-600">Code, hardware assembly, and rigorous testing with your actual devices and real-world conditions.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deploy & Train</h3>
              <p className="text-gray-600">Installation, configuration, and training so you can operate and maintain it independently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's talk about your system.</h2>
          <p className="text-lg text-blue-100 mb-8">Schedule a consultation to discuss your specific integration challenge.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; 2026 RG Energy Integrations. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
