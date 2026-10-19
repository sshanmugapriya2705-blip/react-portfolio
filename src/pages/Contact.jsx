import { useState } from "react";

function Contact() {
    const [showContact, setShowContact] = useState(true);

    return (
        <section className="contact">
            <h1>Contact Me</h1>

            <p>To connect with me</p>

            <button onClick={() => setShowContact(!showContact)}>
                {showContact ? "Hide Contact Information" : "Show Contact Information"}
            </button>

            {showContact && (
                <div className="contact-info">
                    <p>
                        <strong>Email: </strong>
                        <a href="mailto:s.shanmugapriya2705@gmail.com">
                            s.shanmugapriya2705@gmail.com
                        </a>
                    </p>

                    <p>
                        <strong>LinkedIn: </strong>
                        <a
                            href="https://www.linkedin.com/in/shanmugapriya-saravanan-38739b72/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit My LinkedIn
                        </a>
                    </p>

                    <p>
                        <strong>GitHub: </strong>
                        <a href="https://github.com/sshanmugapriya2705-blip" target="_blank" rel="noreferrer">
                            Visit My GitHub
                        </a>
                    </p>
                </div>
            )}
        </section>
    );
}

export default Contact;