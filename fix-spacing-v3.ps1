$components = @('About','Curriculum','Certification','Testimonials','Enrollment')
foreach ($name in $components) {
    $path = "c:\Users\Iabio\Desktop\khalid\pschedelia\src\components\$name.tsx"
    $content = [System.IO.File]::ReadAllText($path)
    $content = $content.Replace('py-12','py-10')
    [System.IO.File]::WriteAllText($path, $content)
    Write-Host "Updated $name"
}
