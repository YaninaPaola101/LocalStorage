if(!localStorage.getItem('fondo')) {
    populateStorage();
  } else {
    setStyles();
  }


function guardarLocalS(){
    var fondo =document.getElementById("fondo").value;
    var fuente= document.getElementById("mensaje").value;
    localStorage.setItem('fondo',fondo)  ;
    localStorage.setItem('mensaje',fuente)  ;
    //document.body.style.backgroundColor = fondo;
}
function setStyles(){
    var fondo=localStorage.getItem('fondo');
    var mensaje=localStorage.getItem('mensaje');
    document.body.style.backgroundColor = fondo;
    document.getElementById('cajaMensaje').innerHTML="<h1>"+mensaje+"</h1>";
    console.log(mensaje);
}
function borrarLocalS(){
    var fondo =document.getElementById("fondo").value;
    localStorage.removeItem('fondo',fondo);
    //document.body.style.backgroundColor = fondo;
}