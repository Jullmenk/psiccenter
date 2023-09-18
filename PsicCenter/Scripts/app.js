const observer = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('showapp');
          } else {
            entry.target.classList.remove('showapp');
          }
         entry.isIntersecting?observer.unobserve(entry.target):console.log('')
         if(entry.isIntersecting&&entry.target.classList.contains('numb')){
            entry.target.classList.add('backto')
         }
    })
},{
    // rootMargin:'-10px'
})

const obs = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('hmon');
          } else {
            entry.target.classList.remove('hmon');
          }
        entry.isIntersecting?obs.unobserve(entry.target):console.log('')
    })
},{
    // rootMargin:'-10px'
    threshold:0.4
})




 const hiddenelements = document.querySelectorAll('.hiddenapp')
 hiddenelements.forEach((el)=>{
     observer.observe(el)
 })

 const righhiddenelements = document.querySelectorAll('.hiddenright')
 righhiddenelements.forEach((el)=>{
     observer.observe(el)
 })

const piccenterlogo = document.querySelectorAll('.piccenterlogo')
piccenterlogo.forEach((el)=>{
    observer.observe(el)
})

const ourteamtitle = document.querySelectorAll('.ourteamtitle')
ourteamtitle.forEach((el)=>{
    observer.observe(el)
})


const ourteammembers = document.querySelectorAll('.ourteammembers')
ourteammembers.forEach((el)=>{
    observer.observe(el)
})

const hm = document.querySelectorAll('.hm')
hm.forEach((el)=>{
    obs.observe(el)
})  

const member = document.querySelectorAll('.member')
member.forEach((el)=>{
    observer.observe(el)
})

const members2 = document.querySelectorAll('.members2')
members2.forEach((el)=>{
    observer.observe(el)
})

const ofertastitle = document.querySelectorAll('.ofertastitle')
ofertastitle.forEach((el)=>{
    observer.observe(el)
})

const listas = document.querySelectorAll('.listas')
listas.forEach((el)=>{
    observer.observe(el)
})
const xx = document.querySelectorAll('.xx')
xx.forEach((el)=>{
    observer.observe(el)
})
xx