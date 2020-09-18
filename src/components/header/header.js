import React, { Component } from 'react';

import './header.css'

export default class Header extends Component {

    link = [
        { label: "People", name: "people" },
        { label: "Planet", name: "planet" },
        { label: "Starship", name: "starship" }
    ]

    render() {
        const {onTooglePage} = this.props;
        const listLink = this.link.map(({ label,name }) => {
            return (
                <li className="nav-item active" key={name}>
                    <a className="nav-link" href="#"
                    onClick = {() => onTooglePage(name)}>
                        {label}<span className="sr-only">(current)</span></a>
                </li>
            )
            
        })
        return (
            <nav className="header navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">Star DB</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">

                       {listLink}
                    </ul>
                </div>
            </nav>
        )
    }
}