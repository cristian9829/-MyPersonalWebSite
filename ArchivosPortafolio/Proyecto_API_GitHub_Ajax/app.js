/*Codigo con boton buscar*/
$(document).ready(function(){
	var inputuser=$("#username");
	var boton = $("#botonBuscar");
	var espacionName = $("#espacioName")
	var URL = "https://api.github.com/users/"

	boton.on("click",function(e){
		// if (e.which==13) { Validar si la tecla presionada es el enter
			boton.css("background","red")
			if (username!== "") {
				username = $(inputuser).val().trim().toLowerCase();/*Obtener el usuario quitarle los espacios, convertirlo en minusculas y validar que el campo no este vacio*/
				var XHR = new XMLHttpRequest();/*Objeto de js backend*/
				var URLUser = URL+username
				XHR.open("GET",URLUser)
				XHR.onreadystatechange=function(){/*Esta funcion sejecuta cada vez que la peticion cambia de estado*/
					if (XHR.readyState===4) {/*Si esta propiedad se encuentra en estado cuatro es por que ya finalizo la peticion*/
						var data = JSON.parse(XHR.responseText)	/*Capturamos la respuesta en una variable data,recordar que la respuesta de la peticion se almacena en una propiedad response text, y la convertimos en un objeto js ya que viene en un JSON*/
						if (data.message && data.message=="not found") { /*Validar si existe un mensaje y si ese mensaje es igual a not found(extraviado), la alerta, si no traigame todos los datos respectivos a los campos del DOM*/
							alert("El nombre ingresado no existe en github")

						}else{
							$("img").attr("src",data.avatar_url) /*Llenar en los campos los datos respectivos del usuario del github*/
							$(espacioName).text("Bienvenido señor " + data.name);
							$(".name").text(data.name)
							$(".username").text(data.login)
							$(".email").text(data.email)
							$(".company").text(data.company)
							$(".location").text(data.location)
							$(".followers").text(data.followers)
							boton.css("background","green")
						}
					}
				}
			XHR.send(null)/*le pasamos como parametro ya que no necesitamos enviarle ningun tipo de dato a github*/
			}
			else{
				alert("Debe ingresar nombre de usuario");
			}
		// }
	})

})
