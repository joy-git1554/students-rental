// app.js - small client logic for Students Rentals
(function () {
    const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();

    // properties storage for later pages
    const propsKey = 'sr_properties_v2';
    if (!localStorage.getItem(propsKey)) {
        const list = [
            { id: 1, title: 'Cozy 1BR Cottage', room: '1BR', water: true, electricity: true, price: 4500, available: true },
            { id: 2, title: 'Shared 2BR Flat', room: 'Shared', water: true, electricity: false, price: 3000, available: true },
            { id: 3, title: 'Modern Studio', room: 'Studio', water: false, electricity: true, price: 6000, available: false }
        ];
        localStorage.setItem(propsKey, JSON.stringify(list));
    }
})();

// mobile nav toggle shared across pages (robust)
(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const toggles = Array.from(document.querySelectorAll('.nav-toggle'));
        if (!toggles.length) return;

        toggles.forEach(btn => {
            const header = btn.closest('.site-header') || document;
            const nav = header.querySelector('#mainNav') || header.querySelector('.nav');
            if (!nav) return;
            btn.setAttribute('aria-expanded', 'false');
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = nav.classList.toggle('open');
                btn.setAttribute('aria-expanded', isOpen);
            });
            nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }));
        });

        document.addEventListener('click', (e) => {
            toggles.forEach(btn => {
                const header = btn.closest('.site-header') || document;
                const nav = header.querySelector('#mainNav') || header.querySelector('.nav');
                if (!nav) return;
                if (!nav.contains(e.target) && e.target !== btn) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                toggles.forEach(btn => {
                    const header = btn.closest('.site-header') || document;
                    const nav = header.querySelector('#mainNav') || header.querySelector('.nav');
                    if (nav) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
                });
            }
        });
    });
})();

