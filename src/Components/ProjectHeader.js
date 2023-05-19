import React from 'react'
import '../css/ProjectHeader.css'

function ProjectHeader() {
    return (
        <div className="container-projectheader">
            <div className="centered-section-projectheader">
                <h2><span className='span-text-aboutusDesc'>Our</span> Projects</h2>
                <p>
                    View our diverse range of client projects in <span style={{fontWeight:"bold"}}>Geotechnical</span>, <span style={{fontWeight:"bold"}}>Environmental</span> and <span style={{fontWeight:"bold"}}>Geostructural</span>.
                </p>
            </div>
        </div>
    )
}

export default ProjectHeader