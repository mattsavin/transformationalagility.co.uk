import React from "react";
import * as content from "../content/contact.json"

// const nl2br = require('react-nl2br');
/*
class Box {
    constructor(heading, subheading, content) {
        this.heading = heading;
        this.subheading = subheading;
        this.content = content;
    }
}
*/

export class Boxes extends React.Component {
    render () {
        let box = {
            "heading": "Enabling Transformational Change",
            "subheading": "Achieve Your Goals",
            "content": "With over 20 years of experience, etc..."
        };

        for (let [key, value] of Object.entries(box)) {
            let a = {value};
            console.log({key});
            console.log(a);
        }
        /*
        for (let i=0; i < content.boxes.length(); i++) {
            return new Box(content.boxes.i["heading"], content.boxes.i["subheading"], content.boxes.i["content"]);
        }
        */
        return (
            <>
                <div className={"boxes"}>
                    <div></div>
                </div>
            </>
        )
    }
}