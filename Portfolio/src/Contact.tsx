import React from "react";
import Heading from "./components/heading";
import Button from "./components/button";

function Contact() {
  return (
    <div className="w-1/4 mx-auto space-y-4">
      <Heading text="Contact Me" />

      <div className=" inline-block mx-auto ">
        <p className=" text-primary ">#Contact me --version</p>
        <p className="tex">Contact me version 1.0.0</p>
      </div>

      <form className=" space-y-6">
        <div>
          <label htmlFor="name">What’s your name?</label>
          <br />
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="name">What’s your email address?</label>
          <br />
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="name">Add a message</label>
          <br />
          <input id="name" type="text" />
        </div>

        <Button text="Send Message" />
      </form>
    </div>
  );
}

export default Contact;
