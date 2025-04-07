document.addEventListener('DOMContentLoaded', async () => {
    function getPath(relativePath) {
        const currentPath = window.location.pathname;

        if (currentPath.includes('/en/embassy/')) {
            return '../components/' + relativePath;
        } else {
            return 'en/components/' + relativePath;
        }
    }

    async function loadComponent(id, file) {
        await fetch(getPath(file))
            .then(res => res.text())
            .then(data => {
                const el = document.getElementById(id);
                if (el) el.innerHTML = data;
            })
            .catch(err => console.error(`Error loading ${file}:`, err));
    }

    // Load all shared components
    await loadComponent('header', 'header.html');
    await loadComponent('footer', 'footer.html');
    await loadComponent('sidebar', 'navbar.html');

    const navItemBtn = document.querySelectorAll('.nav-item button');

    // Get the current page name (e.g., 'index.html', 'ambassador.html')
    const currentPage = window.location.pathname.split('/').pop();

    if (navItemBtn && currentPage !== '' && currentPage !== 'index.html') {
        navItemBtn.forEach((navBtn) => {
            const activeNavBtn = sessionStorage.getItem('active-nav-btn');
            const currentDataId = navBtn.dataset.id;
            if (activeNavBtn === currentDataId) {
                !navBtn.classList.contains('active') && toggleMenu(navBtn.nextElementSibling.getAttribute('id'), navBtn);
            }
        });
    }
     const navLinks = document.querySelectorAll('.nav-links li');

     navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
             console.log(e.target)
            const navigateTo = e.target.dataset.link;
            window.location.href = navigateTo;
        })
     });
     const currentPage_2 = window.location.pathname.split('/').pop(); // e.g., ambassador.html
     const navLinks_2 = document.querySelectorAll('.nav-links li');
 
     navLinks_2.forEach(link => {
        const hrefPage = link.dataset.link?.split('/').pop();
 
         if (hrefPage === currentPage_2) {
             link.classList.add('active-link');
         }
     })

});