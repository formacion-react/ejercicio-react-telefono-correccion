export const Tecla = (props) => {
  const { texto, className, accion, activa } = props;

  return (
    <>
      <li>
        <button className={className} onClick={accion} disabled={!activa}>
          {texto}
        </button>
      </li>
    </>
  );
};
