const form = document.querySelector("form");

//Validando número de tarjeta
const cardNumberFuntion = element => {
    let sum = 0;
    //Convertir valor del input en array de números e invertirlo
    let cardNumberValue = Array.from(element.value);
    let numberArray = cardNumberValue.map(num => { return Number(num); }).reverse();

    numberArray.forEach((num, index) =>{
      if (index % 2 != 0) {
        let evenNumber = num * 2;
        if (evenNumber > 9) {
            evenNumber = evenNumber.toString();
            let evenNumeZero = Number(evenNumber[0]);
            let evenNumeOne = Number(evenNumber[1]);
            let sumEvenNumber =  evenNumeZero + evenNumeOne;
            sum = sum + sumEvenNumber;
            } else {
                sum = sum + evenNumber;
                }
            } else { 
        sum = sum + num;
        }
    });


//Validando nombre
const nameFunction = element => {
    let nameValue = element.value;
    if(nameValue.length <= 30){
        element.className = "success";
        return true;
    }else{
        element.className = "error";
    }
    console.log(" name ")
}


/*form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

function validateCardDetails(element) {
  //escribe tu código aqui
}*/
