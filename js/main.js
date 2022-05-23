function displayPassword(icon) {
    
    const element =  document.getElementById ('password');
    if (element.getAttribute('type',) =='password'){
        element.setAttribute('type', 'text');
        document.querySelector('#eye').setAttribute('src', 'img/' + icon);

    }else {
        element.setAttribute('type', 'password')
        document.querySelector('#eye').setAttribute('src', 'img/icon-closed-eye.svg')
    }
}




