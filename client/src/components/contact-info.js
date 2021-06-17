import * as RIIcons from "react-icons/ri";

export function ContactInfo () {
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
                        <a href="mailto:example@example.com">Email Support</a>
                    </p>
                </div>
            </div>
          </div>
      </>
    );
}
