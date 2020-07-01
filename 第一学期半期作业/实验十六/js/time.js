"use strict";
var index = 0;
window.onload = function(){
    setTime();
    checkTime();
    autoMove();
};
function setTime(){
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var day = time.getDay();
    var hour = time.getHours();
    var minth = time.getMinutes();
    var second = time.getSeconds();
    var str = "现在是" + year + "年" + month + "月" + day + "日" + hour + "小时" + minth + "分钟" + second + "秒";
    var btn = document.getElementById("bottom").innerHTML = str;
    setTimeout(setTime,200);
}
function checkTime(){
    var time = new Date();
    var hour = time.getHours();
    if(hour > 6 && hour < 11){
        window.alert("早上好！");
    }else if(hour > 11 && hour < 18){
        window.alert("下午好！");
    }else if(hour > 18 && hour < 21){
        window.alert("晚上好！");
    }else{
        window.alert("该睡觉了！");
    }
}

function autoMove(){
    var arr = new Array();
    arr[0] = "img/1.jpg";
    arr[1] = "img/2.jpg";
    arr[2] = "img/3.jpg";
    arr[3] = "img/4.jpg";
    arr[4] = "img/5.jpg";
    if(index < arr.length - 1){
        index++;
    }else{
        index = 0;
    }
    document.getElementById("first_map").src = arr[index];
    setTimeout(autoMove,2000);
}