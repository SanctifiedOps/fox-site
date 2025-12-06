const Toast = ({ message }) => {
  if (!message) return null;
  return (
    <div className="toast toast-info" role="status" aria-live="polite">
      {message}
    </div>
  );
};

export default Toast;
