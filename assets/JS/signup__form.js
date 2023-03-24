const form = document.querySelector('form');
const email = document.getElementById('email');
const Name = document.getElementById('Name');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message
}

function showSuccess(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = ``
    // small.innerText = `check ${getFieldName(input)} success`
}
// let email2 = 'cocon321235@gmil.com'
// console.log(email.value.trim());

function checkEmail(input){
    const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(regexEmail.test(input.value.trim())){
        console.log('Thanh cong')
        showSuccess(input);
    }else{
        console.log('That bai')
        showError(input, 'Email is not valid')
    }
}

function checkRequired(inputArr){
    let isRequired = false;
    inputArr.forEach(function(input){        
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
            isRequired = true;
        }else{
            showSuccess(input);
        }     
    });
    return isRequired;
}

function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`);
    }
}

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value ){
        showError(input1,'Passwords do not match')
        showError(input2,'Passwords do not match')
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function showSuccessAll(inputArr){
    inputArr.forEach(function(input){
        showSuccess(input);
    })
}
// _____Raw_____ ===> Validate

// console.log(getFieldName(email))

// form.addEventListener('submit', function (e) {
// 	e.preventDefault()
//     if(!checkRequired([email,Name,password,password2])){
//         checkEmail(email);
//         checkPasswordsMatch(password,password2);
//         checkLength(Name,8,25);
//     }
// })



// Check add feature

const registerButton = document.getElementById('registerButton');
const submit_btn = document.getElementById('submitId__authen')
let check = 1

loginButton.onclick = function() {
    showSuccessAll([email,Name,password,password2])
    loginButton.className = 'authen__element onclick'
    registerButton.className = 'authen__element'
    submit_btn.value = 'Đăng nhập/LOGIN'
    Name.style.display = 'none';
    password2.style.display = 'none';
    check = 1;
    
    // form.addEventListener('submit', function (e) {
    //     e.preventDefault()
    //     if(!checkRequired([email,password])){
    //         checkEmail(email);
    //     }
    // })
};

registerButton.onclick = function() {
    showSuccessAll([email,Name,password,password2])
    registerButton.className = 'authen__element onclick'
    loginButton.className = 'authen__element'
    submit_btn.value = 'Đăng ký/Register'
    Name.style.display = 'block';
    password2.style.display = 'block';
    check = 0;
    
    // form.addEventListener('submit', function (e) {
    //     e.preventDefault()
    //     if(!checkRequired([email,Name,password,password2])){
    //         checkEmail(email);
    //         checkPasswordsMatch(password,password2);
    //         checkLength(Name,8,25);
    //     }
    // })
};

form.addEventListener('submit', function (e) {
    // alert('submit')
    e.preventDefault()
    // alert(check)
    if(check === 1){
        // alert('before if login')
        // alert(!checkRequired([email,password]))
        
        if(!checkRequired([email,password])){
            checkEmail(email);
            // alert('login')          
        }
    } else if(check === 0) {
        // e.preventDefault()
        // alert('before if register')
        if(!checkRequired([email,Name,password,password2])){
            // alert('register')
            checkEmail(email);
            checkPasswordsMatch(password,password2);
            checkLength(Name,8,25);
    } else {
        alert('Error')
    }
}
})

