function chekUsername(){
    var username = el.value;
    if (username.length , 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enoung, yet....';
    }else{
        elMsg.textContent = '';
    }
}
function  tipUsername() {
    elMsg.className = 'tip'
    elMsg.innerHTML = 'username must be at least 5 characters';
}
var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur',chekUsername, false);