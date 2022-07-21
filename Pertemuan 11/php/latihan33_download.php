<?php
$mydir = "C:/xampp/htdocs/praktikum 11/";
$dir = opendir($mydir);
echo "Isi Folder (klik link untuk download : <br>";
while ($tmp = readdir($dir)) {
	echo "<a href='$tmp' target='_blank'>$tmp</a><br>";
}

closedir($dir);
?>