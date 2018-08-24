       require(getImage.js)
       console.log(imageArray[0]);
       var myImage=document.getElementById('mainImage');
        
       var imageIndex=1;
     
       function Image(){
         myImage.setAttribute("src",imageArray[imageIndex]);
         imageIndex++;
       }
