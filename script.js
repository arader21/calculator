const display = document.getElementById("textBox");
function appendNumber(input){
display.value += input;

}
function appendOperation(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = ""
}
function calculateDisplay() {
    try{
        display.value = eval?.(`(${display.value})`);
    }
    catch(error){
        display.value = "Error";
    }
    }    
        