let navbar=document.querySelector('.navbar');
let links=document.querySelectorAll('.nav-link');
let brand=document.querySelector('.navbar-brand');
window.onscroll=function(){
    if(window.scrollY!==0){
        navbar.classList.add('active1');
        brand.classList.add('active2');
        links.forEach(link=>{link.classList.add('active2')});
    }else{
        navbar.classList.remove('active1');
        brand.classList.remove('active2');
        links.forEach(link=>{link.classList.remove('active2')});
    }
}