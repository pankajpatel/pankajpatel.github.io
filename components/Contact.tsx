"use client";

import React, { useEffect, FormEventHandler, useRef, useState } from "react";
import styled from "styled-components";
import Recaptcha from "react-recaptcha";
import { Articles, PageTitle, PageSection, Summary } from "./styled";
import { objectFromFormData } from "../lib/objectFromFormData";

const ReCaptchaStyledContainer = styled.div`
  margin: 5px;
  & > div > div,
  & > div > div > div {
    margin: 0 auto;
  }
`;

const Error = styled.div`
  color: #ff0000;
  margin: 5px;
  text-align: center;
`;

const Actions = styled.ul`
  padding: 0;
  list-style: none;
  margin: 1.875rem 0 0 0 !important;

  button {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 736px) {
    margin: 1.5rem 0 0 0 !important;
  }
`;

const Field = styled.div`
  position: relative;
  margin: 0 0.5rem 2rem;
`;

const ContactForm = styled(Articles)`
  margin: 0 auto;
  margin-bottom: 2.5rem;

  input[type="text"],
  input[type="email"],
  textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    transition: all 0.2s ease-in-out;
    background: transparent;
    border-radius: 4px;
    border: solid 1px var(--color-faded-white);
    color: inherit;
    display: block;
    outline: 0;
    padding: 1.75rem 1rem;
    text-decoration: none;
    width: 100%;
  }

  input[type="text"]:invalid,
  input[type="email"]:invalid,
  textarea:invalid {
    box-shadow: none;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    border-color: var(--color-white, #fff);
    box-shadow: 0 0 0 1px var(--color-white, #fff);
  }

  input[type="text"],
  input[type="email"] {
    height: 2.75rem;
  }

  textarea {
    padding: 0.75rem 1rem;
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

declare global {
  interface Window {}
}

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const captchaRef = useRef<Recaptcha>(null);
  const [captchaResponse, setCaptchaResponse] = useState<string | null>(null);
  const [state, setState] = useState<Record<string, any>>({
    submitted: false,
    error: false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!formRef.current) {
      return null;
    }
    if (!captchaResponse) {
      setState((prev) => ({ ...prev, error: "Please Verify Captcha!" }));
      return null;
    }

    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const request = new Request("/api/send-email", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(objectFromFormData(new FormData(formRef.current))),
    });

    fetch(request)
      .then((r) => r.json())
      .then((data) => {
        const error = !Boolean(data.id);
        setState({ submitted: true, error });
        if (!error) {
          formRef.current?.reset?.();
          captchaRef.current?.reset?.();
        }
      });
  };

  return (
    <PageSection>
      <PageTitle>Contact</PageTitle>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>

      <ContactForm
        $empty={true}
        as="form"
        method="POST"
        ref={formRef}
        name="contact-form"
        onSubmit={onSubmit}
      >
        <Field>
          <Summary as="label" htmlFor="name">
            Subject
          </Summary>
          <input type="text" name="subject" id="subject" />
        </Field>
        <Field>
          <Summary as="label" htmlFor="email">
            Email
          </Summary>
          <input type="email" name="bcc" id="bcc" />
        </Field>
        <Field>
          <Summary as="label" htmlFor="message">
            Message
          </Summary>
          <textarea name="message" id="message" rows={4} />
        </Field>
        <ReCaptchaStyledContainer>
          <Recaptcha
            theme="dark"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY || ""}
            render="explicit"
            onloadCallback={console.log}
            verifyCallback={(res: string) => {
              setCaptchaResponse(res);
              if (state.error === "Please Verify Captcha!") {
                setState((prev) => ({ ...prev, error: false }));
              }
            }}
            expiredCallback={() => setCaptchaResponse(null)}
            ref={captchaRef}
          />
        </ReCaptchaStyledContainer>
        <Actions>
          <button type="submit" className="special">
            Send Message
          </button>
          <button type="reset">Reset</button>
        </Actions>
        <Error>{state.error}</Error>
      </ContactForm>
    </PageSection>
  );
};

export default ContactPage;
