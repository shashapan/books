$(document).ready(function(e) {
   search_books();
   btn_enter();
});

var search_books = function(){
	var v1 = $("#search").val();
	$.ajax({
		type:"post",
		data:{"booksName": v1},
		url:"search.php",
		dataType:"json",
		success: function(data){
			$("#title").html(data.books[0].title);
			$("#author").html("原著：" + data.books[0].author);

			$("#translator").html("翻译：" + data.books[0].translator);
			$("#publisher").html("出版社：" + data.books[0].publisher);
			$("#price").html("￥：" + data.books[0].price);
			$("#binding").html("版式：" + data.books[0].binding);
			
			$("#pubdate").html("出版日期：" + data.books[0].pubdate);
			$("#pages").html("页数：" + data.books[0].pages);
			$("#isbn10").html("isbn10：" + data.books[0].isbn10);
			$("#isbn13").html("isbn13：" + data.books[0].isbn13);
			
			$("#tags").html("");
			var h = "<legend>标签</legend>";
			$("#tags").append(h);
			for(var i = 0; i<data.books[0].tags.length;i++){
				var tag_name = data.books[0].tags[i].name;
				var tag_count = data.books[0].tags[i].count;
				var html = "<button class='btn btn-info'>"+ tag_name + " " + tag_count + "°</button> ";
				$("#tags").append(html);
			}
			
			$("#image").attr("src",data.books[0].images.large);
			$("#author_intro").html(data.books[0].author_intro);
			
			$("#summary").html(data.books[0].summary);
		},
		error: function(){
			alert("服务器发生异常！你的人品大爆发！")
		}
	}); 
}

var btn_enter = function(){
	//回车事件
	$(this).keypress(function (e) {
		//alert(e.which)
		switch (e.which) {
		case 13:
			search_books();
		break;
		}
	});
}