let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

let heartCountElement = document.getElementById("heartCount");
let coinCountElement = document.getElementById("coinCount");
let copyCountElement = document.getElementById("copyCount");

function getCurrentTime() {
  let now = new Date();
  return now.toLocaleTimeString();
}

let heartButtons = document.querySelectorAll(".heart-btn");
for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function () {
    heartCount = heartCount + 1;
    heartCountElement.innerText = heartCount;
  });
}

let copyButtons = document.querySelectorAll(".copy-btn");
for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    let card = this.closest(".card");
    let number = card.getAttribute("data-number");

    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(number + " is Copied");
        copyCount += 3;
        copyCountElement.innerText = copyCount;
      })
      .catch((err) => {
        alert("Failed to copy: " + err);
      });
  });
}

let callButtons = document.querySelectorAll(".call-btn");
let historyList = document.getElementById("historyList");
let emptyHistory = document.getElementById("emptyHistory");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].addEventListener("click", function () {
    let card = this.closest(".card");
    let name = card.getAttribute("data-name");
    let number = card.getAttribute("data-number");

    if (coinCount < 20) {
      alert("Sorry! You don't have enough coins.");
      return;
    }

    coinCount = coinCount - 20;
    coinCountElement.innerText = coinCount;

    alert("Calling " + name + " — " + number);

    if (emptyHistory) {
      emptyHistory.remove();
      emptyHistory = null;
    }
    let li = document.createElement("li");
    li.innerHTML = `
  <div class="flex justify-between font-bold text-green-800">
    <span>${name}</span>
    <span>${getCurrentTime()}</span>
  </div>
  <p class="text-sm text-gray-700">${number}</p>
`;

    historyList.insertBefore(li, historyList.firstChild);
  });
}

let clearBtn = document.getElementById("clearHistoryBtn");
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = "";
  let li = document.createElement("li");
  li.id = "emptyHistory";
  li.innerText = "No calls yet";
  historyList.appendChild(li);
  emptyHistory = li;
});
