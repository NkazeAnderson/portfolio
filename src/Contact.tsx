import { useRef, useState } from 'react';
import Heading from './components/heading';
import { useGSAP } from '@gsap/react';
import Button from './components/button';
import gsap from 'gsap';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');
  const nameRef = useRef<null | HTMLInputElement>(null);
  const emailRef = useRef<null | HTMLInputElement>(null);
  const messageRef = useRef<null | HTMLInputElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      '.hash',
      { opacity: 0 },
      { opacity: 1, duration: 1, repeat: -1 }
    );
  }, [focused]);
  return (
    <div
      id="contact"
      className=" px-3 w-full md:w-1/2 lg:w-1/4 mx-auto space-y-4 pb-8"
    >
      <Heading text="Contact Me" />

      <div className=" inline-block mx-auto w-full">
        <p className=" text-primary ">#Contact me --version</p>
        <p className="tex">Contact me version 1.0.0</p>
        <div className=" flex justify-center w-full">
          <Button
            text={!focused ? 'Execute' : 'Restart'}
            action={() => {
              setFocused('name');
              setTimeout(() => {
                nameRef.current?.focus();
              }, 1000);
            }}
          />
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (name && focused === 'name') {
            setFocused('email');
            setTimeout(() => {
              emailRef.current?.focus();
            }, 1000);
          } else if (email && focused === 'email') {
            setFocused('message');
            setTimeout(() => {
              messageRef.current?.focus();
            }, 1000);

            console.log('focused message');
          } else if (!name) {
            setFocused('name');
          }

          {
            if (message && name && email) {
              setFocused('');
              setName('');
              setEmail('');
              setMessage('');
              setSent(true);
              setTimeout(() => {
                setSent(false);
              }, 1000);
            }
          }
        }}
        onMouseEnter={() => {
          nameRef.current?.focus();
          emailRef.current?.focus();
          messageRef.current?.focus();
        }}
        className=" space-y-6 pb-4"
      >
        {!sent ? (
          <>
            {' '}
            {focused === 'name' && (
              <div>
                <label htmlFor="name">
                  What’s your name? Type and press enter to confirm
                </label>
                <br />
                <div className="relative">
                  <span className="absolute top-0 left-0">
                    {name}
                    <span id="" className="pl-1 hash">
                      #
                    </span>
                  </span>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="absolute top-0 left-0"
                    ref={nameRef}
                    value={name}
                    onChange={(e) => {
                      setName(e.currentTarget.value);
                    }}
                  />
                </div>
              </div>
            )}
            {name && focused !== 'name' && (
              <p>
                Hello {name}{' '}
                {focused === 'message' && email && <span>- {email}</span>}
              </p>
            )}
            {focused === 'email' && (
              <div>
                <label htmlFor="email">
                  What’s your email address? Type and press enter to confirm
                </label>
                <br />
                <div className="relative">
                  <span className="absolute top-0 left-0">
                    {email}
                    <span className="pl-1 hash">#</span>
                  </span>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    ref={emailRef}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.currentTarget.value);
                    }}
                  />
                </div>
              </div>
            )}
            {focused === 'message' && (
              <div>
                <label htmlFor="message">
                  Add a message. Type and press enter to confirm
                </label>
                <br />
                <div className="relative">
                  <span className="absolute top-0 left-0">
                    {message}
                    <span className="pl-1 hash">#</span>
                  </span>
                  <input
                    id="message"
                    name="message"
                    ref={messageRef}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.currentTarget.value);
                    }}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <p>Hello {name} , you sent a message</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
