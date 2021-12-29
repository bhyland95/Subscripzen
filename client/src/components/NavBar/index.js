import React from 'react';


function NavBar(props) {
    const tabs = ['Home', 'X', 'Y', 'Z', 'AA'];
    return (
        <header className="app-header">

            <ul className="nav nav-tabs flex-row ">
                <h2>Subscripotion</h2>
                {tabs.map(tab => (
                    <li className="nav-item mx-2" key={tab}>
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.setCurrentPage(tab)}
                            className={
                                props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default NavBar;
