# Historial de procesos y decisiones

### Explicación de cómo se realizó el proceso de limpieza de datos. Debe incluir una explicación de cada paso, las decisiones que tomaron en el camino y explicitar las herramientas que usaron. 

#### PASO 1 

Puse juntas en una sola hoja para poder compararlas fácilmente y ver dónde hay más hacinamiento.   
* Una con Frecuencia (cuántos buses pasan por hora)  
* Otra con Capacidad (cuántos asientos hay por hora)  

 

#### PASO 2 

Creé una hoja vacía con el nombre “CONSOLIDADO” 


 
#### PASO 3 

* Fui a la pestaña Frec(Mar al Dic).  

* Presioné Ctrl+A (selecciona todo)  

* Presioné Ctrl+C (copiar).  

* Fui a la pestaña Consolidado.  

* Presioné Ctrl+V (pegar) 

 

#### PASO 4 

* Copié todas las celdas de Cap(Mar al Dic) 

* Las pegué en la última fila vacía de la hoja CONSOLIDADO 

 

#### PASO 5: promedio de frecuencia en horas punta para cada servicio.  

* Hice columnas nuevas que calculen automáticamente: 

* Frecuencia en horas punta (cuando hay más gente)  

* Frecuencia en horas valle (cuando hay menos gente) 

Porque nuestra hipótesis es que en horas punta, especialmente en zonas periféricas, no hay suficientes buses. 

* Hice clic en la primera celda vacía de la fila. 

* Escribí: FREC_PUNTA.  

* Hice clic en la celda de abajo.  

* Escribí esta fórmula: =(I2+J2+P2+Q2)/4 

* Copié la fórmula para todas las filas 

 

#### PASO 6: Promedio de frecuencia en valle para cada servicio. 

* Hice clic en la celda BB (columna siguiente).  

* Escribí: FREC_VALLE.  

* Hice clic en BB2.  

* Escribí esta fórmula: =(K2+L2+M2)/3 

* Copié la fórmula para todas las filas. 

 

#### PASO 7: Índice para cada servicio. Número que me dirá si hay hacinamiento. Números altos = mucha presión en punta. 

* Hice clic en la celda BC.  

* Escribí: INDICE_PUNTA_VALLE.  

* Hice clic en BC.  

* Escribí esta fórmula: =BQ2/BR4 

* Copié esta fórmula para el resto de las filas 

 

#### PASO 8: Capacidad por Bus. Número que dice si usan buses grandes para compensar baja frecuencia. Números altos = buses grandes. Números bajos = buses estándar 

* Hice clic en la celda BD.  

* Escribí: CAP_POR_BUS_PUNTA.  

* Hice clic en BD.  

* Escribí esta fórmula: =AQ2/I2 

* Copié esta fórmula para todas las filas 

 

#### PASO 9: Clasificación por zona. Marcar cada servicio si es de zona Central o Periférica. Los servicios de UN 2 y 12= "Central". Los servicios de UN 3= "Semi-Central". Todos los demás = "Periférica".  

* Hice clic en la celda BE.  

* Escribí: TIPO_ZONA.  

* Hice clic en BE.  

* Escribí esta fórmula:  
=SI(0(A2=2, A2=12), “Central”, SI(A2=3, “Semi-Central”, “Periférica”)) 

* Copié esta fórmula para todas las filas 

 

#### PASO 10: Ordenar la tabla para ver cuáles servicios tienen más presión. Los servicios con más presión están arriba y muchos de estos son de zonas periféricas. 

* Hice clic en cualquier celda de la pestaña CONSOLIDADO. 

* Fui al menú Datos.  

* Hice clic en Ordenar.  

* En "Ordenar por", seleccioné: INDICE_PUNTA_VALLE.  

* Marqué "De mayor a menor" (para ver los más altos primero).  

 

#### PASO 11: Filtra para Comparar 

* En la pestaña Consolidado hice clic en la fila (la fila de encabezados).  

* Fui al menú Datos (arriba).  

* Hice clic en Autofiltro  

* Hice clic en la flecha ▼ de la columna TIPO_ZONA.  

 

### Lista de las fuentes de datos utilizadas y una explicación de por qué las eligieron:  

* 11-Consolidado-Parametros (hojas de Frec y Cap). Es valiosa esta fuente de datos porque podemos verificar si los índices periféricos son altos, si es se usan buses más grandes en periferias y si es que las zonas periféricas tienen más presión que las centrales. 


### Ejemplos sobre preguntas que se pueden responder con su base de datos limpia, mínimo tres (3). 
1. ¿Cuántas rutas operan en cada tipo de zona (Central, Periférica, Semi-Central)?
2. ¿Existe una diferencia significativa en la frecuencia de buses entre las rutas de zonas centrales y las periféricas?
3. ¿Qué unidades tienen mayor presencia en las zonas periféricas?

 