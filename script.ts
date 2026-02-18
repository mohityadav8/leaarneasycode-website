// Select elements with proper typing
const wrapper = document.querySelector<HTMLDivElement>('.wrapper');
const loginLink = document.querySelector<HTMLAnchorElement>('.login-link');
const registerLink = document.querySelector<HTMLAnchorElement>('.register-link');
const btnPopup = document.querySelector<HTMLButtonElement>('.btnLogin-popup');
const iconClose = document.querySelector<HTMLElement>('.icon-close');

// Safety check (VERY IMPORTANT in TypeScript)
if (!wrapper || !loginLink || !registerLink || !btnPopup || !iconClose) {
    throw new Error("Some HTML elements are missing. Check class names in index.html");
}

// Register → show register form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Login → show login form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Open popup
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Close popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
