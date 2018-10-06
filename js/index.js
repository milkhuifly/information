/*用户点击不同的导航，跳转到不同的页面*/
$(function(){
	$('.leftUl').on({
		click:function(){
			if($(this).text()=="首页"){
				// 注意相对的是index.html的文件的路径，因为把这个引入到了index.html中
				$('.leftUl').load('home.html');
				return;
			}
			if($(this).text()=="栏目管理"){
				$('.leftUl').load('lanmugl.html');
				return;
			}
			if($(this).text()=="资讯管理"){
				$('.leftUl').load('zixungl.html');
				return;
			}
			if($(this).text()=="用户管理"){
				$('.leftUl').load('yonghugl.html');
				return;
			}
		}
	},'li');
});






