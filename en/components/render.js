document.addEventListener('DOMContentLoaded', async () => {
    function getPath(relativePath) {
        const currentPath = window.location.pathname;
        return currentPath.includes('/en/pages/')
            ? '../components/' + relativePath
            : 'en/components/' + relativePath;

    
    }

    async function loadComponent(id, file) {
        try {
            const res = await fetch(getPath(file));
            const data = await res.text();
            const el = document.getElementById(id);
            if (el) el.innerHTML = data;
        } catch (err) {
            console.error(`Error loading ${file}:`, err);
        }
    }


    await loadComponent('header', 'header.html');
    await loadComponent('footer', 'footer.html');
    await loadComponent('sidebar', 'navbar.html');


    setupNavigation();

    function setupNavigation() {
        const navItemBtns = document.querySelectorAll('.nav-item button');
        const currentPage = window.location.pathname.split('/').pop();

        const activeNavBtn = sessionStorage.getItem('active-nav-btn');
        if (currentPage !== '' && currentPage !== 'index.html') {
            navItemBtns.forEach((navBtn) => {
                const currentDataId = navBtn.dataset.id;
                if (activeNavBtn === currentDataId && !navBtn.classList.contains('active')) {
                    toggleMenu(navBtn.nextElementSibling.getAttribute('id'), navBtn);
                }
            });
        }

        const navLinks = document.querySelectorAll('.nav-links li[data-link]');

        navLinks.forEach(link => {
            const targetPath = link.dataset.link;
            const targetPage = targetPath?.split('/').pop();


            if (targetPage === currentPage) {
                link.classList.add('active-link');
            }


            link.addEventListener('click', () => {
                if (!targetPath) return;
                const normalizedPath = targetPath.replace(/^.*?en\/embassy\//, '/en/embassy/');
                if (targetPage === currentPage) {
                    window.location.reload(); 
                } else {
                    window.location.href = normalizedPath; 
                }
            });
        });
    }
});






// document.addEventListener('DOMContentLoaded', async () => {
//     function getPath(relativePath) {
//         const currentPath = window.location.pathname.split('/').length-2;
//         const prefix='../'.repeat(currentPath);
//         return prefix+ 'components/'+relativePath;

    
//     }

//     async function loadComponent(id, file) {
//         try {
//             const res = await fetch(getPath(file));
//             const data = await res.text();
//             const el = document.getElementById(id);
//             if (el) el.innerHTML = data;
//         } catch (err) {
//             console.error(`Error loading ${file}:`, err);
//         }
//     }


//     await loadComponent('header', 'header.html');
//     await loadComponent('footer', 'footer.html');
//     await loadComponent('sidebar', 'navbar.html');


//     setupNavigation();

//     function setupNavigation() {
//         const navItemBtns = document.querySelectorAll('.nav-item button');
//         const currentPage = window.location.pathname.split('/').pop();

//         const activeNavBtn = sessionStorage.getItem('active-nav-btn');
//         if (currentPage !== '' && currentPage !== 'index.html') {
//             navItemBtns.forEach((navBtn) => {
//                 const currentDataId = navBtn.dataset.id;
//                 if (activeNavBtn === currentDataId && !navBtn.classList.contains('active')) {
//                     toggleMenu(navBtn.nextElementSibling.getAttribute('id'), navBtn);
//                 }
//             });
//         }

//         const navLinks = document.querySelectorAll('.nav-links li[data-link]');

//         navLinks.forEach(link => {
//             const targetPath = link.dataset.link;
//             const targetPage = targetPath?.split('/').pop();


//             if (targetPage === currentPage) {
//                 link.classList.add('active-link');
//             }


//             link.addEventListener('click', () => {
//                 if (!targetPath) return;
//                 const targetPath = targetPath.split('/').pop();
//                 if (targetPage === currentPage) {
//                     window.location.reload(); 
//                 } else {
//                     window.location.href = targetPath; 
//                 }
//             });
            
            
//         });
//     }
// });


// document.addEventListener('DOMContentLoaded', async () => {
//     function getPath(relativePath) {
//         const depth = window.location.pathname.split('/').length - 2;
//         const prefix = '../'.repeat(depth);
//         return prefix + 'components/' + relativePath;
//     }

//     async function loadComponent(id, file) {
//         try {
//             const res = await fetch(getPath(file));
//             const data = await res.text();
//             const el = document.getElementById(id);
//             if (el) el.innerHTML = data;
//         } catch (err) {
//             console.error(`Error loading ${file}:`, err);
//         }
//     }

//     // Load shared components
//     await loadComponent('header', 'header.html');
//     await loadComponent('footer', 'footer.html');
//     await loadComponent('sidebar', 'navbar.html');

//     setupNavigation();

//     function setupNavigation() {
//         const navItemBtns = document.querySelectorAll('.nav-item button');
//         const currentPage = window.location.pathname.split('/').pop();

//         const activeNavBtn = sessionStorage.getItem('active-nav-btn');
//         if (currentPage !== '' && currentPage !== 'index.html') {
//             navItemBtns.forEach((navBtn) => {
//                 const currentDataId = navBtn.dataset.id;
//                 if (activeNavBtn === currentDataId && !navBtn.classList.contains('active')) {
//                     toggleMenu(navBtn.nextElementSibling.getAttribute('id'), navBtn);
//                 }
//             });
//         }

//         const navLinks = document.querySelectorAll('.nav-links li[data-link]');

//         navLinks.forEach(link => {
//             const targetPath = link.dataset.link;
//             const targetPage = targetPath?.split('/').pop();

//             // Add active style
//             if (targetPage === currentPage) {
//                 link.classList.add('active-link');
//             }

//             // Navigate to other links
//             link.addEventListener('click', () => {
//                 if (!targetPath) return;
//                 if (targetPage === currentPage) {
//                     window.location.reload();
//                 } else {
//                     window.location.href = targetPath;
//                 }
//             });
//         });
//     }
// });
