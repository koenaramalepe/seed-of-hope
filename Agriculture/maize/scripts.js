// scripts.js
document.getElementById('downloadPdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');

    // Reference the main content to be converted to PDF
    const content = document.querySelector('main');

    // Convert the HTML content to PDF
    doc.html(content, {
        callback: function (doc) {
            doc.save('Maize_Info.pdf');
        },
        x: 20,
        y: 20,
        html2canvas: { scale: 0.5 }, // Adjust this to scale content if necessary
    });
});
