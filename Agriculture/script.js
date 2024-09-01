const municipalities = {
    limpopo: [
        { name: "Polokwane", climate: "semi-arid", crops: ["Maize", "Tomatoes", "Sunflower"] },
        { name: "Mopani", climate: "subtropical", crops: ["Citrus", "Avocados", "Bananas"] },
        { name: "Vhembe", climate: "humid", crops: ["Mangoes", "Papaya", "Macadamia Nuts"] }
    ],
    gauteng: [
        { name: "Johannesburg", climate: "temperate", crops: ["Vegetables", "Corn", "Soybeans"] },
        { name: "Tshwane", climate: "temperate", crops: ["Wheat", "Maize", "Barley"] },
        { name: "Ekurhuleni", climate: "temperate", crops: ["Potatoes", "Beans", "Pumpkin"] }
    ]
};

function populateMunicipalities() {
    const province = document.getElementById('province').value;
    const municipalitySelect = document.getElementById('municipality');
    municipalitySelect.innerHTML = '<option value="">Select a Municipality</option>';

    if (province && municipalities[province]) {
        municipalities[province].forEach(municipality => {
            const option = document.createElement('option');
            option.value = municipality.name;
            option.textContent = municipality.name;
            municipalitySelect.appendChild(option);
        });
    }
}

document.getElementById('get-crops').addEventListener('click', function() {
    const province = document.getElementById('province').value;
    const municipality = document.getElementById('municipality').value;

    if (province && municipality) {
        const selectedMunicipality = municipalities[province].find(m => m.name === municipality);
        if (selectedMunicipality) {
            const cropSuggestions = document.getElementById('crop-suggestions');
            cropSuggestions.innerHTML = ''; // Clear previous suggestions
            
            selectedMunicipality.crops.forEach(crop => {
                const cropButton = document.createElement('button');
                cropButton.textContent = crop;
                cropButton.addEventListener('click', function() {
                    // Redirect to the corresponding crop folder
                    window.location.href = `./${crop.toLowerCase()}/${crop.toLowerCase()}.html`;
                });
                cropSuggestions.appendChild(cropButton);
            });
        }
    }
});
