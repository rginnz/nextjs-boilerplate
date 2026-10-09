Set-Location C:\Users\OEM\nextjs-boilerplate
Get-ChildItem app -Recurse -Include *.tsx | ForEach-Object {
  $t = Get-Content $_.FullName -Raw -Encoding UTF8
  $t = $t -replace "Registered electrician, telecom software architect", "Registered electrician working with Australia and New Zealand standards, telecom software architect"
  Set-Content $_.FullName $t -NoNewline -Encoding UTF8
}
Select-String -Path app\*\*.tsx,app\*.tsx -Pattern "Registered electrician" | ForEach-Object { $_.Line.Trim() }
git add app
git commit -m "Wording: electrician working with AU/NZ standards"
git push origin main
