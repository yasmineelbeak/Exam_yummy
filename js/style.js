var bullets=document.querySelectorAll(".bullets")
var mainImg=document.querySelector(".main-img")
for(var i=0;i<bullets.length;i++){
    bullets[i].addEventListener("click",function(e){
        mainImg.setAttribute("src",e.target.getAttribute("src"))
    })
}