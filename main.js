var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show")

        }
        else {
            entry.target.classList.remove("show")
        }
    })
})
var hidden = document.querySelectorAll(".hidden")
hidden.forEach((el) => observer.observe(el))    