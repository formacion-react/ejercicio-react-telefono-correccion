import { Boton } from "./Boton";

export const Botones = (props) => {
  const { llamando, esCompleto, llamar, colgar } = props;
  return (
    <Boton
      texto={llamando ? "Colgar" : "Llamar"}
      esCompleto={esCompleto}
      accion={llamando ? colgar : llamar}
    />
  );
};
