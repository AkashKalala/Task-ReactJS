import {content} from './Body6cinfo.js'

function Body6c({para, name, time, img, img1}){
    return(
        <div className='b6c'>
            {
                content.map((content, index) => {
                    return <Article key={content.id} {...content} />
                })
            }
        </div>
    );
}

const Article = ({para, name, time, img, img1}) => {
    return(
        <article className='b6c1'>
            <div className='b6c2'>
                <div className='b6para'>
                    <p>{para}</p>
                </div>
                <div className='b6info'>
                    <div className='b6info1'>
                        <div>
                            <img src = {img1} className="b6dp" />
                        </div>
                        <div className='b6nt'>
                            <p className='nameb6'>{name}</p>
                            <p className='timeb6'>{time}</p>
                        </div>
                    </div>
                    <div className='b6img'>
                        <img src = {img} className='b6q'/>
                    </div>
                </div>
            </div>
        </article>
    );
} 

export default Body6c;