# 🔮 Tarot-App - Proyecto de Lectura Interactiva 🔮

## 🌟 Sobre esta aplicación

**Tarot-App** es una aplicación interactiva que permite realizar una lectura de cartas en formato **Pasado, Presente y Futuro**.  
El usuario puede seleccionar cartas al azar.  
Cada carta se revela con un efecto visual y, al hacer clic sobre una carta ya revelada, aparece una ventana modal que muestra su significado y detalles asociados.

Esta aplicación busca brindar una experiencia mística, atractiva y dinámica para quienes disfrutan del Tarot.

## 🎯 Características principales

- **Selección de cartas**: Opción manual o aleatoria de 3 cartas.  
- **Cartas interactivas 3D**: Efecto flip al revelar cada carta.  
- **Modal interactiva**: Información detallada del arcano al hacer clic sobre la carta revelada.  
- **Diseño responsivo**: Compatible con dispositivos móviles y escritorio.  
- **Flujo guiado**: Preparación → Selección → Revelación → Resumen de lectura.  

## 🛠️ Tecnologías utilizadas

### React 19
- Componentes reutilizables y dinámicos.  
- Manejo de estado con `useState`.  
- Navegación entre páginas con **React Router DOM 7**.  

### Vite
- Entorno de desarrollo moderno y optimizado.  
- Servidor de desarrollo rápido y configuración ligera.  

### CSS3
- **Efectos visuales avanzados**: Animaciones de flip para cartas.  
- **Layout responsivo**: Adaptación automática a diferentes pantallas.  
- **Sombras y transiciones**: Estética inmersiva.  

## 🎨 Técnicas de diseño implementadas

### Efectos 3D
```css
.card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card.flipped {
  transform: rotateY(180deg);
}
Modal interactiva

Ventana emergente para mostrar significado de cada carta.

Bloqueo de scroll del fondo al abrirse.

Botón de cierre accesible.

📚 Librerías y recursos utilizados
Librerías JavaScript

React 19

React Router DOM 7

Vite

Recursos multimedia

Imágenes: Ilustraciones de cartas del Tarot.

Iconografía: Emojis para representar posiciones (🕰️ Pasado, 🌟 Presente, 🔮 Futuro).

Recursos de diseño

Paleta de colores: Tonos oscuros y místicos.

Animaciones CSS: Transiciones suaves en la revelación de cartas.

🎯 Funcionalidades destacadas
Sistema de lectura de cartas

Selección manual o aleatoria.

Revelación progresiva con animaciones.

Resumen final de la tirada.

Modal de significado

Información textual sobre arcano, número y diosa asociada.

Descripción resumida con posibilidad de expandirse en vistas de detalle.

Experiencia de usuario

Interfaz intuitiva y clara.

Flujo guiado paso a paso en la lectura.

Estética inmersiva para simular una experiencia de Tarot real.

✨ Si hubiera tenido más tiempo...

Me habría gustado implementar:

Animaciones adicionales:

Partículas mágicas flotantes.

Efectos de aura en torno a las cartas.

Más interactividad:

Música ambiental relajante.

Sonidos místicos al revelar una carta.

Optimización extra:

Lazy loading de imágenes.

Más efectos responsivos en pantallas pequeñas.

🎨 Inspiración de diseño

El diseño se inspiró en:

Estética mística y esotérica del Tarot tradicional.

Juegos de cartas coleccionables con animaciones 3D.

Experiencias digitales de adivinación y horóscopos.

🚀 Instrucciones de instalación
# 1. Clonar el repositorio
git clone <URL-del-repositorio>

# 2. Entrar en la carpeta del proyecto
cd Proyectos

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev


La aplicación estará disponible en: http://localhost:5173/

🔗 Estructura de archivos
tarot-app/
├── public/
│   └── assets/ (imágenes e íconos)
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── CardList.jsx
│   │   ├── Modal.jsx
│   │   └── TarotReading.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Detail.jsx
│   │   └── Reading.jsx
│   ├── routes/
│   │   └── enrutador.jsx
│   ├── services/
│   │   └── services.js
│   ├── styles/
│   │   ├── *.css
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md

💝 Agradecimientos

React: Por la construcción modular y dinámica de la aplicación.

Vite: Por el entorno de desarrollo veloz.

Freepik / recursos gráficos: Por ilustraciones y recursos visuales.

Bootcamp: Por el espacio de aprendizaje y colaboración.

Esta aplicación forma parte de un proyecto académico, creado con 💜 para explorar la magia del Tarot en el mundo digital.
