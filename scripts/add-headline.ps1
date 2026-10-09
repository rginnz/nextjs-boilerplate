Set-Location C:\Users\OEM\nextjs-boilerplate
$f = "app\page.tsx"
$t = Get-Content $f -Raw -Encoding UTF8
if ($t -notmatch 'energy systems won') {
  $t = $t -replace '(If your devices won.{1,6}?t talk to each other, talk to me\.)', '$1<span className="block mt-3 text-2xl sm:text-3xl font-semibold text-blue-900">If your energy systems won&apos;t talk to each other, talk to me.</span>'
  Set-Content $f $t -NoNewline -Encoding UTF8
}
Select-String -Path $f -Pattern "talk to me" | ForEach-Object { $_.Line.Trim() }
git add app
git commit -m "Home: add energy systems headline"
git push origin main
