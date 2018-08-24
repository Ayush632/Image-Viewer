var imageArray=[];
var index=0;
var fs =require("fs");

fs.readdir("\images",function(err,data){
    if (err){
        return console.error(err);
    }
    var regxTest=new RegExp('.+/.'+.JPG+'$');
    data.filter(function(elem){
        return regxTest.test(elem);
    });
    data.forEach(function(elem){
        
        imageArray[index]=(elem);
    
    
        console.log(imageArray[index]);
        index++;
    });
     });

