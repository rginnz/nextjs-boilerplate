Set-Location C:\Users\OEM\nextjs-boilerplate
Get-ChildItem app -Recurse -Include *.tsx | ForEach-Object {
  $t = Get-Content $_.FullName -Raw -Encoding UTF8
  $t = $t -replace "20\+ years making incompatible devices work together\.", "20+ years making incompatible devices and services work together."
  Set-Content $_.FullName $t -NoNewline -Encoding UTF8
}
Select-String -Path app\*\*.tsx,app\*.tsx -Pattern "20\+ years" | ForEach-Object { $_.Line.Trim() }
git add app
git commit -m "About: tagline mentions services"
git push origin main
