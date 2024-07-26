(function () {
 
  

        x = setInterval(function() {    
            var d = new Date();
            var days = 7 - d.getDay();
            var hours = 24 - d.getHours();
            var min = 60 - d.getMinutes();
            if((min + '').length == 1){
              min = '0' + min;
            }
            var sec = 60 - d.getSeconds();
            if((sec + '').length == 1){
                  sec = '0' + sec;
            }

            document.getElementById("days").innerText = 0,
            document.getElementById("hours").innerText = hours,
            document.getElementById("minutes").innerText =min,
            document.getElementById("seconds").innerText =sec ;
  
        }, 0)
    }());



 