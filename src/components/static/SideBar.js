import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () =>(
    <div className="menu_sidebar">
        <div className="logo">
            <NavLink to = "/" exact={ true }>
                    <h1>AppSkola</h1>
            </NavLink>
        </div>
        <div className="menu">
            <ul className="menu_list">
                <li className="list_item">
                    <NavLink to="/" activeClassName="is-active" exact={ true }>
                        Početna 
                    </NavLink>
                </li>
                <li className="list_item">
                    <NavLink to="/predmeti" activeClassName="is-active">
                        Predmeti
                    </NavLink>
                </li>
                <li className="list_item">
                    <NavLink to="/ocjene" activeClassName="is-active">
                        Ocjene
                    </NavLink>
                </li>
                <li className="list_item">
                    <NavLink to="/osobe" activeClassName="is-active">
                        Osobe
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
)

export default SideBar;

