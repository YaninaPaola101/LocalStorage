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
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}