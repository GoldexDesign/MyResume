import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    // Update the corresponding field in the hidden form
    const indexForm = document.getElementById("indexForm");
    if (indexForm) {
      const indexField = indexForm.querySelector(`[name="${name}"]`);
      if (indexField) {
        indexField.value = value;
      }
    }
  };

  render() {
    if (!this.props.data) return null;

    const { name, email, message } = this.state;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const contactMessage = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{contactMessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                name="contact"
                action="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={this.handleInputChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {street}
                  {city} {state}, {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      Thanks for all
                      <br />
                      <a href="./">
                        https://www.linkedin.com/in/zlatko-skoric/
                      </a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Thanks for all
                      <br />
                      <a href="./">https://github.com/GoldexDesign</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
