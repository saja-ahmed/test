let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let Turn1 = document.querySelector('.Turn1')
let Turn2 = document.querySelector('.Turn2')
let Turn3 = document.querySelector('.Turn3')

let next1 = document.querySelector('.next1')
let next2 = document.querySelector('.next2')
let next3 = document.querySelector('.next3')

let before1 = document.querySelector('.before1')
let before2 = document.querySelector('.before2')
let before3 = document.querySelector('.before3')



next2.onclick = function(){
    img2.style.display = 'none'
}
next3.onclick = function(){
    img3.style.display = 'none'
}

before1.onclick = function(){
    img2.style.display = 'block'
}
before2.onclick = function(){
    img3.style.display = 'block'
}
// before3.onclick = function(){
//     img3.style.display = 'block'
// }
