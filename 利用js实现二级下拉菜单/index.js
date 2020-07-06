// window.onload = function(){
//     var oneMenu = document.getElementById("li-one");
// };

window.onload = function(){
	//获取所有的一级菜单
	var oneMenu = document.getElementsByClassName("li-one");
	
	for(var i = 0;i<oneMenu.length;i++){
		oneMenu[i].onmouseover = function(){
			var twoMenu = this.getElementsByTagName("ul");
			if(twoMenu.length != 0){
				this.getElementsByTagName("ul")[0].style.display = "block";
				this.getElementsByTagName("ul")[0].style.backgroundColor = "blueviolet";
			}
		};
		oneMenu[i].onmouseout = function(){
			var twoMenu = this.getElementsByTagName("ul");
			if(twoMenu.length != 0){
				this.getElementsByTagName("ul")[0].style.display = "none";
			}
		};
	}	
};