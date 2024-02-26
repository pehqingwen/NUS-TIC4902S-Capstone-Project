// Access data from local storage
var localStorageData = getAllLocalStorageData();
console.log(localStorageData);

// Function to get all data from local storage
function getAllLocalStorageData() {
  var localStorageData = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);

    localStorageData.push({ key: key, value: value });
  }
  return localStorageData;
}

//globally declared variable to access across webpages (include .js file in html)
let bagItems = [];
let bagList = document.getElementById("output");

function renderBagItems() {
  bagList.innerHTML = ""; // Clear the list before rendering
  bagItems = [];

  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key && key.startsWith("bagItem")) {
      bagItems.push(JSON.parse(localStorage.getItem(key)));
    }
  }

  //!important : updated each time quantity for each listings is changed with dropdown (revert once refresh)
  for (let k = 0; k < bagItems.length; k++) {
    console.log(bagItems[k]);
  }

  for (var i = 0; i < bagItems.length; i++) {
    if (
      bagItems[i].id === 15 ||
      bagItems[i].id === 28 ||
      bagItems[i].id === 30
    ) {
      // Create a new div element for each bag item
      var infoDiv = document.createElement("div");

      infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
<span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${bagItems[i].imagePath}" alt="${bagItems[i].name
        }" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
Quantity: <select id="${i}" onchange=""></select> 
</span>
<span><a href="#" id="cancel${i}">
<img src="cross.svg" style="width: 24px; height: 24px;">
</a></span>
</div>

<div style="display: block; padding-left: 20px;">
<select id="${i}-1"></select>
<select id="${i}-2"></select>
<select id="${i}-3"></select>
<select id="${i}-4"></select>
<select id="${i}-5"></select>

</div>

<hr>
`;
      bagList.appendChild(infoDiv);

      addDropdownOptions(`${i}`, bagItems[i].quantity); //use back ticks

      if (bagItems[i].id === 28 || bagItems[i].id === 30) {
        addChoiceOption(`${i}-1`, bagItems[i].choice1);
        addChoiceOption(`${i}-2`, bagItems[i].choice2);
        addChoiceOption(`${i}-3`, bagItems[i].choice3);
        addChoiceOption(`${i}-4`, bagItems[i].choice4);
        addChoiceOption(`${i}-5`, bagItems[i].choice5);
      } else {
        addSelectOption(`${i}-1`, bagItems[i].choice1);
        addSelectOption(`${i}-2`, bagItems[i].choice2);
        addSelectOption(`${i}-3`, bagItems[i].choice3);
        addSelectOption(`${i}-4`, bagItems[i].choice4);
        addSelectOption(`${i}-5`, bagItems[i].choice5);
      }

      //new function for updating the selection choices of ids 15, 28, 30 (bagItems/favItems array only)
      updateDropdownSelections(`${i}-1`);
      updateDropdownSelections(`${i}-2`);
      updateDropdownSelections(`${i}-3`);
      updateDropdownSelections(`${i}-4`);
      updateDropdownSelections(`${i}-5`);
    } else if (bagItems[i].id === 43) {
      // Create a new div element for each bag item
      var infoDiv = document.createElement("div");

      infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
<span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${bagItems[i].imagePath}" alt="${bagItems[i].name
        }" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
Quantity: <select id="${i}" onchange=""></select> 
</span>
<span><a href="#" id="cancel${i}">
<img src="cross.svg" style="width: 24px; height: 24px;">
</a></span>
</div>

<div style="display: block; padding-left: 20px;">
<select id="${i}-1"></select>
<select id="${i}-2"></select>
<select id="${i}-3"></select>
<select id="${i}-4"></select>

</div>

<hr>
`;
      bagList.appendChild(infoDiv);

      addDropdownOptions(`${i}`, bagItems[i].quantity); //use back ticks

      addSelectionOption(`${i}-1`, bagItems[i].choice1);
      addSelectionOption(`${i}-2`, bagItems[i].choice2);
      addSelectionOption(`${i}-3`, bagItems[i].choice3);
      addSelectionOption(`${i}-4`, bagItems[i].choice4);

      //new function for updating the selection choices of id-43 (bagItems/favItems array only)
      updateDropdownSelections(`${i}-1`);
      updateDropdownSelections(`${i}-2`);
      updateDropdownSelections(`${i}-3`);
      updateDropdownSelections(`${i}-4`);
    } else if (bagItems[i].id === 44) {
      // Create a new div element for each bag item
      var infoDiv = document.createElement("div");

      infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
<span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${bagItems[i].imagePath}" alt="${bagItems[i].name
        }" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
Quantity: <select id="${i}" onchange=""></select> 
</span>
<span><a href="#" id="cancel${i}">
<img src="cross.svg" style="width: 24px; height: 24px;">
</a></span>
</div>

<div style="display: block; padding-left: 20px;">
<select id="${i}-1"></select>
<select id="${i}-2"></select>
<select id="${i}-3"></select>
<select id="${i}-4"></select>
<select id="${i}-5"></select>
<select id="${i}-6"></select>

</div>

<hr>
`;
      bagList.appendChild(infoDiv);

      addDropdownOptions(`${i}`, bagItems[i].quantity); //use back ticks

      addSelectionOption(`${i}-1`, bagItems[i].choice1);
      addSelectionOption(`${i}-2`, bagItems[i].choice2);
      addSelectionOption(`${i}-3`, bagItems[i].choice3);
      addSelectionOption(`${i}-4`, bagItems[i].choice4);
      addSelectionOption(`${i}-5`, bagItems[i].choice5);
      addSelectionOption(`${i}-6`, bagItems[i].choice6);

      updateDropdownSelections(`${i}-1`);
      updateDropdownSelections(`${i}-2`);
      updateDropdownSelections(`${i}-3`);
      updateDropdownSelections(`${i}-4`);
      updateDropdownSelections(`${i}-5`);
      updateDropdownSelections(`${i}-6`);
    } else if (bagItems[i].id === 45) {
      // Create a new div element for each bag item
      var infoDiv = document.createElement("div");

      infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
<span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${bagItems[i].imagePath}" alt="${bagItems[i].name
        }" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
Quantity: <select id="${i}" onchange=""></select> 
</span>
<span><a href="#" id="cancel${i}">
<img src="cross.svg" style="width: 24px; height: 24px;">
</a></span>
</div>

<div style="display: block; padding-left: 20px;">
<select id="${i}-1"></select>
<select id="${i}-2"></select>
<select id="${i}-3"></select>
<select id="${i}-4"></select>
<select id="${i}-5"></select>
<select id="${i}-6"></select>
<select id="${i}-7"></select>
<select id="${i}-8"></select>

</div>

<hr>
`;
      bagList.appendChild(infoDiv);

      addDropdownOptions(`${i}`, bagItems[i].quantity); //use back ticks

      addSelectionOption(`${i}-1`, bagItems[i].choice1);
      addSelectionOption(`${i}-2`, bagItems[i].choice2);
      addSelectionOption(`${i}-3`, bagItems[i].choice3);
      addSelectionOption(`${i}-4`, bagItems[i].choice4);
      addSelectionOption(`${i}-5`, bagItems[i].choice5);
      addSelectionOption(`${i}-6`, bagItems[i].choice6);
      addSelectionOption(`${i}-7`, bagItems[i].choice7);
      addSelectionOption(`${i}-8`, bagItems[i].choice8);

      updateDropdownSelections(`${i}-1`);
      updateDropdownSelections(`${i}-2`);
      updateDropdownSelections(`${i}-3`);
      updateDropdownSelections(`${i}-4`);
      updateDropdownSelections(`${i}-5`);
      updateDropdownSelections(`${i}-6`);
      updateDropdownSelections(`${i}-7`);
      updateDropdownSelections(`${i}-8`);
    } else {
      // Create a new div element for each bag item
      var infoDiv = document.createElement("div");

      infoDiv.innerHTML = `
    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
        <span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
    </div>

    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>
            <img src="${bagItems[i].imagePath}" alt="${bagItems[i].name
        }" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
            Quantity: <select id="${i}" onchange=""></select> 
         </span>
         <span><a href="#" id="cancel${i}">
            <img src="cross.svg" style="width: 24px; height: 24px;">
         </a></span>
    </div>

<hr>
`;
      bagList.appendChild(infoDiv);

      addDropdownOptions(`${i}`, bagItems[i].quantity); //use back ticks
    }
  }
}

function updateDropdownSelections(selector) {
  var $select = $("#" + selector);

  // change the display in dropdown to new-selected at checkout & save new-selected to bagItems[]
  $select.on("change", function () {
    var newValue = $(this).val();
    const index = parseInt(selector.split("-")[0]);
    const choiceNumber = parseInt(selector.split("-")[1]);
    const dynamicChoiceProperty = `choice${choiceNumber}`;

    // checking newly selected flavor
    console.log(newValue);
    // checking index (bagItems[]) of listing being changed
    console.log(index);

    bagItems[index][dynamicChoiceProperty] = newValue;

    // checking the updated array elements
    console.log(bagItems[index]);

    //change the localstorage data so that it stays changed & for db
    const id = bagItems[index].id;
    console.log(id);
    var toChange = JSON.parse(localStorage.getItem("bagItem" + id));
    toChange[`choice${choiceNumber}`] = newValue;
    localStorage.setItem("bagItem" + id, JSON.stringify(toChange));
    console.log("changed" + localStorage.getItem("bagItem" + id));

    $select.find("option:selected").text(newValue);

    if ($select.val() !== newValue) {
      $select.val(newValue);

      // Trigger the change event to update the displayed text (not permanently - gone after refresh)
      $select.trigger("change");
    }
  });
}

// important!
function addChoiceOption(selector, selectedChoice) {
  var $select = $("#" + selector);
  $select.empty();

  for (let j = 0; j < window.sharedData.bonbonsData.length - 3; j++) {
    var optionValue = window.sharedData.bonbonsData[j].name;
    var option = $("<option></option>").val(optionValue).html(optionValue);

    if (optionValue === selectedChoice) {
      option.prop("selected", true);
    }
    $select.append(option);
  }
}

function addSelectOption(selector, selectedChoice) {
  var $select = $("#" + selector);
  $select.empty();

  for (let j = 0; j < window.sharedData.macaronsData.length - 3; j++) {
    var optionValue = window.sharedData.macaronsData[j].name;
    var option = $("<option></option>").val(optionValue).html(optionValue);

    if (optionValue === selectedChoice) {
      option.prop("selected", true);
    }
    $select.append(option);
  }
}

var cakes = [
  "Salted Caramel Cake",
  "Zesty Lemon Cake",
  "Dark Chocolate Indulgence",
  "Sakura Tea Vanilla Cake",
  "Matcha Mont Blanc Tart",
  "Lemony Meringue Tart",
  "Mango Passionfruit Tart",
  "Blackberry Cheesecake Tart",
  "Pistachio Strawberry Tart",
];

function addSelectionOption(selector, selectedChoice) {
  var $select = $("#" + selector);
  $select.empty();

  for (let j = 0; j < cakes.length; j++) {
    var optionValue = cakes[j];
    var option = $("<option></option>").val(optionValue).html(optionValue);

    if (optionValue === selectedChoice) {
      option.prop("selected", true);
    }
    $select.append(option);
  }
}

//code for deleting each product from checkout
$(document).ready(function () {
  $("[id*='cancel']").on("click", function (event) {
    console.log("Click event fired!");
    var index = parseInt(this.id.replace("cancel", ""), 10);
    console.log(index);
    if (!isNaN(index) && index >= 0 && index < bagItems.length) {
      for (let i = localStorage.length - 1; i >= 0; i--) {
        let key = localStorage.key(i);
        let localStorageItem = JSON.parse(localStorage.getItem(key));

        if (localStorageItem && key && key === "bagItem" + bagItems[index].id) {
          localStorage.removeItem(key);
        } else if (key && key.startsWith("bagQuantity")) {
          let bagQty = parseInt(localStorage.getItem(key)) || 0;
          bagQty = Math.max(0, bagQty - 1);
          localStorage.setItem("bagQuantity", JSON.stringify(bagQty));
        } else if (key && key === "item" + bagItems[index].id + "AddedToBag") {
          localStorage.removeItem(key);
        }
      }
    }
    //function to reload page
    event.preventDefault();
    reloadPage();
  });
});

//function to reload page
function reloadPage() {
  location.reload();
}

//to check whether the qty has been updated in bagItems[] permanently (not)
function print() {
  var check = document.getElementById("check");
  check.innerHTML = "";

  for (let i = 0; i < bagItems.length; i++) {
    let item = bagItems[i];
    check.innerHTML += item.quantity + "<br>";
  }
}

// change the qty at checkout dropdown to the value selected at panel
function addDropdownOptions(selector, selectedValue) {
  var $select = $("#" + selector);

  $select.empty();

  for (let j = 1; j <= 100; j++) {
    var option = $("<option></option>").val(j).html(j);
    if (j === parseInt(selectedValue, 10)) {
      // Convert selectedValue to a number
      option.prop("selected", true);
    }
    $select.append(option);
  }

  // change the display in dropdown to new-selected at checkout & save new-selected to bagItems[]
  $select.on("change", function () {
    // Get the selected value when the user makes a new selection
    var newValue = $(this).val();

    var index = parseInt(selector, 10);
    bagItems[index].quantity = parseInt(newValue);

    //do not delete!*
    console.log(bagItems[index]);

    //function to check updated bagItems[] value: ^
    //print();

    const id = bagItems[index].id;
    var toChangeQty = JSON.parse(localStorage.getItem("bagItem" + id));
    toChangeQty.quantity = parseInt(newValue);
    localStorage.setItem("bagItem" + id, JSON.stringify(toChangeQty));

    $select.find("option:selected").text(newValue);

    if ($select.val() !== newValue) {
      $select.val(newValue);

      // Trigger the change event to update the displayed text (not permanently - gone after refresh)
      $select.trigger("change");
    }

    //refresh to make sure the $total updates immediately professionally 
    location.reload();
  });
}

if (bagItems.length >= 5) {
  var scroll = document.getElementById("scroll");
  scroll.scrollTop = 100;
}

renderBagItems();

function calculateTotalCosts() {
  var totalCosts = 0;
  var bagItems = [];
  var subtotal = [];
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key && key.startsWith("bagItem")) {
      bagItems.push(JSON.parse(localStorage.getItem(key)));
    }
  }

  //create an array of qty X price
  for (var k = 0; k < bagItems.length; k++) {
    subtotal.push(bagItems[k].price * bagItems[k].quantity);
  }
  //add each price in array to totalCosts var
  for (var i = 0; i < subtotal.length; i++) {
    totalCosts += subtotal[i];
  }

  localStorage.setItem("totalCosts", parseFloat(totalCosts.toFixed(2)));

  return totalCosts.toFixed(2);
}

function renderStorageData() {
  var bagCountDisplay = document.getElementById("bagCount");

  //localStorageData is an array, while localStorage.key or localStorage.getItem are standards for using local storage
  bagCountDisplay.innerHTML =
    "Total (" +
    localStorage.getItem("bagQuantity") +
    " items) : US $" +
    calculateTotalCosts();
}

//note to self: function calls must have () even if no parameters
renderStorageData();

//to include delivery charges when checkbox is checked
var checkbox = document.getElementById("delivery");
var hiddenElement = document.getElementById("deliveryChargeDisplay");
let totalCost = document.getElementById("totalPrice");
totalCost.textContent = calculateTotalCosts();

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    hiddenElement.style.display = "block";

    var currentTotalCost = parseFloat(totalCost.textContent);
    totalCost.textContent = (currentTotalCost + 15).toFixed(2);
    localStorage.setItem("totalCosts", parseFloat(totalCost.textContent));
  } else {
    hiddenElement.style.display = "none";

    var currentTotalCost = parseFloat(totalCost.textContent);
    totalCost.textContent = (currentTotalCost - 15).toFixed(2);
    localStorage.setItem("totalCosts", parseFloat(totalCost.textContent));
  }
});

let totalQuantity = document.getElementById("totalQuantity");
totalQuantity.textContent = bagItems.length;

function createAddBagFunction(indexNumber) {
  window["addItemToCart" + indexNumber] = function (event) {
    let currentItem = productData[indexNumber - 16];
    console.log(selectedQuantity);
    currentItem.quantity = selectedQuantity || 1;

    localStorage.setItem("bagItem" + indexNumber, JSON.stringify(currentItem));
    let itemKey = "item" + indexNumber + "AddedToCart";

    // Check if the item has already been added to the cart
    if (!localStorage.getItem(itemKey)) {
      let currentCount = parseInt(localStorage.getItem("bagQuantity")) || 0;
      let newCount = currentCount + 1;

      // Set the flag to indicate the item has been added to the cart
      localStorage.setItem(itemKey, "true");
      localStorage.setItem("bagQuantity", newCount);

      //displays the innerText at bag.html webpage
      let subsequentItem = JSON.parse(
        document.getElementById("bagItem" + indexNumber).innerText
      );
      if (indexNumber === 28) {
        subsequentItem.choice1 = selectedText1;
        subsequentItem.choice2 = selectedText2;
        subsequentItem.choice3 = selectedText3;
        subsequentItem.choice4 = selectedText4;
        subsequentItem.choice5 = selectedText5;
      } else if (indexNumber === 30) {
        subsequentItem.choice1 = selectedText6;
        subsequentItem.choice2 = selectedText7;
        subsequentItem.choice3 = selectedText8;
        subsequentItem.choice4 = selectedText9;
        subsequentItem.choice5 = selectedText10;
      }
      subsequentItem.quantity = parseInt(selectedQuantity);
      localStorage.setItem(
        "bagItem" + indexNumber,
        JSON.stringify(subsequentItem)
      );

      updateItemCountBag();
      calculateTotalCosts();
    } else {
      alert("Item already added to cart.");
    }
    event.preventDefault();
  };
}

// Function to update the item count on the page
function updateItemCountBag() {
  let element = document.getElementById("bagQuantity");
  let storedCount = parseInt(localStorage.getItem("bagQuantity")) || 0;
  element.innerText = storedCount;
}

function createAddFavFunction(indexNumber) {
  window["addItemToFav" + indexNumber] = function (event) {
    let currentItem = productData[indexNumber - 16];
    currentItem.quantity = selectedQuantity || 1;

    localStorage.setItem("favItem" + indexNumber, JSON.stringify(currentItem));
    let itemKey = "item" + indexNumber + "AddedToFav";

    // Check if the item has already been added to fav
    if (!localStorage.getItem(itemKey)) {
      let currentCount = parseInt(localStorage.getItem("favQuantity")) || 0;
      let newCount = currentCount + 1;

      // Set the flag to indicate the item has been added to the cart
      localStorage.setItem(itemKey, "true");
      localStorage.setItem("favQuantity", newCount);

      //displays the innerText at fav.html webpage
      let subsequentItem = JSON.parse(
        document.getElementById("favItem" + indexNumber).innerText
      );
      if (indexNumber === 28) {
        subsequentItem.choice1 = selectedText1;
        subsequentItem.choice2 = selectedText2;
        subsequentItem.choice3 = selectedText3;
        subsequentItem.choice4 = selectedText4;
        subsequentItem.choice5 = selectedText5;
      } else if (indexNumber === 30) {
        subsequentItem.choice1 = selectedText6;
        subsequentItem.choice2 = selectedText7;
        subsequentItem.choice3 = selectedText8;
        subsequentItem.choice4 = selectedText9;
        subsequentItem.choice5 = selectedText10;
      }
      localStorage.setItem(
        "favItem" + indexNumber,
        JSON.stringify(subsequentItem)
      );

      updateItemCountFav();
    } else {
      alert("Item already added to favourites.");
    }
    event.preventDefault();
  };
}

// Function to update the item count on the page
function updateItemCountFav() {
  let element = document.getElementById("favQuantity");
  let storedCount = parseInt(localStorage.getItem("favQuantity")) || 0;
  element.innerText = storedCount;
}

window.onload = function () {
  updateItemCountBag();
  updateItemCountFav();
};

function resetItemCount() {
  localStorage.clear(); // Clear all localStorage data
  updateItemCountBag();
  updateItemCountFav();
}

// Example JavaScript to populate the dropdown
var countries = ["United States", "Canada", "Georgia"];

var countrySelect = document.getElementById("country");

countries.forEach(function (country) {
  var option = document.createElement("option");
  option.value = country.toLowerCase();
  option.text = country;
  countrySelect.add(option);
});

// Function to generate the next user ID
let userIdCount = 0;

function generateUserId(userIdCount) {
  // Pad the numeric part with leading zeros
  var paddedNumericPart = userIdCount.toString().padStart(6, "0");

  // Combine the prefix and padded numeric part to create the new user ID
  var nextUserId = "U" + paddedNumericPart;

  return nextUserId;
}

// Clear items stored in localStorage related to the bag
function clearBagItems() {
  // Remove items with keys starting with "bagItem"
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith("bagItem") || key.endsWith("AddedToBag")) {
      localStorage.removeItem(key);
    }
  });

  // Reset the bag quantity counter
  localStorage.setItem('bagQuantity', 0);

  // Optionally, you can call a function to update the UI after clearing
  updateItemCountBag(); // Assuming this function updates the displayed item count
}

document.addEventListener("DOMContentLoaded", function () {
  var userData = {};

  // Get the form element
  var checkout = document.getElementById("checkout");

  // Add submit event listener to the form
  checkout.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Prepare order data from localStorage
    let orderData = {
      user: {}, // Include all required user detail fields here
      order: { order_totalCost: calculateTotalCosts() },
      products: [],
    };

    // Generate user details from form inputs
    orderData.user = {
      user_email: document.getElementById("email").value,
      user_firstName: document.getElementById("firstname").value,
      user_lastName: document.getElementById("lastname").value,
      user_address1: document.getElementById("address1").value,
      user_address2: document.getElementById("address2").value,
      user_country: document.getElementById("country").value,
      user_ZIP: document.getElementById("postalcode").value,
      user_countryCode: document.getElementById("countrycode").value,
      user_contactNumber: document.getElementById("mobile").value,
    };

    // Extract product and quantity data from localStorage
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && key.startsWith("bagItem")) {
        var value = JSON.parse(localStorage.getItem(key));
        orderData.products.push({
          product_name: value.name,
          product_price: value.price,
          quantity: value.quantity,
          choice1: value.choice1,
          choice2: value.choice2,
          choice3: value.choice3,
          choice4: value.choice4,
          choice5: value.choice5,
          choice6: value.choice6,
          choice7: value.choice7,
          choice8: value.choice8,
          product_code: value.code
        });
      }
    }

    // Using the Fetch API to send the order data to your backend
    fetch("http://127.0.0.1:8000/checkout", {
      method: "POST",
      headers: {
        //usually for sending data to server; such as in POST/PUT requests
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Checkout successful", data);

        clearBagItems();
        localStorage.clear();

        window.location.href = "/client/main.html";
      })
      .catch((error) => {
        console.error("Checkout failed:", error);
      });
  });
});


// search bar
// Add an event listener to the form to handle form submission
document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the search keyword
    var keyword = document.getElementById("search").value.trim().toLowerCase();
    var originalkeyword = document.getElementById("search").value.trim();

    // Store the keyword in localStorage
    localStorage.setItem("searchKeyword", JSON.stringify(keyword));
    localStorage.setItem(
      "originalsearchKeyword",
      JSON.stringify(originalkeyword)
    );

    // Redirect to searchresults.html
    window.location.href = "searchresults.html";
  });
