
 function animacion(contenedor){
	 $('html, body').animate(
	    {
	      scrollTop: $(contenedor).offset().top
	    },1000); 	
 }


$(document).ready(function(){ /*Bloque de codigo JQUERY*/

/*==========Funcionamiento con animacion de los botones de la portada======*/
	$("#Habilidades").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorHabilidades");
	})

	$("#Portafolio").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorPortafolio");
	})

	$("#Educacion").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorEducacion");
	})


	$("#Intereses").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorInteres");
	})

	$("#Hablemos").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorContacto");
	})

/*====================Configuracion del Menu pegajoso================*/

	$( window ).scroll(function(){
    	var dato =  $(window).scrollTop();

    	if (dato>560) {
    		$("header").css({
    			"background-color":"black",
    			"display":"flex",
    			"justify-content":"flex-end",
    			"position": "fixed",
    			"z-index": "1000px",
    			"top":"0px"
    		});
    	}else{
    		$("header").css("display","none");
    	}

  	});
})