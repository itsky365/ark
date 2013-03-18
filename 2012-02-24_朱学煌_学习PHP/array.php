<?php

$arr1 = array('one', 'two');
$arr2 = array('three', 'four');

echo 'is_array($arr1) => ' . is_array($arr1);
echo '<br /><br />';


echo 'in_array("one", $arr1) => ' . in_array('one', $arr1);
echo '<br /><br />';


//$a = true;
//echo $a;

echo 'count($arr1) => ' . count($arr1);
echo '<br /><br />';


echo 'array_pust($arr, "pushvalue") => ';
array_push($arr1, 'pushvalue');
print_r($arr1);
echo '<br /><br />';


echo 'array_unshift($arr, "unshiftvalue") => ';
array_unshift($arr1, 'unshiftvalue');
print_r($arr1);
echo '<br /><br />';


echo 'array_merge($arr1, $arr2) => ';
print_r(array_merge($arr1, $arr2)); 
echo '<br /><br />';


echo 'array_pop($arr1) => ';
array_pop($arr1);
print_r($arr1); 
echo '<br /><br />';


echo 'array_shift($arr1) => ';
array_shift($arr1);
print_r($arr1); 
echo '<br /><br />';

