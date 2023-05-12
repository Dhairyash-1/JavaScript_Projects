

const increase = () => {

    const currentValue = document.querySelector("h1")
    const updatedValue = Number(currentValue.textContent) + 1;
    currentValue.textContent = updatedValue
 
    if(updatedValue%5 ==0){
        currentValue.style.color = "red"
    }
    else{
        currentValue.style.color = ""

    }
    
}

const decrease = () => {
    const currentValue = document.querySelector("h1")
    const updatedValue = Number(currentValue.textContent) - 1;
    currentValue.textContent = updatedValue

    if(updatedValue%5 ==0 && updatedValue != 0){
        currentValue.style.color = "red"
    }
    else{
        currentValue.style.color = ""

    }

}






// const textElement = document.querySelector("h1")
// const currentValue = Num(textElement.textContent)
// const updateValue = currentValue + 1
