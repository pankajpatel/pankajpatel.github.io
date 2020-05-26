import React from "react";
import styled from "styled-components";
import { Articles, PageTitle, PageSection } from "../styled";

const ContactForm = styled(Articles)`
  form {
    margin: 0 0 2.5rem 0;
  }

  form .field {
    margin: 0 0 1.5rem 0;
  }

  form .field.half {
    width: 50%;
    float: left;
    padding: 0 0 0 0.75rem;
  }

  form .field.half.first {
    padding: 0 0.75rem 0 0;
  }

  form > .actions {
    margin: 1.875rem 0 0 0 !important;
  }

  @media screen and (max-width: 736px) {
    form .field {
      margin: 0 0 1.125rem 0;
    }

    form .field.half {
      padding: 0 0 0 0.5625rem;
    }

    form .field.half.first {
      padding: 0 0.5625rem 0 0;
    }

    form > .actions {
      margin: 1.5rem 0 0 0 !important;
    }
  }

  @media screen and (max-width: 480px) {
    form .field.half {
      width: 100%;
      float: none;
      padding: 0;
    }

    form .field.half.first {
      padding: 0;
    }
  }

  label {
    color: #ffffff;
    display: block;
    font-size: 0.8rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0 0 0.75rem 0;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="tel"],
  select,
  textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
      background-color 0.2s ease-in-out;
    background: transparent;
    border-radius: 4px;
    border: solid 1px #ffffff;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1rem;
    text-decoration: none;
    width: 100%;
  }

  input[type="text"]:invalid,
  input[type="password"]:invalid,
  input[type="email"]:invalid,
  input[type="tel"]:invalid,
  select:invalid,
  textarea:invalid {
    box-shadow: none;
  }

  input[type="text"]:focus,
  input[type="password"]:focus,
  input[type="email"]:focus,
  input[type="tel"]:focus,
  select:focus,
  textarea:focus {
    background: rgba(255, 255, 255, 0.075);
    border-color: #ffffff;
    box-shadow: 0 0 0 1px #ffffff;
  }

  select option {
    background: #1b1f22;
    color: #ffffff;
  }

  .select-wrapper {
    text-decoration: none;
    display: block;
    position: relative;
  }

  .select-wrapper:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }

  .select-wrapper:before {
    color: #ffffff;
    content: "\F107";
    display: block;
    height: 2.75rem;
    line-height: calc(2.75rem + 0em);
    pointer-events: none;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 2.75rem;
  }

  .select-wrapper select::-ms-expand {
    display: none;
  }

  input[type="text"],
  input[type="password"],
  input[type="email"],
  select {
    height: 2.75rem;
  }

  textarea {
    padding: 0.75rem 1rem;
  }

  input[type="checkbox"],
  input[type="radio"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    display: block;
    float: left;
    margin-right: -2rem;
    opacity: 0;
    width: 1rem;
    z-index: -1;
  }

  input[type="checkbox"] + label,
  input[type="radio"] + label {
    text-decoration: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 300;
    margin: 0 0 0.5rem 0;
    padding-left: 2.65rem;
    padding-right: 0.75rem;
    position: relative;
  }

  input[type="checkbox"] + label:before,
  input[type="radio"] + label:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }

  input[type="checkbox"] + label:before,
  input[type="radio"] + label:before {
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
      background-color 0.2s ease-in-out;
    border-radius: 4px;
    border: solid 1px #ffffff;
    content: "";
    display: inline-block;
    height: 1.65rem;
    left: 0;
    line-height: calc(1.58125rem + 0em);
    position: absolute;
    text-align: center;
    top: -0.125rem;
    width: 1.65rem;
  }

  input[type="checkbox"]:checked + label:before,
  input[type="radio"]:checked + label:before {
    background: #ffffff !important;
    border-color: #ffffff !important;
    color: #1b1f22;
    content: "\F00C";
  }

  input[type="checkbox"]:focus + label:before,
  input[type="radio"]:focus + label:before {
    background: rgba(255, 255, 255, 0.075);
    border-color: #ffffff;
    box-shadow: 0 0 0 1px #ffffff;
  }

  input[type="checkbox"] + label:before {
    border-radius: 4px;
  }

  input[type="radio"] + label:before {
    border-radius: 100%;
  }

  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5) !important;
    opacity: 1;
  }

  :-moz-placeholder {
    color: rgba(255, 255, 255, 0.5) !important;
    opacity: 1;
  }

  ::-moz-placeholder {
    color: rgba(255, 255, 255, 0.5) !important;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.5) !important;
    opacity: 1;
  }
`;

const ContactPage = () => (
  <PageSection>
    <PageTitle>Contact</PageTitle>
    <ContactForm empty={true}>
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
          <textarea name="message" id="message" rows={4} />
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
    </ContactForm>
  </PageSection>
);

export default ContactPage;
