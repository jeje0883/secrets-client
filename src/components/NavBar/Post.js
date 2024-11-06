import {useNavigate} from 'react-router-dom'
import '../../styles/navbar/post.css'


export default function Post() {
    return (
        <>
            <div className="post-icon-container">
                <img className='post-icon' src={'/images/secret-icon.png'} alt="post" />
            </div>
        </>
    );
}