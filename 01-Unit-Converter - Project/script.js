let kelvin = 293 ; 
console.log(kelvin);
//Ask to user 
  kelvin = prompt('Forecast today?'); 
  console.log(`Today is ${kelvin} Kelvin.`);
//Celsius has been calculated.
let celsius = kelvin - 273 ; 
//Fahrenheit has been calculated.
let fahrenheit = Math.round((celsius * (9/5)) + 32);

let temperature = fahrenheit; 
console.log(`The temperature is ${temperature} degrees Fahrenheit.`);
//Newton has been calculated.
let newton = Math.floor(celsius * (33/100));
console.log(`Today temperature is ${kelvin} Kelvin and ${celsius} Celsius and ${temperature} Fahrenheit and ${newton} Newton! `);