$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//loop: jQuery to allow dropdown select of 1-100
$(function () {
    for (let i = 31; i <= 45; i++) {
        var $select = $("#1-100-" + i);
        for (let j = 1; j <= 100; j++) {
            $select.append($('<option></option>').val(j).html(j));
        }
    }
});


var cakes = ["Salted Caramel Cake", "Zesty Lemon Cake", "Dark Chocolate Indulgence", "Sakura Tea Vanilla Cake", "Matcha Mont Blanc Tart", "Lemony Meringue Tart", "Mango Passionfruit Tart", "Blackberry Cheesecake Tart", "Pistachio Strawberry Tart"];

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 1; i <= 18; i++) {
        var cakeFlavorSelect = document.getElementById("cake" + i);
        if (cakeFlavorSelect) {
            cakeFlavorSelect.innerHTML = ""; // Clear existing options for the current dropdown
            cakes.forEach(function (cake) {
                var option = document.createElement("option");
                option.value = cake.toLowerCase();
                option.text = cake;
                cakeFlavorSelect.add(option);
            });
        }
    }
});


let choice1 = "Salted Caramel Cake";
let choice2 = "Salted Caramel Cake";
let choice3 = "Salted Caramel Cake";
let choice4 = "Salted Caramel Cake";
let choice5 = "Salted Caramel Cake";
let choice6 = "Salted Caramel Cake";
let choice7 = "Salted Caramel Cake";
let choice8 = "Salted Caramel Cake";
let choice9 = "Salted Caramel Cake";
let choice10 = "Salted Caramel Cake";
let choice11 = "Salted Caramel Cake";
let choice12 = "Salted Caramel Cake";
let choice13 = "Salted Caramel Cake";
let choice14 = "Salted Caramel Cake";
let choice15 = "Salted Caramel Cake";
let choice16 = "Salted Caramel Cake";
let choice17 = "Salted Caramel Cake";
let choice18 = "Salted Caramel Cake";


for (let i = 1; i <= 18; i++) {
    window["storeChoice" + i] = function (selected) {
        var selectedText = selected.options[selected.selectedIndex].text;
        switch (i) {
            case 1:
                choice1 = selectedText;
                break;
            case 2:
                choice2 = selectedText;
                break;
            case 3:
                choice3 = selectedText;
                break;
            case 4:
                choice4 = selectedText;
                break;
            case 5:
                choice5 = selectedText;
                break;
            case 6:
                choice6 = selectedText;
                break;
            case 7:
                choice7 = selectedText;
                break;
            case 8:
                choice8 = selectedText;
                break;
            case 9:
                choice9 = selectedText;
                break;
            case 10:
                choice10 = selectedText;
                break;
            case 11:
                choice11 = selectedText;
                break;
            case 12:
                choice12 = selectedText;
                break;
            case 13:
                choice13 = selectedText;
                break;
            case 14:
                choice14 = selectedText;
                break;
            case 15:
                choice15 = selectedText;
                break;
            case 16:
                choice16 = selectedText;
                break;
            case 17:
                choice17 = selectedText;
                break;
            case 18:
                choice18 = selectedText;
                break;
        }
    }
}


//loop for show & hide of products' info panels 
for (let i = 31; i <= 45; i++) {
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

        setTimeout(function () {
            // Add a click event listener to the document
            document.addEventListener("click", function closePopup(e) {
                // Check if the clicked element is outside the popup
                if (!popup.contains(e.target) && e.target !== popup) {
                    overlay.hidden = true;
                    overlay.style.display = "none";
                    popup.hidden = true;
                    popup.style.display = "none";
                    event.preventDefault();
                    // Remove the click event listener after closing the popup
                    document.removeEventListener("click", closePopup);
                }
            });
        }, 0);
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
for (let i = 31; i <= 45; i++) {
    createAddBagFunction(i);
    createAddFavFunction(i);
}

let selectedQuantity = 1;  // Global variable to store the selected quantity

function storeSelectedItemQuantity(value) {
    selectedQuantity = parseInt(value);
}

function createAddBagFunction(indexNumber) {
    window["addItemToCart" + indexNumber] = function (event) {
        let currentItem = productData[indexNumber - 31];
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
            if (indexNumber === 43) {
                subsequentItem.choice1 = choice1;
                subsequentItem.choice2 = choice2;
                subsequentItem.choice3 = choice3;
                subsequentItem.choice4 = choice4;
            } else if (indexNumber === 44) {
                subsequentItem.choice1 = choice5;
                subsequentItem.choice2 = choice6;
                subsequentItem.choice3 = choice7;
                subsequentItem.choice4 = choice8;
                subsequentItem.choice5 = choice9;
                subsequentItem.choice6 = choice10;
            } else if (indexNumber === 45) {
                subsequentItem.choice1 = choice11;
                subsequentItem.choice2 = choice12;
                subsequentItem.choice3 = choice13;
                subsequentItem.choice4 = choice14;
                subsequentItem.choice5 = choice15;
                subsequentItem.choice6 = choice16;
                subsequentItem.choice7 = choice17;
                subsequentItem.choice8 = choice18;
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

            //displays the innerText at bag.html webpage (edit elements of currentItem)
            let subsequentItem = JSON.parse(document.getElementById("favItem" + indexNumber).innerText);
            // console.log(subsequentItem);
            if (indexNumber === 43) {
                subsequentItem.choice1 = choice1;
                subsequentItem.choice2 = choice2;
                subsequentItem.choice3 = choice3;
                subsequentItem.choice4 = choice4;
            } else if (indexNumber === 44) {
                subsequentItem.choice1 = choice5;
                subsequentItem.choice2 = choice6;
                subsequentItem.choice3 = choice7;
                subsequentItem.choice4 = choice8;
                subsequentItem.choice5 = choice9;
                subsequentItem.choice6 = choice10;
            } else if (indexNumber === 45) {
                subsequentItem.choice1 = choice11;
                subsequentItem.choice2 = choice12;
                subsequentItem.choice3 = choice13;
                subsequentItem.choice4 = choice14;
                subsequentItem.choice5 = choice15;
                subsequentItem.choice6 = choice16;
                subsequentItem.choice7 = choice17;
                subsequentItem.choice8 = choice18;
            }

            //displays the innerText at fav.html webpage
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
    { id: 31, name: 'Salted Caramel Cake', code: 'C001', price: 9.50, quantity: 1, imagePath: 'pics3/31.jpg' },
    { id: 32, name: 'Neapolitan Layered Cake', code: 'C002', price: 72.00, quantity: 1, imagePath: 'pics3/32.jpg' },
    { id: 33, name: 'Zesty Lemon Cake', code: 'C003', price: 10.50, quantity: 1, imagePath: 'pics3/33.jpg' },
    { id: 34, name: 'Dark Chocolate Indulgence', code: 'C004', price: 9.50, quantity: 1, imagePath: 'pics3/34.jpg' },
    { id: 35, name: 'Sakura Tea Vanilla Cake', code: 'C005', price: 10.00, quantity: 1, imagePath: 'pics3/35.jpg' },
    { id: 36, name: 'Red Velvet & Cherries Cake', code: 'C006', price: 100.50, quantity: 1, imagePath: 'pics3/36.jpg' },
    { id: 37, name: 'Matcha Mont Blanc Tart', code: 'C007', price: 12.50, quantity: 1, imagePath: 'pics3/37.jpg' },
    { id: 38, name: 'Lemony Meringue Tart', code: 'C008', price: 12.00, quantity: 1, imagePath: 'pics3/38.jpg' },
    { id: 39, name: 'Mango Passionfruit Tart', code: 'C009', price: 10.50, quantity: 1, imagePath: 'pics3/39.jpg' },
    { id: 40, name: 'Blackberry Cheesecake Tart', code: 'C010', price: 13.00, quantity: 1, imagePath: 'pics3/40.jpg' },
    { id: 41, name: 'Pistachio Strawberry Tart', code: 'C011', price: 9.50, quantity: 1, imagePath: 'pics3/41.jpg' },
    { id: 42, name: 'Strawberry Cheesecake', code: 'C012', price: 95.00, quantity: 1, imagePath: 'pics3/42.jpg' },
    { id: 43, name: 'Giftbox of 4s', code: 'C013', price: 36.00, quantity: 1, imagePath: 'pics3/43.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4' },
    { id: 44, name: 'Giftbox of 6s', code: 'C014', price: 50.00, quantity: 1, imagePath: 'pics3/44.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5', choice6: 'Choice 6' },
    { id: 45, name: 'Giftbox of 8s', code: 'C015', price: 63.00, quantity: 1, imagePath: 'pics3/45.jpg', choice1: 'Choice 1', choice2: 'Choice 2', choice3: 'Choice 3', choice4: 'Choice 4', choice5: 'Choice 5', choice6: 'Choice 6', choice7: 'Choice 7', choice8: 'Choice 8' }
]

//assign innerText to individual products
for (let k = 31; k <= 45; k++) {
    document.getElementById("bagItem" + k).innerText = JSON.stringify(productData[k - 31]);
    document.getElementById("favItem" + k).innerText = JSON.stringify(productData[k - 31]);
}

//retrieve the related innerText data upon clicking
$(function () {
    for (let i = 31; i <= 45; i++) {
        var $a = $("#bagItem" + i);
        var $button = $("#bagItem" + i);
        $a.text(JSON.stringify(productData[i - 31]));
        $button.text(JSON.stringify(productData[i - 31]));
    }
})

$(function () {
    for (let i = 31; i <= 45; i++) {
        var $a = $("#favItem" + i);
        $a.text(JSON.stringify(productData[i - 31]));
    }
})

//some notes - innerHTML: /n/n ; innerText: /n ; textContent: no space 


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
