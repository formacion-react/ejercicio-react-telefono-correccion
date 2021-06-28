import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const { llamando, anyadirDigito, borrarUltimoDigito } = props;
  const digitos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <ol className="teclado">
      {digitos.map((digito) => (
        <Tecla
          key={digito}
          texto={digito}
          activa={!llamando}
          accion={() => anyadirDigito(digito)}
        />
      ))}
      <Tecla
        className="big"
        texto="borrar"
        activa={!llamando}
        accion={borrarUltimoDigito}
      />
    </ol>
  );
};
