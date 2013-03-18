<form action="post.php" method="post">
	姓名: <input type="text" name="name" />
	年龄: <input type="text" name="age" />
	<input type="submit" name="submited" value="提交" />
</form>

<a href="get.php?a=111&b=222">点击查看$_GET</a>

<?php
if (isset($_POST['submited'])) {
    $name = $_POST['name'];
    $age = $_POST['age'];
    echo '我的姓名是' . $name. '，年龄是' . $age;
}