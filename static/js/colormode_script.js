// Get the current color mode from local storage

// Add event listener to the button
$(document).ready(() => {
    $('#color-mode-toggle-btn').click(() => {
        let currentColorMode = localStorage.getItem('colorMode');  // Get the current color mode from local storage
        $('html').removeClass();  // Remove all classes from the html tag
        
        // Change the color mode
        if (currentColorMode === 'light') {
            localStorage.setItem('colorMode', 'dark');
            $('html').addClass('dark');
            $('html').attr('data-bs-theme', 'dark');
        } else {
            localStorage.setItem('colorMode', 'light');
            $('html').addClass('light');
            $('html').attr('data-bs-theme', 'light');
        }
    });
});