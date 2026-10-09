Set-Location C:\Users\OEM\nextjs-boilerplate
$f = "app\csip-gateway\page.tsx"
if (-not (Test-Path $f)) {
  Write-Host "STOP: the gateway page isn't there yet. Run add-gateway-page.ps1 first."
  exit
}
$t = Get-Content $f -Raw -Encoding UTF8

# Opening paragraph under the page heading
$t = [regex]::Replace($t, '(?s)(<h1[^>]*>CSIP Gateway</h1>\s*<p[^>]*>).*?(</p>)', '${1}A purpose-built gateway that gives an installation a communications link to the network operator, with a built-in display for local status and diagnostics.${2}')

# Description shown in Google results
$desc = "description:`n    'The RGEI CSIP Gateway: a purpose-built ESP32 gateway that gives an installation a communications link to the network operator, with a built-in colour display for local status and diagnostics.',"
$t = [regex]::Replace($t, "(?s)description:\s*'[^']*',", $desc.Replace('$','$$'))

Set-Content $f $t -NoNewline -Encoding UTF8
Select-String -Path $f -Pattern "network operator" | ForEach-Object { $_.Line.Trim() }
git add app
git commit -m "Gateway page: professional wording for network operator link"
git push origin main
