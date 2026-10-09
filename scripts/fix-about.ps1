Set-Location C:\Users\OEM\nextjs-boilerplate
Get-ChildItem app -Recurse -Include *.tsx | ForEach-Object {
  $t = Get-Content $_.FullName -Raw -Encoding UTF8
  $t = $t -creplace 'telecom architect', 'telecom software architect'
  $t = $t -creplace 'Telecom architect', 'Telecom software architect'
  Set-Content $_.FullName $t -NoNewline -Encoding UTF8
}
git add app
git commit -m "About: telecom software architect"
git push origin main
