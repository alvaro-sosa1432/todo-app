import {NavLink} from 'react-router';

export const Navbar = () => {
    return(
        <nav className='text-white flex justify-end gap-4 p-5'>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/loginregister">Login</NavLink>
        </nav>
    )
}