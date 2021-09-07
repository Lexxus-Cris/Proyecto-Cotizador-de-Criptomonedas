import { Contenedor, Imagen, Heading } from "./styles";
import image from './img/cryptomonedas.png';

function App() {
  return (
    <Contenedor>
      <div className="">
        <Imagen
          src={image}
          alt="Imagen criptomonedas"
        />
      </div>
      <div className="">
        <Heading>Cotiza criptomonedas al instante</Heading>
      </div>
    </Contenedor>
  );
}

export default App;
