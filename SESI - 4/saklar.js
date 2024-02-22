// func saklar off and onn
function saklar(params) {

    // memanggil id lampu1
    let lampu1 = document.querySelector("#lampu1");
    let lampu2 = document.querySelector("#lampu2");
    let lampu3 = document.querySelector("#lampu3");
    
    // jika parameter sama dengan string "on"
    if (params == "on") {                
        // maka lampu nyala
        lampu1.src = "assets/on.png";
    }
    // jika parameter sama dengan string "off"
    if(params == "off") {
        // maka lampu mati
        lampu1.src = "assets/off.png";
    }

    return lampu1;

}