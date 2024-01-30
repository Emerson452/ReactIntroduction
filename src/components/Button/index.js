import "./index.css"

export const Button = ({label, onClick}) => {
  return (
    <button className="containerButton" onClick={onClick}>
      <p>{label}</p>
    </button>
  );
};
