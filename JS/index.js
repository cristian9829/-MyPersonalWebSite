
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
		$("#Habilidades").css("color","#F1C40F");
		$("#acerdade,#Educacion,#Portafolio,#Intereses,#Hablemos").css("color","white");
	})

	$("#Portafolio").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorPortafolio");
		$(this).css("color","#F1C40F");
		$("#acerdade,#Educacion,#Habilidades,#Intereses,#Hablemos").css("color","white");
	})

	$("#Educacion").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorEducacion");
		$(this).css("color","#F1C40F");
		$("#acerdade,#Habilidades,#Portafolio,#Intereses,#Hablemos").css("color","white");
	})


	$("#Intereses").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorInteres");
		$(this).css("color","#F1C40F");
		$("#acerdade,#Habilidades,#Portafolio,#Educacion,#Hablemos").css("color","white");
	})

	$("#Hablemos").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorContacto");
		$(this).css("color","#F1C40F");
		$("#acerdade,#Habilidades,#Portafolio,#Intereses,#Educacion").css("color","white");
	})

	/*====================Configuracion del Menu pegajoso================*/

	$( window ).scroll(function(){
    	var dato =  $(window).scrollTop();

    	if (dato>10) {
    	$("header").css({
    			"background-color":"black",
    			"display":"flex",
    			"justify-content":"space-between",
    			"position": "fixed",
    			"z-index": "1000px",
    			"top":"0px"
    		});


    	}else{
    		$("header").css("display","none");
    	}

  	});
})