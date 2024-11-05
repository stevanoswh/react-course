import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NotFound() {
  return (
    <div className="not_found_container">
      <div className="not_found_content">
        <h1 className="not_found_title">404</h1>
        <p className="not_found_message">Oops! Page Not Found</p>
        <p className="not_found_description">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <button className="not_found_button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

