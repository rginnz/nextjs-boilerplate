Set-Location C:\Users\OEM\nextjs-boilerplate
$f = "app\layout.tsx"
$t = Get-Content $f -Raw -Encoding UTF8
$t = $t -replace 'title:\s*["'']RG Energy["'']', 'title: "RG Energy Solutions"'
Set-Content $f $t -NoNewline -Encoding UTF8
Select-String -Path $f -Pattern "title:"
git add app
git commit -m "Tab title: RG Energy Solutions"
git push origin main
