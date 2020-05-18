import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <section>
      <h2>Contact</h2>
      <form method="get" action="mailto:pankaj@time2hack.com">
        <div className="field">
          <label htmlFor="name">Subject</label>
          <input type="text" name="subject" id="subject" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="text" name="bcc" id="bcc" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" />
        </div>
        <ul className="actions">
          <li>
            <button type="submit" className="special">
              Send Message
            </button>
          </li>
          <li>
            <button type="reset">Reset</button>
          </li>
        </ul>
      </form>
    </section>
  </Layout>
);

export default ContactPage;
