//inside bnk
//step 1
document.getElementById("deposit-btn").addEventListener("click", function () {
  // step 2.a
  const depositField = document.getElementById("deposit-field");
  const newDepositFieldString = depositField.value;
  const newDepositField = parseFloat(newDepositFieldString);
  console.log(newDepositField);
  //step 3.a
  const depositTotal = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotal.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  //step 4.a
  const currentDeposit = previousDepositTotal + newDepositField;
  depositTotal.innerText = currentDeposit;
  //step 5.a
  const balanceTotal = document.getElementById("balance-total");
  const newBalanceTotalString = balanceTotal.innerText;
  const newBalanceTotal = parseFloat(newBalanceTotalString);
  //step 6.a
  const currentBalanceTotal = newBalanceTotal + newDepositField;
  balanceTotal.innerText = currentBalanceTotal;
  //step clear deposit field
  depositField.value = "";
});
