import React from 'react';
import "/src/assets/scss/Work.css"
import comments from "/public/img/comments.png";
import yellow_rectangle from "/public/img/Yellow_ectangle.png"

const Work = () => {
    return (
        <section className='work_section'>
            <h2>WORK BETTER IN YOUR COMPANY</h2>
                <div className='yellow_comments'>
                    <img src={yellow_rectangle} alt="yellow rectangle" className='yellow_rectangle'/>
                    <img src={comments} alt="comments" className='comments'/>
                </div>
            </section>
    );
};

export default Work;