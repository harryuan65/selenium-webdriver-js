var addZero = require('add-zero');
var d = new Date();
while(true){
    if(new Date()-d >=1000){
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        console.log(h + ":" + m + ":" + s);
        d = new Date();
        if(h==22 && m ==25 && s==10)
                break;
    };    
}

console.log('Hi');