import React from 'react'
import { team } from '../config/team'

const TeamSection = () => {
    return (
        <div>
            <h2>

                Meet The Dream Team
            </h2>
            {team.map((e) =>
            (<p key={e.name}>{e.name}</p>))}
        </div>
    )
}

export default TeamSection