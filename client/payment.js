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

function renderBagItems() {
    var bagList = document.getElementById('output');
    //
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.startsWith('bagItem')) {
            bagItems.push(JSON.parse(localStorage.getItem(key)));

        }
    }

    for (let k = 0; k < bagItems.length; k++) {
        console.log(bagItems[k]);
    }

    for (var i = 0; i < bagItems.length; i++) {
        // Create a new div element for each bag item
        var infoDiv = document.createElement('div');

        infoDiv.innerHTML = `

    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>${i + 1}. ${bagItems[i].name} (${bagItems[i].code})</span>
        <span>
            Quantity: ${bagItems[i].quantity}
        </span>
    </div>
`;
        bagList.appendChild(infoDiv);

    }

}

renderBagItems();


function renderUserDetails() {
    var userDetails = document.getElementById('userDetails');

    //make up some userDetails for prinitng on screen 
    let name = "Eve Poh"
    let address = "1327 Turkey Pen Lane, Montgomery, Alabama"
    let zipcode = "United States 36104"
    let mobile = "+1376-549-7576"
    let email = "evepoh@gmail.com"

    // Create a new div element for each bag item
    var infoDiv = document.createElement('div');

    infoDiv.innerHTML = `

    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>
            Customer Name: 
        </span>
        <span>
            ${name}
        </span>
    </div>
    <br>
    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>
            Delivery Address: 
        </span>
        <span>
            ${address}
        </span>
    </div>
    <br>
    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>
            Zipcode: 
        </span>
        <span>
            ${zipcode}
        </span>
    </div>
    <br>
    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>
            Contact Number: 
        </span>
        <span>
            ${mobile}
        </span>
    </div>
    <br>
    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>
            Contact Email: 
        </span>
        <span>
            ${email}
        </span>
    </div>
`;
    userDetails.appendChild(infoDiv);

}

renderUserDetails();


//expiry date of credit cards 
function formatExpiry(input) {
    // Remove non-digit characters
    var digitsOnly = input.value.replace(/\D/g, '');

    // Ensure the length is 4 or less
    if (digitsOnly.length > 4) {
        digitsOnly = digitsOnly.slice(0, 4);
    }

    // Format as MM/YY
    var formatted = digitsOnly.replace(/(\d{2})(\d{2})/, '$1/$2');

    input.value = formatted;
}


document.addEventListener('DOMContentLoaded', function () {
    var expiryInput = document.getElementById('expiry');

    expiryInput.addEventListener('input', function () {
        var inputValue = this.value.replace(/\D/g, ''); // Remove non-numeric characters

        if (inputValue.length === 2) {
            // If two digits have been entered, append a "/" and ask for the next two digits
            this.value = inputValue + '/';
        } else if (inputValue.length > 5) {
            // Limit the input length to MM/YY format (6 characters)
            this.value = inputValue.slice(0, 5);
        }
    });
});


if (bagItems.length >= 5) {
    var scroll = document.getElementById('scroll');
    scroll.scrollTop = 100;
}

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
    } else {
        hiddenElement.style.display = 'none';

        var currentTotalCost = parseFloat(totalCost.textContent);
        totalCost.textContent = (currentTotalCost - 15).toFixed(2);
    }
});


let totalQuantity = document.getElementById('totalQuantity');
totalQuantity.textContent = bagItems.length;


function resetItemCount() {
    localStorage.clear(); // Clear all localStorage data
    updateItemCountBag();
    updateItemCountFav();
    reloadPage();
}

function reloadPage() {
    location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    var checkout = document.getElementById('checkout');

    // Add submit event listener to the form
    checkout.addEventListener('buttonCheckout', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get user inputs
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var address1 = document.getElementById('address1').value;
        var email = document.getElementById('email').value;
        var address2 = document.getElementById('address2').value;
        var country = document.getElementById('country').value;
        var postalcode = document.getElementById('postalcode').value;
        var countrycode = document.getElementById('countrycode').value;
        var mobilenumber = document.getElementById('mobile').value;

        console.log('Username:', username);
        console.log('Email:', email);

        // Create an object to store user data
        var userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            address1: address1,
            address2: address2,
            country: country,
            postalcode: postalcode,
            countrycode: countrycode,
            mobile: mobilenumber
        };

        // Convert the object to a JSON string
        var userDataJSON = JSON.stringify(userData);
        console.log(userDataJSON);
        console.log(userData);

        // Store the JSON string in local storage
        localStorage.setItem('userData', userDataJSON);

        // Optional: Provide feedback to the user
        alert('User data has been stored in local storage.');

        // You can redirect to another page or perform additional actions here
    });
});

var key = 'userData';
var userDataJSON = localStorage.getItem(key);

if (userDataJSON) {
    var userData = JSON.parse(userDataJSON);
    console.log(userData);
} else {
    console.log('No data found for key ' + key);
}


// search bar 
// Add an event listener to the form to handle form submission
document.getElementById('searchForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the search keyword
    var keyword = document.getElementById('search').value.trim().toLowerCase();
    var originalkeyword = document.getElementById('search').value.trim();

    // Store the keyword in localStorage
    localStorage.setItem('searchKeyword', keyword);
    localStorage.setItem('originalsearchKeyword', originalkeyword);

    // Redirect to searchresults.html
    window.location.href = 'searchresults.html';
});
