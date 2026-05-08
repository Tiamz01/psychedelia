$components = @('About','Curriculum','Certification','Testimonials','Enrollment')
foreach ($name in $components) {
    $path = "c:\Users\Iabio\Desktop\khalid\pschedelia\src\components\$name.tsx"
    $content = [System.IO.File]::ReadAllText($path)
    $content = $content.Replace('py-20','py-12').Replace('mb-14','mb-10')
    [System.IO.File]::WriteAllText($path, $content)
    Write-Host "Updated $name"
}

# Footer
$fp = "c:\Users\Iabio\Desktop\khalid\pschedelia\src\components\Footer.tsx"
$fc = [System.IO.File]::ReadAllText($fp)
$fc = $fc.Replace('pt-16 pb-8','pt-10 pb-6')
[System.IO.File]::WriteAllText($fp, $fc)
Write-Host "Updated Footer"
