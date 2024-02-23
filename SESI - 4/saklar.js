// func saklar off and onn
function saklar() {
    let toggel1 = document.getElementById("defaultToggle1")
    let toggel2 = document.getElementById("defaultToggle2")
    let toggel3 = document.getElementById("defaultToggle3")

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if(toggel1.checked){
        lampu1.src = "assets/on.png"

    }else{  
        lampu1.src = "assets/off.png"
    }
    if(toggel2.checked){
        lampu2.src = "assets/on.png"

    }else{  
        lampu2.src = "assets/off.png"
    }

    if(toggel3.checked){
        lampu3.src = "assets/on.png"

    }else{  
        lampu3.src = "assets/off.png"
    }




}