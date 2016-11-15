$(document).ready(function(){
    //when jquery and the document are both implemented, do the following function
    var icon1 = document.getElementById("icon1");
    var icon2 = document.getElementById("icon2");
    var icon3 = document.getElementById("icon3");
    var icon4 = document.getElementById("icon4");
    var icon5 = document.getElementById("icon5");
    var icon6 = document.getElementById("icon6");

    var avatar2 = document.getElementById("avatar2");


    icon1.onclick = function (){
        avatar2.style.backgroundImage = "url(http://placekitten.com/198/199)";
        }
    
    icon2.onclick = function (){
        avatar2.style.backgroundImage = "url(http://placekitten.com/199/199)";
        }
    
    icon3.onclick = function (){
        avatar2.style.backgroundImage = "url(http://placekitten.com/200/200)";
        }
    
    icon4.onclick = function (){
        avatar2.style.backgroundImage = "url(http://placekitten.com/201/200)";
        }
    
    icon5.onclick = function (){
        avatar2.style.backgroundImage = "url(http://placekitten.com/199/198)";
        }
    
    icon6.onclick = function (){
        avatar2.style.backgroundImage = "url(http://placekitten.com/198/200)";
        }

});


