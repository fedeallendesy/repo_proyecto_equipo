# Ficha Técnica y Diccionario de Datos

## 1. Fuente de los Datos
* **Origen:** Sistema de Transporte Público Metropolitano.
* **Documento original:** `11-Consolidado-Parametros-2026-03-21.xlsx`.

## 2. Metodología de Construcción
La base se construyó ingestando el archivo Excel original con Python (Pandas). Se tomó la muestra del periodo "21Mar al 31Dic" y se filtró exclusivamente para Días Laborales (Lunes a Viernes). Se utilizó `melt` para transponer los horarios a formato "Tidy Data" y se unieron Frecuencia y Velocidad con un `merge`. Los valores numéricos fueron redondeados a 1 decimal.

## 3. Diccionario de Datos
| Variable | Descripción | Tipo de Dato |
| :--- | :--- | :--- |
| `UN` | Unidad de Negocio (Empresa operadora). | Numérico |
| `Servicio` | Nombre comercial del recorrido. | Texto |
| `Sentido` | Dirección del trazado (Ida, Ret). | Texto |
| `Periodo` | Franja horaria de Día Laboral (PMA, PMD, NOC, etc). | Texto |
| `Frecuencia_buses_hr` | Frecuencia programada (buses/hora). | Numérico |
| `Velocidad_kmh` | Velocidad comercial exigida (km/h). | Numérico |
