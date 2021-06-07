import * as RIIcons from "react-icons/ri";

export function ContactInfo (props) {
    return (
      <>
          <div className={"contact-holder"} id={"contact-info"}>
              <div className={"contact contact-title"}>
                  <h1>Contact Us</h1>
              </div>
            <div className={"contact contact-info"}>
                <div className="contact-entry">
                    <RIIcons.RiMailSendLine className="contact-icon"/>
                    <p>
                        <a href="mailto:00savin@gmail.com">Mike Savin</a>
                    </p>
                </div>
            </div>
          </div>
      </>
    );
}