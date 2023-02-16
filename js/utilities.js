function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = "" ;
    return inputFieldValue ;
}
function getTextValue(textId){
    const textField = document.getElementById(textId);
    const textFieldValue = parseFloat(textField.innerText);
    return textFieldValue ;
}
function setValue(elementId , newValue){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = newValue ;
}
