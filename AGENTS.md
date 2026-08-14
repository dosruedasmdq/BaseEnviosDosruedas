# Guía de Desarrollo - Envios Dosruedas

## Arquitectura y Stack
- **Framework:** Next.js 15 (App Router)
- **UI:** React 19 + Tailwind CSS v3
- **Base de Datos:** Firebase Firestore (Exclusivo)
- **IA:** Genkit (Server Actions)
- **Gestión:** npm (Estándar del proyecto)

## Reglas del Design System (Estrictas)

### Paleta de Colores
Queda estrictamente prohibido el uso de colores genéricos de Tailwind (slate, zinc, gray, etc.). Utilizar únicamente los tokens del proyecto:
- **Azul (Primary):** `#0636A5` -> `brand-blue` (HSL: `222 93% 33%`)
- **Amarillo (Accent):** `#FFEC01` -> `brand-yellow` (HSL: `56 100% 50%`)
- **Blanco (Surface):** `#FFFFFF` -> `brand-white` (HSL: `0 0% 100%`)

### Jerarquía Tipográfica
1. **font-display:** `Anton SC` (Para H1, H2 y elementos de impacto visual. Siempre Uppercase).
2. **font-subheading:** `Bebas Neue` (Para subtítulos, etiquetas, insignias y botones secundarios).
3. **font-body:** `Outfit` (Para texto de cuerpo, lecturas largas y UI general).

## Comandos Críticos
- `npm run build`: Verificación de compilación.
- `npm run lint`: Verificación de estilos y errores estáticos.
- `npm run dev`: Servidor de desarrollo (Puerto 9002).

## Restricciones
- No utilizar estilos inline (`style={{}}`) para colores o fuentes.
- No instalar librerías de estado global (Redux, etc.) sin previa autorización; priorizar hooks de React y Context API.
- Todo código de Firebase debe residir en `src/firebase/`.