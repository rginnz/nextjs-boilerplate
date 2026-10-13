import Link from 'next/link';

export const metadata = {
  title: 'RGEI Gateway | RG Energy Solutions',
  description:
    'The RGEI Gateway: a gateway designed to connect your devices so that they talk to each other and then connect to the cloud using standards and protocols.',
};

const today = [
  {
    title: 'Connects over WiFi',
    body: "Joins the site's own 2.4 GHz WiFi network, so there is no extra cabling and no separate hub to install. Setup takes a few minutes with a phone: scan the QR code on the screen and pick the network.",
    color: '#12A594',
  },
  {
    title: 'Reads the site from a Victron GX',
    body: 'Connects to a Victron GX device (such as a Cerbo GX) on the local network and reads solar, grid, load and battery figures, including from a Fronius inverter the GX already monitors.',
    color: '#F5A524',
  },
  {
    title: 'Receives network operator commands',
    body: 'Commands from the network operator arrive within about a minute. The screen shows the active export limit and the seconds remaining, and commands can go to one site, a group of sites or every site at once.',
    color: '#2563A8',
  },
  {
    title: 'Reports in CSIP-AUS format',
    body: 'Builds 5-minute reports as set out in SA TS 5573: site and generation power, voltage, frequency and connection status, each tied to the site\'s ICP or NMI. Status updates go to the cloud every 30 seconds over HTTPS.',
    color: '#12A594',
  },
  {
    title: 'A portal for each network operator',
    body: 'Each network operator has its own login and sees only the sites connected to its network, with live totals, a report per site and downloads in CSV and IEEE 2030.5 formats.',
    color: '#F5A524',
  },
  {
    title: 'Touchscreen display and remote updates',
    body: 'A 2.8 inch colour touchscreen cycles through the clock, operator control, site figures and unit details. New firmware is delivered over the internet, so units in the field stay up to date without a visit.',
    color: '#2563A8',
  },
];

const specs = [
  ['Controller', 'ESP32'],
  ['Display', '2.8 inch colour TFT, 320 x 240'],
  ['Network', 'WiFi, 2.4 GHz'],
  ['Reporting', 'Every 30 seconds over HTTPS; CSIP-AUS 5-minute reports (SA TS 5573)'],
  ['Site data', 'Victron GX over the local network (MQTT)'],
  ['Status light', 'RGB LED: cycles colours when reporting, red if a report fails'],
  ['Updates', 'Firmware updates over the internet'],
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">RGEI Gateway</h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4">A gateway designed to connect your devices so that they talk to each other and then connect to the cloud using standards and protocols.</p>
            <p className="text-base sm:text-lg text-gray-600">
              Designed, programmed and built in-house.
            </p>
            <p className="mt-6">
              <Link href="/gateway-features" className="font-semibold text-blue-900 hover:underline">Full feature list &rarr;</Link>
            </p>
          </div>
          <img
            src="/cyd-gateway.jpg"
            alt="RGEI Gateway: a blue 3D-printed enclosure with a colour display showing the About screen"
            width={1045}
            height={717}
            className="w-full h-auto rounded-2xl shadow-lg border-b-4 border-teal-500"
          />
        </div>
      </section>

      {/* What it does */}
      <section className="bg-sky-50 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">What it does</h2>
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
                Each unit has a unique ID, which is then listed in the database with a licence.
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
