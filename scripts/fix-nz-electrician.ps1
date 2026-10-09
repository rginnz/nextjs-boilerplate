Set-Location C:\Users\OEM\nextjs-boilerplate
Get-ChildItem app -Recurse -Include *.tsx | ForEach-Object {
  $t = Get-Content $_.FullName -Raw -Encoding UTF8
  $t = $t -replace "Registered electrician, telecom software architect", "Registered electrician working with Australia and New Zealand standards, telecom software architect"
  $t = $t -replace "Registered electrician working with", "Registered New Zealand electrician working with"
  Set-Content $_.FullName $t -NoNewline -Encoding UTF8
}
Select-String -Path app\*\*.tsx,app\*.tsx -Pattern "lectrician" | ForEach-Object { $_.Line.Trim() }
git add app
git commit -m "Wording: Registered New Zealand electrician"
git push origin main
