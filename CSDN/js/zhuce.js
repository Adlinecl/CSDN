var main = new Vue({
	el:'#main',
	data:{},
	// mounted: function(){
	// 	this.clickLog();
	// },
	methods: {
		clickLog: function(){
			var that = this;
			that.enterUserphone = $("input[name='number']").val();
			that.enterUsername = $("input[name='username']").val();
		    that.enterPassword = $("input[name='password']").val();
			$.ajax({
				'url':'http://blog.com/api/user/doReg',
				'type':'post',
				'data':{
					'phone': that.enterUserphone,
					'uname': that.enterUsername,
					'password': that.enterPassword,
					'format': 'json',
				},
				'dataType':'json',
				'success': function(res){
					if(res.error_code == 0){
						alert("注册成功！");
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
