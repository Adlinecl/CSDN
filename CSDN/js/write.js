var editor = new Vue({
	el: "#write",
	data: {
		title: "",
		class_id: "",
		list:[],
		blog:{},
	},
	mounted: function(){
		var ue = UE.getEditor('container');
		this.change();
	},
	methods: {
		getUeditorContent: function(){
			return UE.getEditor('container').getContent()
		},
		issue: function(){
			$.ajax({
				"url": "http://blog.com/api/blog/doAdd",
				"type": "post",
				"dataType": "json",
				"data": {
					"user_id": window.localStorage.user_id,
					"title": this.title,
					"content": this.getUeditorContent(),
					"classify_id": this.class_id,
				},
				success: function(res){
					if(res.error_code == 0){
						alert("success发布成功即将跳转");
						window.location.href="./vue-blog-list.html";
					}else {
						alert(res.message);
					}
				}
			})
		},
		gengxin: function(){
            	var that = this;
            	$.ajax({
            		url:'http://blog.com/api/blog/doEdit',
            		data:{
            			"user_id": window.localStorage.user_id,
						"blog_id": window.location.search.split("=")[1],
						"title": that.title,
						"content": this.getUeditorContent(),
						"classify_id": that.class_id,
            		},
            		type:'post',
            		dataType:'json',
            		success: function(res){
            			if(res.error_code==0){

            				window.location.href="./vue-blog-list.html";
            			}else{
            				alert(res.message);
            			}
            		}
            	})
        },
         change: function(){
        	var that = this;
        	$.ajax({
        		url:'http://blog.com/api/blog/add',
        		data:{
					"user_id": window.localStorage.user_id,
					"blog_id": window.location.search.split("=")[1],
        		},
        		type:'get',
        		dataType:'json',
        		success: function(res){
        			if(res.error_code==0){
        				that.blog = res.data.my_blog_info;
        				that.title = res.data.my_blog_info.title;
        			}else{
        				alert(res.message);
        			}
        		}
        	})         
	    },
	}
})