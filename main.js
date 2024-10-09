var display = document.getElementById('display');
function btnClick(value){
    display.value += value;
}
function clearDisplay(){
    display.value = "";
}
function findResult(){
    var result = eval(display.value)
    display.value = result;
}
function del(){
    display.value = display.value.substr(0, display.value.length-1)
}