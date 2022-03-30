import { content } from "./B3cardinfo.js";
import '../CSS/B3card.css';
import time1 from '../IMG/time.svg';
import lecture from '../IMG/lecture.svg';


function B3card({id,title,topic,time,classes,total,dp31,dp32,teacher,pcost,ocost}){
    return(
        <div className='B3card'>
            {
                content.map((content, index) => {
                    return(
                        <Article key={content.id} {...content}/>
                    );
                })
            }
        </div>
    );
}

const Article = ({title,topic,time,classes,total,dp31,dp32,teacher,pcost,ocost}) => {
    return(
        <article className='comp3'>
            <div className="comp3img">
                <img src={dp31} className="dpimg3" />
            </div>
            <div className="comp3-tile">
                <p className="title3">{title}</p>
            </div>
            <div className="count3div">
                <p className="totalcount3">{total} <span className="students3">students</span></p>
            </div>
            <div className="time-class">
                <div className="totaltime-3">
                    <img src={time1} className="time1img" />
                    <p className="time-3">{time}</p>
                </div>
                <div className="totalclasses3">
                    <img src={lecture} className="lecture1img" />
                    <p className="classes-3">{classes}</p>
                </div>
            </div>
            <div className="info3">
                <div className="info3-1">
                    <div className="dp32">
                       <img src={dp32} className="dp32img"/>
                    </div>
                    <div className="teacher3">
                        <p>{teacher}</p>
                    </div>
                </div>
                <div className="info3-2">
                    <p className="pcost3">{pcost}</p>
                    <p className="ocost3">{ocost}</p>
                </div>
            </div>
        </article>
    );
}

export default B3card;