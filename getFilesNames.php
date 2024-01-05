<?php
$dir = 'C:\Users\romeo\OneDrive\Documents\Lycée\Lycée_NSI\Poire Mathieu Schneider\scripts';
$fileNames = [];

if (is_dir($dir)) {
    $files = scandir($dir);
    foreach ($files as $file) {
        if (pathinfo($file, PATHINFO_EXTENSION) === 'jpg') {
            $fileNames[] = $file;
        }
    }
}

echo json_encode($fileNames);
?>
