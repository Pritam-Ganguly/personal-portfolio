import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Col, Container, Row } from "react-bootstrap";

interface IFromDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface IStatus {
  success: boolean;
  message: string;
}

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formState, setFromState] = useState<IFromDetails>(formInitialDetails);
  const [buttonText, ] = useState<string>("Send");
  const [status,] = useState<IStatus>({
    success: false,
    message: "",
  });

  function handleFromUpdate(category: string, value: string) {
    setFromState((prevState) => ({ ...prevState, [category]: value }));
  }

  function handleFromSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} mid={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col size={12} mid={6}>
            <h2>Get in touch</h2>
            <form onSubmit={handleFromSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formState.firstName}
                    placeholder="First Name"
                    onChange={(e) =>
                      handleFromUpdate("firstName", e.currentTarget.value)
                    }
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formState.lastName}
                    placeholder="Last Name"
                    onChange={(e) =>
                      handleFromUpdate("lastName", e.currentTarget.value)
                    }
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formState.email}
                    placeholder="Email"
                    onChange={(e) =>
                      handleFromUpdate("email", e.currentTarget.value)
                    }
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formState.phone}
                    placeholder="Phone Number"
                    onChange={(e) =>
                      handleFromUpdate("phone", e.currentTarget.value)
                    }
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows={6}
                    value={formState.message}
                    placeholder="Message"
                    onChange={(e) =>
                      handleFromUpdate("message", e.currentTarget.value)
                    }
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={!status.success ? "danger" : "success"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
