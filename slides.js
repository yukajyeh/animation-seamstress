const slides = document.querySelectorAll("section div.slides")

slides.forEach(slide => {
    let current = 0
    let z = 100000
    
    const images = slide.querySelectorAll("img")
    
    images.forEach(image => {
        z--
        image.style.zIndex = z
    })
    
    slide.addEventListener("click", function(){
    
        z--
        images[current].style.zIndex = z
    
        current++
        current = current % images.length
    })

})