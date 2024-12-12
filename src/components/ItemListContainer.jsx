

// Componente que recibe la prop 'name'
 const ItemListContainer = (props) => {
  return (
    <section className='greeting'>
      <h1>¡Bienvenido, {props.name}!</h1>
      <p>Esperamos que disfrutes tu experiencia.</p>
      </section>
  );
};

// Componente principal donde se pasa el valor de la prop
const App = () => {
  return (
    <div>
      <ItemListContainer name="Juan" />
      <ItemListContainer name="María" />
    </div>
  );
};

export default App; 