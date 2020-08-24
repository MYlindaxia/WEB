window.onload = function(){
	var oneMenu = document.getElementsByClassName("li-one");
	for(var i = 0;i<oneMenu.length;i++){
		oneMenu[i].onmouseover = function(){
			var twoMenu = document.getElementsByTagName("ul");
			if(twoMenu.length != 0){
				this.getElementsByTagName("ul")[0].style.display = "block";
				this.getElementsByTagName("ul")[0].style.backgroundColor = "red";
			}
		};
		oneMenu[i].onmouseout = function(){
			var twoMenu = this.getElementsByTagName("ul");
			if(twoMenu.length != 0){
				this.getElementsByTagName("ul")[0].style = "none";
			}
		};
	}	
};

