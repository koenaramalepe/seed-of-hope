document.addEventListener("DOMContentLoaded", () => {
    function submitQuiz() {
        const quizData = [
            { question: "What is the scientific name for maize?", correct: "Zea mays" },
            { question: "What part of the maize plant is consumed as food?", correct: "Cobs" },
            { question: "Which country is the largest producer of maize in the world?", correct: "United States" },
            { question: "Maize is primarily used for which of the following?", correct: "Food" },
            { question: "How many calories are in a 100-gram serving of maize?", correct: "86 calories" },
            { question: "What is the ideal soil pH for growing maize?", correct: "5.5 to 6.5" },
            { question: "How long does it typically take for maize to mature from planting to harvest?", correct: "90-100 days" },
            { question: "Which part of the maize plant helps in pollination?", correct: "Tassels" }
        ];

        let score = 0;
        quizData.forEach((data, index) => {
            const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
            if (selectedOption) {
                const selectedValue = selectedOption.value;
                if (selectedValue === data.correct) {
                    score++;
                }
            }
        });

        const totalQuestions = quizData.length;
        const percentage = (score / totalQuestions) * 100;
        const resultElement = document.getElementById("quizResult");
        const userName = "Participant"; // Replace with actual user's name if available
        const currentDate = new Date().toLocaleDateString();

        let grade;
        if (percentage >= 90) {
            grade = "Excellent";
        } else if (percentage >= 70) {
            grade = "Good";
        } else if (percentage >= 50) {
            grade = "Fair";
        } else {
            grade = "Poor";
        }

        resultElement.innerHTML = `
            <h3>Your Results:</h3>
            <p>Your score: ${score} out of ${totalQuestions}</p>
            <p>Score percentage: ${percentage.toFixed(2)}%</p>
            <p>Your grade: <strong>${grade}</strong></p>
        `;

        if (percentage >= 80) {
            resultElement.innerHTML += `
                <p>Congratulations! You have passed and are eligible for a certificate.</p>
                <a href="certificate.html" target="_blank">Download Your Certificate</a>
            `;
        } else {
            resultElement.innerHTML += `
                <p>Sorry, you did not pass this time. Please try again.</p>
            `;
        }
    }

    function retakeQuiz() {
        // Reset the quiz form and hide result elements
        document.getElementById("quizForm").reset();
        document.getElementById("quizResult").textContent = "";
    }

    document.querySelector("button").addEventListener("click", submitQuiz);
});
