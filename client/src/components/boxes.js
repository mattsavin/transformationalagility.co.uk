export function Boxes(props) {
    for (const key in props.boxes) {
        if (Object.prototype.hasOwnProperty.call(props.boxes, key)) {
            console.log(props.boxes)
            console.log(key)
            return (
                <div className={key}>
                    <h3 className={"box box-title"}>
                        {props.boxes[key].heading}
                    </h3>
                    <h4 className={"box box-subtitle"}>
                        {props.boxes[key].subheading}
                    </h4>
                    <p className={"box box-paragraph"}>
                        {props.boxes[key].content}
                    </p>
                </div>
            )
        }
    }
}