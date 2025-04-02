function toggleMenu(id, button) {
    const menu = document.getElementById(id);
    const allMenus = document.querySelectorAll('.nav-links');
    const allButtons = document.querySelectorAll('.nav-item button');


    allMenus.forEach(item => {
        if (item.id !== id) item.style.display = 'none';
    });
    allButtons.forEach(btn => {
        if (btn !== button) btn.classList.remove('active');
    });


    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        button.classList.remove('active');
    } else {
        menu.style.display = 'flex';
        button.classList.add('active');
    }
}
