const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

const buttonStyle = {
  width: "100px",
  height: "40px",
  borderRadius: "7px",
};

export const IdentifierButtons = ({
  onClickIncrement,
  onClickDecrement,
  onClickAdd,
}) => {
  return (
    <div style={style}>
      <button
        role="button-role"
        style={buttonStyle}
        onClick={() => onClickIncrement()}
      >
        Role
      </button>
      <button
        data-testid="button-testid"
        style={buttonStyle}
        onClick={() => onClickDecrement()}
      >
        Test Id
      </button>
      <button
        className="button-class"
        style={buttonStyle}
        onClick={() => onClickAdd(5)}
      >
        Class
      </button>
    </div>
  );
};
