import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
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
          </div>
          <div className="flex gap-6 text-sm sm:text-base">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              If your devices won't talk to each other, talk to me.<span className="block mt-3 text-2xl sm:text-3xl font-semibold text-blue-900">If your energy systems won&apos;t talk to each other, talk to me.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Hardware-software integration for solar, battery, and energy systems. Making incompatible devices work seamlessly together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-800 transition text-sm sm:text-base"
            >
              Get in Touch
            </Link><p className="mt-4 text-sm text-gray-500">Raymond Greenfield, Founder</p>
          </div>
          <div className="flex justify-center items-center">
            <svg viewBox="0 0 200 280" className="w-32 h-44 sm:w-40 sm:h-56 md:w-48 md:h-64" xmlns="http://www.w3.org/2000/svg">
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Solar Integration</h3>
              <p className="text-sm sm:text-base text-gray-600">Connect solar inverters, battery systems, and monitoring equipment that don't speak the same language.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Protocol Translation</h3>
              <p className="text-sm sm:text-base text-gray-600">CSIP, OpenADR, Modbus, proprietary systems—I build the bridges between them.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Custom Hardware</h3>
              <p className="text-sm sm:text-base text-gray-600">ESP32 gateways, display controllers, and real-time telemetry for your unique setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-white py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Link href="/gateway-features" className="block transition hover:opacity-90"><img
            src="/cyd-gateway.jpg"
            alt="RGEI Gateway: a blue 3D-printed enclosure with a colour display showing the About screen"
            width={1045}
            height={717}
            loading="lazy"
            className="w-full h-auto rounded-2xl shadow-lg border-b-4 border-teal-500"
          /><span className="block mt-3 text-sm font-semibold text-blue-900">See the full feature list</span></Link>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The RGEI Gateway</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              A compact, purpose-built gateway with its own display, so you can see what it is doing without opening a laptop.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Designed, programmed and built in-house, and tested on real hardware before it reaches an installation.
            </p>
            <p className="mb-6">
              <Link href="/gateway-features" className="font-semibold text-blue-900 hover:underline">Full feature list &rarr;</Link>
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-400 text-blue-950 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-300 transition text-sm sm:text-base"
            >
              Ask about custom gateways
            </Link>
          </div>
        </div>
      </section>

{/* CTA Section */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to integrate?</h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8">Let's talk about your specific setup.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base">&copy; 2026 Raymond Greenfield, RG Energy Integration Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
