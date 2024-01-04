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
let bagList = document.getElementById('output');

function renderBagItems() {
    bagList.innerHTML = ''; // Clear the list before rendering
    bagItems = [];

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.startsWith('bagItem')) {
            bagItems.push(JSON.parse(localStorage.getItem(key)));
        }
    }

    //!important : updated each time quantity for each listings is changed with dropdown (revert once refresh)
    for (let k = 0; k < bagItems.length; k++) {
        console.log(bagItems[k]);
    }

    for (var i = 0; i < bagItems.length; i++) {
        if (bagItems[i].id === 15 || bagItems[i].id === 28 || bagItems[i].id === 30) {

            // Create a new div element for each bag item
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
<span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${bagItems[i].imagePath}" alt="${bagItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
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
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
<span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${bagItems[i].imagePath}" alt="${bagItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
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
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
<span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${bagItems[i].imagePath}" alt="${bagItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
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
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
<span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${bagItems[i].imagePath}" alt="${bagItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
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
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `
    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
        <span>Unit Price: US$${bagItems[i].price.toFixed(2)}</span>
    </div>

    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>
            <img src="${bagItems[i].imagePath}" alt="${bagItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
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
    var $select = $('#' + selector);

    // change the display in dropdown to new-selected at checkout & save new-selected to bagItems[]
    $select.on('change', function () {

        var newValue = $(this).val();
        const index = parseInt(selector.split('-')[0]);
        const choiceNumber = parseInt(selector.split('-')[1]);
        const dynamicChoiceProperty = `choice${choiceNumber}`;

        // checking newly selected flavor
        console.log(newValue);
        // checking index (bagItems[]) of listing being changed
        console.log(index);

        bagItems[index][dynamicChoiceProperty] = newValue;

        // checking the updated array elements 
        console.log(bagItems[index]);

        $select.find('option:selected').text(newValue);

        if ($select.val() !== newValue) {
            $select.val(newValue);

            // Trigger the change event to update the displayed text (not permanently - gone after refresh)
            $select.trigger('change');
        }
    });
}


// important!
function addChoiceOption(selector, selectedChoice) {
    var $select = $('#' + selector);
    $select.empty();

    for (let j = 0; j < window.sharedData.bonbonsData.length - 3; j++) {
        var optionValue = window.sharedData.bonbonsData[j].name;
        var option = $('<option></option>').val(optionValue).html(optionValue);

        if (optionValue === selectedChoice) {
            option.prop('selected', true);
        }
        $select.append(option);
    }
}

function addSelectOption(selector, selectedChoice) {
    var $select = $('#' + selector);
    $select.empty();

    for (let j = 0; j < window.sharedData.macaronsData.length - 3; j++) {
        var optionValue = window.sharedData.macaronsData[j].name;
        var option = $('<option></option>').val(optionValue).html(optionValue);

        if (optionValue === selectedChoice) {
            option.prop('selected', true);
        }
        $select.append(option);
    }
}


var cakes = ["Salted Caramel Cake", "Zesty Lemon Cake", "Dark Chocolate Indulgence", "Sakura Tea Vanilla Cake", "Matcha Mont Blanc Tart", "Lemony Meringue Tart", "Mango Passionfruit Tart", "Blackberry Cheesecake Tart", "Pistachio Strawberry Tart"];

function addSelectionOption(selector, selectedChoice) {
    var $select = $('#' + selector);
    $select.empty();

    for (let j = 0; j < cakes.length; j++) {
        var optionValue = cakes[j];
        var option = $('<option></option>').val(optionValue).html(optionValue);

        if (optionValue === selectedChoice) {
            option.prop('selected', true);
        }
        $select.append(option);
    }
}


//code for deleting each product from checkout 
$(document).ready(function () {
    $("[id*='cancel']").on("click", function (event) {
        console.log('Click event fired!');
        var index = parseInt(this.id.replace('cancel', ''), 10);
        console.log(index);
        if (!isNaN(index) && index >= 0 && index < bagItems.length) {
            for (let i = localStorage.length - 1; i >= 0; i--) {
                let key = localStorage.key(i);
                let localStorageItem = JSON.parse(localStorage.getItem(key));

                if (localStorageItem && key && key === 'bagItem' + bagItems[index].id) {
                    localStorage.removeItem(key);
                } else if (key && key.startsWith('bagQuantity')) {
                    let bagQty = parseInt(localStorage.getItem(key)) || 0;
                    bagQty = Math.max(0, bagQty - 1);
                    localStorage.setItem('bagQuantity', JSON.stringify(bagQty));
                } else if (key && key === 'item' + bagItems[index].id + 'AddedToCart') {
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


//start of collecting user data for storing in db 
document.getElementById('checkout').addEventListener('submit', function (event) {
    event.preventDefault(); //prevent default form submission

    //collect form data 
    var formData = new FormData(event.target); //FormData is an API
    //id

    //process the form data as needed 
    processData(formData);
});

function processData(formData) {
    //extract values from formData
    var id;
    var firstname = formData.get('firstname');
    var lastname = formData.get('lastname');
    var address1 = formData.get('address1');
    var email = formData.get('email');
    var address2 = formData.get('address2');
    var country = formData.get('country');
    var postalcode = formData.get('postalcode');
    var countrycode = formData.get('countrycode');
    var mobilenumber = formData.get('mobile');

    //call function to save the above data 
    saveDataToCSV(firstname, lastname, email, countrycode, mobilenumber, address1, address2, country, postalcode);
}


function saveDataToCSV() {
    var csvContent = "data:text/csv;charset=utf-8,";

    //add column headers
    csvContent += "user_firstname, user_lastname, user_email, user_countrycode, user_mobilenumber, user_address1, user_address2, user_country, user_postalcode\n"

    //add data rows
    csvContent += firstname + "," + lastname + "," + email + "," + countrycode + "," + mobilenumber + "," + address1 + "," + address2 + "," + country + "," + postalcode + "\n";

    //create a blob with the csv content 
    var blob = new Blob([csvContent], { type: 'text/csv' });

    //

}


// function validateForm(event) {
//     var firstname = document.getElementById('firstname').value;
//     var lastname = document.getElementById('lastname').value;
//     var address1 = document.getElementById('address1').value;
//     var email = document.getElementById('email').value;
//     var address2 = document.getElementById('address2').value;
//     var country = document.getElementById('country').value;
//     var postalcode = document.getElementById('postalcode').value;
//     var countrycode = document.getElementById('countrycode').value;
//     var mobilenumber = document.getElementById('mobile').value;

//     if (firstname === '' || email === '' || address1 === '' || country === '' || postalcode === '' || countrycode === '' || mobilenumber === '') {
//         openCustomAlert(event);
//         return false; // Prevent form submission

//     } else if (bagItems.length <= 0) {
//         openEmptyBagAlert(event);
//         return false;
//     }

//     // function for storing in 


//     // function for storing in database 


//     // function for deleting Shopping Bag Summary listings after transfer 


//     // If all details are filled in, the form will be submitted
//     return true;
// }


// //jQuery for displaying the custom alert message
// function openCustomAlert(event) {
//     // Show the overlay and the custom alert modal
//     document.getElementById('overlay').style.display = 'block';
//     document.getElementById('customalert').style.display = 'block';

//     // Prevent default behavior (page reload)
//     event.preventDefault();
// }

// function openEmptyBagAlert(event) {
//     // Show the overlay and the custom alert modal
//     document.getElementById('overlay').style.display = 'block';
//     document.getElementById('emptybagalert').style.display = 'block';

//     // Prevent default behavior (page reload)
//     event.preventDefault();
// }
// //jQuery for closing/hiding the custom message 
// function closeCustomAlert() {
//     document.getElementById('overlay').style.display = 'none';
//     document.getElementById('customalert').style.display = 'none';
// }

// function closeEmptyBagAlert() {
//     document.getElementById('overlay').style.display = 'none';
//     document.getElementById('emptybagalert').style.display = 'none';
// }


//to check whether the qty has been updated in bagItems[] permanently (not)
function print() {
    var check = document.getElementById('check');
    check.innerHTML = '';

    for (let i = 0; i < bagItems.length; i++) {
        let item = bagItems[i];
        check.innerHTML += item.quantity + '<br>';
    }
};


// change the qty at checkout dropdown to the value selected at panel 
function addDropdownOptions(selector, selectedValue) {
    var $select = $('#' + selector);

    $select.empty();

    for (let j = 1; j <= 100; j++) {
        var option = $('<option></option>').val(j).html(j);
        if (j === parseInt(selectedValue, 10)) { // Convert selectedValue to a number
            option.prop('selected', true);
        }
        $select.append(option);
    }

    // change the display in dropdown to new-selected at checkout & save new-selected to bagItems[]
    $select.on('change', function () {
        // Get the selected value when the user makes a new selection
        var newValue = $(this).val();

        var index = parseInt(selector, 10);
        bagItems[index].quantity = parseInt(newValue);

        //do not delete!*
        console.log(bagItems[index]);

        //function to check updated bagItems[] value: ^
        print();

        $select.find('option:selected').text(newValue);

        if ($select.val() !== newValue) {
            $select.val(newValue);

            // Trigger the change event to update the displayed text (not permanently - gone after refresh)
            $select.trigger('change');
        }
    });
}


if (bagItems.length >= 5) {
    var scroll = document.getElementById('scroll');
    scroll.scrollTop = 100;
}


renderBagItems();


function calculateTotalCosts() {
    var totalCosts = 0;
    var bagItems = [];
    var subtotal = [];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.startsWith('bagItem')) {
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

    return totalCosts.toFixed(2);
}


function renderStorageData() {
    var bagCountDisplay = document.getElementById('bagCount');

    //localStorageData is an array, while localStorage.key or localStorage.getItem are standards for using local storage 
    bagCountDisplay.innerHTML = "Total (" + localStorage.getItem('bagQuantity') + " items) : US $" + calculateTotalCosts();
}

//note to self: function calls must have () even if no parameters 
renderStorageData();


//to include delivery charges when checkbox is checked
var checkbox = document.getElementById('delivery');
var hiddenElement = document.getElementById('deliveryChargeDisplay');
let totalCost = document.getElementById('totalPrice');
totalCost.textContent = calculateTotalCosts();

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        hiddenElement.style.display = 'block';

        var currentTotalCost = parseFloat(totalCost.textContent);
        totalCost.textContent = (currentTotalCost + 15).toFixed(2);
        localStorage.setItem("totalCosts", parseFloat(totalCost.textContent));
    } else {
        hiddenElement.style.display = 'none';

        var currentTotalCost = parseFloat(totalCost.textContent);
        totalCost.textContent = (currentTotalCost - 15).toFixed(2);
        localStorage.setItem("totalCosts", parseFloat(totalCost.textContent));
    }
});


let totalQuantity = document.getElementById('totalQuantity');
totalQuantity.textContent = bagItems.length;


function resetItemCount(event) {
    localStorage.clear(); // Clear all localStorage data
    updateItemCountBag();
    updateItemCountFav();
    event.preventDefault();
    reloadPage();
}

function reloadPage() {
    location.reload();
}

// Function to update the item count on the page
function updateItemCountBag() {
    let element = document.getElementById('bagQuantity');
    let storedCount = parseInt(localStorage.getItem('bagQuantity')) || 0;
    element.innerText = storedCount;
}

// Function to update the item count on the page
function updateItemCountFav() {
    let element = document.getElementById('favQuantity');
    let storedCount = parseInt(localStorage.getItem('favQuantity')) || 0;
    element.innerText = storedCount;
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


// document.addEventListener('DOMContentLoaded', function () {
//     // Get the form element
//     var checkout = document.getElementById('checkout');

//     // Add submit event listener to the form
//     checkout.addEventListener('buttonCheckout', function (event) {
//         // Prevent the default form submission
//         event.preventDefault();

//         // Get user inputs
//         var firstname = document.getElementById('firstname').value;
//         var lastname = document.getElementById('lastname').value;
//         var address1 = document.getElementById('address1').value;
//         var email = document.getElementById('email').value;
//         var address2 = document.getElementById('address2').value;
//         var country = document.getElementById('country').value;
//         var postalcode = document.getElementById('postalcode').value;
//         var countrycode = document.getElementById('countrycode').value;
//         var mobilenumber = document.getElementById('mobile').value;

//         console.log('Username:', username);
//         console.log('Email:', email);

//         // Create an object to store user data
//         var userData = {
//             firstname: firstname,
//             lastname: lastname,
//             email: email,
//             address1: address1,
//             address2: address2,
//             country: country,
//             postalcode: postalcode,
//             countrycode: countrycode,
//             mobile: mobilenumber
//         };

//         // Convert the object to a JSON string
//         var userDataJSON = JSON.stringify(userData);
//         console.log(userDataJSON);
//         console.log(userData);

//         // Store the JSON string in local storage
//         localStorage.setItem('userData', userDataJSON);

//         // Optional: Provide feedback to the user
//         alert('User data has been stored in local storage.');

//         // You can redirect to another page or perform additional actions here
//     });
// });

// var key = 'userData';
// var userDataJSON = localStorage.getItem(key);

// if (userDataJSON) {
//     var userData = JSON.parse(userDataJSON);
//     console.log(userData);
// } else {
//     console.log('No data found for key ' + key);
// }