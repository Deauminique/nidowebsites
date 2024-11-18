// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    let isMenuOpen = false;

    mobileMenuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        
        // Update menu icon
        if (isMenuOpen) {
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            `;
        } else {
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            `;
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInside = mobileMenuButton.contains(event.target) || mobileMenu.contains(event.target);
        
        if (!isClickInside && isMenuOpen) {
            mobileMenu.classList.add('hidden');
            isMenuOpen = false;
            menuIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            `;
        }
    });
});

// Form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        let isValid = true;
        const errors = {};
        
        if (!data.name) {
            errors.name = 'Naam is verplicht';
            isValid = false;
        }
        
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.email = 'Geldig emailadres is verplicht';
            isValid = false;
        }
        
        if (!data.message) {
            errors.message = 'Bericht is verplicht';
            isValid = false;
        }
        
        // Display errors or submit form
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => el.textContent = '');
        
        if (!isValid) {
            Object.keys(errors).forEach(key => {
                const errorElement = document.getElementById(`${key}Error`);
                if (errorElement) {
                    errorElement.textContent = errors[key];
                }
            });
            return;
        }
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', data);
        contactForm.reset();
        
        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.classList.remove('hidden');
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        }
    });
}

// Firebase initialization for admin panel
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "nido-websites.firebaseapp.com",
    projectId: "nido-websites",
    storageBucket: "nido-websites.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Admin login functionality
const loginForm = document.getElementById('adminLoginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const email = document.getElementById('adminEmail').value;
        const password = document.getElementById('adminPassword').value;
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = '/admin/dashboard.html';
        } catch (error) {
            const errorMessage = document.getElementById('loginError');
            if (errorMessage) {
                errorMessage.textContent = 'Ongeldige inloggegevens';
                errorMessage.classList.remove('hidden');
            }
        }
    });
}