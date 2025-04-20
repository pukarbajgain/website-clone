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
        const navLinks = document.querySelectorAll('.nav-links li[data-link]');
        const currentPage = window.location.pathname.split('/').pop();
    
        if (currentPage === '' || currentPage === 'index.html') {
            sessionStorage.removeItem('active-nav-btn');
        }
        const activeNavBtnId = sessionStorage.getItem('active-nav-btn');
    
        navItemBtns.forEach(button => {
            const btnId = button.dataset.id;
            const menu = button.nextElementSibling;
    
            if (btnId === activeNavBtnId) {
                menu.style.display = 'flex';
                button.classList.add('active');
            }
        });
    

        navLinks.forEach(link => {
            const targetPath = link.dataset.link;
            const targetPage = targetPath?.split('/').pop();
    
            if (targetPage === currentPage) {
                link.classList.add('active-link');
    
                const parentNavItem = link.closest('.nav-item');
                const parentButton = parentNavItem.querySelector('button');
                const parentMenu = parentNavItem.querySelector('.nav-links');
    
                parentMenu.style.display = 'flex';
                parentButton.classList.add('active');
                sessionStorage.setItem('active-nav-btn', parentButton.dataset.id);
            }
            
    

            link.addEventListener('click', () => {
                const parentButton = link.closest('.nav-item')?.querySelector('button');
                if (parentButton) {
                    sessionStorage.setItem('active-nav-btn', parentButton.dataset.id);
                }
    
                if (!targetPath) return;
                const normalizedPath = targetPath.replace(/^.*?en\/pages\//, '/en/pages/');
                const isSamePage = currentPage === targetPage;
    
                if (isSamePage) {
                    window.location.reload();
                } else {
                    window.location.href = normalizedPath;
                }
            });
        });
    }
    
    
    
    


    
    
      const hamburger = document.getElementById("hamburger-btn");
      const m_sidebar = document.getElementById("mobileSidebar");
      const body = document.body;

    
      hamburger.addEventListener('click',()=>{
        m_sidebar.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });
      document.querySelectorAll('.rightsidebar a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          m_sidebar.classList.remove('active');
        });
      });
      

    

    
      
});

  
