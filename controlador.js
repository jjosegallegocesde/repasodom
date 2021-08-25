let boton=document.getElementById("boton");
let foto1=document.getElementById("foto1");
let titulo1=document.getElementById("titulo1");
let audio1=document.getElementById("audio1");

boton.addEventListener("click",perroGuardian);

function perroGuardian(){

    titulo1.textContent="the scientist";
    foto1.src="img/foto4.jpg";
    audio1.src="audio/cancion4.mp3";
    
}
