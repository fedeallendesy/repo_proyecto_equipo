## Explicación del Proceso 

1. Cargué el archivo CONSOLIDADO.xlsx. 

2. Instalé Altair para hacer las gráficas, pegando el siguiente código: !pip install altair vl-convert-python 

3. Seleccioné las columnas clave relacionadas con la identificación de rutas (Código Usuario, Unidad de Negocio), ubicación geográfica (TIPO_ZONA) y métricas de rendimiento (FREC_PUNTA, FREC_VALLE), lo anterior lo junté en una sola tabla limpia. 

4. Usé Altair de Python para crear un gráfico de dispersión interactivo que permite comparar visualmente el comportamiento de las rutas en diferentes periodos. 

5. Primero hice creé el dibujo, después mostré la gráfica y al final la guardé como una página web (HTML).

- En esta parte me demoré bastante, porque tuve que darle varias instrucciones a Altair para que se entienda de mejor manera la gráfica. Por ejemplo le pedí que en vez de que diga Código de Usuario en la tabla de cada punto, aparezca Código de bus, para que sea más fácil de entender. 
- Lo mismo con FREC_PUNTA y FREC_VALLE que los reemplacé por Frecuencia Punta y Frecuencia Valle. 

## Base CSV

1. Seleccioné el conjunto de datos de frecuencias y capacidades porque permite medir directamente la calidad del servicio percibida por el usuario (tiempo de espera) 

2. Filtré los datos para centrarnos en la comparativa Punta vs Valle, limpiando columnas de horarios específicos que ya estaban consideradas y resumidas en los índices finales.  

3. También limpié datos que estaban vacíos y que en un principio aparecían como NaN en la tabla de cada punto de la gráfica

## Preguntas que responde la visualización 

* ¿Qué zonas de la ciudad tienen los servicios de transporte más frecuentes? 

* ¿Existe una reducción desproporcionada del servicio en zonas periféricas durante las horas valle en comparación con las zonas centrales? 

* ¿Qué rutas específicas presentan el peor desempeño en términos de regularidad? 

* ¿Hay una disminución muy grande de frecuencia en los buses durante el horario valle?

 