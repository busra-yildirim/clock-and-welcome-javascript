function askName() {
let enteredName = window.prompt("Please, enter the name...");
const userName = document.getElementById("myName");
userName.innerHTML = enteredName;
}
function showTime(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds(); 
    
    hour<10 ? hour="0"+ hour : hour;
    minute<10 ? minute="0"+ minute : minute;
    second<10 ? second="0"+ second : second;
    
    document.getElementById("myClock").innerHTML = hour +":" +minute+":"+second;
    
    
    const day = date.getDay();
    
        switch(day) {
            case 0:
                document.getElementById("myClock").innerHTML += " Pazar";
            break;
            case 1:
                document.getElementById("myClock").innerHTML += " Pazartesi";
            break;
            case 2:
              document.getElementById("myClock").innerHTML += " Salı";
            break;
            case 3:
              document.getElementById("myClock").innerHTML += " Çarşamba";
            break;
            case 4:
              document.getElementById("myClock").innerHTML += " Perşembe";
            break;
            case 5:
              document.getElementById("myClock").innerHTML += " Cuma";
            break;
            case 6:
              document.getElementById("myClock").innerHTML += " Cumartesi";
        }
    
        setTimeout(showTime, 1000);
}

showTime();
askName();