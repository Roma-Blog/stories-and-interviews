const title = document.querySelector('.main-title')

let titleText = Array.from(title.textContent)

function PrintCharacter(speedPrint){
    title.textContent += titleText[0]
    titleText.splice(0,1)
    if (titleText.length != 0){
        setTimeout(() => PrintCharacter(speedPrint), speedPrint);
    }
}

title.textContent = ''
PrintCharacter(200)






