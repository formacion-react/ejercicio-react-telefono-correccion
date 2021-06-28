export const Boton = (props) => {
  const { texto, esCompleto, accion } = props;
  const textoMinuscula = texto[0].toLowerCase() + texto.slice(1);
  const onClickBoton = (e) => {
    e.preventDefault();
    accion();
  };
  return (
    <a
      href={textoMinuscula}
      className={`${textoMinuscula}${esCompleto() ? " activo" : ""}`}
      onClick={onClickBoton}
    >
      {texto}
    </a>
  );
};
