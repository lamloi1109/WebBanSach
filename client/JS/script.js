const items = document.querySelectorAll(".header-bottom__nav--item a");

items.forEach(item => {
    item.addEventListener('click',function(){
        removeClass();
        item.classList.add('active');
    });
});
const removeClass = function(){
    items.forEach(item => {
        item.classList.remove('active');
    });
}