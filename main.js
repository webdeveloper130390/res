var elModal = document.querySelector('.modal')
var elShadow = document.querySelector('.modal__shadow')
var elBody = document.querySelector('body')
var elMy__title = document.querySelector('.my__title')
var elMy__des = document.querySelector('.my__des')

function fnOpen(){
    elModal.classList.add('open__modal')
    elShadow.style.display = 'block'
    elBody.classList.add('scroll__none')
    
}

function fnClose(){
    elModal.classList.remove('open__modal')
    elShadow.style.display = 'none'
    elBody.classList.remove('scroll__none')
}

function fn1(){
    elBody.style.backgroundColor = 'black'
    

}
function fn2(){
    elBody.style.backgroundColor = 'white'
}
document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("O'ziz mehnat qlin brat!!!");
});
