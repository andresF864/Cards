// src/App.jsx
import './App.css'; // Si tienes estilos generales
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>Estadios de Futbol</h1>
      <div className="card-container">
        <Card
          title="Estadio Santiago Bernabeu"
          description="La casa del club mas grande del mundo, El Real Madrid CF."
          image="https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--859d7ffa-751b-4ca5-a636-4d83642b2c32/_330838956259.app.webp?preferwebp=true" // Usa tu propia imagen aquí
        />
        <Card
          title="El Camp Nou"
          description="Hogar del FC Barcelona cuna del que para muchos es el mejor jugador de futbol en la historia"
          image="https://www.fcbarcelona.com/photo-resources/2021/08/09/276ad270-e5c6-453d-8d9f-212417ad7cb3/Camp-Nou-3.jpg?width=1200&height=750" // Usa tu propia imagen aquí
        />
      </div>
    </div>
  );
}

export default App;
