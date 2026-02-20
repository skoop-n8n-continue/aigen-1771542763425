/**
 * Weather Signage Application
 * Handles dynamic content updates and cache management
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Weather Signage Loaded');
    
    // Initial updates
    updateDate();
    handleUrlParams();
    
    // Update date every minute to handle midnight transitions
    setInterval(updateDate, 60000);
    
    // Periodic page reload to ensure long-term stability (every 24 hours)
    setInterval(() => {
        window.location.reload();
    }, 86400000);
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

/**
 * Allows customizing location, temperature, and condition via URL parameters
 * Example: ?location=New%20York&temp=72&condition=Cloudy
 */
function handleUrlParams() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('location')) {
        document.querySelector('.location').textContent = params.get('location');
    }
    
    if (params.has('temp')) {
        const temp = params.get('temp');
        document.querySelector('.temperature').textContent = `${temp}°F`;
        document.querySelector('.temp-range').textContent = `H: ${temp}° L: ${temp}°`;
    }
    
    if (params.has('condition')) {
        document.querySelector('.condition').textContent = params.get('condition');
    }
}
