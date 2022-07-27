const searchInput = document.querySelector("[data-search]")

let movies = []

searchInput.addEventListener("input", (e) =>{
    const value = e.target.value
    movies.forEach(movie => {
        const isVisible = movie.title.includes(value) || movie.category.includes(value)
        movie.element.classList.toggle("hide", !isVisible)
    }) 
    
})