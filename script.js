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
document.getElementById('comment-form').addEventListener('submit', function (event) {
    event.preventDefault();  // Previne o envio do formulário para evitar recarregar a página
    
    const comment = document.getElementById('comment').value;
    const button = document.getElementById('btn');
    const card = document.getElementById('card');

    // Alterando a cor e texto do botão
    if (comment) {
        // Alterar a cor do botão para verde e mudar o texto
        button.style.backgroundColor = '#28a745';  // Cor verde
        button.innerText = 'Comentário Enviado!';
        
        // Mostrar uma mensagem de sucesso
        document.getElementById('response').innerHTML = '<div class="alert alert-success" role="alert">Comentário enviado com sucesso!</div>';
        
	
})
	
	
