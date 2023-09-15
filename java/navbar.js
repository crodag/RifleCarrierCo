document.addEventListener('DOMContentLoaded', function () {
    const navList = document.getElementById('navList');
    const links = navList.getElementsByTagName('a');

    // Function to handle navigation item clicks
    function handleNavItemClick(event) {
        // Remove the 'active' class from all links
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('active');
        }

        // Add the 'active' class to the clicked link
        event.target.classList.add('active');
    }

    // Add click event listeners to each navigation item
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', handleNavItemClick);
    }
});
