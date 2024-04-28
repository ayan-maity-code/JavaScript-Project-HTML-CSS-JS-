const rect = document.querySelector("#center")

rect.addEventListener("mousemove", function(response){
    const rectangleLoaction = rect.getBoundingClientRect();
   const rectInsideVal =  response.clientX - rectangleLoaction.left

   if(rectInsideVal < rectangleLoaction.width/2){
    const redColor = gsap.utils.mapRange(0 , rectangleLoaction.width/2 , 255 , 0 , rectInsideVal);
    gsap.to(rect,{
        backgroundColor:`rgb(${redColor}, 0,0)`,
        ease: Power4
    })
   }else{
    const blueColor = gsap.utils.mapRange(rectangleLoaction.width/2 ,rectangleLoaction.width , 0 , 255 , rectInsideVal);
    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${blueColor})`,
        ease: Power4
    })
   }

}) 

rect.addEventListener("mouseleave" , (e) => {
    gsap.to(rect,{
        backgroundColor: "white",
        ease: Power4
    })
})