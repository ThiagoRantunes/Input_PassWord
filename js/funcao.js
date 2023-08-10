const btn = document.getElementById("btn");
const ip = document.getElementById("ip");

const imgA = document.createElement("img");
imgA.src = "olho.png";
imgA.width = "24";
imgA.classList.add("d-none");

const imgF = document.createElement("img");
imgF.src = "olho_fechado.png";
imgF.width = "24";

btn.append(imgF);
btn.append(imgA);

btn.addEventListener("click", function(){
    if(ip.type ==  "password"){
        ip.type = "text";
        imgA.classList.remove("d-none");
        imgF.classList.add("d-none");
    }else if(ip.type == "text"){
        ip.type = "password";
        imgF.classList.remove("d-none");
        imgA.classList.add("d-none");
    }
  
})