/**
 * Viewplus (View+) App Logic
 * Developed by: CEO Doji
 * Last Updated: 2026-05-03
 */

// --- 1. ACCORDION LOGIC ---
// This handles the FAQ section seen in image_1bc223.png
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const currentItem = button.parentElement;
        const isOpen = currentItem.classList.contains('active');

        // AUTO-COLLAPSE: Close all other open items first
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
            const icon = item.querySelector('.accordion-header span');
            if (icon) icon.innerText = '+';
        });

        // Toggle current item: if it wasn't open, open it now
        if (!isOpen) {
            currentItem.classList.add('active');
            button.querySelector('span').innerText = '-';
        }
    });
});


// --- 2. TICKET VALIDATION LOGIC ---
// Validates the 10-digit code entered in the gatekeeper (image_79ace0.png)
function checkTicket() {
    const codeInput = document.getElementById('ticketCode');
    const code = codeInput.value.trim();
    
    // Always add developer comments to the codes
    // Check if input is exactly 10 numeric digits
    if (/^\d{10}$/.test(code)) {
        console.log("Connecting to Ticket Sella for validation...");
        
        /* 
           FUTURE INTEGRATION:
           This is where we will fetch() data from the Ticket Sella server.
           The ticket must be validated against its 24-hour expiration window.
        */
        
        // For now, we simulate a successful login
        saveAccessSession();
        alert("Access Granted! Welcome to View+.");
        
        // In the final build, this would trigger the UI transition to the video grid
        // document.getElementById('gatekeeper').classList.add('hidden');
        // document.getElementById('main-app').classList.remove('hidden');
    } else {
        alert("Invalid Access: Please enter a 10-digit numeric ticket code.");
    }
}


// --- 3. SESSION MANAGEMENT ---
// Handles the 24-hour expiration rule
function saveAccessSession() {
    // Store the current timestamp in the user's browser
    const currentTime = Date.now();
    localStorage.setItem('viewplus_access_time', currentTime);
}

function verifySessionExpiry() {
    const lastAccess = localStorage.getItem('viewplus_access_time');
    const twentyFourHours = 24 * 60 * 60 * 1000;

    if (lastAccess && (Date.now() - lastAccess > twentyFourHours)) {
        // Ticket has expired, clear session and force a new code entry
        localStorage.removeItem('viewplus_access_time');
        console.log("Ticket expired. User must purchase a new ticket from Ticket Sella.");
    }
}

// Run expiry check on page load
window.onload = verifySessionExpiry;