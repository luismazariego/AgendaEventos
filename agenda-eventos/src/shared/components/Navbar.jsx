import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { getUserInfo } from '../helpers/sharedHelper';


export const Navbar = () => {
    const { logout } = useContext( AuthContext );
    const userInfo = getUserInfo();
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        
        navigate('/login', {
            replace: true
        });
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Agenda de Eventos
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active':''}`} 
                        to="/listado-eventos"
                    >
                        Eventos
                    </NavLink>

                    {
                        userInfo.rol === 1 && (
                            <NavLink 
                                className={({isActive}) => `nav-item nav-link ${isActive ? 'active':''}`}
                                to="/listado-recordatorios"
                            >
                                Recordatorios
                            </NavLink>
                        )
                    }
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        { userInfo.nombre }
                    </span>
                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}