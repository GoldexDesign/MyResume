import React, { Component } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit = (e) => {
    const formData = { ...this.state };

    // Log the form data before submission
    console.log("Form Data:", formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    }).then(() => {
      console.log("Form submitted successfully!");
      alert("Success!");

      // Clear the form fields after successful submission
      this.setState({ name: "", email: "", message: "" });
    });

    // .catch((error) => {
    //   console.error("Form submission error:", error);
    //   alert(error);
    // });
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    if (!this.props.data) return null;

    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const { name, email, message } = this.state;

    return (
      <section id="contact">
        <div duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{this.props.data.contactmessage}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div duration={1000}>
            <div className="eight columns">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </p>
                Name:
                <input
                  required
                  value={name}
                  size="35"
                  type="text"
                  name="name"
                  onChange={this.handleChange}
                />
                Email:
                <input
                  required
                  value={email}
                  size="35"
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                />
                <p>
                  Message:
                  <textarea
                    name="message"
                    cols="120"
                    value={message}
                    onChange={this.handleChange}
                  />
                </p>
                <p>
                  <button type="submit">Send</button>

                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </p>
              </form>
              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </div>

          <div duration={1000}>
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
                <h4 className="widget-title">Testimonials:</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      Vladan: Zlatko's exceptional skills in design and frontend
                      development have consistently elevated our projects to new
                      levels of excellence, showcasing a keen eye for aesthetic
                      detail and user-centric experiences. His collaboration
                      with Effective Marketing Agency in promoting new products
                      has been invaluable, demonstrating a strong commitment to
                      driving innovative and engaging campaigns that captivate
                      audiences and drive results.
                      <a href="https://github.com/GoldexDesign">
                        https://github.com/GoldexDesign
                      </a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Mia: Zlatko's web application development skills have
                      truly impressed us. His ability to create robust and
                      user-friendly web applications has greatly elevated our
                      digital presence. Working with him has been a pleasure,
                      and his contributions have played a vital role in the
                      success of our projects.
                      <a href="https://task-manager-app-one.vercel.app/">
                        https://task-manager-app-one.vercel.app
                      </a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
