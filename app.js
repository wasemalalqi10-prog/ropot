
const x = document.getElementById("sing");
const singinn = document.getElementById("singinn");
const closee = document.getElementById("closee")
x.addEventListener("click", function() {
    singinn.classList.remove("closee")
    singinn.classList.add("open")
})
closee.addEventListener("click", function() {
    singinn.classList.remove("open")
    singinn.classList.add("closee")
})
