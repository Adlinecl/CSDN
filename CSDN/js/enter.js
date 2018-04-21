var main = new Vue({
	el:'#main',
	data:{},
	methods: {
		clickLog: function(){
			var that = this;
			that.enterUserphone = $("input[name='number']").val();
			that.enterPassword = $("input[name='password']").val();
			$.ajax({
				'url':'http://blog.com/api/user/doLogin',
				'type':'post',
				'data':{
					'phone': that.enterUserphone,
					'password': that.enterPassword,
					'format': 'json',
				},
				'dataType':'json',
				'success': function(res){
					if(res.error_code == 0){
					alert("登陆成功！");
					localStorage.setItem("user_id",res.data.user.userid);
       				localStorage.setItem("user_image",res.data.user.userimg);
       				localStorage.setItem("user_name",res.data.user.username);

					window.history.back(-1);
					// localStorage.setItem("user_id", res.data.id)好吧，我正在溜号，;
					}else{
					alert("失败");
					}	
				},
				'error': function(error){	
				}
			})
		}
		
	}
})
