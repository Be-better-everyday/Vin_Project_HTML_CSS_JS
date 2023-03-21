const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const submit_btn = document.getElementById('submitId__authen')
// const Name1 = document.getElementById('Name');

loginButton.onclick = function() {
    loginButton.className = 'authen__element onclick'
    registerButton.className = 'authen__element'
    submit_btn.value = 'Đăng nhập/LOGIN'
    // Name1.style.display = 'none';

};


registerButton.onclick = function() {
    registerButton.className = 'authen__element onclick'
    loginButton.className = 'authen__element'
    submit_btn.value = 'Đăng ký/Register'
};