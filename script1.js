const but = document.querySelector(".but");
const result = document.querySelector(".result");

but.addEventListener("click", () => {
   fetch('/api')
    .then(res => res.json())
    .then(data => {
        result.textContent = data.message;
    })
    .catch(err => console.log(err))
})