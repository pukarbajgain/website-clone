// Function to load external HTML files into specific sections
function loadSection(sectionId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(sectionId).innerHTML = data;
        })
        .catch(error => console.error('Error loading section:', error));
}

// Load header, navbar, and footer dynamically
document.addEventListener('DOMContentLoaded', () => {
    loadSection('header', './en/components/header.html');
    loadSection('container', './en/components/navbar.html');
    loadSection('footer', './en/components/footer.html');
});
