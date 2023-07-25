'use client';

import React from 'react';
import { observer } from '@legendapp/state/react';
import { useContact } from '../_context/app.context';

const Contact = () => {
  return (
    <section className="flex-col flex-container gap-[25px]">
      <h1 className="head-1">Contact Us</h1>
      <FirstInput />
      <LastInput />
      <EmailInput />
      <ContactDisplay />
    </section>
  );
};

export default Contact;

const EmailInput = observer(() => {
  const { email } = useContact();

  return (
    <label className="flex gap-[25px] link-1">
      Email:
      <input
        type="email"
        className="text-black"
        onChange={(e) => email.set(e.target.value)}
      />
    </label>
  );
});

const FirstInput = observer(() => {
  const { first } = useContact();
  return (
    <label className="flex gap-[25px] link-1">
      First Name:
      <input
        type="text"
        className="text-black"
        onChange={(e) => first.set(e.target.value)}
      />
    </label>
  );
});

const LastInput = observer(() => {
  const { last } = useContact();
  return (
    <label className="flex gap-[25px] link-1">
      Last Name:
      <input
        type="text"
        className="text-black"
        onChange={(e) => last.set(e.target.value)}
      />
    </label>
  );
});

const ContactDisplay = observer(() => {
  const { all } = useContact();

  return (
    <p className="text-white font-display">{all}</p>
  );
});
