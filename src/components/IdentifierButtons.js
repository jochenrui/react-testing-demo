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

export const IdentifierButtons = () => {
  return (
    <div style={style}>
      <button role="button-role" style={buttonStyle}>
        Role
      </button>
      <button data-testid="button-testid" style={buttonStyle}>
        Test Id
      </button>
      <button className="button-class" style={buttonStyle}>
        Test Id
      </button>
    </div>
  );
};
