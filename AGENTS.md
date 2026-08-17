# Guía de Desarrollo - Envios Dosruedas

## Arquitectura y Stack
- **Framework:** Next.js 15 (App Router)
- **UI:** React 19 + Tailwind CSS v4
- **Base de Datos:** Firebase Firestore (Exclusivo)
- **IA:** Genkit (Server Actions)
- **Gestión:** pnpm (Exclusivo)

## Reglas del Design System (Estrictas)

### Paleta de Colores
Queda estrictamente prohibido el uso de colores genéricos de Tailwind (slate, zinc, gray, etc.). Utilizar únicamente los tokens del proyecto:
- **Azul (Primary):** `#0636A5` -> `brand-blue` (Mapeado a `primary`)
- **Amarillo (Accent):** `#FFEC01` -> `brand-yellow` (Mapeado a `secondary` / `accent`)
- **Blanco (Surface):** `#FFFFFF` -> `brand-white` (Mapeado a `background`)

### Jerarquía Tipográfica
1. **font-headline:** `Anton SC` (Para H1, H2 y elementos de impacto visual. Siempre Uppercase).
2. **font-subheading:** `Bebas Neue` (Para subtítulos, etiquetas, insignias y botones secundarios).
3. **font-body:** `Outfit` (Para texto de cuerpo, lecturas largas y UI general).

## Comandos Críticos
- `pnpm run build`: Verificación de compilación.
- `pnpm run lint`: Verificación de estilos y errores estáticos.
- `pnpm dev`: Servidor de desarrollo.
- `pnpm test`: Ejecución de pruebas.

## Restricciones
- No utilizar estilos inline (`style={{}}`) para colores o fuentes.
- No instalar Prisma (uso exclusivo de Firebase SDK).
- Todo código de Firebase debe residir en `src/firebase/`.
