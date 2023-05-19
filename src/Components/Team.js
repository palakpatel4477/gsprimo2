import React from 'react'
import '../css/Team.css'
import Team2 from '../images/team.jpg'

function Team() {
    return (
        <>
            <div className='main-section-team'>
                <div className='image-section-team'>
                    <img src={Team2} alt="placeholder" />
                </div>
                <div className='description-section-team'>
                    <h2><span className='span-text-aboutusDesc'>Our</span> Team</h2>
                    <p>
                        Our team of experienced professionals and cutting-edge technology allows us to provide comprehensive environmental and geotechnical services to meet your needs. Our mission is to be your trusted ally in achieving your project goals, by providing safe, efficient, and cost-effective services.
                        <br /><br />We believe in collaborating with our clients, understanding their needs, and delivering tailor-made solutions that work for them.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Team