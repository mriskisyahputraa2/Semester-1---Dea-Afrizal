// func saklar off and onn
function saklar() {

    // toggle / checkbox toggle
    // ruangan keluarga
    let toggel1 = document.getElementById("defaultToggleKeluarga")
    // ruangan makan
    let toggel2 = document.getElementById("defaultToggleRuangMakan")    
    // ruangan tidur 
    let toggel3 = document.getElementById("defaultToggleRuangTidur")
    // ruangan tamu
    let toggel4 = document.getElementById("defaultToggleRuangTamu")
    
    // lampu ruang keluarga
    let lampu1 = document.getElementById("lampuKeluarga1");
    let lampu2= document.getElementById("lampuKeluarga2");
    let lampu3 = document.getElementById("lampuKeluarga3");

    
    // lampu ruang makan
    let lampuRuangMakan = document.getElementById("lampuRuangMakan");

    // lampu ruangan tidur
    let lampuTidur1 = document.getElementById("lampuTidur1");
    let lampuTidur2 = document.getElementById("lampuTidur2");
    let lampuTidur3 = document.getElementById("lampuTidur3");

    // lampu ruang tamu
    let lampuTamu1 = document.getElementById("lampuTamu1");
    let lampuTamu2 = document.getElementById("lampuTamu2");
    let lampuTamu3 = document.getElementById("lampuTamu3");
    let lampuTamu4 = document.getElementById("lampuTamu4");

    if(toggel1.checked){
        lampu1.src = "../assets/on.png"
        lampu2.src = "../assets/on.png"
        lampu3.src = "../assets/on.png"

    }else{  
        lampu1.src = "../assets/off.png"
        lampu2.src = "../assets/off.png"
        lampu3.src = "../assets/off.png"
    }
    if(toggel2.checked){
        lampuRuangMakan.src = "../assets/on.png"

    }else{  
        lampuRuangMakan.src = "../assets/off.png"
    }

    if(toggel3.checked){
        lampuTidur1.src = "../assets/on.png"
        lampuTidur2.src = "../assets/on.png"
        lampuTidur3.src = "../assets/on.png"

    }else{  
        lampuTidur1.src = "../assets/off.png"
        lampuTidur2.src = "../assets/off.png"
        lampuTidur3.src = "../assets/off.png"
    }
    
    if(toggel4.checked){
        lampuTamu1.src = "../assets/on.png"
        lampuTamu2.src = "../assets/on.png"
        lampuTamu3.src = "../assets/on.png"
        lampuTamu4.src = "../assets/on.png"

    }else{  
        lampuTamu1.src = "../assets/off.png"
        lampuTamu2.src = "../assets/off.png"
        lampuTamu3.src = "../assets/off.png"
        lampuTamu4.src = "../assets/off.png"
    }






}