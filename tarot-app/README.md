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
} Efectos 3D
```

## Modal interactiva

- Ventana emergente con título y texto explicativo.  
- Bloqueo de scroll del fondo mientras está activa.  
- Botón accesible para cerrar.  

## 📚 Librerías y recursos utilizados

### Librerías JavaScript
- **React 19**  
- **React Router DOM 7**  
- **Vite**  

### Recursos multimedia
- **Imágenes**: Ilustraciones de cartas del Tarot.  
- **Iconografía**: Emojis para representar posiciones (🕰️ Pasado, 🌟 Presente, 🔮 Futuro).  

### Recursos de diseño
- **Paleta de colores**: Tonos oscuros, violetas y dorados para un estilo místico.  
- **Sombras y brillos**: Para resaltar las cartas al revelarlas.  
- **Transiciones CSS**: Para la interacción de cartas y modal.  

## 🎯 Funcionalidades destacadas

### Sistema de lectura de cartas
- Selección manual o aleatoria.  
- Revelación progresiva de cartas con animación 3D.  
- Resumen final de la tirada.  

### Modal de significado
- Muestra el nombre del arcano, número y descripción.  
- Información adicional sobre la diosa asociada.  
- Texto resumido y visualización clara.  

### Experiencia de usuario
- Flujo intuitivo y guiado paso a paso.  
- Animaciones inmersivas.  
- Interfaz atractiva con iconografía temática.  

## ✨ Si hubiera tenido más tiempo...

Me habría gustado implementar:  

- **Más animaciones con JavaScript**:  
  - Efectos de partículas mágicas.  
  - Brillos dinámicos en las cartas.  
  - Transiciones más complejas entre pantallas.  

- **Experiencia multimedia**:  
  - Música ambiental relajante.  
  - Sonidos místicos al revelar cartas.  

- **Interactividad avanzada**:  
  - Posibilidad de guardar tiradas anteriores.  
  - Compartir lecturas en redes sociales.  

- **Optimización**:  
  - Lazy loading de imágenes.  
  - Mayor soporte para pantallas pequeñas.  

## 🎨 Inspiración de diseño

El diseño se inspiró en:  
- Barajas tradicionales del Tarot y su iconografía.  
- Juegos de cartas con animaciones 3D.  
- Estética esotérica y mágica en interfaces digitales.  

🚀 **Instrucciones de instalación**

## 1. Clonar el repositorio
```bash
git clone <URL-del-repositorio>
```
2. Entrar en la carpeta del proyecto
```bash
Copiar
Editar
cd Proyectos
```
3. Instalar dependencias
```bash
Copiar
Editar
npm install
```
4. Iniciar el servidor de desarrollo
```bash
Copiar
Editar
npm run dev
```
La aplicación estará disponible en: http://localhost:5173/

## 🔗 Estructura de archivos
 
```bash
tarot-app/
├── public/
│ └── assets/ (íconos e imágenes)
├── src/
│ ├── components/
│ │ ├── Card.jsx
│ │ ├── CardList.jsx
│ │ ├── Modal.jsx
│ │ └── TarotReading.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Detail.jsx
│ │ └── Reading.jsx
│ ├── routes/
│ │ └── enrutador.jsx
│ ├── services/
│ │ └── services.js
│ ├── styles/
│ │ ├── *.css
│ ├── App.jsx
│ └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```


## 💝 Agradecimientos

- **React**: Por la modularidad en la construcción de la app.  
- **Vite**: Por la rapidez en el desarrollo.  
- **Recursos gráficos online**: Por las imágenes de cartas.  
- **Bootcamp**: Por el aprendizaje y la guía en el desarrollo del proyecto.  

---

Esta aplicación forma parte de un proyecto académico, creada con 💜 para llevar la magia del Tarot al mundo digital.  
