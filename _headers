/* style.css */
:root {
    --primary-red: #ff0000;
    --glass-bg: rgba(255, 255, 255, 0.1);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
    background-color: #000;
    display: flex;
    justify-content: center; /* Centers the "phone" on desktop */
    font-family: 'Segoe UI', sans-serif;
    color: white;
    overflow-x: hidden;
}

/* Prevents desktop expansion */
.mobile-container {
    width: 100%;
    max-width: 450px; /* Standard smartphone width */
    min-height: 100vh;
    position: relative;
    background: #050505;
    box-shadow: 0 0 50px rgba(0,0,0,0.5);
}

.full-bg {
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 450px;
    height: 100%;
    background: url('hero-bg.jpg') center/cover no-repeat;
    opacity: 0.4; /* Transparent feature */
    z-index: -1;
}

/* Gatekeeper Styles (Image_79ace0.png) */
.auth-box {
    padding: 60px 20px;
    text-align: center;
}

.main-logo { width: 100px; margin-bottom: 20px; }

.input-group {
    display: flex;
    margin-top: 20px;
}

#ticketCode {
    flex: 1;
    padding: 15px;
    border: none;
    border-radius: 5px 0 0 5px;
}

button {
    background: var(--primary-red);
    color: white;
    border: none;
    padding: 15px 20px;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
}

/* Accordion FAQs (Image_7a3458.png) */
.faq-section { padding: 20px; }

.accordion-item {
    background: var(--glass-bg);
    margin-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
    backdrop-filter: blur(5px);
}

.accordion-header {
    width: 100%;
    padding: 15px;
    background: none;
    color: white;
    text-align: left;
    border: none;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: bold;
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    padding: 0 15px;
    transition: max-height 0.3s ease-out;
    background: rgba(0,0,0,0.2);
    font-size: 0.9rem;
    line-height: 1.4;
}

.accordion-item.active .accordion-content {
    max-height: 200px;
    padding: 15px;
}

footer { text-align: center; padding: 40px; font-size: 0.8rem; color: #666; }