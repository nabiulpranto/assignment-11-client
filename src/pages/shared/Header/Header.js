import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/myreview'>My Review</Link></li>
                    <li className='font-semibold'><Link to='/addservices'>Add Service</Link></li>
                </>
                :
                <></>
        }



    </>

    return (
        <div className="navbar h-20 mb-10 bg-indigo-400	 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl  ">Juice Bar</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <>

                            <p className='mr-5'>
                                {user.email}
                            </p>

                            <button onClick={handleLogOut} className='btn btn-outline btn-primary'>Sign Out</button>
                        </>
                        :
                        <button className='btn btn-outline btn-primary'><Link to='/login'>Login</Link></button>
                }
            </div>
        </div>

    );
};

export default Header;