// Select all tab links and content items
const tabLinks = document.querySelectorAll('.tab-link');
const contentItems = document.querySelectorAll('.tab');

// Add event listener to each tab link
tabLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Remove 'active' class from all content items and links
        contentItems.forEach(item => item.classList.remove('active'));
        tabLinks.forEach(tab => tab.classList.remove('active'));

        // Add 'active' class to the clicked link and the corresponding content item
        this.classList.add('active');
        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});
