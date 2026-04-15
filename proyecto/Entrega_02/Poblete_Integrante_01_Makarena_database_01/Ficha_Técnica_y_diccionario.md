# Ficha técnica y diccionario de datos [Individual | formato Markdown]

### Fuente de los datos: Dirección de Transporte Público Metropolitano 

Metodología de la construcción de la base: Se basa en el procesamiento y cruce de datos de parámetros "frecuencia y capacidad”, usando las variables de las hojas “Frec” y “Cap” del archivo consolidado.   

### Alcance de los datos:  

* El archivo analiza 870 recorridos de buses tanto su trayecto de Ida como el de retorno.  

* Para cada uno de los 870 servicios, el archivo mide cuántos buses pasan por hora en cada franja horaria y su capacidad, es decir, cuántas plazas (asientos y espacios de pie) se ofrecen. 

* El análisis divide el día en 12 periodos específicos para capturar el comportamiento real del tráfico. 

### Característica de los datos: 

La información se organiza mediante tablas de frecuencias de buses por hora, detallando el rendimiento de diversas unidades de negocio y códigos de usuario.  

### Otras observaciones que tengan sobre la base: 

Ninguna. 

### Diccionario de datos, tabla con el nombre de cada variable, su descripción, tipo de dato, valores posibles y observaciones editoriales (si aplica): 

Los datos especifican la programación según el sentido del viaje, ya sea de ida o retorno, y clasifican la oferta de servicios en distintos periodos del día. Los datos parecen ser recogidos el 21 de marzo de 2026 por el nombre del archivo.  

| **Variable** | **Descripción** | **Tipo de dato** | **Valores posibles** | **Observaciones** |
| ------------- | ------------- | ------------- |------------- |:-------------:|
| **UN** | Unidad de Negocio (Zona de operación) | Numérico entero | 2, 3, 4, 5, 8-16, 18, 19. | Identifica a la empresa operadora y su zona geográfica principal |
| **Cod_TS** | Código Técnico del Servicio | Alfanumérico | Ej: 211, 217e, G02 | Identificador único del recorrdio en el sistema técnico |
| **Cod_Usuario** | Código Comercial del Servicio | Alfanumérico | Ej: G02, 303, 211 | Es el número que ven los pasajeros en el bus. |
| **Sentido** | Dirección del recorrido | Texto | Ida, Ret | Indica si el bus va a hacia el destino o regresa al origen. |
| **Tipo** | Clasificación del tipo de servicio | Numérico/Texto | 1,2 (vacío) | Indica si es servicio regular, nocturno o especial. |
| **FREC_PUNTA** | Frecuencia promedio en hora punta | Numérico (decimal) | 0,0 - 25,0 | Promedio de buses por hora en los periodso de mayor demanda. |
| **FREC_VALLE** | Frecuencia promedio en hora valle | Numérico (Decimal) | 0.0 - 20.0 | Promedio de buses por hora en periodos de menor demanda. |
| **CAP_POR_BUS_PUNTA** | Capacidad de plazas por bus | Numérico | 90, 100, 105 | Indica el tamaño del bus usado: 90 = estándar, >100 = articulado. |
| **TIPO_ZONA** | Clasificación geográfica del servicio | Texto | Central, Semi-Central, Periférica | Categoriazión basada en la UN para validar la hipótesis|

