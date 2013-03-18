<?php

$dbpdo = new PDO("mysql:host=localhost;dbname=demo", "root", "") or die('PDO error');
$dbpdo->exec("SET NAMES 'utf8'");
$dbpdo->setAttribute(PDO::ATTR_CASE, PDO::CASE_LOWER);

function pdoFetch($sql, $args = 'all') {	//select
	global $dbpdo;
	$query = $dbpdo->query($sql);
	$query->setFetchMode(PDO::FETCH_ASSOC);
	if ($args === 'all') {
		$fetch = $query->fetchAll(); 
	} else {
		$fetch = $query->fetch();
	}
	return $fetch;
}

function pdoExec($sql) {	//insert update delete
	global $dbpdo;
	$exec = $dbpdo->exec($sql);
	if ($exec) {
		return '成功啦';
	} else {
		return '失败啦';
	}
}

$ac = $_REQUEST['ac'];

function add() {
	$title = addslashes(strval(trim($_POST['title'])));
	$content = addslashes(strval(trim($_POST['content'])));
	$sql = "INSERT INTO `jquery` (`id`, `title`, `content`, `addtime`) VALUES (NULL, '$title', '$content', now())";
	$tip = pdoExec($sql);
	
	$select = "SELECT * FROM `jquery` ORDER BY `id` DESC LIMIT 1";
	$row = pdoFetch($select, 'one');
	return json_encode($row);
}

function del() {
	$id = intval(trim($_GET['id']));
	$delete =  "DELETE FROM `jquery` WHERE `id` = '$id'";
	$del = pdoExec($delete);
	return $del;
}

function get() {
	$id = intval(trim($_GET['id']));
	$get =  "SELECT * FROM `jquery` WHERE `id` = '$id'";
	$rs = pdoFetch($get, 'one');
	if ($rs != array()) {
		return json_encode($rs);
	} else {
		return json_encode(array('error' => '不存在此id'));
	}
}

function post() {
	$id = intval(trim($_POST['id']));
	$post =  "SELECT * FROM `jquery` WHERE `id` = '$id'";
	$rs = pdoFetch($post, 'one');
	if ($rs != array()) {
		return json_encode($rs);
	} else {
		return json_encode(array('error' => '不存在此id'));
	}	
}

switch ($ac) {
	case 'add':
		echo add();
		break;
	case 'del':
		echo del();
		break;
	case 'get':
		echo get();
		break;
	case 'post':
		echo post();
		break;
}