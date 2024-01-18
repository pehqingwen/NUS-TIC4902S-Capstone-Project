$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

//loop: jQuery to allow dropdown select of 1-100
$(function () {
    for (let i = 46; i <= 57; i++) {
        var $select = $("#1-100-" + i);
        for (let j = 1; j <= 100; j++) {
            $select.append($('<option></option>').val(j).html(j));
        }
    }
});

//loop for show & hide of products' info panels 
for (let i = 46; i <= 57; i++) {
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
for (let i = 46; i <= 57; i++) {
    createAddBagFunction(i);
    createAddFavFunction(i);
}

let selectedQuantity = 1;  // Global variable to store the selected quantity

function storeSelectedItemQuantity(value) {
    selectedQuantity = parseInt(value);
}

function createAddBagFunction(indexNumber) {
    window["addItemToCart" + indexNumber] = function (event) {
        let currentItem = productData[indexNumber - 46];
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

            //displays the innerText at fav.html webpage
            localStorage.setItem("favItem" + indexNumber, document.getElementById("favItem" + indexNumber).innerText)
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
    { id: 46, name: 'Espresso', code: 'D001', price: 4.00, quantity: 1, imagePath: 'pics4/46.jpg' },
    { id: 47, name: 'Latte', code: 'D002', price: 6.50, quantity: 1, imagePath: 'pics4/47.jpg' },
    { id: 48, name: 'Americano', code: 'D003', price: 6.00, quantity: 1, imagePath: 'pics4/48.jpg' },
    { id: 49, name: 'Cappuccino', code: 'D004', price: 7.50, quantity: 1, imagePath: 'pics4/49.jpg' },
    { id: 50, name: 'Macchiato', code: 'D005', price: 5.50, quantity: 1, imagePath: 'pics4/50.jpg' },
    { id: 51, name: 'Mocha', code: 'D006', price: 9.00, quantity: 1, imagePath: 'pics4/51.jpg' },
    { id: 52, name: 'Flat White', code: 'D007', price: 8.00, quantity: 1, imagePath: 'pics4/52.jpg' },
    { id: 53, name: 'Iced Cold Brew', code: 'D008', price: 10.00, quantity: 1, imagePath: 'pics4/53.jpg' },
    { id: 54, name: 'Iced Frappe', code: 'D009', price: 10.50, quantity: 1, imagePath: 'pics4/54.jpg' },
    { id: 55, name: 'Affogato', code: 'D010', price: 11.00, quantity: 1, imagePath: 'pics4/55.jpg' },
    { id: 56, name: 'Iced Latte', code: 'D011', price: 9.50, quantity: 1, imagePath: 'pics4/56.jpg' },
    { id: 57, name: 'Iced Mocha', code: 'D012', price: 10.00, quantity: 1, imagePath: 'pics4/57.jpg' },
]

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
