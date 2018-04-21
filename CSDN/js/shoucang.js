var mian = new Vue({
	el:'#main',
	data:{
		collect:[],
	},
	mounted: function(){
		this.getList();
	},
	methods:{
		getList: function(){
			var that = this;
			$.ajax({
				url:'http://blog.com/api/collect/lists',
				type:'post',
				dataType:'json',
				data:{
					user_id: window.localStorage.user_id,
				},
				success:function(res){
					if(res.error_code==0){
						that.collect = res.data.blog_lists;
					}else{
						alert(message);
					}
				}
			})
		}
	}
})