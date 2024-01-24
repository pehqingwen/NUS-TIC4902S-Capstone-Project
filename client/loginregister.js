function togglePasswordVisibility() {
    var toCheckorUncheck = document.getElementById('showpassword');
    var passwordType = document.getElementById('loginpassword');

    toCheckorUncheck.addEventListener('change', function () {
        if (toCheckorUncheck.checked) {
            passwordType.type = 'text';
        } else {
            passwordType.type = 'password';
        }
    })
};

//listing countries for select options 
var selectCountry = document.getElementById('country');
var countries = ["United States", "Canada", "Georgia"];
countries.forEach(function (country) {
    var option = document.createElement("option");
    option.value = country.toLowerCase(); // Set a meaningful value
    option.text = country;
    selectCountry.add(option);
});

//check that passwords match 
document.addEventListener('DOMContentLoaded', function () {
    var registrationForm = document.getElementById('registrationForm');
    var registerpassword = document.getElementById('registerpassword');
    var reenterpassword = document.getElementById('reenterpassword');

    if (registrationForm && registerpassword && reenterpassword) {
        registrationForm.addEventListener('submit', function (event) {
            if (registerpassword.value !== reenterpassword.value) {
                event.preventDefault();
                alert("Your passwords do not match. Please try again.");
            }
        });
    } else {
        console.error('One or more elements not found.');
    }
});

function validatePasswords() {
    // Get the values from the password inputs
    const password1 = document.getElementById('registerpassword').value;
    const password2 = document.getElementById('reenterpassword').value;

    // Get the span element for error message
    const passwordError = document.getElementById('passwordError');

    // Check if the passwords match
    if (password1 !== password2) {
        passwordError.textContent = 'Passwords do not match';
        passwordError.style.display = 'block';
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
        // document.getElementById('myForm').submit();
        alert('Form submitted successfully!');
    }
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