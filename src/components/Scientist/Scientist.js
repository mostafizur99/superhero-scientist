import React from 'react';
import './Scientist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Scientist = (props) => {
    const { name, role, country, img, publications, honorarium } = props.scientist;
    // console.log(name)
    return (
        <div className="Scientist col">
            <div className="card h-100 card-custom">
                <div className="card-body">
                    <div className="card-img">
                        <img src={img} alt="" />
                    </div>
                    <h5 className="card-title ">{name}</h5>
                    <p className="card-text text-color">{role}</p>
                    <p className="card-text">Country: {country}</p>
                    <p className="card-text">Publications: {publications}+</p>
                    <p className="card-text">Honorarium: ${honorarium}</p>
                    <button onClick={() => props.handleAddToTeam(props.scientist)} className="btn-custom"><FontAwesomeIcon icon={faUserPlus} /> Add to Team</button>
                </div>
            </div>
        </div>
    );
};

export default Scientist;