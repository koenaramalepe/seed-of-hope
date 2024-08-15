// Modal functionality
var modal = document.getElementById("myModal");
var btn = document.getElementById("registerButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const idNumber = document.getElementById('idNumber').value;
    const province = document.getElementById('province').value;

    const isValidFemale = validateIDNumber(idNumber);

    if (isValidFemale) {
        let provinceURL;
        switch (province) {
            case 'limpopo':
                provinceURL = 'provinces/limpopo.html';
                break;
            case 'northwest':
                provinceURL = 'provinces/northwest.html';
                break;
            case 'easterncape':
                provinceURL = 'provinces/easterncape.html';
                break;
            case 'freestate':
                provinceURL = 'provinces/freestate.html';
                break;
            case 'gauteng':
                provinceURL = 'provinces/gauteng.html';
                break;
            case 'kwazulunatal':
                provinceURL = 'provinces/kwazulunatal.html';
                break;
            case 'mpumalanga':
                provinceURL = 'provinces/mpumalanga.html';
                break;
            case 'northerncape':
                provinceURL = 'provinces/northerncape.html';
                break;
            case 'westerncape':
                provinceURL = 'provinces/westerncape.html';
                break;
        }

        if (provinceURL) {
            document.getElementById('registrationForm').reset();
            modal.style.display = "none";
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
