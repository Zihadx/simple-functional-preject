document.getElementById('btn-withdraw').addEventListener('click' , function(){
    const newInputValueWithdraw = getInputValue('withdraw-amound');
    const previousWithdraw = getTextValue('total-withdraw');
    const presentWithdraw = newInputValueWithdraw + previousWithdraw;
    setValue('total-withdraw' , presentWithdraw); 

    const previousBalance = getTextValue('balance-total')
    const newBalance = previousBalance - newInputValueWithdraw ;
    setValue('balance-total' , newBalance);

})