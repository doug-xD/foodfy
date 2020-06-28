const modalOverlay = document.querySelector('.modal_overlay')
const recipes = document.querySelectorAll('.recipe__card')

for (let recipe of recipes) {
    recipe.addEventListener("click", function(){
        modalOverlay.classList.add('active')
         
        const rec_card = recipe.getAttribute("id")
        rec_data = document.querySelector(`#${rec_card}`).innerHTML;
        modalOverlay.querySelector(".modal_content").innerHTML = rec_data
    })
}

document.querySelector(".close_modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.classList.remove("modal_recipes")
})

document.querySelector(".max_modal").addEventListener("click", function(){
    modalOverlay.classList.toggle("maximized")
})
