import "./Loading.css";

const Loading = ({ message = "Cargando..." }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default Loading;
