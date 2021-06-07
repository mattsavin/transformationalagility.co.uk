import { HashLink as Link } from "react-router-hash-link";
import nl2br from "react-nl2br";

export function Welcome(props) {
    let button = <Link to={props.buttonLocation} className={props.buttonClassName}>
        {props.buttonContent}
    </Link>

    console.log(props.buttonLocation)

    return (
        <>
            <div className={"welcome welcome-" + props.cssClass}>
                <div className="header">
                    <h1>{props.heading}</h1>
                </div>
                <div className="introduction">
                    <p>{nl2br(props.content)}</p>
                    {button}
                </div>
            </div>
        </>
    )
}