let box = document.querySelectorAll(".box")

box.forEach(function(val){
     
     val.addEventListener('mousemove', function(dets){
          val.childNodes[3].style.left = dets.x  + "px";
          console.log(dets.clientX)
     })
     val.addEventListener('mouseenter', function(){
          val.childNodes[3].style.opacity = 1
     })
     val.addEventListener('mouseleave', function(){
          val.childNodes[3].style.opacity = 0
     })
})

