const slides = document.querySelectorAll("section div.slides")

slides.forEach(slide => {
    let current = 0
    let z = 100000
    
    const images = slide.querySelectorAll("img")
    
    images.forEach(image => {
        z--
        image.style.zIndex = z
    })

    gsap.set(images, { opacity:0 })

    imagesLoaded(images, function(){

        const timeline = gsap.timeline()

        timeline
            .set(images,{ 
                x: () => {
                    return 500 * Math.random() - 250
                },
                y:"500%",
                rotation: () => {
                    return 90 * Math.random()- 45
                },
                opacity:1
             })

            .to(images, { x: 0, y: 0, stagger: -0.25 })
            .to(images, { 
                rotate: () => {
                    return 16 * Math.random() - 8 
                }
            })
    
    })

    
    slide.addEventListener("click", function(){
    
        z = z-1

        let direction = "150%"
        let midangle= 15

        if(Math.random() > 0.5){
            direction = "-150%"
            midangle = -15
        }


        const currentImage = images[current]

        const flipTimeline = gsap.timeline()
            flipTimeline
            .set(currentImage,{ x:0 })
            .to(currentImage, { 
                x: direction,
                rotation:midangle,
                scale: 1.1
            })
            .set(currentImage,{ zIndex: z})
            .to(currentImage,{ 
                x:0,
                rotation:()=> {
                    return 16 * Math.random() - 8 
                },
                scale:1
            })
    
        current++
        current = current % images.length
    })

})