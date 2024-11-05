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
            <li className="icon-container" onClick={handleSearchClick}>
                <div className="search"></div>
            </li>
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
