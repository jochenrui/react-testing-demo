const style = {
  textAlign: "center",
};

export const Counter = ({ count }) => {
  return (
    <div style={style}>
      <p>{`Counter: ${count}`}</p>
    </div>
  );
};
