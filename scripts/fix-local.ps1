Set-Location C:\Users\OEM\nextjs-boilerplate
Get-ChildItem app -Recurse -Include *.tsx | ForEach-Object {
  $t = Get-Content $_.FullName -Raw -Encoding UTF8
  $t = $t -replace "Based in New Zealand\. I understand the local solar/battery installer ecosystem inside out\.", "Based in New Zealand, I understand the Australasian local solar/battery installer ecosystem inside out."
  Set-Content $_.FullName $t -NoNewline -Encoding UTF8
}
Select-String -Path app\*\*.tsx,app\*.tsx -Pattern "installer ecosystem" | ForEach-Object { $_.Line.Trim() }
git add app
git commit -m "Wording: Australasian installer ecosystem"
git push origin main
