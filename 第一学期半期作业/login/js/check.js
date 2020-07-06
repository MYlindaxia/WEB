"use strict";
window.onload = function(){
    document.getElementById("zhuce").onclick = check;
    getTime();
};
function check(){
    if(checkUserName() && checkEmail() && checkMM() && checkYZMM() && checkPhone() && checkNumber() && checkEmailNum()){
        return true;
    }
}
function checkUserName(){
    var username = document.getElementById("user").value;
    if(username.length < 4 || username.length > 16){
        document.getElementById("user").value = "账号长度不对";
        return false;
    }else{
        return true;
    }
}
function checkEmail(){
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var email = document.getElementById("email").value;
    if(!reg.test(email)){
        document.getElementById("email").value = "邮箱格式不正确哦！";
        return false;
    }else{
        return true;
    }
}
function checkMM(){
    var mm = document.getElementById("mm").value;
	if(mm.length < 4 || mm.length > 10){
		document.getElementById("mima_info").innerHTML = '密码长度不对';
		document.getElementById("mima").focus();
		return false;
	}else{
        return true;
    }
}
function checkYZMM(){
	var mm = document.getElementById("mm").value;
	var qrmm = document.getElementById("cfmm").value;
	document.getElementById("cfmm").innerHTML = '';
	if((mm === qrmm)){
		return true;
	}else{
		document.getElementById("cfmm").value = "两次密码不匹配";
		return false;
	}
	return true;
}
function checkPhone(){
    return true;
}
function checkNumber(){
    return true;
}
function checkEmailNum(){
    var mm = document.getElementById("mm").value;
	if(mm.length < 4 || mm.length > 6){
		document.getElementById("num").value = '验证码长度不对';
		return false;
	}else{
        return true;
    }
}
function getTime(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDay();
    var hour = date.getHours();
    var second = date.getSeconds();
    var minth = date.getMinutes();
    var str = "当前时间是"+year+'年'+month+"月"+day+"日"+hour+"小时"+minth+"分钟"+second+"秒";
    document.getElementById("time").innerHTML = str;
    setInterval("getTime()",100);
    }