'use client'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css'

export default function Header() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="header">
        <button className="logout-button" onClick={handleLogout} >
            Logout
        </button>
        </header>
    )
}