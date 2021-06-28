export const Info = (props) => {
  const { llamando } = props;
  return (
    <span className={`mensaje${llamando ? "" : " off"}`}>Llamando...</span>
  );
};
