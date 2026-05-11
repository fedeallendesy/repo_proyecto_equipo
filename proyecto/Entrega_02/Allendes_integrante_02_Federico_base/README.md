# Historial de Procesos y Decisiones (Documentación)

## Introducción al Proceso
Documento que detalla la metodología para transformar un Excel operacional en una base de datos limpia. El proceso se realizó en Python (Google Colab) garantizando su replicabilidad.

## Decisiones Editoriales y Técnicas
1. **Doble Reducción de Muestra (Aislamiento Laboral):** Primero, me enfoqué en el periodo del "21 de Marzo al 31 de Diciembre" para descartar el verano. Segundo, apliqué un filtro para eliminar sábados y domingos, aislando los 12 periodos horarios del Día Laboral para no desvirtuar los promedios de la hora punta.
2. **Evasión de Encabezados Sucios:** Captura de datos reales desde la fila 5 para evadir celdas combinadas de Excel, usando `header=None`.
3. **Reestructuración Dimensional (Melt):** Transposición de columnas horarias a un formato estandarizado *Tidy Data*.
4. **Manejo de Nulos:** Vacíos nocturnos transformados a `0` (`fillna(0)`).
5. **Corrección Regional de Exportación:** Se configuró el volcado de datos utilizando coma como separador decimal (`decimal=','`) y punto y coma como separador de columnas (`sep=';'`). Esto garantiza que la base sea compatible de forma nativa con software ofimático configurado en español.

## Preguntas a Responder (Hipótesis)
1. **Análisis de Congestión Matutina:** Al aislar el día laboral, ¿Qué recorridos sufren la mayor caída de velocidad comercial al pasar del horario valle (PMD) a la hora Punta Mañana (PMA)?
2. **Buses Fantasma en la Noche:** ¿Qué porcentaje de los recorridos reduce su frecuencia a cero (0) durante el periodo Pre-Nocturno (PRENOC1) un día de semana normal?
3. **Eficiencia por Sentido:** Durante la Punta Tarde (PTA1), ¿Existe una diferencia significativa de velocidad entre el sentido de "Ida" (hacia la periferia) y el "Retorno" (hacia el centro)?
