/* Data Validation (DOM) */
const form = document.getElementById('signup');
const Name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('PasswordInput');
const password2 = document.getElementById('RetypePasswordInput');
const postal = document.getElementById('postal')
const city = document.getElementById('city');
const eyeButton = document.getElementById('image2'); // Added to fix issues with spacing with the button 2

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs(); 
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const isValidEmail = email => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

const isPasswordValid = password => {
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
    return passwordRegex.test(password);
}

const PostalCodeValid = postal =>{
    const postalRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    return postalRegex.test(postal);
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const validateInputs = () => {
    const nameValue = Name.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const postalValue = postal.value.trim();
    const cityValue = city.value.trim();
    if(nameValue === ''){
        setError(Name, 'Name is required');
        Name.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else{
        setSuccess(Name);
        Name.style.border = "solid 2px green";
        eyeButton.style.bottom = "48px";
        eyeButton.style.left = "30.7vh";
        var NameValid = true;
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
        email.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
        email.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";

    }
    else{
        setSuccess(email);
        email.style.border = "solid 2px green";
        eyeButton.style.bottom = "48px";
        eyeButton.style.left = "30.7vh";
        var EmailValid = true;
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
        password.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else if(!isPasswordValid(passwordValue)){
        setError(password, 'The password must be have at least 6 characters, an Upper Case Letter, a number and a special character')
        password.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else{
        setSuccess(password)
        password.style.border = "solid 2px green";
        eyeButton.style.bottom = "48px";
        eyeButton.style.left = "30.7vh";
        var passwordValid = true;
    }

    if(password2Value === ''){
        setError(password2, 'Please confirm your password')
        password2.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else if(password2Value !== passwordValue){
        setError(password2, 'Passwords do not match')
        password2.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else if(!isPasswordValid(password2Value)){
        setError(password2, 'Your password must contain at least 6 characters, an Upper Case Character, at least number and a special character')
        password2.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else{
        setSuccess(password2)
        password2.style.border = "solid 2px green";
        eyeButton.style.bottom = "48px";
        eyeButton.style.left = "30.7vh";
        var passwordValid2 = true;
    }

    if (postalValue === ''){
        setError(postal, 'Please enter a postal code')
        postal.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else if(!PostalCodeValid(postalValue)){
        setError(postal, 'Please enter a good postal code format (e.g: H3A 3D8)')
        postal.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else{
        setSuccess(postal)
        postal.style.border = "solid 2px green";
        eyeButton.style.bottom = "48px";
        eyeButton.style.left = "30.7vh";
        var postalValid = true;
    }
    
    if (cityValue === "select") {
        setError(city, 'Please select a city')
        city.style.border = "solid 2px red";
        eyeButton.style.left = "30.7vh";
        eyeButton.style.top = "-45px";
    }
    else{
        setSuccess(city)
        city.style.border = "solid 2px green";
        eyeButton.style.bottom = "48px";
        eyeButton.style.left = "30.7vh";
        var SelectValid = true;
    }


    if (NameValid && EmailValid && passwordValid && passwordValid2 && postalValid && SelectValid)
    {
        if(confirm('Here is your information:\n- Name: '+ nameValue +'\n- Email: ' + emailValue + '\n- Postal Code: '+ postalValue +'\n- City: ' + cityValue + '\n\nWould you like to submit the following information?'))
        {
            createTextFile(nameValue, emailValue, passwordValue, postalValue, cityValue)
        }
        else
        {
            return false;
        }
    }
};

/* Text File Creation */
function createTextFile(name, email, password, postal){
    const content = `Email: ${email} \nPassword: ${password}\nPostal Code: ${postal}`
    const blob = new Blob([content], {type: 'text/plain'});

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = name+'_inputs.txt';

    link.click();
}


/* Password Functions */
const passwordInput = document.getElementById('PasswordInput');
const toggleVisibility = document.getElementById('ToggleVisibility');
const RetypePasswordInput = document.getElementById('RetypePasswordInput');
const toggleVisibility2 = document.getElementById('ToggleVisibility2');

toggleVisibility.addEventListener('change', function() {
    if(toggleVisibility.checked){
        passwordInput.type = 'text';
    }
    else{
        passwordInput.type = 'password';   
    }
});

toggleVisibility2.addEventListener('change', function() {
    if(toggleVisibility2.checked){
        RetypePasswordInput.type = 'text';
    }
    else{
        RetypePasswordInput.type = 'password';   
    }
});

/* City Functions */ 
    var selectCity = document.getElementById('city');
    var options = selectCity.options;
    var optionToRemove = 'New York City';

    var button = document.getElementById('remove')
    button.addEventListener('click',hideshow,false);

function hide() 
    {
        document.getElementById('remove').style.display = 'block'; 
        document.getElementById('remove').style.display = 'none';
    }

function remove() {
    
    for (var i = 0; i < options.length; i++){
        if(options[i].text === optionToRemove){
            selectCity.remove(i);
            break;
        }
    } 
}

function addOption(){ 
    var option = document.createElement('option');
    option.value = 'QuebecCity';
    option.text = 'Quebec City';
    selectCity.appendChild(option);
}

function removecity()
{ 
    remove();
    hide();
    addOption();
}

