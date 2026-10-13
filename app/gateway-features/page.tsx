import Link from 'next/link';

export const metadata = {
  title: 'RGEI Gateway features | RG Energy Integration Solutions',
  description: 'What the RGEI Gateway does, as of firmware 1.4.0: screens, web page, cloud, remote settings, firmware and licensing.',
};

const sections = [
  {
    title: 'Overview',
    paragraphs: [
      'The gateway is a small computer with a touchscreen. It is located at a customer site, shows the site\'s power figures, and passes encrypted CSIP-AUS export-limit controls through to the site. Each unit reports to a cloud service, so the operator can see its status, change some settings and roll out firmware from the admin console.',
    ],
  },
  {
    title: 'Hardware and screens',
    items: [
      '2.8-inch ILI9341 colour touchscreen, landscape.',
      'Four screens: clock, CSIP control, site (Victron / Fronius) and about.',
      'Auto-rotate cycles the screens every 30 seconds. It can be turned on or off on the unit\'s page or from the cloud.',
      'Swipe up for CSIP control, swipe down for the clock.',
      'Screen backlight is adjustable from the unit\'s page.',
    ],
  },
  {
    title: 'Each unit has its own web page',
    items: [
      'Served from the unit\'s own IP address on the local network, behind a login.',
      'Device Status: firmware version, IP, MAC, serial number, Wi-Fi network and signal, uptime and licence state.',
      'Settings: Auto-rotate, Debug logging, Display backlight, Gateway Server URL, GX Address, Change Web Password, Connect to New WiFi and Factory Reset.',
      'CSIP Control and Site (Victron GX) panels showing the live values.',
      'Debug Log panel, with a Clear button.',
    ],
  },
  {
    title: 'Setup and networking',
    items: [
      'A setup hotspot, with a QR code on the screen to join it from a phone.',
      'The serial number is the Wi-Fi MAC address without colons, in capitals. It identifies the unit in the cloud and in licensing.',
      'The Gateway Server URL is set on the unit\'s page, so a unit can point at the live or staging cloud.',
    ],
  },
  {
    title: 'Cloud connection',
    items: [
      'Telemetry is posted encrypted every 30 seconds: solar, grid, load, battery state of charge and power, Wi-Fi signal and firmware version. The unit also sends a snapshot of what its own page shows.',
      'The unit polls the cloud for status every 15 seconds. Only outbound HTTPS is used, so no ports need opening on site.',
      'Telemetry is stored with the unit\'s record, so the cloud shows the last seen time and the latest readings.',
    ],
  },
  {
    title: 'Cloud admin console',
    items: [
      'List of every licensed unit: status, serial, name and site, ICP or NMI, network operator, last seen, solar, grid, Wi-Fi, control state and firmware.',
      'Per-unit page: device status, settings, CSIP control, site readings, an approximate live view of the screen and firmware.',
      'Licence actions per unit: edit, renew, CSIP report, sticker and revoke.',
      'Reports: CSIP report for all sites and a licence expiry report.',
      'Network operators, each with a login to the operator page, which shows only that operator\'s sites.',
      'Units waiting for a licence are listed, so new units can be added quickly.',
    ],
  },
  {
    title: 'Remote settings',
    items: [
      'From the cloud, the operator can change Auto-rotate and Debug logging.',
      'A change is queued, and the unit picks it up on its next status check, within about 15 seconds.',
      'Each change is applied once. The unit reports back, and the page shows "applied" once it has.',
    ],
  },
  {
    title: 'CSIP and DER control',
    items: [
      'The unit shows the current CSIP mode, export limit, active control and when it ends.',
      'Control state comes from the cloud status feed and is shown on the screen and on the unit\'s page.',
      'Units without a licence show "Not licensed" and do not receive control.',
    ],
  },
  {
    title: 'Victron GX site data',
    items: [
      'The unit reads the GX over the local network, using MQTT, once a GX Address is set.',
      'Shows site solar, grid (import positive, export negative), load, battery power and state of charge, and the GX export limit setting.',
    ],
  },
  {
    title: 'Licensing',
    items: [
      'A unit must be licensed before it sends control data or receives firmware. Unlicensed units are refused.',
      'Licences can run for a set number of months, or have no end date. Expiry is shown on the admin page.',
      'A licence can be renewed, or revoked to switch a unit off.',
    ],
  },
  {
    title: 'Firmware updates',
    items: [
      'Updates are downloaded over the internet from the cloud, and each one is checked against its checksum before it is installed.',
      'Units check for updates every 6 hours. The cloud can also prompt an immediate check, at most every 10 minutes.',
      'Releases are published from a build on the PC. Each release has a version and notes.',
      'Rollout can go to chosen units only (try one first), to every licensed unit, or be paused. A release goes to nobody until units are chosen.',
      'Only licensed units receive a release. The unit shows "NO UPDATE" when there isn\'t one.',
      'Every registered unit has remote access to it for updates and configuration.',
    ],
  },
];

export default function GatewayFeatures() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-base sm:text-xl font-bold text-gray-900 leading-tight">RG Energy Integration Solutions</Link>
          <div className="flex gap-6 text-sm sm:text-base">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link href="/csip-gateway" className="text-sm font-semibold text-blue-900 hover:underline">&larr; The RGEI Gateway</Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-2">RGEI Gateway features</h1>
        <p className="text-gray-600 mb-10">What the RGEI Gateway does, as of firmware 1.4.0 (13 October 2026).</p>

        {sections.map((s) => (
          <div key={s.title} className="mb-10">
            <h2 className="text-xl font-bold text-blue-900 border-b border-gray-200 pb-2 mb-4">{s.title}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p} className="text-gray-700 leading-relaxed mb-3">{p}</p>
            ))}
            {s.items && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base">&copy; 2026 Raymond Greenfield, RG Energy Integration Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
