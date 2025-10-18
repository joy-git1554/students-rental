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
