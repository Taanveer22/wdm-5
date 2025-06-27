console.log("conneted js");

// global variable

const allBtnDonateNow = document.getElementsByClassName("btn-donate-now");
// console.log(allBtnDonateNow);

for (let oneBtnDonateNow of allBtnDonateNow) {
  console.log(oneBtnDonateNow);
  // ------------------------------------------------------
  // event listenter for one donate now button
  // ------------------------------------------------------
  oneBtnDonateNow.addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);
    // console.log("donate now btn clicked");

    // variable declaretion---------------------
    let bankBalanceElement = document.getElementById("bank-balance");
    // console.log(bankBalanceElement);

    let donationOutputElement =
      event.target.parentNode.childNodes[1].childNodes[3].childNodes[1];
    // console.log(donationOutputElement);

    let donationInputElement = event.target.parentNode.childNodes[7];
    // console.log(donationInputElement);

    // traverse dom-------------------------
    let bankBalance = parseFloat(bankBalanceElement.innerText);
    // console.log(bankBalance);

    let donationOutput = parseFloat(donationOutputElement.innerText);
    // console.log(donationOutput);

    let donationInput = parseFloat(donationInputElement.value);
    // console.log(donationInput);

    let donatedMoney = donationInput + donationOutput;
    // console.log(donatedMoney);

    let remainingBankBalance = bankBalance - donationInput;
    // console.log(remainingBankBalance);

    // manipulate dom---------------------------------
    donationOutputElement.innerText = donatedMoney;
    bankBalanceElement.innerText = remainingBankBalance;

    // validation
    if (isNaN(donationInput) || donationInput <= 0) {
      alert("invalid donation amount");
    } else {
      alert("your donation has received successfully");
    }
  });
}
