
# Seguros TK_U

## Pasos Para Resolver El Problema

1. Se prepara *precio* del plan base.
2. Se prepara un valor de *recargo* que inicia en 0 e ira cambiando con forme avance el proceso.
3. Se solicita  edad, nombre y estado civil del asegurado.
    1. Si NO es mayor de Edad, entonces terminar el proceso, sino entonces aplicar cargo segun requerimiento de edad y sumar el cargo al valor de *recargo*, despues continuar al siguiente paso.
    2. Si es casado, se solicita edad del conyugue y en base a la edad se aplica el cargo *extra* segun el requerimiento del cliente, El cargo se suma al valor original de *recargo*.
    3. Si tiene hijos entonces se solicita el numero de hijos a asegurar y se aplica el cargo *extra* por cada hijo y se suma al valor de *recargo*.
4. Se solicita el salario del asegurado y si tiene propiedades
    1. Se aplica cargo extra sobre el salario del asegurado sobre el sueldo del asegurado - 5% y se suma al *recargo*.
    2. Se aplica cargo extra por propiedad del asegurado sobre el valor de la cotizacion - 35% y se suma al *recargo*.
5. Finalizar proceso mostrando precio del plan, *recargo* total y precio final, del asegurado.
6. Se solicita la palabra "Salir" para terminar el proceso, sino entonces regresar al Paso 1 y empezar de nuevo.