//step 1
document.getElementById("withdraw-btn").addEventListener("click", function () {
  //step 2.b
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawFieldString = withdrawField.value;
  const newWithdrawField = parseFloat(newWithdrawFieldString);
  //step withdraw field clear
  withdrawField.value = "";
  if (isNaN(newWithdrawField)) {
    alert("please type valid number");
    return;
  }
  //step 3.b
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //step 5.b
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);
  if (previousBalanceTotal < newWithdrawField) {
    alert("baper taka nai");
    return;
  }

  //step 4.b
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawField;
  withdrawTotal.innerText = currentWithdrawTotal;

  //step 6.b
  const currentBalanceTotal = previousBalanceTotal - newWithdrawField;
  balanceTotal.innerText = currentBalanceTotal;
  //   //step withdraw field clear
  //   withdrawField.value = "";
});
