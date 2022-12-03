let celsious = document.getElementById("c");
let fahrenheit = document.getElementById("f");
let kelvin = document.getElementById("k");

// formular for c to f convertion 
celsious.oninput = () => {
 let output = (parseFloat(c.value) * 9) / 5 + 32;
 f.value = Math.floor(parseFloat(output));
};

// formular for f to c 
fahrenheit.oninput = () => {
    let output = (parseFloat(f.value) - 32) * 5 / 9;
    c.value = Math.floor(parseFloat(output));
    
};
// formular for k 
kelvin.oninput = () => {
let output = (parseFloat(c.value)) + 273.15;
    k.value = Math.floor(parseFloat(output));
};
    
