console.log("conneted js");

// ------------------------------------------
// all buttons selcted by DOM-------------------
// ------------------------------------------
const allBtnDonateNow = document.getElementsByClassName("btn-donate-now");
console.log(allBtnDonateNow);

// -------------------------------------------------------------
// loop through all the buttons-------------------
// event listenter for one button-----------------
// ------------------------------------------------------------
for (let oneBtnDonateNow of allBtnDonateNow) {
  console.log(oneBtnDonateNow);
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

    // modal declaretion-------------------------------------
    const errorModal = document.getElementById("error_modal");
    // console.log(errorModal);
    const successModal = document.getElementById("success_modal");
    // console.log(successModal);

    // validation-----------------------------------
    if (
      isNaN(donationInput) ||
      donationInput <= 0 ||
      donationInput >= bankBalance
    ) {
      errorModal.showModal();
      return;
    } else {
      successModal.showModal();
    }

    // math calculation--------------------------------------
    let donatedMoney = donationInput + donationOutput;
    // console.log(donatedMoney);
    let remainingBankBalance = bankBalance - donationInput;
    // console.log(remainingBankBalance);

    // manipulate dom---------------------------------
    donationOutputElement.innerText = donatedMoney;
    bankBalanceElement.innerText = remainingBankBalance;

    // dynamic ui by dom----------------------------------
    const historyListContainer = document.getElementById(
      "history-list-container"
    );
    // console.log(historyListContainer);
    const title = event.target.parentNode.childNodes[3].innerText;
    // console.log(title);
    const date = new Date();
    // console.log(date);
    const listDiv = document.createElement("div");
    listDiv.className = "p-5 m-5 border-2 border-gray-300 rounded-md";
    listDiv.innerHTML = `
       <h1 class="text-black text-xl font-bold">${donationInput} taka is ${title}</p>
       <p class="text-gray-500 text-md font-light">Date : ${date}</p>

  `;
    // console.log(listDiv);
    historyListContainer.appendChild(listDiv);
  });
}

// -------------------------------------------------------------------------------
// history and donation tab variable declaretion----------------------------------
// -------------------------------------------------------------------------------
const historyTab = document.getElementById("history-tab");
// console.log(historyTab);
const donationTab = document.getElementById("donation-tab");
// console.log(donationTab);


//------------------------------------------------------------
// history tab functionality--------------------
//------------------------------------------------------------
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-lime-400");
  donationTab.classList.remove("bg-lime-400");
  // hide card container
  hideSection("card-container");
  // show history list
  showSection("history-list-container");
});


//------------------------------------------------------------
// donation tab functionality-----------------------------------
// ---------------------------------------------------------------
donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-lime-400");
  historyTab.classList.remove("bg-lime-400");
  // show card container
  showSection("card-container");
  // hide history list
  hideSection("history-list-container");
});


// -------------------------------------------------
// common or utility function
// -------------------------------------------------
function showSection(id) {
  const removeHidden = document.getElementById(id).classList.remove("hidden");
  return removeHidden;
}

function hideSection(id) {
  const addHidden = document.getElementById(id).classList.add("hidden");
  return addHidden;
}
