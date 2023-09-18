const nowmore = document.querySelectorAll('.nowmore')
const bodyy = document.querySelector('.bodyy')
nowmore.forEach(elem=>{
    elem.addEventListener('click',()=>{
        bodyy.style='background-color:red;'
    })
})