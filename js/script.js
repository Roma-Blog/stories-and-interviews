const title = document.querySelector('.main-title')

let titleText = Array.from(title.textContent)

function PrintCharacter(speedPrint) {
    title.textContent += titleText[0]
    titleText.splice(0, 1)
    if (titleText.length != 0) {
        setTimeout(() => PrintCharacter(speedPrint), speedPrint);
    }
}

title.textContent = ''
PrintCharacter(200)

//Validate____________________________________________________________
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
let inputsEmail = document.querySelectorAll('input[data-email-input]')
let forms = document.querySelectorAll('form')

for (let form of forms) {
    form.addEventListener('submit', CheckFormValidate)

}

for (let inputEmail of inputsEmail) {
    inputEmail.addEventListener('blur', onInput)
}

function CheckFormValidate(e) {
    if (!onInput(e.target.querySelector('input[data-email-input]')) || !InputValidateTel(e.target.querySelector('input[data-tel-input]'))) {
        e.preventDefault()
    }
}

function ErrorMessage(el, text) {
    el.classList.add('order__text-error-block')
    el.innerHTML = text
}

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value)
}

function onInput(e) {
    if (e.target) e = e.target

    if (isEmailValid(e.value)) {
        e.classList.remove('invalid-input')
        e.setCustomValidity("The email is correct, thank you!")
        e.reportValidity()
        return true
    } else {
        e.classList.add('invalid-input')
        if (e.value == '') {
            e.setCustomValidity("Enter your e-mail")
            e.reportValidity()
        }
        else {
            e.setCustomValidity("The e-mail was entered incorrectly")
            e.reportValidity()
        }
        e.addEventListener('input', onInput)
        return false
    }
}



