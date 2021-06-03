import React from 'react';

const nl2br = require('react-nl2br');

export class Welcome extends React.Component {
    render() {
        this.button = <form>
            <button
                type={"submit"}
                formAction={this.props.buttonLocation}
                className={this.props.buttonClassName}>

                {this.props.buttonContent}
            </button>
        </form>

        return (
            <>
                <div className={"welcome welcome-" + this.props.cssClass}>
                    <div className="header">
                        <h1>{this.props.heading}</h1>
                    </div>
                    <div className="introduction">
                        <p>{nl2br(this.props.content)}</p>
                        {this.button}
                    </div>
                </div>
            </>
        )
    }
}