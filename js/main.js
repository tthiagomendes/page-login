function displayPassword() {
    
    const elemento =  document.getElementById ('password');
    if (elemento.getAttribute('type')=='password'){
        elemento.setAttribute('type', 'text')
    }else {
        elemento.setAttribute('type', 'password')
    }
}