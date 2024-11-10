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
var b= document.getElemetById('btn')
function entrar(){
	b.innerText = 'Entrou!'
	b.style.color = 'red'
}
b.addEventListener('mouseenter',entrar)
	
	
function sair(){
	b.style.color = 'blue'
}
b.addEventListener('mouseout',sair)
