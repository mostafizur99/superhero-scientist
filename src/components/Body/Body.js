import React from 'react';
import { useEffect, useState } from 'react';
import Scientist from '../Scientist/Scientist';
import Team from '../Team/Team';
import './Body.css'

const Body = () => {

    const [scientists, setScientists] = useState([]);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch('/scientistsData.JSON')
            .then(res => res.json())
            .then(data => setScientists(data));
    }, []);

    const handleAddToTeam = scientist => {
        if (team.indexOf(scientist) === - 1) {
            const newTeam = [...team, scientist];
            setTeam(newTeam);
        }
    }

    return (
        <div className="Body">
            <div className="container container-custom">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                scientists.map(scientist => <Scientist key={scientist.id} scientist={scientist} handleAddToTeam={handleAddToTeam}></Scientist>)
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Team team={team}></Team>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;