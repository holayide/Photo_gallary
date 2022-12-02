
let  box1 = document.querySelector('.box__1');
let  box2 = document.querySelector('.box__2');



document.querySelector('.btn-1').addEventListener('click', function()
{
    box1.style.backgroundColor = ('blue');
    document.querySelector('#link1').style.color = ('red')
})



document.querySelector('.btn-2').addEventListener('click', function()
{
    box2.style.backgroundColor = ('yellow');
    document.querySelector('#link2').style.color = ('pink')
})