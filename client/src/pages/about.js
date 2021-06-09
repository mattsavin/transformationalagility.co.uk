import React from "react";
import {Welcome} from "../components/welcome";
import * as content from "../content/about.json";

function about() {
    return (
        <>
            <Welcome heading={content.intro.heading}
                     content={content.intro.content}
                     buttonContent={content.intro.buttonContent}
                     buttonLocation={content.intro.buttonLocation}
                     cssClass ={"home"}
            />
        </>

    )
}

export default about