const hamburgerMenu = document.querySelector('.hamburger-menu');
const collapsedMenusButtons = Array.from(document.querySelectorAll('.collapsed-menu'));
const mobileOverlay = document.querySelector('.mobile-overlay');



const collapsedSidebar = (btn)=>{
    let event = btn.classList.contains('event');
       
    if (!event) {
        btn.classList.add('event');
        btn.nextElementSibling.classList.add('event');
        mobileOverlay.classList.add('event');
      
    } else {
        btn.classList.remove('event');
        btn.nextElementSibling.classList.remove('event');
        mobileOverlay.classList.remove('event');
          
        collapsedMenusButtons.forEach(collapsedMenu =>{
            collapsedMenu.classList.remove('event');
            collapsedMenu.nextElementSibling.classList.remove('event');
        })
    }
}

const collapsedMenus = (collapsedMenu)=>{
    let event = collapsedMenu.classList.contains('event');
        if (!event) {
            collapsedMenu.classList.add('event');
            collapsedMenu.nextElementSibling.classList.add('event');
        }   else{
            collapsedMenu.classList.remove('event');
            collapsedMenu.nextElementSibling.classList.remove('event');
        }
}

hamburgerMenu.addEventListener('click', ()=>{
    collapsedSidebar(hamburgerMenu);
})

collapsedMenusButtons.forEach(collapsedMenu => {
    collapsedMenu.addEventListener('click',()=>{
        collapsedMenus(collapsedMenu);
    });
});

