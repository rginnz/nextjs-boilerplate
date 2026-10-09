Set-Location C:\Users\OEM\nextjs-boilerplate
Get-ChildItem app -Recurse -Include *.tsx | ForEach-Object {
  $t = Get-Content $_.FullName -Raw -Encoding UTF8
  $t = $t -creplace 'Telecom Architect', 'Telecom Software Architect'
  $t = $t -creplace 'Telecom architect', 'Telecom Software Architect'
  $t = $t -creplace 'telecom Architect', 'telecom software Architect'
  Set-Content $_.FullName $t -NoNewline -Encoding UTF8
}
Select-String -Path app\*\*.tsx,app\*.tsx -Pattern "elecom" | ForEach-Object { $_.Line.Trim() }
git add app
git commit -m "Telecom Software Architect everywhere"
git push origin main
