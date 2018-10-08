
 function animacion(contenedor){
	 $('html, body').animate(
	    {
	      scrollTop: $(contenedor).offset().top
	    },1000); 	
 }


function codeCss(idModal,nombreImagenCss){/*Funcion para los botones css y js de los modal del portafolio*/
	$(idModal + " .modal-body img").css("display","none"); /*Esconder las imagenes del html*/

	$(idModal + " .modal-body").html('<img src="ImagenesPortafolio/CodigoFuente/Turismo/css/' +nombreImagenCss+ '.png" alt="">');/*Imagen nueva*/
	$(idModal + " .modal-header .contenedor-btn-code .btn-info").css("display","none");/*Escondemos el boton css*/
	$(idModal + " .modal-header .contenedor-btn-code").prepend('<button type="button" class="btn btn-primary" id="htmlTurismo">Html</button>'); /*Creamos un boton en el mismo lugar del boton del css*/
}

function codeJs(idModal,nombreImagenCss){/*Funcion para los botones css y js de los modal del portafolio*/
	$(idModal + " .modal-body img").css("display","none"); /*Esconder las imagenes del html*/

	$(idModal + " .modal-body").html('<img src="ImagenesPortafolio/CodigoFuente/Turismo/js/' +nombreImagenCss+ '.png" alt="">');/*Imagen nueva*/
	$(idModal + " .modal-header .contenedor-btn-code .btn-warning").css("display","none");/*Escondemos el boton css*/
	$(idModal + " .modal-header .contenedor-btn-code").prepend('<button type="button" class="btn btn-primary" id="htmlTurismo">Html</button>'); /*Creamos un boton en el mismo lugar del boton del css*/
}


$(document).ready(function(){ /*Bloque de codigo JQUERY*/

/*==========Funcionamiento con animacion de los botones de la portada======*/
	$("#acercade").on("click",function(e){
		e.preventDefault();
		animacion("#contenedorPortada");
		$("#acerdade").css("color","#F1C40F");
		$("#Habilidades,#Educacion,#Portafolio,#Intereses,#Hablemos").css("color","white");
	})


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

  	/*Botones de los modales del portafolio css y js*/

  	$("#css3Turismo").on("click",function(){
  		codeCss("#myModal","imagen1");
  	});

  	$("#jsTurismo").on("click",function(){
  		codeJs("#myModal","imagen");
  	});
})