function animatedForm() {
    const accepted = document.querySelectorAll('.fa-check')

    accepted.forEach(accept => {
        accept.addEventListener('click', () => {
            //Get element before it <-- element 
            const currentInput = accept.previousElementSibling;
            //Get parent element like --> div <--
            const parent = accept.parentElement;
            //Get next element like 1div -->>--next-->> 2div
            const nextForm = parent.nextElementSibling;

            //Check for validation
            if (currentInput.type === 'text' && validateUser(currentInput)){
                nextSlider(parent, nextForm);
            } else if (currentInput.type === 'email' && validateEmail(currentInput)) {
                nextSlider(parent, nextForm);
            } else if (currentInput.type === 'password' && validateUser(currentInput)) {
                nextSlider(parent, nextForm)
            } else {
                parent.style.animation = 'shake 0.5s ease'
            }
            // get rid animation again
            parent.addEventListener('animationend', () => {
                parent.style.animation = "";
            })
        })
    })
}
//function check validation Form --> User Name
function validateUser(user) {
    if (user.value.length < 6) {
        errorOrNotColor('red')
    } else {
        errorOrNotColor('green')
        return true
    }
}
function validateEmail(email) {
   const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (validation.test(email.value)) {
       errorOrNotColor('green')
       return true;
    } else {
        errorOrNotColor('red')
   }
}
function nextSlider(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}
//This function for if error change color 
function errorOrNotColor(color) {
    document.body.style.backgroundColor = color;
}


animatedForm();