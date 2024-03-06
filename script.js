let bar=document.getElementById("bar")
let nav=document.getElementById("x-nav-links")


function show(){
    nav.style.marginTop="-5px"
    nav.style.transition="1.5s"
    bar.innerHTML=`<i class='fa-solid fa-xmark' onclick="hide()"></i>`
}

function hide(){
    nav.style.marginTop="-250px"
    bar.innerHTML=` <i class="fa-solid fa-bars" onclick="show()"></i>`
}

function closeMenu(){
    if(window.innerWidth > 768){
        hide();
    }
}

window.addEventListener("resize",closeMenu)


function closeNav(){
    hide();
}









