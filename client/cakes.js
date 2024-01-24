$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


let selectedQuantity = 1;  // Global variable to store the selected quantity

function storeSelectedItemQuantity(value) {
    selectedQuantity = parseInt(value);
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

];


// filter/sorting function 

function selectOption(selected) {
    if (selected === "popularity") {
        popularity();
    } else if (selected === "startlow") {
        lowToHigh();
    } else if (selected === "starthigh") {
        highToLow();
    }
}

// function popularity() {

// }


// function to call arrange prices by ascending order
function lowToHigh() {
    sortPriceAscending();
}

function sortPriceAscending() {
    productData.length = 0;
    window.sharedData.cakesData.sort((a, b) => a.price - b.price);
    for (const item of window.sharedData.cakesData) {
        productData.push(item);
    }
    console.log(productData);
    renderCakes(productData);
}


// function to call arrange prices by ascending order
function highToLow() {
    sortPriceDescending();
}

function sortPriceDescending() {
    productData.length = 0;
    window.sharedData.cakesData.sort((a, b) => b.price - a.price);
    for (const item of window.sharedData.cakesData) {
        productData.push(item);
    }
    // console.log(productData);
    renderCakes(productData);
}


// function to add product details into productData[] from global.js
function loadFromShared() {
    for (let i = 0; i < window.sharedData.cakesData.length; i++) {
        productData.push(window.sharedData.cakesData[i]);
    }

    // check
    console.log(productData);
}


//call responsive function when initial loading
window.addEventListener('load', function () {
    loadFromShared();
    renderCakes(productData);
});



function renderCakes(productData) {

    var cakesdisplay = document.getElementById('cakes');
    cakesdisplay.innerHTML = '';

    cakesdisplay.style.display = 'grid';

    //function for responsive display 
    function responsiveDisplay() {
        if (window.innerWidth <= 767) {
            cakesdisplay.style.gridTemplateColumns = 'repeat(1, 1fr)';
        } else if (window.innerWidth > 767 && window.innerWidth <= 991) {
            cakesdisplay.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else if (window.innerWidth > 991 && window.innerWidth <= 1200) {
            cakesdisplay.style.gridTemplateColumns = 'repeat(3, 1fr)';
        } else {
            cakesdisplay.style.gridTemplateColumns = 'repeat(4, 1fr)';
        }
    };

    responsiveDisplay();

    window.addEventListener('resize', responsiveDisplay);


    for (let u = 0; u < productData.length; u++) {

        var infoDiv = document.createElement('div');

        infoDiv.innerHTML = `
        <div style="text-align: center;" class="set">
    <div id="${u}" style="position: relative; display: inline-block; background-color: transparent;">
        <div id="overlay${u}" class="overlay" style="display: none; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.4); white-space: nowrap;"></div>
        <img src="${productData[u].imagePath}" width="350" height="230">
    </div>
    <div style="color: white;">${productData[u].name}</div>
    <div style="color: white;">$${productData[u].price.toFixed(2)}</div>
        <br>
        </div>
    `;


        cakesdisplay.appendChild(infoDiv);


        function createClickableSvgLink1(svgPath1) {
            var parentContainer = document.createElement('div');
            var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

            // Set the path data attribute
            pathElement.setAttribute('d', svgPath1);
            pathElement.setAttribute('fill', 'lightcoral');
            // Append the path to the SVG
            svgElement.appendChild(pathElement);
            // Append the link to the parent container
            parentContainer.appendChild(svgElement);

            parentContainer.style.width = "10px";
            parentContainer.style.height = "20px";
            // Return the created SVG element
            return parentContainer;
        }

        function createClickableSvgLink2(svgPath2) {
            var parentContainer = document.createElement('div');
            parentContainer.style.position = 'relative';
            parentContainer.style.width = '16px';
            parentContainer.style.height = '16px';

            svgPath2.forEach(function (svgPath) {
                var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

                // Set the path data attribute
                pathElement.setAttribute('d', svgPath);
                pathElement.setAttribute('fill', 'lightcoral');

                svgElement.style.position = 'absolute';
                svgElement.style.top = '0';
                svgElement.style.left = '0';

                // Append the path to the SVG
                svgElement.appendChild(pathElement);
                // Append the link to the parent container
                parentContainer.appendChild(svgElement);

            });
            parentContainer.style.width = "10px";
            parentContainer.style.height = "20px";
            // Return the created SVG element
            return parentContainer;
        }

        function createClickableSvgLink3(svgPath3) {
            var parentContainer = document.createElement('div');
            var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');

            // Set the path data attribute
            pathElement.setAttribute('d', svgPath3);
            pathElement.setAttribute('fill', 'lightcoral');
            // Append the path to the SVG
            svgElement.appendChild(pathElement);
            // Append the link to the parent container
            parentContainer.appendChild(svgElement);

            parentContainer.style.width = "10px";
            parentContainer.style.height = "20px";
            // Return the created SVG element
            return parentContainer;
        }


        // Example usage
        var svgPath1 = "M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1";
        var svgPath2 = [
            "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16",
            "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
        ];
        var svgPath3 = "M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z";

        var parent1 = document.getElementById(`overlay${u}`);
        var parentExtra = document.createElement('div');
        // Copy computed styles from parent1 to parentExtra
        var computedStyles = window.getComputedStyle(parent1);

        parentExtra.style.width = computedStyles.getPropertyValue('width');
        parentExtra.style.height = computedStyles.getPropertyValue('height');
        parentExtra.style.boxSizing = computedStyles.getPropertyValue('box-sizing');
        // Add any other styles you want to copy...

        // Append parentExtra to the same parent node as parent1
        parent1.parentNode.appendChild(parentExtra);
        var parent2 = document.createElement('div');

        var a1 = document.createElement('a');
        var a2 = document.createElement('a');
        var a3 = document.createElement('a');
        a1.style.padding = "10px";
        a2.style.padding = "10px";
        a3.style.padding = "10px";

        a1.href = '#';
        a2.href = '#';
        a3.href = '#';

        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        var span3 = document.createElement('span');

        span1.innerHTML = 'ADD TO<br>FAVORITES';
        span2.innerHTML = 'INFORMATION';
        span3.innerHTML = 'ADD TO BAG';
        span1.style.color = "lightcoral";
        span2.style.color = "lightcoral";
        span3.style.color = "lightcoral";

        var svgElement1 = createClickableSvgLink1(svgPath1);
        var containerDiv1 = document.createElement('div');
        containerDiv1.style.display = 'flex'; // Use flex display
        containerDiv1.style.alignItems = 'center'; // Align items in the center
        containerDiv1.style.flexDirection = 'column';
        containerDiv1.appendChild(svgElement1);
        containerDiv1.appendChild(span1);
        a1.appendChild(containerDiv1);

        var svgElement2 = createClickableSvgLink2(svgPath2);
        var containerDiv2 = document.createElement('div');
        containerDiv2.style.display = 'flex'; // Use flex display
        containerDiv2.style.alignItems = 'center'; // Align items in the center
        containerDiv2.style.flexDirection = 'column';
        containerDiv2.appendChild(svgElement2);
        containerDiv2.appendChild(span2);
        a2.appendChild(containerDiv2);

        var svgElement3 = createClickableSvgLink3(svgPath3);
        var containerDiv3 = document.createElement('div');
        containerDiv3.style.display = 'flex'; // Use flex display
        containerDiv3.style.alignItems = 'center'; // Align items in the center
        containerDiv3.style.flexDirection = 'column';
        containerDiv3.appendChild(svgElement3);
        containerDiv3.appendChild(span3);
        a3.appendChild(containerDiv3);

        parent2.style.display = 'flex'; // Use flex display
        parent2.style.justifyContent = 'center';
        parent2.style.flexDirection = 'row';
        parent2.style.alignItems = 'center';
        parent2.style.gridColumn = 2;
        parent2.append(a1, a2, a3);

        parentExtra.style.display = "grid";
        parentExtra.style.gridTemplateColumns = "repeat(3, 1fr)";
        parentExtra.append(parent2);
        parent1.append(parentExtra);

        // Additional styling for debugging purposes
        // parent2.style.border = '1px solid red'; // Add a border to see the size of the parent
        // a1.style.border = '1px solid blue';     // Add a border to see the size of each child
        // a2.style.border = '1px solid green';    // Add a border to see the size of each child
        // a3.style.border = '1px solid orange';   // Add a border to see the size of each child
        // parentExtra.style.border = '1px solid lemonchiffon';
        // parent1.style.border = '1px solid lemonchiffon';


        a1.addEventListener('click', function (event) {
            event.preventDefault();
            //the function here for popuppanel
            addItemToFav(u);
            console.log('testing0');

        });


        a2.addEventListener('click', function (event) {
            event.preventDefault();
            //the function here for popuppanel
            renderPopupPanel(u);
            console.log('testing1');

        });


        a3.addEventListener('click', function (event) {
            event.preventDefault();
            //the function here for popuppanel
            addItemToBag(u);
            console.log('testing2');

        });


        function renderPopupPanel(index) {
            //index here starts from 0 in productData locally ^
            let popuppanel = document.querySelector('.popuppanel');
            popuppanel.hidden = false;
            popuppanel.style.display = "block";
            let searchlist = '';
            let infoDiv =
                `
            <div id="background">
                <div id="inner">
                    <a href="#" id="close">X</a>
                    <img src="${productData[index].imagePath}" style="display: flex; border-radius: 50%; align-items: center; width: 90px; height: 90px;">
                    <p style="font-weight: bold; color: orange;">${productData[index].name} (${productData[u].code})</p>
                    <p style="color: goldenrod; font-weight: bold;">$${productData[index].price.toFixed(2)}</p>
                    <p style="color: white;">${productData[index].description}</p>
                    <p style="color: salmon;">Select quantity or flavors at checkout or favorites.</p>
                    <a href="#" id="fav${productData[index].id}" style="color: goldenrod;" onclick="event.preventDefault(); console.log('Click event fired!'); addItemToFav(${index});">ADD TO FAVORITES</a>
                    <button id="bag${productData[index].id}" style="color: black; background-color: gold;"  onclick="event.preventDefault(); console.log('Click event fired!'); addItemToBag(${index});">ADD TO BAG</button>
                </div>
            </div>
            `;

            searchlist += infoDiv;
            popuppanel.innerHTML = searchlist;


            var close = document.getElementById('close');
            close.addEventListener('click', function (event) {
                event.preventDefault();
                popuppanel.style.display = "none";
            });


            setTimeout(function (event) {
                popuppanel.style.display = "block";
                popuppanel.hidden = false;
                // Add a click event listener to the document
                function closePopup(e) {
                    // Check if the clicked element is outside the popup
                    if (!popuppanel.contains(e.target) && e.target !== popuppanel) {
                        popuppanel.hidden = true;
                        popuppanel.style.display = "none";
                        event.preventDefault();
                        // Remove the click event listener after closing the popup
                        document.removeEventListener("click", closePopup);

                        a1.addEventListener('click', function (event) {
                            event.preventDefault();
                            renderCakes(productData);
                        });

                        a2.addEventListener('click', function (event) {
                            event.preventDefault();
                            renderCakes(productData);
                        });

                        a3.addEventListener('click', function (event) {
                            event.preventDefault();
                            renderCakes(productData);
                        });

                    }

                }
                document.addEventListener("click", closePopup);
            }, 0);

        }


        // Create a function to encapsulate the current index
        function createMouseOverHandler(currentIndex) {
            return function () {
                // console.log(`Mouseover: ${currentIndex}`);
                document.getElementById(`overlay${currentIndex}`).style.display = 'block';

            };
        }

        function createMouseOutHandler(currentIndex) {
            return function () {
                // console.log(`Mouseout: ${currentIndex}`);
                document.getElementById(`overlay${currentIndex}`).style.display = 'none';
            };
        }

        // Add event listeners using the encapsulated index
        var container = document.getElementById(`${u}`);
        container.addEventListener('mouseover', createMouseOverHandler(u));
        container.addEventListener('mouseout', createMouseOutHandler(u));


    }

}


//code for adding product (qty:1) from popup to FAV
function addItemToFav(pdindex) {
    if (!isNaN(pdindex) && pdindex >= 0 && pdindex < productData.length) {
        //add to localstorage
        listNumber = productData[pdindex].id;
        let itemKey = "item" + listNumber + "AddedToFav";
        if (!localStorage.getItem(itemKey)) {
            localStorage.setItem(itemKey, 'true');
            localStorage.setItem("favItem" + listNumber, JSON.stringify(productData[pdindex]));
            let currentCount = parseInt(localStorage.getItem('favQuantity')) || 0;
            let newCount = currentCount + 1;
            localStorage.setItem('favQuantity', newCount);
            updateItemCountFav();
        } else {
            alert('Item already added to favorites.');
        }
    }
}


//code for adding product (qty:1) from popup to BAG
function addItemToBag(pdindex) {
    if (!isNaN(pdindex) && pdindex >= 0 && pdindex < productData.length) {
        //add to localstorage
        listNumber = productData[pdindex].id;
        let itemKey = "item" + listNumber + "AddedToBag";
        if (!localStorage.getItem(itemKey)) {
            localStorage.setItem(itemKey, 'true');
            localStorage.setItem("bagItem" + listNumber, JSON.stringify(productData[pdindex]));
            let currentCount = parseInt(localStorage.getItem('bagQuantity')) || 0;
            let newCount = currentCount + 1;
            localStorage.setItem('bagQuantity', newCount);
            updateItemCountBag();
        } else {
            alert('Item already added to cart.');
        }
    }
}


// Access data from local storage
var localStorageData = getAllLocalStorageData();
// console.log(localStorageData);

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


// search bar
// Add an event listener to the form to handle form submission
document.getElementById('searchForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the search keyword
    var keyword = document.getElementById('search').value.trim().toLowerCase();
    var originalkeyword = document.getElementById('search').value.trim();

    // Store the keyword in localStorage
    localStorage.setItem('searchKeyword', JSON.stringify(keyword));
    localStorage.setItem('originalsearchKeyword', JSON.stringify(originalkeyword));

    // Redirect to searchresults.html
    window.location.href = 'searchresults.html';
});

