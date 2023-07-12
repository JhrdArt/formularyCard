const inputNameCard = document.getElementById('input__name-card');
const nameCard = document.getElementById('name__card');
const regex = /^[A-Za-z\s]+$/

inputNameCard.addEventListener('input', ()=>{
    const inputValue = inputNameCard.value;
    const validate = regex.test(inputValue);

    const error = document.getElementById('error-message')

    if(validate){
        nameCard.textContent = inputValue.toUpperCase();
        // error.style.display = 'none'
        // inputNameCard.classList.remove('error')
    } else{
        nameCard.textContent = '';
        // error.style.display = 'block'
        // inputNameCard.classList.add('error')
    };

});


const inputNumber = document.getElementById('input__number-card');
const numberCard = document.getElementById('numbers__card');

// function maxContent (){
//     const maxValue = 16;
//     if(inputNumber.value.length > maxValue){
//         inputNumber.value = inputNumber.value.slice(0, maxValue);
//     }
// }

function setCardNumber (e){
    numberCard.textContent = formatCard(e.target.value);
}

function formatCard (format){
    return format.toString().replace(/\d{4}(?=.)/g, "$& ");
}

inputNumber.addEventListener('input', setCardNumber)



const monthCard = document.getElementById('month__card');
const inputMonth = document.getElementById('input__month-card');

inputMonth.addEventListener('input', setMonthCard);

function setMonthCard (){
    let inputValue = inputMonth.value;
    const validate = inputValue.replace(/\D/g, '');

    if(validate >= 1 && validate <= 12){
        let formatValue = validate.padStart(2, '0')
        monthCard.textContent = formatValue;
    }else{
        monthCard.textContent = '';
    }

    inputMonth.value = validate; 

}
    
 
const yearCard = document.getElementById('year__card');
const inputYear = document.getElementById('input__year-card');

inputYear.addEventListener('input', setYearCard);

function setYearCard(){
    let inputValue = inputYear.value;
    let validValue = inputValue.replace(/\D/g, '');

    if(validValue >= 1 && validValue <= 40){
        let formatValue = validValue.padStart(2, '0');
        yearCard.textContent = formatValue;
    } else {
        yearCard.textContent = '';
    }

    inputYear.value = validValue;	
};


const inputCVC = document.getElementById('input__cvc-card');
const cvcCard = document.getElementById('cvc__card');

inputCVC.addEventListener('input', setCvcCard);

function setCvcCard (){
    let inputValue = inputCVC.value;
    let validValue = inputValue.replace(/\D/g, '');

    if(validValue >= 0 && validValue <= 999){
        let formatValue = validValue.padStart(3, '0');
        cvcCard.textContent = formatValue;
    } else{
        cvcCard.textContent = '';
    }

    inputCVC.value = validValue;

}


const button = document.getElementById('confirm');
let errorName = document.querySelector('.section__name-error')
let errorNumber = document.querySelector('.section__number-error')
let errorExp = document.querySelector('.section__exp-error')
let errorCVC = document.querySelector('.section__cvc-error')


function handleSubmit(e){
    
    e.preventDefault()
    
    if(!inputNameCard.value){
        errorName.style.visibility = 'visible';
        inputNameCard.classList.add('error')
    } else{
        errorName.style.visibility = 'none';
        inputNameCard.classList.remove('error')
    }
    
    if(!inputNumber.value){
        errorNumber.style.visibility = 'visible';
        inputNumber.classList.add('error')
    } else{
        errorNumber.style.visibility = 'none';
        inputNumber.classList.remove('error')
    }

    if(!inputMonth.value){
        errorExp.style.visibility = 'visible';
        inputMonth.classList.add('error')
    } else{
        errorExp.style.visibility = 'none';
        inputMonth.classList.remove('error')
    }

    if(!inputYear.value){
        errorExp.style.visibility = 'visible';
        inputYear.classList.add('error')
    } else{
        errorExp.style.visibility = 'none';
        inputYear.classList.remove('error')
    }

    if(!inputCVC.value){
        errorCVC.style.visibility = 'visible';
        inputCVC.classList.add('error')
    } else{
        errorCVC.style.visibility = 'none';
        inputCVC.classList.remove('error')
    }


    const formulary = document.querySelector('#formulary');
    const thank = document.getElementById('done');

    if(inputNameCard.value &&inputNumber.value && inputMonth.value && inputYear.value && inputCVC.value && inputNumber.value.length == 16){
        formulary.classList.add('hidden');
        thank.classList.remove('hidden');
    } else {
        setTimeout(() => {
            alert("Can't submit form! Please fill in all the required fields and ensure the card number is 16 digits.")
        }, 1000); 

    }

}


button.addEventListener('click', handleSubmit)