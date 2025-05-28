<?php

$data = file_get_contents('coba.json');
$mahasiswa = json_decode($data, true);

var_dum($mahasiswa);
echo $mahasiswa[0] ["pembimbing"] ["pembimbing1"];

?>