document.addEventListener('DOMContentLoaded', function () {
    const courseContent = document.getElementById('course-content');
    
    // Assume we have the user's location from the registration
    const userLocation = 'Johannesburg'; // Replace this with actual location data

    // API call to fetch crop information
    fetch('https://your-ai-api-endpoint.com/get-crops', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `suggest 4 crops that use less water and require less maintenance and also suggest cost estimates of the crops, nutrition value, and pesticide control suggestions for those crops at ${userLocation}.`
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.crops) {
            courseContent.innerHTML = '';

            data.crops.forEach(crop => {
                const cropItem = document.createElement('div');
                cropItem.className = 'course-item';
                cropItem.innerHTML = `
                    <h3>${crop.name}</h3>
                    <p><strong>Cost Estimates:</strong> ${crop.cost_estimates}</p>
                    <p><strong>Nutrition Value:</strong> ${crop.nutrition_value}</p>
                    <p><strong>Pesticide Control:</strong> ${crop.pesticide_control}</p>
                `;
                courseContent.appendChild(cropItem);
            });
        } else {
            courseContent.innerHTML = '<p>No course information available at this time.</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching crop information:', error);
        courseContent.innerHTML = '<p>Failed to load course information. Please try again later.</p>';
    });
});
