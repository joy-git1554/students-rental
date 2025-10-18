// auth.js - simple guard that redirects to login page if user is not set in localStorage
(function () {
    try {
        var userRaw = localStorage.getItem('sr_user');
        var isLoginPage = location.pathname && location.pathname.toLowerCase().endsWith('/login.html');
        var isRegisterPage = location.pathname && location.pathname.toLowerCase().endsWith('/register.html');
        // if no accounts exist, force registration first
        var accRaw = localStorage.getItem('sr_accounts');
        var hasAccounts = !!(accRaw && accRaw.length);
        if (!userRaw) {
            if (!hasAccounts && !isRegisterPage) {
                location.replace('register.html');
                return;
            }
            if (!isLoginPage && hasAccounts) {
                var target = 'login.html?next=' + encodeURIComponent(location.pathname + location.search + location.hash);
                location.replace(target);
            }
        }
    } catch (e) {
        // on error, don't block (safer)
        console.warn('auth guard error', e);
    }
})();
