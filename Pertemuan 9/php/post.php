<?php

function tanggal($exTanggal, $pil) {
    if($pil==1){
        $tanggalBaru = date("Y-m-d", strtotime($exTanggal));
        echo $tanggalBaru;
    }else if($pil==2){
        $tanggalBaru = date("d-m-Y", strtotime($exTanggal));
        echo $tanggalBaru;
    }else{
        $tanggalBaru = date("Y-d-m", strtotime($exTanggal));
        echo $tanggalBaru;
    }
}

function kalimat($string, $pemisah, $penggabung){
    $string = strtoupper($string);
    $string = explode($pemisah, $string);
    $string = implode($penggabung, $string);
    echo $string;
}

echo $exTanggal = "12-12-2012";
echo "<br>";
echo $pil = 3;
echo "<br>";
echo "hasil : ";
echo tanggal($exTanggal, $pil);;

echo "<hr>";
echo "<br>";

echo $string = 'Kucing,Anjing,Babi,Rusa,Banteng,Beruang';
echo "<br>";
echo "<br>";

echo "Hasil :";
echo kalimat($string, ',','-');

?>