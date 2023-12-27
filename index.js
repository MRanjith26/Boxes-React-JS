const Box = (props) => {
  const { text, className } = props;
  return (
    <div className={`box ${className}`}>
      <p class="content">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Boxes</h1>
      <div className="boxes-container">
        <Box text="Small" className="small" />
        <Box text="Medium" className="medium" />
        <Box text="Large" className="large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
