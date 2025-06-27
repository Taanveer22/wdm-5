console.log("conneted js");

// global variable

const allBtnDonateNow = document.getElementsByClassName("btn-donate-now");
// console.log(allBtnDonateNow);
// loop through all the card donate now button---------------
for (let oneBtnDonateNow of allBtnDonateNow) {
  // console.log(oneBtnDonateNow);
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

// history and donation tab variable declaretion----------------------------------
const historyTab = document.getElementById("history-tab");
// console.log(historyTab);
const donationTab = document.getElementById("donation-tab");
// console.log(donationTab);

// history tab functionality--------------------
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-lime-400");
  donationTab.classList.remove("bg-lime-400");

  // hide card container
  document.getElementById("card-container").classList.add("hidden");
});

// donation tab functionality-----------------------------------
donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-lime-400");
  historyTab.classList.remove("bg-lime-400");
  // show card container
  document.getElementById("card-container").classList.remove("hidden");
});
