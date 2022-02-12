# SEGUROS TK_U

La empresa de seguros TK-U, ubicada en la ciudad Jedha, realiza cientos de 
cotizaciones a diario para sus posibles clientes/asegurados. El inconveniente que se 
tiene hasta la fecha es que las cotizaciones se realizan de forma manual, lo cual hace 
que las personas pierdan mucho tiempo y que se generen como máximo 50 
cotizaciones al día.

## Analisis
Debido a que el proceso de creacion de cotizaciones es manual hay retrasos en entregas, se pierden clientes por la espera, hay un limite de cotizaciones creadas al dia que no dependen del proceso sino del tiempo empleado.

## Puntos Debiles Observados

    - Cotizacion Manual
    - Perdida de Tiempo al Crear las Cotizacines
    - Maximo 50 Cotizaciones
    - Atraso en Entregas
    - Perdida de Clientes

El proceso puede ser automatizado pero deben ser tomados en cuenta nuevos requerimientos para evitar errores durante la creacion de cotizaciones.

## Requerimientos del Cliente

- Plan Base Con Recargos:
    - El Asegurado *Debe* Ser Mayor de Edad
    - Estado Civil y ***Si aplica*** Edad Del Conyugue
        ### Recargos para asegurado y conyugue de forma Individual ***Unico Recargo obligado - Asegurado por ser mayor de edad***
        **Rango de Edad para Calculo**
        - Entre 18 y 24 10% recargo precio base  
        - Entre 25 y 49 20% recargo   "      "
        - 50 o más 30%         "      "      "        
        *Todos los recargos son acumulativos*
    - Cantidad de hijos
        - Recargo de 20% por cada hijo que se desee asegurar

Existen otros requerimientos presentados por el cliente que pueden o no implementarse dependiendo de la capacidad tecnica.

## Consideraciones Para Cambio de Cotizacion
- Recargos en base a cantidad de propiedades e ingresos



