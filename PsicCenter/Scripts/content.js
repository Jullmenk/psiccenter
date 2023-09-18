let nowmore = document.querySelectorAll(".nowmore")
let consulta = document.querySelectorAll(".consulta")
let consultatype = document.querySelectorAll(".consultatype")
const changecolor = () => {
            event.target.classList.add('hover')
            switch (event.target.src.includes("family")) {
                case true:
                    nowmore[1].classList.add('show')
                    consultatype[1].classList.add('hovercolor')
                    break;
                case false:
                    nowmore[0].classList.add('show')
                    consultatype[0].classList.add('hovercolor')
                    break;
            }      
}
const defaultcolor = () => {
    event.target.classList.remove('hover')
    switch (event.target.src.includes("family")) {
        case true:
            nowmore[1].classList.remove('show')
            consultatype[1].classList.remove('hovercolor')
            break;
        case false:
            nowmore[0].classList.remove('show')
            consultatype[0].classList.remove('hovercolor')
            break;
    }
}

const nowmorefunction = () =>{
    switch (event.target.id.includes("NOWMORE1")) {
        case true:
            nowmore[0].classList.add('show')
            consultatype[0].classList.add('hovercolor')
            consulta[0].classList.add("hover")
            break;
    
        case false:
            nowmore[1].classList.add('show')
            consultatype[1].classList.add('hovercolor')
            consulta[1].classList.add("hover")
            break;
    }
    
}
consulta.forEach(elem => {
    elem.addEventListener("mouseenter",changecolor)
    elem.addEventListener("mouseleave",defaultcolor)
});
nowmore.forEach(elem=>{
    elem.addEventListener("mouseenter",nowmorefunction)
}) 


