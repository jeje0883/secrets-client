import { useState } from 'react';
import '../../styles/navbar/search.css';

export default function Search() {
    const [isSearching, setIsSearching] = useState(false);

    // Toggle search box visibility on icon click
    const handleSearchClick = () => {
        setIsSearching(!isSearching);
    };

    return (
        <>
            <div className="search-icon-container" onClick={handleSearchClick}>
                <img className='search-icon' src={'/images/search.png'} alt="search" />
            </div>
            {isSearching && (
                <input
                    type="text"
                    className="floating-search-box"
                    placeholder="Search..."
                    autoFocus
                />
            )}
        </>
    );
}
