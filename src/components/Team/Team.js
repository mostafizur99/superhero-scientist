import React from 'react';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const { team } = props;

    let names = [];
    let total = 0;
    for (const scientist of team) {
        total = total + scientist.honorarium
        const singleName = scientist.name;
        names.push(singleName);
    }

    return (
        <div className="Team">
            <div className="team-box">
                <h5>Total Added: {props.team.length}</h5>
                <h5>Total Cost: ${total}</h5>
                <h6>Team Members:</h6>
                {
                    names.map(name => <li key={name}><span className="text-color"><FontAwesomeIcon icon={faUsers} /></span> {name}</li>)
                }
            </div>

        </div>
    );
};

export default Team;