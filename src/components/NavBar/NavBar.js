import Search from '../../components/NavBar/Search';
import '../../styles/navbar/navbar.css';
import { Modal } from 'react';

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li className='icon-container'><div className='secret'></div></li>
                <li><a href="/">Secret</a></li>
                <li><a href="/about">Trending</a></li>
                <li><a href="/contact">Fresh</a></li>
                <Search/>
                <li><a href="">Sign Up / Login</a></li>
                <li className='icon-container'><div className='profile'></div></li>
            </ul>
        </nav>
    );
}