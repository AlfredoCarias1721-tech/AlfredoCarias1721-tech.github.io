// ==========================================================================
// BÓVEDA DE APUNTES - BASE DE DATOS
// Agrega tus nuevos apuntes copiando el bloque delimitado por llaves { ... }
// Usa formato Markdown (**) para negritas, (##) para títulos y (```) para código.
// ==========================================================================

const misApuntes = [
    {
        id: 1,
        titulo: "Manipulación Segura de Archivos",
        categoria: "Python",
        fecha: "2026-05-31",
        resumen: "Script para automatizar la lectura de archivos de texto línea por línea.",
        contenido: `
## Automatización de Lectura
Es fundamental usar el bloque \`with\` al abrir archivos para garantizar que se cierren automáticamente, incluso si ocurre un error o excepción.

### Ejemplo Práctico:
\`\`\`python
def procesar_bitacora(ruta_archivo):
    try:
        with open(ruta_archivo, 'r', encoding='utf-8') as archivo:
            for linea in archivo:
                datos = linea.strip()
                print(f"[PROCESADO]: {datos}")
    except FileNotFoundError:
        print("[ERROR]: El archivo no existe.")

procesar_bitacora("datos.txt")
\`\`\`

**Nota:** Siempre verifica el \`encoding='utf-8'\` para evitar problemas con tildes.
`
    },
    {
        id: 2,
        titulo: "Comandos Base de Reconocimiento",
        categoria: "Ciberseguridad",
        fecha: "2026-05-31",
        resumen: "Uso de Nmap para mapeo de red y detección de puertos.",
        contenido: `
## Escaneo con Nmap
Nmap es vital para la fase de reconocimiento. Aquí los comandos que más utilizo:

* **Escaneo Rápido (Top 100 puertos):** \`nmap -F 192.168.1.100\`
* **Detección de Versiones y SO:** \`nmap -sV -O 192.168.1.100\`
* **Escaneo Sigiloso (SYN Scan):** \`sudo nmap -sS 192.168.1.100\`

> Requiere privilegios de administrador para alterar los paquetes de red a bajo nivel.
`
    }
];
