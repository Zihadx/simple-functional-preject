document.getElementById('btn-deposit').addEventListener('click' , function(){
    const newInputValue = getInputValue('diposit-amound');
    const previousDeposit = getTextValue('deposit-total');
    const presentDeposit = newInputValue + previousDeposit;
    setValue('deposit-total' , presentDeposit);

    const previousBalance = getTextValue('balance-total');
    const newBalance = previousBalance + newInputValue ;
    setValue('balance-total' , newBalance);
})