# Mi Documentación de Entrega - Federico Allendes

## Mi Metodología y Proceso
1. **Carga:** Utilicé el archivo `Subidas_Paradero_Estacion_2025.11.xlsx` y lo procesé íntegramente en Python usando Google Colab.
2. **Filtrado:** Seleccioné personalmente las comunas de Maipú, Puente Alto, Santiago y Las Condes, ya que me permitían contrastar realidades socioeconómicas distintas. Acoté los datos a días de tipo `LABORAL`.
3. **Limpieza:** Promedié las validaciones por bloque horario y modo de transporte. Decidí convertir la variable temporal a texto para asegurar que la visualización en Altair fuera fluida y sin errores de formato.
4. **Visualización:** Generé un gráfico de líneas interactivo donde busqué validar mi hipótesis sobre la desigualdad en los tiempos de viaje y flujos de la capital.

## Mis archivos de entrega
* `datos_cuatro_comunas.csv`: Mi base de datos filtrada.
* `visualizacion/vis_cuatro_comunas.html`: Mi gráfico interactivo original.
* `scripts/codigo_para_visualizar_1.ipynb`: El script que escribí para el procesamiento.

## Mi Hipótesis
Sostengo que la infraestructura y los horarios de mayor flujo en Santiago reflejan un sesgo socioeconómico evidente. En mi investigación, demuestro que las comunas periféricas inician su actividad mucho antes y con mayor carga que el sector oriente.