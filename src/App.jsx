// src/App.jsx
import './App.css'; // Si tienes estilos generales
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>Parques de atracciones</h1>
      <div className="card-container">
        <Card
          title="Disneyland"
          description="Un gran parque de atracciones con temática de disney."
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Sleeping_Beauty_Castle_Disneyland_Anaheim_2013.jpg/1200px-Sleeping_Beauty_Castle_Disneyland_Anaheim_2013.jpg" // Usa tu propia imagen aquí
        />
        <Card
          title="Universal’s Islands of Adventure"
          description="Es un parque temático en Orlando, Florida, parte de Universal Orlando Resort."
          image="https://blog.discoveruniversal.com/wp-content/uploads/2017/12/Universals-Islands-of-Adventure.jpg" // Usa tu propia imagen aquí
        />
      </div>
    </div>
  );
}

export default App;
