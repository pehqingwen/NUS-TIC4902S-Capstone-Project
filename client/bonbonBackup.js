$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//loop: jQuery to allow dropdown select of 1-100
$(function () {
    for (let i = 16; i <= 30; i++) {
        var $select = $("#1-100-" + i);
        for (let j = 1; j <= 100; j++) {
            $select.append($('<option></option>').val(j).html(j));
        }
    }
});


//JavaScript to populate the dropdown for 12 bonbons choices (for 5s)
var bonbons = ["Tropical Passionfruit", "Citrus Orange", "Zesty Lemon", "Dark Chocolate", "Rum & Cherries", "White Tea & Berries", "Japanese Sakura", "Black Tea with Mango", "Coffee & Cookies", "White Chocolate with Rose", "Salted Caramel with Coffee", "Black Forest"];

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i <= 10; i++) {
        var bonbonFlavorSelect = document.getElementById("bonbon" + i);
        if (bonbonFlavorSelect) {
            bonbonFlavorSelect.innerHTML = ""; // Clear existing options for the current dropdown
            bonbons.forEach(function (bonbon) {
                var option = document.createElement("option");
                option.value = bonbon.toLowerCase();
                option.text = bonbon;
                bonbonFlavorSelect.add(option);
            });
        }
    }
});


let selectedText1 = "Tropical Passionfruit";
let selectedText2 = "Tropical Passionfruit";
let selectedText3 = "Tropical Passionfruit";
let selectedText4 = "Tropical Passionfruit";
let selectedText5 = "Tropical Passionfruit";
let selectedText6 = "Tropical Passionfruit";
let selectedText7 = "Tropical Passionfruit";
let selectedText8 = "Tropical Passionfruit";
let selectedText9 = "Tropical Passionfruit";
let selectedText10 = "Tropical Passionfruit";


for (let i = 1; i <= 10; i++) {
    window["storeChoice" + i] = function (selected) {
        var selectedText = selected.options[selected.selectedIndex].text;
        switch (i) {
            case 1:
                selectedText1 = selectedText;
                break;
            case 2:
                selectedText2 = selectedText;
                break;
            case 3:
                selectedText3 = selectedText;
                break;
            case 4:
                selectedText4 = selectedText;
                break;
            case 5:
                selectedText5 = selectedText;
                break;
            case 6:
                selectedText6 = selectedText;
                break;
            case 7:
                selectedText7 = selectedText;
                break;
            case 8:
                selectedText8 = selectedText;
                break;
            case 9:
                selectedText9 = selectedText;
                break;
            case 10:
                selectedText10 = selectedText;
                break;
        }
    }
}

//loop for show & hide of products' info panels 
for (let i = 16; i <= 30; i++) {
    createShowFunction(i);
    createHideFunction(i);
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

function createHideFunction(popupNumber) {
    window["hide" + popupNumber] = function (event) {
        var overlay = document.getElementById("overlay");
        overlay.hidden = true;
        overlay.style.display = "none";
        var popup = document.getElementById("popup" + popupNumber);
        popup.hidden = true;
        popup.style.display = "none";
        event.preventDefault();
    };
}

//loop for adding one pdt only once 
for (let i = 16; i <= 30; i++) {
    createAddBagFunction(i);
    createAddFavFunction(i);
}

//do not delete!*
let selectedQuantity = 1;  // Global variable to store the selected quantity

function storeSelectedItemQuantity(value) {
    selectedQuantity = parseInt(value);
}


function createAddBagFunction(indexNumber) {
    window["addItemToCart" + indexNumber] = function (event) {
        let currentItem = productData[indexNumber - 16];
        console.log(selectedQuantity);
        currentItem.quantity = selectedQuantity || 1;

        localStorage.setItem("bagItem" + indexNumber, JSON.stringify(currentItem));
        let itemKey = 'item' + indexNumber + 'AddedToCart';

        // Check if the item has already been added to the cart
        if (!localStorage.getItem(itemKey)) {
            let currentCount = parseInt(localStorage.getItem('bagQuantity')) || 0;
            let newCount = currentCount + 1;

            // Set the flag to indicate the item has been added to the cart
            localStorage.setItem(itemKey, 'true');
            localStorage.setItem('bagQuantity', newCount);

            //displays the innerText at bag.html webpage
            let subsequentItem = JSON.parse(document.getElementById("bagItem" + indexNumber).innerText);
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
            localStorage.setItem("bagItem" + indexNumber, JSON.stringify(subsequentItem));

            updateItemCountBag();
        } else {
            alert('Item already added to cart.');
        }
        event.preventDefault();
    }
}

// Function to update the item count on the page
function updateItemCountBag() {
    let element = document.getElementById('bagQuantity');
    let storedCount = parseInt(localStorage.getItem('bagQuantity')) || 0;
    element.innerText = storedCount;
}

function createAddFavFunction(indexNumber) {
    window["addItemToFav" + indexNumber] = function (event) {
        let currentItem = productData[indexNumber - 16];
        currentItem.quantity = selectedQuantity || 1;

        localStorage.setItem("favItem" + indexNumber, JSON.stringify(currentItem));
        let itemKey = 'item' + indexNumber + 'AddedToFav';

        // Check if the item has already been added to fav
        if (!localStorage.getItem(itemKey)) {
            let currentCount = parseInt(localStorage.getItem('favQuantity')) || 0;
            let newCount = currentCount + 1;

            // Set the flag to indicate the item has been added to the cart
            localStorage.setItem(itemKey, 'true');
            localStorage.setItem('favQuantity', newCount);

            //displays the innerText at fav.html webpage
            let subsequentItem = JSON.parse(document.getElementById("favItem" + indexNumber).innerText);
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
            localStorage.setItem("favItem" + indexNumber, JSON.stringify(subsequentItem));

            updateItemCountFav();

        } else {
            alert('Item already added to favourites.');
        }
        event.preventDefault();
    };
}

// Function to update the item count on the page
function updateItemCountFav() {
    let element = document.getElementById('favQuantity');
    let storedCount = parseInt(localStorage.getItem('favQuantity')) || 0;
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

const productData = [
    { id: 16, name: 'Tropical Passionfruit', code: 'B001', price: 10.50, quantity: 1, imagePath: 'pics2/16.jpg' },
    { id: 17, name: 'Citrus Orange', code: 'B002', price: 9.50, quantity: 1, imagePath: 'pics2/17.jpg' },
    { id: 18, name: 'Zesty Lemon', code: 'B003', price: 10.50, quantity: 1, imagePath: 'pics2/18.jpg' },
    { id: 19, name: 'Dark Chocolate', code: 'B004', price: 9.50, quantity: 1, imagePath: 'pics2/19.jpg' },
    { id: 20, name: 'Rum & Cherries', code: 'B005', price: 12.00, quantity: 1, imagePath: 'pics2/20.jpg' },
    { id: 21, name: 'White Tea & Berries', code: 'B006', price: 11.50, quantity: 1, imagePath: 'pics2/21.jpg' },
    { id: 22, name: 'Japanese Sakura', code: 'B007', price: 12.50, quantity: 1, imagePath: 'pics2/22.jpg' },
    { id: 23, name: 'Black Tea with Mango', code: 'B008', price: 12.00, quantity: 1, imagePath: 'pics2/23.jpg' },
    { id: 24, name: 'Coffee & Cookies', code: 'B009', price: 10.50, quantity: 1, imagePath: 'pics2/24.jpg' },
    { id: 25, name: 'White Chocolate with Rose', code: 'B010', price: 13.00, quantity: 1, imagePath: 'pics2/25.jpg' },
    { id: 26, name: 'Salted Caramel with Coffee', code: 'B011', price: 9.50, quantity: 1, imagePath: 'pics2/26.jpg' },
    { id: 27, name: 'Black Forest', code: 'B012', price: 11.00, quantity: 1, imagePath: 'pics2/27.jpg' },
    { id: 28, name: 'Box Set of 5s', code: 'B013', price: 40.00, quantity: 1, imagePath: 'pics2/28.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5' },
    { id: 29, name: 'Box Set of 12s', code: 'B014', price: 90.00, quantity: 1, imagePath: 'pics2/29.jpg' },
    { id: 30, name: 'Box Set of 25s', code: 'B015', price: 199.00, quantity: 1, imagePath: 'pics2/30.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5' }
]

//assign innerText to individual products
for (let k = 16; k <= 30; k++) {
    document.getElementById("bagItem" + k).innerText = JSON.stringify(productData[k - 16]);
    document.getElementById("favItem" + k).innerText = JSON.stringify(productData[k - 16]);
}

//retrieve the related innerText data upon clicking
$(function () {
    for (let i = 16; i <= 30; i++) {
        var $a = $("#bagItem" + i);
        var $button = $("#bagItem" + i);
        $a.text(JSON.stringify(productData[i - 16]));
        $button.text(JSON.stringify(productData[i - 16]));
    }
})

$(function () {
    for (let i = 16; i <= 30; i++) {
        var $a = $("#favItem" + i);
        $a.text(JSON.stringify(productData[i - 16]));
    }
})

//some notes - innerHTML: /n/n ; innerText: /n ; textContent: no space 