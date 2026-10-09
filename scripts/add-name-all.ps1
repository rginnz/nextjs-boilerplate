Set-Location C:\Users\OEM\nextjs-boilerplate

function Edit-File($path, $scriptBlock) {
  if (Test-Path $path) {
    $t = Get-Content $path -Raw -Encoding UTF8
    $t = & $scriptBlock $t
    Set-Content $path $t -NoNewline -Encoding UTF8
  }
}

# About: opening line
Edit-File "app\about\page.tsx" { param($t)
  if ($t -notmatch 'Raymond Greenfield') { $t = $t -replace 'I.{1,6}?m a registered', 'I&apos;m Raymond Greenfield, a registered' }
  $t
}

# Home: byline under the button
Edit-File "app\page.tsx" { param($t)
  if ($t -notmatch 'Raymond Greenfield') { $t = $t -replace '(Get in Touch\s*</Link>)', '$1<p className="mt-4 text-sm text-gray-500">Raymond Greenfield, Founder</p>' }
  $t
}

# Contact: subtitle
Edit-File "app\contact\page.tsx" { param($t)
  if ($t -notmatch 'Raymond Greenfield') { $t = $t -replace 'Let.{1,6}?s discuss your integration challenge\.', 'Let&apos;s discuss your integration challenge. I&apos;m Raymond Greenfield, and I&apos;ll reply personally.' }
  $t
}

# Footer on every page
Get-ChildItem app -Recurse -Include *.tsx | ForEach-Object {
  Edit-File $_.FullName { param($t)
    $t -replace '2026 RG Energy Integration Solutions\. All rights', '2026 Raymond Greenfield, RG Energy Integration Solutions. All rights'
  }
}

Select-String -Path app\*\*.tsx,app\*.tsx -Pattern "Raymond" | ForEach-Object { $_.Path.Split('\')[-2] + ": " + $_.Line.Trim() }
git add app
git commit -m "Add Raymond Greenfield name: About, Home, Contact, footer"
git push origin main
