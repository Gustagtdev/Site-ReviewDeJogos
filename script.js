var cx=document.getElementById('logo-destaque')
 var isDragging = false 

 cx.addEventListener('mousedown',function(){
	 isDragging = true
 })
 
 document.addEventListener('mousemove',function(e){
	 if(isDragging){
		 cx.style.left = `${e.pageX - 50}px`
		 cx.style.top = `${e.pageY - 50}px`
		}
	})
	 
		document.addEventListener('mouseup',function(){
			isDragging = false 
		})

	
}
var b= document.getElementById("btn")
b.addEventListener('click',function(){
	this.style.color= "blue"
	this.innerText= "Clicou!"
	
})
	
	
