var cx=document.getElementById('logo-destaque')
 var isDragging = false //inicialmente nada está sendo arrastado

 cx.addEventListener('mousedown',function(){
	 isDragging = true // quando o botão é pressionado começa a andar
 })
 
 document.addEventListener('mousemove',function(e){
	 if(isDragging){
		 cx.style.left = `${e.pageX - 50}px`
		 cx.style.top = `${e.pageY - 50}px`
		}
	})
	 
		document.addEventListener('mouseup',function(){
			isDragging = false //quando o botao do mouse for soltou
		})
var f= document.getElementById('foot')
f.addEventListener('mouseup',function(){
	this.style.backgroundColor= 'white'
})
