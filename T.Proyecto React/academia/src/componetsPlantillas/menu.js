import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className="container-fluid">
                <ul className="nav justify-content-center flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page">Active link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled link</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;