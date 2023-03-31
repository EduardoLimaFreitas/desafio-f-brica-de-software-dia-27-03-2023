const toTop = window.document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    if(window.scrollY > 450) {
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active")
    }
})


const modalButton = document.querySelector("#signup")

const modal = document.querySelector("dialog")

const closeButton = document.querySelector("#closeButton")

modalButton.addEventListener("click", ()=> {
    modal.showModal()
})




ScrollReveal({origin: 'top', distante: '50px', duration: 2000}).reveal('header, main, section');