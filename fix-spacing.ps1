$components = @('About','Curriculum','Certification','Testimonials','Enrollment')
foreach ($name in $components) {
    $path = "c:\Users\Iabio\Desktop\khalid\pschedelia\src\components\$name.tsx"
    $content = [System.IO.File]::ReadAllText($path)
    $content = $content.Replace('py-32','py-20').Replace('mb-20','mb-14')
    [System.IO.File]::WriteAllText($path, $content)
    Write-Host "Updated $name"
}

# Footer
$fp = "c:\Users\Iabio\Desktop\khalid\pschedelia\src\components\Footer.tsx"
$fc = [System.IO.File]::ReadAllText($fp)
$fc = $fc.Replace('pt-24 pb-12','pt-16 pb-8')
[System.IO.File]::WriteAllText($fp, $fc)
Write-Host "Updated Footer"
