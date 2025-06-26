console.log("conneted js");

// global variable
let bankBalance = document.getElementById("bank-balance");
let donationOutput = document.getElementById("donation-output");
let donationInput = document.getElementById("donation-input");
console.log(bankBalance, donationOutput, donationInput);

const btnDonateNow = document.getElementById("btn-donate-now");
// console.log(btnDonateNow);

// ------------------------------------------------------
// event listenter for button donate now
// ------------------------------------------------------
btnDonateNow.addEventListener("click", function () {
  // console.log('donate now clicked');
  let bankBalanceNumber = parseFloat(bankBalance.innerText);
  console.log(bankBalanceNumber);

  let donationOutputNumber = parseFloat(donationOutput.innerText);
  console.log(donationOutputNumber);

  let donationInputNumber = parseFloat(donationInput.value);
  console.log(donationInputNumber);

  let donatedMoney = donationInputNumber + donationOutputNumber;
  console.log(donatedMoney);

  let remainingBankBalance = bankBalanceNumber - donationInputNumber;
  console.log(remainingBankBalance);

  // manipulate dom
  donationOutput.innerText = donatedMoney;
  bankBalance.innerText = remainingBankBalance;
});
