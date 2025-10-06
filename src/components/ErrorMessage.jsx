import "./ErrorMessage.css";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3 className="error-title">Oops! Algo salió mal</h3>
      <p className="error-message">{message || "Error al cargar los datos"}</p>
      {onRetry && (
        <button className="btn-primary retry-btn" onClick={onRetry}>
          Intentar de nuevo
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
