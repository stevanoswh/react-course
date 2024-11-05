const ErrorMessage = ({ message }) => (
    message ? <p className="error">{message}</p> : null
);

export default  ErrorMessage;
