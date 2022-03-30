import {content} from './Body4cinfo.js';

function Body4c({people, cost}){
    return(
        <div className="Body4c">
            {
                content.map((content, index) => {
                    return <Article key={content.id} {...content} />
                })
            }
        </div>
    );
}

const Article = ({people, cost}) => {
    return(
        <article className="comp4">
            <img src={people} className="img-people"/>
            <div className="cost4">
                <p>{cost}</p>
            </div>
        </article>
    );
}

export default Body4c;