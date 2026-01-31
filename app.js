// Global JS for home page interactions (no Chart.js, error-free)
document.addEventListener('DOMContentLoaded', () => {
    console.log('App.js loaded successfully on home page.'); // Debug: Confirms load

    // Search functionality (filters subject cards)
    const searchInput = document.getElementById('search');
    if (searchInput) {
        console.log('Search input found. Adding listener.'); // Debug
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            console.log('Searching for:', query); // Debug: Shows query
            const cards = document.querySelectorAll('.card');
            if (!cards.length) {
                console.warn('No cards found to filter.'); // Debug
                return;
            }
            cards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const description = card.querySelector('p')?.textContent.toLowerCase() || '';
                const matches = title.includes(query) || description.includes(query);
                card.style.display = matches || !query ? 'block' : 'none';
            });
        });
    } else {
        console.warn('Search input not found. Skipping search logic.'); // Debug
    }

    // Subject selection (redirects to assessment)
    window.selectSubject = (subject) => {
        if (!subject) {
            console.error('No subject provided.'); // Debug
            return;
        }
        try {
            localStorage.setItem('selectedSubject', subject);
            console.log('Subject selected and saved:', subject); // Debug
            window.location.href = 'assessment.html'; // Placeholder redirect
        } catch (error) {
            console.error('Error saving to localStorage:', error); // Debug: Handles storage issues
            // Fallback: Use sessionStorage
            sessionStorage.setItem('selectedSubject', subject);
            window.location.href = 'assessment.html';
        }
    };

    // Button click handlers for login/signup (prevents default and redirects)
    const loginBtn = document.querySelector('.btn-login');
    const signupBtn = document.querySelector('.btn-signup');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents any default link behavior
            console.log('Login button clicked.'); // Debug
            window.location.href = 'login.html'; // Redirect
        });
    } else {
        console.warn('Login button not found.'); // Debug
    }
    if (signupBtn) {
        signupBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevents any default link behavior
            console.log('Signup button clicked.'); // Debug
            window.location.href = 'signup.html'; // Redirect
        });
    } else {
        console.warn('Signup button not found.'); // Debug
    }

    // Optional: Add fade-in animation for cards on load
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100); // Stagger animation
    });
});