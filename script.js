
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Error Message function
function showError(input,message) {
  const formControl = input.parentElement;
  formControl.className ='form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//Sucess Message function
function showSucess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//email validation fucntion
function checkEmail(input) {
  const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  
  if(re.test(String(input.value))) {
    showSucess(input)
  }else {
    showError(input,'Email is not valid');
  }
}

//check password match

function checkPasswordMatch(input1,input2) {
  if(input1.value !== input2.value) {
    showError(input2,'Password do not match');
  }
}

//Check Required Field
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input,`${getFieldName(input)} is reqiured`);
    }else {
      showSucess(input);
    }
  });
}

//get Field Name 
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check the length of username and password

function checkLength(input,min,max) {
  if(input.value.length < min ) {
    showError(input,`${getFieldName(input)} must be at least ${min} charactors`);
  }else if(input.value.length > max) {
    showError(input,`${getFieldName(input)} must be less than ${max} charactors`);
  }else {
    showSucess(input)
  }
}



form.addEventListener('submit',function(e){
  e.preventDefault();

  //check required call
  checkRequired([username,email,password,password2]);
  checkLength(username,3,10);
  checkLength(password,3,10);
  checkEmail(email);
  checkPasswordMatch(password,password2);

});
