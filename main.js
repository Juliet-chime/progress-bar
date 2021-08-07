const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentstep = 1

function clickprogress(){
    currentstep++
    if(currentstep > circles.length){
        currentstep = circles.length
    }
    update()
}

function backprogress(){
    currentstep--
    if(currentstep < 1){
        currentstep = 1
    }
    update()
}
next.addEventListener('click', clickprogress)
prev.addEventListener('click', backprogress)

function update(){
    circles.forEach((circle,idx) =>{
        if(idx < currentstep){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })

    const active = document.querySelectorAll('.active')
    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentstep === 1){
        prev.disabled = true
    }
    else if(currentstep === circles.length){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false
    }
}