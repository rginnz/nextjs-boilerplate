Set-Location C:\Users\OEM\nextjs-boilerplate

Get-ChildItem app -Recurse -Include *.tsx | ForEach-Object {
  $t = Get-Content $_.FullName -Raw -Encoding UTF8

  # Primary buttons: amber (sections that use bg-blue-900 text-white are left alone)
  $t = $t -replace 'bg-blue-900 text-white (?=(px|py)-)', 'bg-amber-400 text-blue-950 '
  $t = $t -replace 'hover:bg-blue-800', 'hover:bg-amber-300'
  # Buttons on dark sections
  $t = $t -replace 'bg-white text-blue-900', 'bg-amber-400 text-blue-950'
  $t = $t -replace 'hover:bg-gray-100', 'hover:bg-amber-300'

  # Tinted sections, navy footer, brand rule under the nav
  $t = $t -replace 'bg-gray-50', 'bg-sky-50'
  $t = $t -replace 'bg-gray-900 text-gray-400', 'bg-blue-950 text-blue-200'
  $t = $t -replace 'border-b border-gray-200', 'border-b-2 border-blue-900'

  # Process step numbers
  $t = $t -replace 'text-blue-900 font-bold text-4xl', 'text-amber-500 font-bold text-4xl'

  # Home page service cards: colour matches the device node in the logo
  $t = $t -replace '<div className="bg-white p-6 sm:p-8 rounded-lg shadow">(\s*<h3[^>]*>Solar Integration)', '<div className="bg-white p-6 sm:p-8 rounded-lg shadow border-t-4 border-amber-400">$1'
  $t = $t -replace '<div className="bg-white p-6 sm:p-8 rounded-lg shadow">(\s*<h3[^>]*>Protocol Translation)', '<div className="bg-white p-6 sm:p-8 rounded-lg shadow border-t-4 border-blue-700">$1'
  $t = $t -replace '<div className="bg-white p-6 sm:p-8 rounded-lg shadow">(\s*<h3[^>]*>Custom Hardware)', '<div className="bg-white p-6 sm:p-8 rounded-lg shadow border-t-4 border-teal-500">$1'

  # Services page cards: coloured top edge in the same order
  $t = $t -replace '<div key=\{idx\} className="group', '<div key={idx} style={{ borderTopWidth: 4, borderTopColor: ["#F5A524","#2563A8","#12A594","#6B7C93"][idx % 4] }} className="group'

  # Hero logo: tint the device nodes (solar = amber, battery = teal, left node = light blue)
  $t = [regex]::Replace($t, '<svg[^>]*md:w-48[^>]*>.*?</svg>', {
    param($m)
    $s = $m.Value
    $s = $s -replace '(<path[^>]*?)fill="white" stroke="#0F3D7B"', '$1fill="#FDE9B8" stroke="#F5A524"'
    $s = $s -replace '(<rect[^>]*?)fill="white" stroke="#0F3D7B"', '$1fill="#CDEFE9" stroke="#12A594"'
    $s = $s -replace '(<circle cx="15"[^>]*?)fill="white"', '$1fill="#DCE8F7"'
    $s
  }, [System.Text.RegularExpressions.RegexOptions]::Singleline)

  Set-Content $_.FullName $t -NoNewline -Encoding UTF8
}

git add app
git commit -m "Add colour: device-node palette, amber buttons, tinted sections"
git push origin main
