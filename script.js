// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("registerButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const idNumber = document.getElementById('idNumber').value;
    const province = document.getElementById('province').value;

    // Validate ID number for female
    const isValidFemale = validateIDNumber(idNumber);

    if (isValidFemale) {
        // Define the URLs for each province
        let provinceURL;
        if (province === 'limpopo') {
            provinceURL = 'provinces/limpopo.html';
        } else if (province === 'northwest') {
            provinceURL = 'northwest.html';
        } else if (province === 'easterncape') {
            provinceURL = 'easterncape.html';
        } else if (province === 'freestate') {
            provinceURL = 'freestate.html';
        } else if (province === 'gauteng') {
            provinceURL = 'gauteng.html';
        } else if (province === 'kwazulunatal') {
            provinceURL = 'kwazulunatal.html';
        } else if (province === 'mpumalanga') {
            provinceURL = 'mpumalanga.html';
        } else if (province === 'northerncape') {
            provinceURL = 'northerncape.html';
        } else if (province === 'westerncape') {
            provinceURL = 'westerncape.html';
        }

        // Redirect to the corresponding HTML page
        if (provinceURL) {
            // Clear the form fields
            document.getElementById('registrationForm').reset();
            
            // Close the modal
            modal.style.display = "none";
            
            // Redirect to the corresponding page
            window.location.href = provinceURL;
        }
    } else {
        document.getElementById('error-message').innerText = "Only females are allowed to register.";
    }
});

function validateIDNumber(idNumber) {
    if (idNumber.length !== 13 || isNaN(idNumber)) {
        return false;
    }

    const genderDigits = parseInt(idNumber.slice(6, 10));
    return genderDigits >= 0 && genderDigits <= 4999;
}
