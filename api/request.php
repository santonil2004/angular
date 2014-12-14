<?php

$request = $_GET['request'];

switch ($request) {
    case 'set1':
        $array = array('this', 'is', 'good', 'man');
        break;
    case 'set2':
        $array = array('dil', 'mera', 'churya', 'ya', 'kyu');
        break;
    case 'set3':
        $array = array('singh', 'is', 'king', 'man');
        break;
    case 'set4':
        $array = array('ram', 'janee', 'shyam', 'jane', 'hari');
        break;
    default:
        break;
}

echo json_encode($array);
