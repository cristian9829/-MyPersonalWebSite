
 function animacion(contenedor){
	 $('html, body').animate(
	    {
	      scrollTop: $(contenedor).offset().top
	    },1000); 	
 }

function codeHtml(idModal,carpeta,numeroImagen){/*Funcion para los botones css y js de los modal del portafolio*/
	$(idModal + " .modal-body img").css("display","none"); /*Esconder las imagenes del html*/
	for(var i = 1; i<=numeroImagen; i++){
		$(idModal + " .modal-body").append('<img src="ImagenesPortafolio/CodigoFuente/' + carpeta + '/html/imagen' + i + '.png" alt="">');/*Imagen nueva*/		
	}
}

function codeCss(idModal,carpeta,numeroImagen){/*Funcion para los botones css y js de los modal del portafolio*/
	$(idModal + " .modal-body img").css("display","none"); /*Esconder las imagenes del html*/
	for(var i = 1; i<=numeroImagen; i++){
		$(idModal + " .modal-body").append('<img src="ImagenesPortafolio/CodigoFuente/' + carpeta + '/css/imagen' + i + '.png" alt="">');/*Imagen nueva*/		
	}
}

function codeJs(idModal,carpeta,numeroImagen){/*Funcion para los botones css y js de los modal del portafolio*/
	$(idModal + " .modal-body img").css("display","none"); /*Esconder las imagenes del html*/
	for(var i = 1; i<=numeroImagen; i++){
		$(idModal + " .modal-body").append('<img src="ImagenesPortafolio/CodigoFuente/' + carpeta + '/js/imagen' + i + '.png" alt="">');/*Imagen nueva*/		
	}
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

  	/*Botones del proyecto de Turismo en Colombia*/
  	$("#htmlTurismo").on("click",function(){
	  	codeHtml("#myModal","Turismo","5");  			
  	});

  	$("#css3Turismo").on("click",function(){
	  	codeCss("#myModal","Turismo","2");  			
  	});

  	/*Botones del proyecto de Calculadora*/
  	$("#htmlCal").on("click",function(){
	  	codeHtml("#myModalCalculadora","calculadora","1");  			
  	});

  	$("#css3Cal").on("click",function(){
	  	codeCss("#myModalCalculadora","calculadora","2");  			
  	});

  	$("#jsCal").on("click",function(){
	  	codeJs("#myModalCalculadora","calculadora","7");  			
  	});


  	/*Botones del proyecto de Candy Crush*/
  	$("#htmlCandy").on("click",function(){
	  	codeHtml("#myModalCandy","candyCrush","1");  			
  	});

  	$("#css3Candy").on("click",function(){
	  	codeCss("#myModalCandy","candyCrush","2");  			
  	});

  	$("#jsCandy").on("click",function(){
	  	codeJs("#myModalCandy","candyCrush","4");  			
  	});

  	/*Botones del proyecto de Api Marvel*/
  	$("#htmlMarvel").on("click",function(){
	  	codeHtml("#myModalMarvel","marvel","2");  			
  	});

  	$("#css3Marvel").on("click",function(){
	  	codeCss("#myModalMarvel","marvel","2");  			
  	});

  	$("#jsMarvel").on("click",function(){
	  	codeJs("#myModalMarvel","marvel","2");  			
  	});

  	/*Botones del proyecto de comidas*/
  	$("#htmlComidas").on("click",function(){
	  	codeHtml("#myModalComidas","comidas","2");  			
  	});

  	$("#css3Comidas").on("click",function(){
	  	codeCss("#myModalComidas","comidas","2");  			
  	});

  	/*Botones del proyecto del reloj de Iphone X*/

  	$("#htmlIphone").on("click",function(){
	  	codeHtml("#myModaliphone","reloj","1");  			
  	});

  	$("#css3Iphone").on("click",function(){
	  	codeCss("#myModaliphone","reloj","2");  			
  	});

  	$("#jsIphone").on("click",function(){
	  	codeJs("#myModaliphone","reloj","1");  			
  	});

  	/*Botones del proyecto de la tiena online*/
  	$("#htmlTonline").on("click",function(){
	  	codeHtml("#myModalTonline","tiendaOnline","4");  			
  	});

  	$("#css3Tonline").on("click",function(){
	  	codeCss("#myModalTonline","tiendaOnline","2");  			
  	});

  	/*Botones del proyecto del juego de la granja*/
  	 $("#htmlGranja").on("click",function(){
	  	codeHtml("#myModalGranja","granja","2");  			
  	});

  	$("#cssGranja").on("click",function(){
	  	codeCss("#myModalGranja","granja","3");  			
  	});

  	$("#jsGranja").on("click",function(){
	  	codeJs("#myModalGranja","granja","3");  			
  	});

  	/*Botones del proyecto de Api Github*/
  	$("#htmlGit").on("click",function(){
	  	codeHtml("#myModalGit","github","1");  			
  	});

  	$("#cssGit").on("click",function(){
	  	codeCss("#myModalGit","github","2");  			
  	});

  	$("#jsGit").on("click",function(){
	  	codeJs("#myModalGit","github","1");  			
  	});
})