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
