import "./css/renderSpinner.css";

const RenderSpinner = () => {
  return (
    <div className="spin-wrapper">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default RenderSpinner;
