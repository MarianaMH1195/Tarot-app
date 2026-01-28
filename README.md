# Portal del Destino - Tarot Interactivo

## Sobre esta aplicación

**Portal del Destino**es una experiencia mística digital que permite conectar con tu futuro a través de los arcanos.
La aplicación ofrece una lectura interactiva en formato **Pasado, Presente y Futuro**, envuelta en una atmósfera inmersiva de "Espacio Profundo" y estética Noir.

## Características principales

- **Experiencia Inmersiva**: Fondo 3D interactivo con constelaciones y nubulosas (Three.js).
- **Animaciones Cinemáticas**: Barajado realista y efectos de cartas con Anime.js.
- **Estética Premium**: Diseño "Noir/Monochrome" con tipografías elegantes (Cinzel, Garamond) y efectos de vidrio (Glassmorphism).
- **Lectura Intuitiva**: Selección manual de cartas con reverso interactivo.
- **Interpretación Profunda**: Modales detallados con significados y arquetipos de diosas contemporáneas.

## Tecnologías utilizadas

### Core
- **React 19**: Framework principal para componentes dinámicos.
- **Vite**: Build tool de última generación.
- **React Router DOM 7**: Navegación SPA fluida.

### Gráficos y Animación
- **Three.js**: Renderizado de fondo espacial 3D (Estrellas, Nebulosas, Constelaciones).
- **Anime.js**: Motor de animaciones complejas para el mazo de cartas.

### Diseño
- **CSS3 Moderno**: Variables CSS para temas, Flexbox/Grid, y efectos de Backdrop-filter.
- **Diseño Responsivo**: Adaptable a móviles y escritorio.

## Estética "Noir & Deep Space"

El diseño ha evolucionado hacia una identidad visual sofisticada:
- **Paleta Monochrome**: Negro Puro, Carbón, Plata y Pergamino.
- **Atmósfera Espacial**: Un fondo vivo que respira, con estrellas parpadeantes y profundidad cósmica.
- **Interfaz Minimalista**: Elementos semitransparentes que flotan sobre el universo.

## Instrucciones de instalación

1. Clonar el repositorio
```bash
git clone <URL-del-repositorio>
```
2. Entrar en la carpeta del proyecto
```bash
cd Tarot
```
3. Instalar dependencias
```bash
npm install
```
4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

## Despliegue

La aplicación se despliega automáticamente en GitHub Pages.
**Ver Demo en vivo**: [https://MarianaMH1195.github.io/Tarot-app/](https://MarianaMH1195.github.io/Tarot-app/)

## Estructura del Proyecto

```bash
Portal-del-Destino/
├── public/
│ ├── logo.svg          # Nuevo logo "Portal"
│ └── assets/
├── src/
│ ├── components/
│ │ ├── Card.jsx        # Carta individual interactiva
│ │ ├── CardList.jsx    # Grid de cartas
│ │ ├── Modal.jsx       # Detalle de la carta
│ │ ├── Navbar.jsx      # Navegación principal
│ │ ├── TarotReading.jsx # Lógica de la lectura (Mesa de trabajo)
│ │ └── ThreeBackground.jsx # Fondo 3D (Three.js)
│ ├── pages/
│ │ ├── HomePage.jsx    # Landing page "Portal del Destino"
│ │ ├── ReadingPage.jsx # Página de lectura
│ │ └── NotFound.jsx
│ ├── services/
│ │ └── services.js     # Lógica de negocio / API simulada
│ ├── styles/
│ │ ├── globals.css     # Variables y estilos bases (Theme Noir)
│ │ └── *.css           # Estilos por componente
│ ├── App.jsx           # Layout principal
│ └── main.jsx          # Punto de entrada
├── package.json
└── README.md
```

## Agradecimientos

- **Factoría F5**: Por el impulso educativo.
- **Comunidad Open Source**: Por herramientas increíbles como Three.js y Anime.js.

---

*"La puerta a tu futuro"* - **Portal del Destino**
