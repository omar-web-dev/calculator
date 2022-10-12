document.getElementById('calculator-area').addEventListener('click', function(event){
    const inputFlied = document.getElementById('input-flied');
    const previousNumber = inputFlied.value;  
    const element = event.target.innerText;
    const newNumber = previousNumber + element;

    if (isNaN(element)) {
        if(element === 'AC'){
            inputFlied.value = '0';
        }else if(element === '+'){
            console.log(inputFlied.value + element);
            inputFlied.value = inputFlied.value + element;

        }
    } else {
        // console.log(parseInt(newNumber));
        inputFlied.value = newNumber;
    }
})