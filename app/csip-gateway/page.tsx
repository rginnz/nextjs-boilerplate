import Link from 'next/link';

export const metadata = {
  title: 'CSIP Gateway | RG Energy Solutions',
  description:
    'The RGEI CSIP Gateway: a compact ESP32 gateway with a built-in colour display that connects an installation to the cloud and shows its status at a glance.',
};

const today = [
  {
    title: 'Connects over WiFi',
    body: "Joins the site's own 2.4 GHz WiFi network, so there is no extra cabling and no separate hub to install.",
    color: '#12A594',
  },
  {
    title: 'Reports every 30 seconds',
    body: 'Sends a status update to the cloud over a secure HTTPS connection, so you can see that a site is online without visiting it.',
    color: '#F5A524',
  },
  {
    title: 'Shows its status on the display',
    body: 'A 2.8 inch colour screen shows the WiFi state, the IP address and the result of the last report. A status light turns green when a report succeeds and red when it fails.',
    color: '#2563A8',
  },
];

const specs = [
  ['Controller', 'ESP32'],
  ['Display', '2.8 inch colour TFT, 320 x 240'],
  ['Network', 'WiFi, 2.4 GHz'],
  ['Reporting', 'Every 30 seconds, over HTTPS'],
  ['Status light', 'RGB LED: green for success, red for failure'],
  ['Power', '5 V, 2 A supply (a phone charger works)'],
  ['Enclosure', '3D printed, with screw tabs for mounting'],
];

export default function CsipGateway() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b-2 border-blue-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <svg viewBox="0 0 200 280" className="w-5 h-7" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="120" r="20" fill="white" stroke="#0F3D7B" strokeWidth="4"/>
              <line x1="100" y1="95" x2="100" y2="30" stroke="#0F3D7B" strokeWidth="5" strokeLinecap="round"/>
              <path d="M 80 15 L 100 0 L 120 15 Z" fill="#FDE9B8" stroke="#F5A524" strokeWidth="4" strokeLinejoin="round"/>
              <line x1="82" y1="110" x2="25" y2="80" stroke="#0F3D7B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="15" cy="75" r="16" fill="#DCE8F7" stroke="#0F3D7B" strokeWidth="4"/>
              <line x1="118" y1="110" x2="170" y2="70" stroke="#0F3D7B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="158" y="54" width="30" height="30" fill="#CDEFE9" stroke="#12A594" strokeWidth="4" rx="4"/>
              <line x1="100" y1="145" x2="100" y2="220" stroke="#0F3D7B" strokeWidth="5" strokeLinecap="round"/>
              <circle cx="100" cy="240" r="16" fill="white" stroke="#0F3D7B" strokeWidth="4"/>
            </svg>
            <span className="text-base sm:text-xl font-bold text-gray-900 leading-tight">RG Energy Integration Solutions</span>
          </Link>
          <div className="flex gap-6 text-sm sm:text-base">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">CSIP Gateway</h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4">
              A small gateway with its own display. It connects an installation to the cloud and shows what it is doing, without opening a laptop.
            </p>
            <p className="text-base sm:text-lg text-gray-600">
              Designed, programmed and built in-house.
            </p>
          </div>
          <img
            src="/cyd-gateway.jpg"
            alt="RGEI CSIP Gateway: a blue 3D-printed enclosure with a colour display showing the About screen"
            width={1045}
            height={717}
            className="w-full h-auto rounded-2xl shadow-lg border-b-4 border-teal-500"
          />
        </div>
      </section>

      {/* What it does today */}
      <section className="bg-sky-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">What it does today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {today.map((item) => (
              <div
                key={item.title}
                style={{ borderTopWidth: 4, borderTopColor: item.color }}
                className="bg-white p-6 sm:p-8 rounded-lg shadow"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup and specs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Setting up a unit</h2>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                <span className="font-semibold text-gray-900">Power. </span>
                Plug it into a 5 V, 2 A supply. A computer USB port does not supply enough current for stable WiFi.
              </p>
              <p>
                <span className="font-semibold text-gray-900">Network. </span>
                It joins the site&apos;s 2.4 GHz WiFi network. It does not work on 5 GHz only networks.
              </p>
              <p>
                <span className="font-semibold text-gray-900">Registration. </span>
                Each unit has a unique ID, taken from its network address. The cloud service only accepts registered units, so an unregistered unit cannot send data.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Specifications</h2>
            <dl className="divide-y divide-gray-200 border-y border-gray-200">
              {specs.map(([label, value]) => (
                <div key={label} className="py-3 grid grid-cols-3 gap-4">
                  <dt className="font-semibold text-gray-900">{label}</dt>
                  <dd className="col-span-2 text-gray-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* In development */}
      <section className="bg-sky-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">In development</h2>
          <p className="text-gray-600 mb-8 max-w-2xl">These features are being designed and are not available yet.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Export limit control</h3>
              <p className="text-gray-600 leading-relaxed">
                Writing export limits to a Victron GX device, and to inverters such as the Fronius Primo through Modbus.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">CSIP commands</h3>
              <p className="text-gray-600 leading-relaxed">
                Receiving commands from a CSIP server and acting on them at the site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Want it on your installations?</h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8">
            Tell me what you install and I will tell you what the gateway can and cannot do today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-400 text-blue-950 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-amber-300 transition text-sm sm:text-base"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base">&copy; 2026 Raymond Greenfield, RG Energy Integration Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
