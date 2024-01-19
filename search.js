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


// //start of collecting user data for storing in db 
// document.getElementById('checkout').addEventListener('submit', function (event) {
//     event.preventDefault(); //prevent default form submission

//     //collect form data 
//     var formData = new FormData(event.target); //FormData is an API
//     //id

//     //process the form data as needed 
//     processData(formData);
// });

// function processData(formData) {
//     //extract values from formData
//     var id;
//     var firstname = formData.get('firstname');
//     var lastname = formData.get('lastname');
//     var address1 = formData.get('address1');
//     var email = formData.get('email');
//     var address2 = formData.get('address2');
//     var country = formData.get('country');
//     var postalcode = formData.get('postalcode');
//     var countrycode = formData.get('countrycode');
//     var mobilenumber = formData.get('mobile');

//     //call function to save the above data 
//     saveDataToCSV(firstname, lastname, email, countrycode, mobilenumber, address1, address2, country, postalcode);
// }


// function saveDataToCSV() {
//     var csvContent = "data:text/csv;charset=utf-8,";

//     //add column headers
//     csvContent += "user_firstname, user_lastname, user_email, user_countrycode, user_mobilenumber, user_address1, user_address2, user_country, user_postalcode\n"

//     //add data rows
//     csvContent += firstname + "," + lastname + "," + email + "," + countrycode + "," + mobilenumber + "," + address1 + "," + address2 + "," + country + "," + postalcode + "\n";

//     //create a blob with the csv content 
//     var blob = new Blob([csvContent], { type: 'text/csv' });

//     //

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


// const webpages = ['acctBag.html', 'bag.html', 'bank.html', 'bonbons.html', 'cakes.html', 'drinks.html', 'favlogin.html', 'favorites.html', 'locations.html', 'loginregister.html', 'macarons.html', 'main.html', 'payment.html', 'thankyou.html']; 
const webpagesSearchKeyword = ['macarons.html', 'bonbons.html', 'cakes.html', 'drinks.html'];

//use jQuery to handle the form submission event 
$('#searchForm').submit(function (event) {
    //prevent default form submission 
    event.preventDefault();

    //call search function 
    // search();
});

function search() {
    const keyword = document.getElementById('search').value.toLowerCase();
    const searchResults = [];

    // Define a regular expression with capturing groups for the text between occurrences
    const regex = new RegExp(`(${keyword}[^${keyword}]*)${keyword}`, 'ig');

    webpagesSearchKeyword.forEach(page => {
        $.ajax({
            url: page,
            type: 'GET',
            dataType: 'html',
            success: function (data) {
                // Convert the content to lowercase for case-insensitive comparison
                const lowerCaseContent = $(data).text().toLowerCase();

                // Find the position of the first occurrence of the keyword
                const firstIndex = lowerCaseContent.indexOf(keyword);

                if (firstIndex !== -1) {
                    // Find the position of the second occurrence of the keyword
                    const secondIndex = lowerCaseContent.indexOf(keyword, firstIndex + 1);

                    if (secondIndex !== -1) {
                        // Extract the text between the two occurrences
                        const capturedText = $(data).text().substring(firstIndex, secondIndex);

                        searchResults.push({
                            page: page,
                            content: capturedText.trim()
                        });
                    }
                }


                //display the search results 
                displayResults(searchResults);
            },
            error: function (error) {
                console.log('Error loading ' + page);
            }
        });
    });
}

function displayResults(results) {
    const resultsContainer = $('#searchResults'); //html id
    resultsContainer.empty();

    if (results.length === 0) {
        resultsContainer.append('<p>No matching results found</p>');
    } else {
        // results.forEach(result => {

        // Append only the first result
        const firstResult = results[0];
        resultsContainer.append(`<div><h3>${firstResult.page}</h3><p>${firstResult.content}</p></div>`);

        // resultsContainer.append(`<div><h3>${result.page}</h3><p>${result.content}</p></div>`);
        // });
    }
}


const productData = [
    { id: 1, name: 'Orange Citrus Burst', code: 'M001', price: 6.50, quantity: 1, imagePath: 'pics1/1.jpg', description: 'Made with orange freshly grown and harvested at prime growing season' },
    { id: 2, name: 'Pink Strawberry Swirl', code: 'M002', price: 7.50, quantity: 1, imagePath: 'pics1/2.jpg', description: 'Made with fresh strawberries from Hokkaido' },
    { id: 3, name: 'Zesty Lemon Thrill', code: 'M003', price: 7.50, quantity: 1, imagePath: 'pics1/3.jpg', description: 'Using freshly squeezed lemons, the ganache filling of this macaron consists of jam, lemon juice and cream.' },
    { id: 4, name: 'Dark Chocolate Delight', code: 'M004', price: 7.50, quantity: 1, imagePath: 'pics1/4.jpg', description: 'For all-time chocolate lovers, you will want to know this macaron\'s ganache is mixed with lots of 65% dark chocolate goodness!' },
    { id: 5, name: 'Chewy Candy Blues', code: 'M005', price: 7.50, quantity: 1, imagePath: 'pics1/5.jpg', description: 'Artificially colored blue, this chap\'s striking color will not make you regret its exquisite flavour! Note: chewy candies included in ganache.' },
    { id: 6, name: 'Milo', code: 'M006', price: 7.50, quantity: 1, imagePath: 'pics1/6.jpg', description: 'Made with the ever popular milo drink powder, added with frosted icing as the confectionery center filling.' },
    { id: 7, name: 'Mixed Berries Delight', code: 'M007', price: 7.50, quantity: 1, imagePath: 'pics1/7.jpg', description: 'With the coloring of its sandwich cookies naturally derived from berries, Mixed Berries Delight is a sure hit with people who love berries.' },
    { id: 8, name: 'Red Velvet with Cherries', code: 'M008', price: 8.00, quantity: 1, imagePath: 'pics1/8.jpg', description: 'With its luxuriously red meringue cookies, the Red Velvet is a popular flavour choice for those looking to gift dear ones.' },
    { id: 9, name: 'Tropical Fruits Granduer', code: 'M009', price: 7.50, quantity: 1, imagePath: 'pics1/9.jpg', description: 'An exotic shade of yellow gold gives this flavour a mysterious aura of the untried and untasted. If you love tropical climate and tropical fruits, do give it a go!' },
    { id: 10, name: 'Magnificient Mango Mania', code: 'M010', price: 7.00, quantity: 1, imagePath: 'pics1/10.jpg', description: 'Definitely for the mango lovers, there is so much fresh mango pulp inside the ganache, you will hardly notice the cream in its filling!' },
    { id: 11, name: 'Salted Caramel with Coffee', code: 'M011', price: 7.50, quantity: 1, imagePath: 'pics1/11.jpg', description: 'Giving salted caramel an extra burst of flavour, coffee is added in, to the joy of those who love coffee as well!' },
    { id: 12, name: 'Black Forest', code: 'M012', price: 8.00, quantity: 1, imagePath: 'pics1/12.jpg', description: 'The royal mixture of dark chocolate, cherries and berries that make up this classic flavour will give you a run for your money!' },
    { id: 13, name: 'Box of 12s (Assorted)', code: 'M013', price: 79.00, quantity: 1, imagePath: 'pics1/13.jpg', description: 'Flavor selection: One of each unique flavor listed (12 unique flavors in total)' },
    { id: 14, name: 'Box of 24s (Assorted)', code: 'M014', price: 150.00, quantity: 1, imagePath: 'pics1/14.jpg', description: 'Flavor selection: Two of each unique flavor listed (12 unique flavors in total)' },
    { id: 15, name: 'Box of 30s (Assorted)', code: 'M015', price: 169.00, quantity: 1, imagePath: 'pics1/15.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5', description: 'Flavor selection: Choose up to 5 different flavors (12 unique flavors in total)' },
    { id: 16, name: 'Tropical Passionfruit', code: 'B001', price: 10.50, quantity: 1, imagePath: 'pics2/16.jpg', description: 'Anticipate the burst of passionfruit goodness from this exotic flavour found none other than here!' },
    { id: 17, name: 'Citrus Orange', code: 'B002', price: 9.50, quantity: 1, imagePath: 'pics2/17.jpg', description: 'A classic citrus flavour from a long time ago, you will not be disappointed with our shop\'s version!' },
    { id: 18, name: 'Zesty Lemon', code: 'B003', price: 10.50, quantity: 1, imagePath: 'pics2/18.jpg', description: 'A tangy delectable sour tinge is always good in a dessert for after meals! Just imagine the lack of zest!' },
    { id: 19, name: 'Dark Chocolate', code: 'B004', price: 9.50, quantity: 1, imagePath: 'pics2/19.jpg', description: 'The all original dark chocolate everyone knows about.' },
    { id: 20, name: 'Rum & Cherries', code: 'B005', price: 12.00, quantity: 1, imagePath: 'pics2/20.jpg', description: 'Don\'t be guilty to try out a little rum once in a while! This rum bonbon mixed with chocolate and cherries will leave you craving for more.' },
    { id: 21, name: 'White Tea & Berries', code: 'B006', price: 11.50, quantity: 1, imagePath: 'pics2/21.jpg', description: 'Infused with white tea with berries thrown into the mix, this bonbon is a sure hit amongst tea lovers.' },
    { id: 22, name: 'Japanese Sakura', code: 'B007', price: 12.50, quantity: 1, imagePath: 'pics2/22.jpg', description: 'No longer a seasonal specialty flavour, be sure to try this out whenever you feel a twang of longing to see cherry blossoms!' },
    { id: 23, name: 'Black Tea with Mango', code: 'B008', price: 12.00, quantity: 1, imagePath: 'pics2/23.jpg', description: 'Another popular recommendation for tea lovers, black tea now comes with a fruity pal: mango. Don\'t miss this fruit and tea combination!' },
    { id: 24, name: 'Coffee & Cookies', code: 'B009', price: 10.50, quantity: 1, imagePath: 'pics2/24.jpg', description: 'Another flavour with a unique twist to the classic cookies and cream. This time, coffee decides to be the other half!' },
    { id: 25, name: 'White Chocolate with Rose', code: 'B010', price: 13.00, quantity: 1, imagePath: 'pics2/25.jpg', description: 'The only white chocolate flavour amongst all bonbons, don\'t underestimate its uniqueness! It comes together marvelously well with fresh rose petals.' },
    { id: 26, name: 'Salted Caramel with Coffee', code: 'B011', price: 9.50, quantity: 1, imagePath: 'pics2/26.jpg', description: 'Salted caramel is never a lonely solo flavour again, with the companionship of coffee.' },
    { id: 27, name: 'Black Forest', code: 'B012', price: 11.00, quantity: 1, imagePath: 'pics2/27.jpg', description: 'Never forget the original classic of dark chocolate with berries.' },
    { id: 28, name: 'Box Set of 5s', code: 'B013', price: 40.00, quantity: 1, imagePath: 'pics2/28.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5', description: 'Flavour selection: Choose any 5 flavors from our collection of 12 unique choices!' },
    { id: 29, name: 'Box Set of 12s', code: 'B014', price: 90.00, quantity: 1, imagePath: 'pics2/29.jpg', description: 'Flavor selection: One of each unique flavor listed (12 unique flavors in total)' },
    { id: 30, name: 'Box Set of 25s', code: 'B015', price: 199.00, quantity: 1, imagePath: 'pics2/30.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5', description: 'Flavor selection: Choose up to 5 different flavors (12 unique flavors in total)' },
    { id: 31, name: 'Salted Caramel Cake', code: 'C001', price: 9.50, quantity: 1, imagePath: 'pics3/31.jpg', description: 'A slice of cake full of salted caramel goodness, for you or your loved one!' },
    { id: 32, name: 'Neapolitan Layered Cake', code: 'C002', price: 72.00, quantity: 1, imagePath: 'pics3/32.jpg', description: 'A tri-layered cake consisting of chocolate, strawberry, and vanilla. Enjoy the mixture of different flavours in one cake!' },
    { id: 33, name: 'Zesty Lemon Cake', code: 'C003', price: 10.50, quantity: 1, imagePath: 'pics3/33.jpg', description: 'Finished with a dollop of fresh lemon marmalade, the baked lemon crust of the cake crumble under the spoon to reveal a filling of layered lemon delight!' },
    { id: 34, name: 'Dark Chocolate Indulgence', code: 'C004', price: 9.50, quantity: 1, imagePath: 'pics3/34.jpg', description: 'Made with care with 65% dark chocolate, and dark chocolate fudge, chocolate lovers will love this.' },
    { id: 35, name: 'Sakura Tea Vanilla Cake', code: 'C005', price: 10.00, quantity: 1, imagePath: 'pics3/35.jpg', description: 'Infused with sakura flavored tea, the vanilla chiffon cake is also topped and layered with sakura essence buttercream.' },
    { id: 36, name: 'Red Velvet & Cherries Cake', code: 'C006', price: 100.50, quantity: 1, imagePath: 'pics3/36.jpg', description: 'The velvety red cake with vanilla cream and cherries gives an enticing impression.' },
    { id: 37, name: 'Matcha Mont Blanc Tart', code: 'C007', price: 12.50, quantity: 1, imagePath: 'pics3/37.jpg', description: 'Baked fresh daily with matcha powder imported from Japan, the mont blanc is worth trying!' },
    { id: 38, name: 'Lemony Meringue Tart', code: 'C008', price: 12.00, quantity: 1, imagePath: 'pics3/38.jpg', description: 'The citrusy taste of the lemon used in the meringue enhances the sweetness and fluffiness of it.' },
    { id: 39, name: 'Mango Passionfruit Tart', code: 'C009', price: 10.50, quantity: 1, imagePath: 'pics3/39.jpg', description: 'Mango and passionfruit are the best of tropical fruits combination there can be for just a tart.' },
    { id: 40, name: 'Blackberry Cheesecake Tart', code: 'C010', price: 13.00, quantity: 1, imagePath: 'pics3/40.jpg', description: 'If you like cheese, the gentle subtle taste of the blackberries will bring out the flavours of the cheesecake tart.' },
    { id: 41, name: 'Pistachio Strawberry Tart', code: 'C011', price: 9.50, quantity: 1, imagePath: 'pics3/41.jpg', description: 'The pistachios and strawberries go so well together, you won\'t believe it!' },
    { id: 42, name: 'Strawberry Cheesecake', code: 'C012', price: 95.00, quantity: 1, imagePath: 'pics3/42.jpg', description: 'Topped with fresh strawberries atop strawberry sauce and gelatin, the cheesecake and crispy base crust combination shall not disappoint anyone.' },
    { id: 43, name: 'Giftbox of 4s', code: 'C013', price: 36.00, quantity: 1, imagePath: 'pics3/43.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', description: 'Flavor selection: Choose up to 4 different flavors (9 unique choices in total)' },
    { id: 44, name: 'Giftbox of 6s', code: 'C014', price: 50.00, quantity: 1, imagePath: 'pics3/44.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5', choice6: 'Choice 6', description: 'Flavor selection: Choose up to 6 different flavors (9 unique choices in total)' },
    { id: 45, name: 'Giftbox of 8s', code: 'C015', price: 63.00, quantity: 1, imagePath: 'pics3/45.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5', choice6: 'Choice 6', choice7: 'Choice 7', choice8: 'Choice 8', description: 'Flavor selection: Choose up to 8 different flavors (9 unique choices in total)' },
    { id: 46, name: 'Espresso', code: 'D001', price: 4.00, quantity: 1, imagePath: 'pics4/46.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 47, name: 'Latte', code: 'D002', price: 6.50, quantity: 1, imagePath: 'pics4/47.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 48, name: 'Americano', code: 'D003', price: 6.00, quantity: 1, imagePath: 'pics4/48.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 49, name: 'Cappuccino', code: 'D004', price: 7.50, quantity: 1, imagePath: 'pics4/49.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 50, name: 'Macchiato', code: 'D005', price: 5.50, quantity: 1, imagePath: 'pics4/50.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 51, name: 'Mocha', code: 'D006', price: 9.00, quantity: 1, imagePath: 'pics4/51.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 52, name: 'Flat White', code: 'D007', price: 8.00, quantity: 1, imagePath: 'pics4/52.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 53, name: 'Iced Cold Brew', code: 'D008', price: 10.00, quantity: 1, imagePath: 'pics4/53.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 54, name: 'Iced Frappe', code: 'D009', price: 10.50, quantity: 1, imagePath: 'pics4/54.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 55, name: 'Affogato', code: 'D010', price: 11.00, quantity: 1, imagePath: 'pics4/55.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 56, name: 'Iced Latte', code: 'D011', price: 9.50, quantity: 1, imagePath: 'pics4/56.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
    { id: 57, name: 'Iced Mocha', code: 'D012', price: 10.00, quantity: 1, imagePath: 'pics4/57.jpg', description: 'Beverage brewed from the roasted and ground seeds of the tropical evergreen coffee plant. Packed in glass bottles for delivery.' },
]

var nameArray = ["Orange Citrus Burst", "Pink Strawberry Swirl", "Zesty Lemon Thrill", "Dark Chocolate Delight", "Chewy Candy Blues", "Milo", "Mixed Berries Delight", "Red Velvet with Cherries", "Tropical Fruits Granduer", "Magnificient Mango Mania", "Salted Caramel with Coffee", "Black Forest", "Box of 12s (Assorted)", "Box of 24s (Assorted)", "Box of 30s (Assorted)", "Tropical Passionfruit", "Citrus Orange", "Zesty Lemon", "Dark Chocolate", "Rum & Cherries", "White Tea & Berries", "Japanese Sakura", "Black Tea with Mango", "Coffee & Cookies", "White Chocolate with Rose", "Salted Caramel with Coffee", "Black Forest", "Box Set of 5s", "Box Set of 12s", "Box Set of 25s", "Salted Caramel Cake", "Neapolitan Layered Cake", "Zesty Lemon Cake", "Dark Chocolate Indulgence", "Sakura Tea Vanilla Cake", "Red Velvet & Cherries Cake", "Matcha Mont Blanc Tart", "Lemony Meringue Tart", "Mango Passionfruit Tart", "Blackberry Cheesecake Tart", "Pistachio Strawberry Tart", "Strawberry Cheesecake", "Giftbox of 4s", "Giftbox of 6s", "Giftbox of 8s", "Espresso", "Latte", "Americano", "Cappuccino", "Macchiato", "Mocha", "Flat White", "Iced Cold Brew", "Iced Frappe", "Affogato", "Iced Latte", "Iced Mocha"]

let indexArray = [];

const keyword = document.getElementById('search').value.toLowerCase();

for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i].toLowerCase().includes(keyword)) {
        indexArray.push(i);
    }
}

var resultsContainer = $('#searchResultsContainer');
resultsContainer.empty();

for (let u = 0; u < indexArray.length; u++) {
    renderSearchResults(indexArray[i]);
}

//use jQuery to handle the form submission event 
$('#searchForm').submit(function (event) {
    //prevent default form submission 
    event.preventDefault();

    //call search function 
    search();
});


function renderSearchResults(j) {
    //use productData[j].name etc. 
    resultsContainer.innerHTML = '';
    var index = parseInt(j);
    //create divs to append to resultsContainer 
    var infoDiv = document.createElement('div');

    //include ${index} to call function for show()/hide()
    infoDiv.innerHTML = `
    <div id="${index}"><a href="#"><img src="${productData[index].imagePath}"></a></div>
    <div>${productData[index].name}</div>
    <div>${productData[index].price}</div>
`;

    resultsContainer.appendChild(infoDiv);

    //ignore overlay: 
    createShowFunction(index);

    //renderOverlay() *
}

function renderOverlay() {
    var infoDiv = document.createElement('div');

    infoDiv.innerHTML = `

`

}

function createShowFunction(popupNumber) {
    window["show" + popupNumber] = function (event) {
        var overlay = document.getElementById("overlay");
        overlay.hidden = false;
        overlay.style.display = "block";
        var popup = document.getElementById("popup" + popupNumber);
        popup.hidden = false;
        popup.style.display = "block";
        event.preventDefault();
    };
}

//assign innerText to individual products
for (let k = 46; k <= 57; k++) {
    document.getElementById("bagItem" + k).innerText = JSON.stringify(productData[k - 46]);
    document.getElementById("favItem" + k).innerText = JSON.stringify(productData[k - 46]);
}

//retrieve the related innerText data upon clicking
$(function () {
    for (let i = 46; i <= 57; i++) {
        var $a = $("#bagItem" + i);
        var $button = $("#bagItem" + i);
        $a.text(JSON.stringify(productData[i - 46]));
        $button.text(JSON.stringify(productData[i - 46]));
    }
})

$(function () {
    for (let i = 46; i <= 57; i++) {
        var $a = $("#favItem" + i);
        $a.text(JSON.stringify(productData[i - 46]));
    }
})

