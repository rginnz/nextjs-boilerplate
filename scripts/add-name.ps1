Set-Location C:\Users\OEM\nextjs-boilerplate
$f = "app\about\page.tsx"
$t = Get-Content $f -Raw -Encoding UTF8
if ($t -notmatch 'Raymond Greenfield') {
  $t = $t -replace 'I.{1,6}?m a registered', 'I&apos;m Raymond Greenfield, a registered'
  Set-Content $f $t -NoNewline -Encoding UTF8
}
Select-String -Path $f -Pattern "Raymond" | ForEach-Object { $_.Line.Trim() }
git add app
git commit -m "About: add name to opening line"
git push origin main
