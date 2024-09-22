function showAlert() {
    // Not returning a value since required name field on form ensures true or default
    alert('Hi '+ document.nameFun.user.value + '!');
}

function validateText() {
    const validateRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validateRegex.test(document.textFun.textTest.value)) {
        // Will only enter this if bracket if condition is true
        alert('How about...nah (Psst- your text contains a special character!)');
        return false; 
    } else {
        // Return out that text is valid and contains no special chars
        return true;
    }
}

function addText() {
    var titleText = document.getElementById('pageTitle');
    titleText.innerHTML = 'INST377 - Lab 4 - Add Text'; 
}

function changeColor() {
    if (document.body.style.backgroundColor == 'lightblue') {
        const colorState = document.body.style.backgroundColor = 'green';
    } else {
        const colorState = document.body.style.backgroundColor = 'lightblue';
    }
}