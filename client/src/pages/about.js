import React from "react";
import {Welcome} from "../components/welcome";
import * as content from "../content/about.json";
import { Footer } from "../components/footer";

function about() {
    return (
        <>
            <Welcome heading={content.intro.heading}
                     content={content.intro.content}
                     buttonContent={content.intro.buttonContent}
                     buttonLocation={content.intro.buttonLocation}
                     cssClass ={"home"}
            />

            <Footer />
        </>

    )
}

export default about