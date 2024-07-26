const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById("login-area").style.display='none';
    const transactionArea = document.getElementById('transaction-area').style.display="block";

})

const depositButton = document.getElementById("addDeposit");

depositButton.addEventListener('click',function(){
   const depositAmount = document.getElementById("deposit-amount").value ;
   const depositNumber = parseFloat(depositAmount);
   updateSpantext('current-deposit',depositNumber)
   updateSpantext('total-balance',depositNumber)
   document.getElementById("deposit-amount").value=""

//    const currentDeposit = document.getElementById("current-deposit").innerText;
//    const currentDepositNumber = parseFloat(currentDeposit);
//    const totalDeposit = currentDepositNumber + depositNumber
//    
//     document.getElementById("current-deposit").innerText = totalDeposit;
//     const banance = document.getElementById("total-balance").innerText;
//     const currentBananceNumber = parseFloat(banance);
//     console.log(currentBananceNumber);
//     const totalBalance = currentBananceNumber + depositNumber
//     document.getElementById('total-balance').innerHTML = totalBalance
})

function updateSpantext(id,Number){
    const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = currentAmountNumber + Number
    document.getElementById(id).innerText= totalAmount;
}

const withdrowButton = document.getElementById('withdraw-button')
withdrowButton.addEventListener('click',function(){
    const Balance = document.getElementById('withdraw-amount').value;
    const balanceNumber = parseFloat(Balance);

    updateSpantext('withdraw-balance',balanceNumber)
    updateSpantext('total-balance',-1 * balanceNumber)

    // const currentAmount = document.getElementById('withdraw-balance').innerText
    // const currentAmountNumber = parseFloat(currentAmount);
    // const totalAmount = currentAmountNumber+balanceNumber;
    // document.getElementById("withdraw-balance").innerText= totalAmount;
    document.getElementById("withdraw-amount").value=""

    
    // const banance = document.getElementById("total-balance").innerText;
    // const currentBananceNumber = parseFloat(banance);
    // const newBalance = currentBananceNumber - balanceNumber
    // document.getElementById("total-balance").innerText= newBalance;




})