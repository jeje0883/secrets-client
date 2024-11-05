import Search from '../../components/NavBar/Search';
import Login from '../../components/NavBar/Login';
import Menu from '../../components/NavBar/Menu';
import Profile from '../../components/NavBar/Profile';
import '../../styles/navbar/navbar.css';
// import { Modal } from 'react';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <Menu/>

                <li><a href="/submit"><img className='submit-icon' src='/images/secret-icon.png'></img></a></li>
                {/* <li><a href="/about">Trending</a></li>
                <li><a href="/contact">Fresh</a></li> */}
                <Search/>

                {/* spacer to push elements to the right */}
                <li className='auto-left-margin'></li>

                <Login />
                <Profile />
                {/* <li><a href="">Sign Up / Login</a></li> */}
                <li className='icon-container'><div className='profile'></div></li>
            </ul>
        </nav>
    );
}