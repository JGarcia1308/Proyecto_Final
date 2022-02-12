//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%

var propiedad_35 = 0.35 //35%
var sueldo_5 = 0.05 //5%

//Variable de Salida de programa
var salir = false

//Repite el programa mientras la condicion se cumpla
do {
  //Recargo
  var recargo = 0  
  var recargo_total = 0

  //Precio final 
  var precio_final = 0

  //Mensajes de alerta para ingresar datos 
  var nombre = prompt("Ingrese su nombre, por favor")
  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
  if(parseInt(edad) < 18){
    alert("El Asegurado debe ser mayor de edad para continuar")
  }else{
    var casado = prompt("¿Está casado actualmente?", "si/no")
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge
    if("SI" == casado.toUpperCase()){
      edad_conyuge = prompt("¿Que edad tiene su esposo/a? Ingrese solamente números")
    }
    //convirtiendo las edades ingresadas a números 
    var edad_numero = parseInt(edad)
    var edad_conyuge_numero = 0
    //convirtiendo la edad del cónyuge si se esta casado/a
    if("SI" == casado.toUpperCase()){
      edad_conyuge_numero = parseInt(edad_conyuge)
    }

    var hijos = prompt("¿Tiene hijos o hijas?", "si/no")  
    //Comprobamos la cantidad de hijos solamente si los tienen
    if("SI" == hijos.toUpperCase()){
      var cantidad_hijos = prompt("Cantidad de hijos que desea asegurar, Ingrese solamente números")
    /**
     * 1. convierta la cantidad de hijos a numero
     */
    parseInt(cantidad_hijos)
    /**
     * 3. Recargo por la cantidad de hijos 
     */ 
    //Calculamos el recargo en base a la cantidad de hijos 
    recargo = precio_base * hijos_recargo * cantidad_hijos
    //Sumamos todos los recargos que hemos obtenido
    recargo_total = recargo_total + recargo
    }  

    var sueldo = parseInt(prompt("Total de Sueldo Asegurado, Ingrese solamente números"))
    //Aquí debe calcular el recargo total basado en las respuestas ingresadas
    //Aquí es donde debe de calcular los recargos y el valor final
    //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
    if(edad_numero>=18 && edad_numero<25){
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_18
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }
    //aqui puede colocar un else if() con el siguiente rango
    else if(edad_numero>=25 && edad_numero<50){
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_25
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }
    else if(edad_numero>=50){
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_50
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }
    /** 
     * 2. Recargo por la edad del conyuge
     */
    if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_18
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }
    //aqui puede colocar un else if() con el siguiente rango
    else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_25
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }
    else if(edad_conyuge_numero>=50){
      //Calculamos el recargo en base a la edad 
      recargo = precio_base * edad_50
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }    
    /**
     * Recargo sobre Sueldo
     */
     recargo_sueldo = precio_base * sueldo_5
     recargo_total = recargo_total + recargo_sueldo 
    /**
     * Recargo por Propiedades
     */
     
    //Obtenemos el total de propiedades del asegurado
     var propiedad = prompt("¿Tiene Propiedades?", "si/no")    
    //Si las tiene aplicamos un regargo por cada propiedad    
    if("SI" == propiedad.toUpperCase()){
      //Obtenemos el total de propiedades
      var propiedad2 = parseInt(prompt("Cuantas propiedades posee?"))
      //Hacemos el calculo del recargo por cada propiedad
        recargo_propiedad = precio_base * propiedad_35 * propiedad2
        recargo_total = recargo_total + recargo_propiedad
      //Calculamos Precio Final más el regargo de propiedad si aplica
      precio_final = precio_base + recargo_total
    }else{
      //Calculamos Precio Final igual al precio base más el total de recargos 
      precio_final = precio_base + recargo_total
    }
    
    //Resultado
    alert ("Para el asegurado "+nombre)
    alert ("El recargo total sera de: "+recargo_total)
    alert ("El precio sera de: "+precio_final)

    //Salir del Programa
    var sal = prompt("Escriba 'Salir' para terminar el ingreso o deje en blanco para continuar")
    //Extra - Verifica si se escribe la palabra "Salir" para terminar o no el programa    
    if("SALIR" == sal.toUpperCase()){
      salir = true
    }
  }
} while (salir == false);