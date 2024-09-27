// menu
const menu = document.querySelector(".navbar_links")
const menuButton = document.querySelector(".navbar_icons")

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("navbar_open")
    menuButton.classList.toggle("open")
})

function menuOnReSize(){
    var links = document.querySelector('.navbar_link')
    if(window.innerWidth>650 && links.classList.contains('navbar_open') ){
        links.classList.remove('navbar_open');
        
    }
}

window.addEventListener('resize',menuOnReSize);

document.querySelectorAll('.navbar_link a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, 
                behavior: 'smooth'
            });
        }
    });
});