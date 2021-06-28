import { useRef, useState } from "react";
import { Botones } from "./componentes/Botones";
import { Display } from "./componentes/Display";
import { Info } from "./componentes/Info";
import { Teclado } from "./componentes/Teclado";

function App() {
  const [telefono, setTelefono] = useState("");
  const [llamando, setLlamando] = useState(false);
  let timer = useRef();
  const anyadirDigito = (digito) => {
    if (esCompleto()) {
      return;
    }
    setTelefono(telefono + digito);
  };
  const borrarUltimoDigito = () => {
    setTelefono(telefono.slice(0, -1));
  };
  const esCompleto = () => {
    return telefono.length === 9;
  };
  const llamar = () => {
    if (!esCompleto()) {
      return;
    }
    setLlamando(true);
    timer.current = setTimeout(() => {
      colgar();
    }, 5000);
  };
  const colgar = () => {
    clearTimeout(timer.current);
    setLlamando(false);
    setTelefono("");
  };
  return (
    <div className="contenedor">
      <Info llamando={llamando} />
      <main className="telefono">
        <div className="botones">
          <Teclado
            llamando={llamando}
            anyadirDigito={anyadirDigito}
            borrarUltimoDigito={borrarUltimoDigito}
          />
        </div>
        <div className="acciones">
          <Display telefono={telefono} />
          <Botones
            llamando={llamando}
            esCompleto={esCompleto}
            llamar={llamar}
            colgar={colgar}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
