Set-Location C:\Users\OEM\nextjs-boilerplate
Get-ChildItem app -Recurse -Include *.tsx | ForEach-Object {
  $t = Get-Content $_.FullName -Raw -Encoding UTF8
  $t = $t -replace "registered electrician and telecom software architect based in New Zealand with", "registered New Zealand electrician working with Australia and New Zealand standards, and a telecom software architect, with"
  Set-Content $_.FullName $t -NoNewline -Encoding UTF8
}
Select-String -Path app\*\*.tsx,app\*.tsx -Pattern "lectrician" | ForEach-Object { $_.Line.Trim() }
git add app
git commit -m "About: bio wording matches AU/NZ electrician line"
git push origin main
