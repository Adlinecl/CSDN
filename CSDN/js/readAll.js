var main = new Vue({
	el:"#readAll",
	data: {
		list: [],
		banner: [],
		// cate: [],
	},
	mounted: function(){
		this.getData();
		// this.clickLog();
	},
	methods: {
		getData: function(){
			var that = this;
			var blogId = window.location.search.split("=")[1];
			var userId = window.localStorage.user_id;
			 $.ajax({
                'url': 'http://blog.com/api/blog/info',
                'type': 'get',
                'data': {
                	id: window.location.search.split("=")[1],
                	user_id: userId,
                },
                'dataType': 'json',
                'success': function(res){	
                	that.list = res.data.blog_info;
                	that.banner = res.data.related_blog;
                	if(res.data.blog_info.collect_status == 0){
						alert("没收藏！");
                	}else if(res.data.blog_info.collect_status == 1){
	                	that.$refs.collecter.innerHTML="已收藏";
	                	alert("已收藏!");
	                }else{	                	
	                	alert("还没登录！");
                		window.location.href="./enter.html";
	                };              
                },
                'error': function(error){
                }
            })
		},
		clickLog: function(){
			var that = this;
			var blogId = window.location.search.split("=")[1];
			var userId = window.localStorage.user_id;
			$.ajax({
				'url':'http://blog.com/api/collect/add',
				'type':'post',
				'data':{
					blog_id: blogId,
                	user_id: userId,
				},
				'dataType':'json',
				'success': function(res){
					if(res.error_code == 0){
					that.$refs.collecter.innerHTML="已收藏";
                	}else{
                	that.$refs.collecter.innerHTML="收藏";
               		}
				},
				'error': function(error){	
				}
			})
		},

		// swiperBanner: function(){
		// 	var mySwiper = new Swiper ('.swiper-container',{
		// 		autoplay: 1000,
		// 		loop: true,
		// 		autoplayDisableOnInteraction: false,
		// 		observe: true,
		// 	})
		// }
	}
})