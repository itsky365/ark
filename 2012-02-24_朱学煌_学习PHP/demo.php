<?php

//输出 hello world
echo 'hello world' . '<br />';
print 'hello world' . '<br />';

//单行注释

/**
 * 多行注释
 * 一般在文件头部写些当前项目和文件描述内容
 */

$name = '张三' . '<br />';
$txt = '你叫什么名字？$name';
$txt2 = "你叫什么名字？$name";

echo $txt . '<br />';
echo $txt2 . '<br />';

//索引数组
$arr1 = array('one', 'two', 'three');
echo '<pre>$arr1=> ';
print_r($arr1);
echo '</pre>';

//关联数组
$arr2 = array('one'=>'onevalue', 'two'=>'twovalue');
echo '<pre>$arr2=> ';
print_r($arr2);
echo '</pre>';

//删除数组arr1[0]的值
unset($arr1[0]);
print_r($arr1);
echo '<br />';

//空数组
$arr3 = array();
$arr3[5] = '5555';
$arr3[99] = '999999';
print_r($arr3);
echo '<br />';

$arr4 = array('张三', '李四');
$arr5 = array('aaa', 'bbb', 'ddd');
$arr6 = array($arr4, $arr5);
echo '<pre>';
print_r($arr6);
echo '</pre>';

echo '$arr4=>' . '<br />';
foreach($arr4 as $k=>$v) {
    echo 'key=' . $k . ', value=' . $v . '<br />';
}
