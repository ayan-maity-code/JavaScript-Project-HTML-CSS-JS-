window.addEventListener('mousemove' , (details) => {
   const rect =  document.querySelector(".rect")
    const xVal = gsap.utils.mapRange(
        0 ,
         window.innerWidth , 
         100 + rect.getBoundingClientRect().width / 2 , 
         window.innerWidth - ( 100 + rect.getBoundingClientRect().width / 2) , 
         details.clientX)
  gsap.to('.rect' , {
    left :xVal,
    ease : Power4
  })
})
