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
let favItems = [];
let favList = document.getElementById('favOutput');

renderFavItems();

function renderFavItems() {
    favList.innerHTML = ''; // Clear the list before rendering
    favItems = [];

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.startsWith('favItem')) {
            favItems.push(JSON.parse(localStorage.getItem(key)));
        }
    }

    for (let k = 0; k < favItems.length; k++) {
        console.log(favItems[k]);
    }

    for (var i = 0; i < favItems.length; i++) {
        if (favItems[i].id === 15 || favItems[i].id === 28 || favItems[i].id === 30) {

            // Create a new div element for each bag item
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${favItems[i].name} (${favItems[i].code})</span>
<span>Unit Price: US$${favItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${favItems[i].imagePath}" alt="${favItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
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
            favList.appendChild(infoDiv);

            if (favItems[i].id === 28 || favItems[i].id === 30) {
                addChoiceOption(`${i}-1`, favItems[i].choice1);
                addChoiceOption(`${i}-2`, favItems[i].choice2);
                addChoiceOption(`${i}-3`, favItems[i].choice3);
                addChoiceOption(`${i}-4`, favItems[i].choice4);
                addChoiceOption(`${i}-5`, favItems[i].choice5);
            } else {
                addSelectOption(`${i}-1`, favItems[i].choice1);
                addSelectOption(`${i}-2`, favItems[i].choice2);
                addSelectOption(`${i}-3`, favItems[i].choice3);
                addSelectOption(`${i}-4`, favItems[i].choice4);
                addSelectOption(`${i}-5`, favItems[i].choice5);
            }

            //new function for updating the selection choices of ids 15, 28, 30 (bagItems/favItems array only)
            updateDropdownSelections(`${i}-1`);
            updateDropdownSelections(`${i}-2`);
            updateDropdownSelections(`${i}-3`);
            updateDropdownSelections(`${i}-4`);
            updateDropdownSelections(`${i}-5`);


        } else if (favItems[i].id === 43) {

            // Create a new div element for each bag item
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${favItems[i].name} (${favItems[i].code})</span>
<span>Unit Price: US$${favItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${favItems[i].imagePath}" alt="${favItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
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
            favList.appendChild(infoDiv);

            addSelectionOption(`${i}-1`, favItems[i].choice1);
            addSelectionOption(`${i}-2`, favItems[i].choice2);
            addSelectionOption(`${i}-3`, favItems[i].choice3);
            addSelectionOption(`${i}-4`, favItems[i].choice4);

            //new function for updating the selection choices of id-43 (bagItems/favItems array only)
            updateDropdownSelections(`${i}-1`);
            updateDropdownSelections(`${i}-2`);
            updateDropdownSelections(`${i}-3`);
            updateDropdownSelections(`${i}-4`);


        } else if (favItems[i].id === 44) {

            // Create a new div element for each bag item
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${favItems[i].name} (${favItems[i].code})</span>
<span>Unit Price: US$${favItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${favItems[i].imagePath}" alt="${favItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
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
            favList.appendChild(infoDiv);

            addSelectionOption(`${i}-1`, favItems[i].choice1);
            addSelectionOption(`${i}-2`, favItems[i].choice2);
            addSelectionOption(`${i}-3`, favItems[i].choice3);
            addSelectionOption(`${i}-4`, favItems[i].choice4);
            addSelectionOption(`${i}-5`, favItems[i].choice5);
            addSelectionOption(`${i}-6`, favItems[i].choice6);

            updateDropdownSelections(`${i}-1`);
            updateDropdownSelections(`${i}-2`);
            updateDropdownSelections(`${i}-3`);
            updateDropdownSelections(`${i}-4`);
            updateDropdownSelections(`${i}-5`);
            updateDropdownSelections(`${i}-6`);


        } else if (favItems[i].id === 45) {

            // Create a new div element for each bag item
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `
<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>${i + 1}. ${favItems[i].name} (${favItems[i].code})</span>
<span>Unit Price: US$${favItems[i].price.toFixed(2)}</span>
</div>

<div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
<span>
<img src="${favItems[i].imagePath}" alt="${favItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
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
            favList.appendChild(infoDiv);

            addSelectionOption(`${i}-1`, favItems[i].choice1);
            addSelectionOption(`${i}-2`, favItems[i].choice2);
            addSelectionOption(`${i}-3`, favItems[i].choice3);
            addSelectionOption(`${i}-4`, favItems[i].choice4);
            addSelectionOption(`${i}-5`, favItems[i].choice5);
            addSelectionOption(`${i}-6`, favItems[i].choice6);
            addSelectionOption(`${i}-7`, favItems[i].choice7);
            addSelectionOption(`${i}-8`, favItems[i].choice8);

            updateDropdownSelections(`${i}-1`);
            updateDropdownSelections(`${i}-2`);
            updateDropdownSelections(`${i}-3`);
            updateDropdownSelections(`${i}-4`);
            updateDropdownSelections(`${i}-5`);
            updateDropdownSelections(`${i}-6`);
            updateDropdownSelections(`${i}-7`);
            updateDropdownSelections(`${i}-8`);


        } else {


            // Create a new div element for each FAV item
            var infoDiv = document.createElement('div');

            infoDiv.innerHTML = `

    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>${i + 1}. ${favItems[i].name} (${favItems[i].code})</span>
        <span>Unit Price: US$${favItems[i].price.toFixed(2)}</span>
    </div>

    <div style="display: flex; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
        <span>
            <img src="${favItems[i].imagePath}" alt="${favItems[i].name}" style="max-width: 100px; max-height: 100px; margin-right: 10px;">
            
         </span>
         <span><a href="#" id="cancel${i}">
            <img src="cross.svg" style="width: 24px; height: 24px;">
         </a></span>
    </div>

<hr>
`;
            favList.appendChild(infoDiv);

        }

    }

}


if (favItems.length >= 5) {
    var scroll = document.getElementById('scroll');
    scroll.scrollTop = 100;
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

        favItems[index][dynamicChoiceProperty] = newValue;

        // checking the updated array elements 
        console.log(favItems[index]);



        //change the localstorage data so that it stays changed & for db
        const id = favItems[index].id;
        console.log(id);
        var toChange = JSON.parse(localStorage.getItem('favItem' + id));
        toChange[`choice${choiceNumber}`] = newValue;
        localStorage.setItem('favItem' + id, JSON.stringify(toChange));
        console.log('changed' + localStorage.getItem('favItem' + id));



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


function addSelectionOption(selector, selectedChoice) {
    var cakes = ["Salted Caramel Cake", "Zesty Lemon Cake", "Dark Chocolate Indulgence", "Sakura Tea Vanilla Cake", "Matcha Mont Blanc Tart", "Lemony Meringue Tart", "Mango Passionfruit Tart", "Blackberry Cheesecake Tart", "Pistachio Strawberry Tart"];
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


$(document).ready(function () {
    $("[id*='cancel']").on("click", function (event) {
        console.log('Click event fired!');
        var index = parseInt(this.id.replace('cancel', ''), 10);
        console.log(index);
        if (!isNaN(index) && index >= 0 && index < favItems.length) {
            for (let i = localStorage.length - 1; i >= 0; i--) {
                let key = localStorage.key(i);
                let localStorageItem = JSON.parse(localStorage.getItem(key));

                if (localStorageItem && key && key === 'favItem' + favItems[index].id) {
                    localStorage.removeItem(key);
                } else if (key && key.startsWith('favQuantity')) {
                    let favQty = parseInt(localStorage.getItem(key)) || 0;
                    favQty = Math.max(0, favQty - 1);
                    localStorage.setItem('favQuantity', JSON.stringify(favQty));
                } else if (key && key === 'item' + favItems[index].id + 'AddedToFav') { //wrong here, flag 
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


function togglePasswordVisibility() {
    var passwordInput = document.getElementById('loginpassword');
    var showPasswordCheckbox = document.getElementById('showpassword');

    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}


function renderStorageData() {
    var favCountDisplay = document.getElementById('favCount');

    //localStorageData is an array, while localStorage.key or localStorage.getItem are standards for using local storage 
    favCountDisplay.innerHTML = "Total : " + localStorage.getItem('favQuantity') + " items";
}

//note to self: function calls must have () even if no parameters 
renderStorageData();


function resetItemCount() {
    localStorage.clear(); // Clear all localStorage data
    updateItemCountBag();
    updateItemCountFav();
    reloadPage();
}

function reloadPage() {
    location.reload();
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

// Function to *display the item count on the page
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


// Transfer to bag from favs
function transferToBag() {
    for (let j = 0; j < favItems.length; j++) {
        let foundMatch = false;

        for (let k = 0; k < bagItems.length; k++) {
            if (favItems[j].id === bagItems[k].id) {
                foundMatch = true;
                // Remove from localstorage 
                localStorage.removeItem(`favItem${favItems[j].id}`);
                localStorage.removeItem(`item${favItems[j].id}AddedToFav`);
                break;
            }
        }

        if (!foundMatch) {
            // Change fav to bag 
            localStorage.setItem(`bagItem${favItems[j].id}`, JSON.stringify(favItems[j]));
            localStorage.setItem(`item${favItems[j].id}AddedToCart`, 'true');
            localStorage.removeItem(`favItem${favItems[j].id}`);
            localStorage.removeItem(`item${favItems[j].id}AddedToFav`);
        }
    }

    let newBagCount = 0;
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith('bagItem')) {
            newBagCount++;
        }
    }

    localStorage.setItem('bagQuantity', parseInt(newBagCount));
    favItems = [];
    localStorage.removeItem('favQuantity');
    favList = '';
    updateItemCountBag();
    updateItemCountFav();
    location.reload();
    renderFavItems();
    renderBagItems();
}
