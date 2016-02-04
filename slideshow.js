 var image = ["images/slide1.png","images/slide2.jpg","images/slide3.jpg","images/slide4.png"];
    

//var step=1;
    var slideIt = function()
             {
               for(var i = 0;i<image.lenth;i++){
                 var img = document.getElementById("slideImg");
                 img.src = image[i];
               }

                // var step=1;
                // document.images.slide.src = eval("image"+step+".src")
                // if(step<2)
                //     step++
                // else
                //     step=1
                //window.onload = function(){
                  //setTimeout(function(){slideit(),1000);
                  setTimeout(function(){ slideIt() }, 3000);
                //}
                
            
            
