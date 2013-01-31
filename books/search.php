<?php
	$booksName = isset($_POST ['booksName']) ? $_POST ['booksName'] : null ;
	if($booksName!=null){
		echo(file_get_contents("http://api.douban.com/v2/book/search?q=".$booksName));
		return;
	}else{
		echo(file_get_contents("http://api.douban.com/v2/book/search?q=高达"));
		return;
	}
?>