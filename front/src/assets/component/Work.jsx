import React from 'react';
import "/src/assets/scss/Work.scss";
import yellow_rectangle_comments from "/img/yellow_rectangle_comments.png"

const Work = () => {
    return (
        <section className='work_section'>
            <h2>WORK BETTER IN YOUR COMPANY</h2>
                <img src={yellow_rectangle_comments} alt="yellow rectangle comments" className='yellow_rectangle_comments'/>
            </section>
    );
};

export default Work;