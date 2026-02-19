/**
 * Weather Signage Application
 * Handles dynamic content updates and cache management
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Weather Signage Loaded');
    
    // Uncomment the following line to make the date dynamic
    // updateDate();
});

/**
 * Updates the date display to the current day
 */
function updateDate() {
    const dateElement = document.getElementById('current-date');
    if (!dateElement) return;

    const now = new Date();
    const options = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
    };
    
    // Format: "Monday, February 16"
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Add timestamp to dynamic asset loading if needed
const version = new Date().getTime();
