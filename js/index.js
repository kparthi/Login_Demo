$(document).ready(function(){
	
	$('.login__submit').click(function(){
		var name = $('#Uname').val();
		var Pword = $('#Pword').val();
		//if((name!=""||name != undefined)&& Pword!=""||Pword != undefined)
		//{
			//window.location.href = "http://vop.prodapt.com:8088/home";
		//}
		if(name=='kparthi'&&Pword=='12345'){
			window.location.href = "http://www.prodapt.com/";
		}
else{
	alert('Please provide valid username and password');
}	
	});
	
	
});