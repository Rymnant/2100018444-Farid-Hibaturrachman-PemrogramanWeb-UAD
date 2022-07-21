<?php
    $filecounter = "counter.txt";
    $f1 = fopen($filecounter, "r+");

    $hit = fread($f1, filesize($filecounter));

    echo("<table width=250 align=center border=1 cellspacing=0 cellpadding=0 bordercolor=#0000FF><tr>");
    echo("<td width=250 valign=middle align=center>");
    echo("<font face=verdana size=2 color=black><b>");
    echo("Anda pengunjung ke: ");
    echo($hit);
    echo("</b></font>");
    echo("</td></tr></table>");

    fclose($f1);

    $f1 = fopen($filecounter, "w+");

    $hit = $hit + 1;

    fwrite($f1, $hit, strlen($hit));

    fclose($f1);
?>