//chap 6 
//I hate js pt.2
/*1st line executes js only after html loads
5 const lines references the id and classes needed from the html file*/ 
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#petrolf"); 
  const inputcpl = document.getElementById("cpl");
  const inputlitersp = document.getElementById("litersp");
  const calculate = document.querySelector("#calc"); 
  const finaltotal = document.querySelector(".total"); 

  //start of the calculation code
  /*when the button calculate is pressed, the code below this line 
  will execute*/ 
  calculate.addEventListener("click", function(event) { 
    event.preventDefault(); //to prevent the default values from getting executed when the pages load

    //converts the input into float
    const cpl = parseFloat(inputcpl.value);
    const litersp = parseFloat(inputlitersp.value);

    /*this part makes sure that the inputs are positive numbers
    if not it shows an alert message*/ 
    if (cpl < 0 || litersp < 0) {
      alert ("Enter a positive number!");
      return
    }
    /*if the input from cpl or litersp is not a number 
    then it displays an alert message asking for a valid num input */
    if (isNaN(cpl) || isNaN(litersp)) {
      alert ("Enter a valid number!");
      return
    }
    /*this part calculates the inputs by multiplying cpl * litersp 
    then displays it in finaltotal elemnt using textcontent with the message*/
    const total = cpl * litersp;
    finaltotal.textContent = `Total cost of Petrol purchased: $${total.toFixed(2)}`; //rounding off 2 decimal places
  });
});
//I still hate >:c
//THE END
