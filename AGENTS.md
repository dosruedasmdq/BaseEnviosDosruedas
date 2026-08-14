# Guía de Desarrollo - Envios Dosruedas

## Arquitectura y Stack
- **Stack:** Next.js 15 (App Router), React 19, Tailwind CSS v3, TypeScript.
- **Base de Datos:** Firebase Firestore (Exclusivo). No se permite Prisma ni otras bases de datos relacionales.
- **IA:** Genkit para flujos de Server Actions.
- **Gestor de Paquetes:** npm (estándar del proyecto).
- **Componentes:** shadcn/ui (basados en Radix).

## Reglas de UI (Design System)

### Paleta de Colores Oficial
Está estrictamente prohibido el uso de colores genéricos de Tailwind (slate, zinc, gray, etc.). Utilizar únicamente los tokens definidos en `globals.css`:
- **Azul (Primary):** `#0636A5` -> `brand-blue-700` (Variables HSL: `222 93% 33%`)
- **Amarillo (Accent/Secondary):** `#FFEC01` -> `brand-yellow-500` (Variables HSL: `56 100% 59%`)
- **Blanco (Surface):** `#FFFFFF` -> `brand-white-50` (Variables HSL: `0 0% 100%`)

### Tipografía
- **Anton SC:** Para Display, H1 y H2 (Mayúsculas obligatorias).
- **Bebas Neue:** Para subtítulos, etiquetas y insignias (Badges).
- **Outfit:** Para texto de cuerpo y UI general.
- **Monospace:** Para métricas y datos técnicos.

## Comandos Críticos
- `npm run build`: Verificación de compilación.
- `npm run lint`: Verificación de estilos y errores estáticos.
- `npm run dev`: Servidor de desarrollo.
