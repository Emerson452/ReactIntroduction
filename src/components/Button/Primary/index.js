import "./index.css"

export const Primary = ({label, onClick}) => {
  return (
    <button className="buttonPrimary" onClick={onClick}>
      <p>{label}</p>
    </button>
  );
};
