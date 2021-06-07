import { Link } from "react-router-dom";
const path = require('path');

export function Boxes(props) {
    let content = [];
    let justify;
    for (let key in props.boxes) {
        if (Object.prototype.hasOwnProperty.call(props.boxes, key)) {
            if (key % 2 === 0) { justify = "left"; } else if (key % 2 === 1 ) { justify = "right"; } else {console.log("ERROR!")}
            if ((key - 1) % 4 === 1 || (key - 1) % 4 === 2) {
                content.push(
                    <div className={`box-${key} ${justify}`}>
                        <h3 className={"box box-title"}>
                            {props.boxes[key].heading}
                        </h3>
                        <h4 className={"box box-subtitle"}>
                            {props.boxes[key].subheading}
                        </h4>
                        <p className={"box box-paragraph"}>
                            {props.boxes[key].content}
                        </p>
                        <div className={"center"}>
                            <Link to={props.boxes[key].buttonLocation} className={`button box-button`}>
                                {props.boxes[key].buttonContent}
                            </Link>
                        </div>

                    </div>
                );
            } else {
                content.push( <div className={`box-${key} ${path.basename(__filename, '.js')}-box-image-${key} ${justify}`}> </div> );
            }
        }
    }
    return (
        <>
            {content}
        </>
    );
}