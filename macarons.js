//jQuery to allow navbar to turn translucent upon scroll
$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//loop: jQuery to allow dropdown select of 1-100
$(function () {
    for (let i = 1; i <= 15; i++) {
        var $select = $("#1-100-" + i);
        for (let j = 1; j <= 100; j++) {
            $select.append($('<option></option>').val(j).html(j));
        }
    }
});

//JavaScript to populate the dropdown for 12 macaron choices (for 5s)
var macarons = ["Orange Citrus Burst", "Pink Strawberry Swirl", "Zesty Lemon Thrill", "Dark Chocolate Delight", "Chewy Candy Blues", "Milo", "Mixed Berries Delight", "Red Velvet with Cherries", "Tropical Fruits Granduer", "Magnificient Mango Mania", "Salted Caramel with Coffee", "Black Forest"];

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i <= 5; i++) {
        var macaronFlavorSelect = document.getElementById("macaron" + i);
        if (macaronFlavorSelect) {
            macaronFlavorSelect.innerHTML = ""; // Clear existing options for the current dropdown
            macarons.forEach(function (macaron) {
                var option = document.createElement("option");
                option.value = macaron.toLowerCase();
                option.text = macaron;
                macaronFlavorSelect.add(option);
            });
        }
    }
});

let selected1 = "Orange Citrus Burst";
let selected2 = "Orange Citrus Burst";
let selected3 = "Orange Citrus Burst";
let selected4 = "Orange Citrus Burst";
let selected5 = "Orange Citrus Burst";

for (let i = 1; i <= 5; i++) {
    window["storeChoice" + i] = function (selected) {
        var selectedText = selected.options[selected.selectedIndex].text;
        switch (i) {
            case 1:
                selected1 = selectedText;
                break;
            case 2:
                selected2 = selectedText;
                break;
            case 3:
                selected3 = selectedText;
                break;
            case 4:
                selected4 = selectedText;
                break;
            case 5:
                selected5 = selectedText;
                break;
        }
    }
}

//loop for show & hide of products' info panels 
for (let i = 1; i <= 15; i++) {
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
for (let i = 1; i <= 15; i++) {
    createAddBagFunction(i);
    createAddFavFunction(i);
}

let selectedQuantity = 1;  // Global variable to store the selected quantity

function storeSelectedItemQuantity(value) {
    selectedQuantity = parseInt(value);
}

function createAddBagFunction(indexNumber) {
    window["addItemToCart" + indexNumber] = function (event) {
        let currentItem = productData[indexNumber - 1];
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
            if (indexNumber === 15) {
                subsequentItem.choice1 = selected1;
                subsequentItem.choice2 = selected2;
                subsequentItem.choice3 = selected3;
                subsequentItem.choice4 = selected4;
                subsequentItem.choice5 = selected5;
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
        let itemKey = 'item' + indexNumber + 'AddedToFav';

        // Check if the item has already been added to fav
        if (!localStorage.getItem(itemKey)) {
            let currentCount = parseInt(localStorage.getItem('favQuantity')) || 0;
            let newCount = currentCount + 1;

            // Set the flag to indicate the item has been added to the cart
            localStorage.setItem(itemKey, 'true');
            localStorage.setItem('favQuantity', newCount);

            //displays the innerText at bag.html webpage
            let subsequentItem = JSON.parse(document.getElementById("favItem" + indexNumber).innerText);
            if (indexNumber === 15) {
                subsequentItem.choice1 = selected1;
                subsequentItem.choice2 = selected2;
                subsequentItem.choice3 = selected3;
                subsequentItem.choice4 = selected4;
                subsequentItem.choice5 = selected5;
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
    { id: 1, name: 'Orange Citrus Burst', code: 'M001', price: 6.50, quantity: 1, imagePath: 'pics1/1.jpg' },
    { id: 2, name: 'Pink Strawberry Swirl', code: 'M002', price: 7.50, quantity: 1, imagePath: 'pics1/2.jpg' },
    { id: 3, name: 'Zesty Lemon Thrill', code: 'M003', price: 7.50, quantity: 1, imagePath: 'pics1/3.jpg' },
    { id: 4, name: 'Dark Chocolate Delight', code: 'M004', price: 7.50, quantity: 1, imagePath: 'pics1/4.jpg' },
    { id: 5, name: 'Chewy Candy Blues', code: 'M005', price: 7.50, quantity: 1, imagePath: 'pics1/5.jpg' },
    { id: 6, name: 'Milo', code: 'M006', price: 7.50, quantity: 1, imagePath: 'pics1/6.jpg' },
    { id: 7, name: 'Mixed Berries Delight', code: 'M007', price: 7.50, quantity: 1, imagePath: 'pics1/7.jpg' },
    { id: 8, name: 'Red Velvet with Cherries', code: 'M008', price: 8.00, quantity: 1, imagePath: 'pics1/8.jpg' },
    { id: 9, name: 'Tropical Fruits Granduer', code: 'M009', price: 7.50, quantity: 1, imagePath: 'pics1/9.jpg' },
    { id: 10, name: 'Magnificient Mango Mania', code: 'M010', price: 7.00, quantity: 1, imagePath: 'pics1/10.jpg' },
    { id: 11, name: 'Salted Caramel with Coffee', code: 'M011', price: 7.50, quantity: 1, imagePath: 'pics1/11.jpg' },
    { id: 12, name: 'Black Forest', code: 'M012', price: 8.00, quantity: 1, imagePath: 'pics1/12.jpg' },
    { id: 13, name: 'Box of 12s (Assorted)', code: 'M013', price: 79.00, quantity: 1, imagePath: 'pics1/13.jpg' },
    { id: 14, name: 'Box of 24s (Assorted)', code: 'M014', price: 150.00, quantity: 1, imagePath: 'pics1/14.jpg' },
    { id: 15, name: 'Box of 30s (Assorted)', code: 'M015', price: 169.00, quantity: 1, imagePath: 'pics1/15.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5' }
]

//assign innerText to individual products
for (let k = 1; k <= 15; k++) {
    document.getElementById("bagItem" + k).innerText = JSON.stringify(productData[k - 1]);
    document.getElementById("favItem" + k).innerText = JSON.stringify(productData[k - 1]);
}

//retrieve the related innerText data upon clicking
$(function () {
    for (let i = 1; i <= 15; i++) {
        var $a = $("#bagItem" + i);
        var $button = $("#bagItem" + i);
        $a.text(JSON.stringify(productData[i - 1]));
        $button.text(JSON.stringify(productData[i - 1]));
    }
})

$(function () {
    for (let i = 1; i <= 15; i++) {
        var $a = $("#favItem" + i);
        $a.text(JSON.stringify(productData[i - 1]));
    }
})

//some notes - innerHTML: /n/n ; innerText: /n ; textContent: no space 