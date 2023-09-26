import React from "react";
import img from "../assets/Photos/get.png";
import { useForm } from "react-hook-form";
import { Container, Title, Accordion, createStyles, rem } from "@mantine/core";
import ConfirmationPageNew from "./ConfirmationPageNew ";

const placeholder = "hello";
const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[3]
    }`,
  },
}));

const ContactUs = () => {
  const { classes } = useStyles();
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();



  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-grey placeholder:opacity-50`;
  return (
    <main className="w-full row">
      <section className="flex flex-col items-center lg:flex-row">
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-7 mt-[50px]">
              <div className="relative flex mr-[30px]">
                <div className=" absolute -left-8 transform rotate-[60deg] opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#880ED3] rounded-2xl"></div>
                <div className="opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#880ED3] rounded-2xl"></div>
                <div className="absolute transform rotate-[50deg] -right-8 opacity-50 w-14 h-16 bg-opacity-12 backdrop-blur-lg bg-[#880ED3] rounded-2xl"></div>
              </div>
              <h1 className="text-[18px]">GET IN TOUCH</h1>
            </div>

            <img src={img} className="mt-8 object-contain w-[250px]" />
          </div>

          <div className="border-l-[3px] border-[#6C3E2E] h-[500px] mt-20 ml-[200px] hidden lg:flex "></div>
        </div>

        {/* Second section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="flex lg:items-start gap-[100px] flex-col lg:flex-row">

      
            <form
              method="POST"
              action="https://formsubmit.co/katanddog.walking@outlook.com"
              className="mt-[50px]"
            >
              <div className="w-[350px]">
                <label>
                  Your Name: <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  {...register("Full Name", { required: true, maxLength: 100 })}
                />
              </div>
              <div className="w-[350px]">
                <label>
                  Email Address <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  {...register("Email Address", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </div>
              <div className="w-[350px]">
                <label>
                  Message <span>*️</span>
                </label>
                <input
                  type="text"
                  className={inputStyles}
                  {...register("Message", { required: true, maxLength: 100 })}
                />
              </div>

              <button
                type="submit"
                className=" uppercase w-[350px] bg-[#6C3E2E] hover:bg-brown-700 text-white font-bold py-3 px-4 rounded-lg"
                
              >
                submit
              </button>

              <input
                type="hidden"
                name="_next"
                value="https://katanddog.com.au/confirmationPagesubmitted"
              ></input>
              <input
                type="hidden"
                name="_redirect"
                value="https://katanddog.com.au/confirmationPagesubmitted"
              />
            </form>
     

            <div className="flex flex-col items-center lg:items-start mt-16 gap-2">
              <div className="flex flex-col gap-2">
                <h1 className="text-center lg:text-left">Contact</h1>
                <p className="text-sm text-[#9d8c86] text-center">
                  katanddog.walking@outlook.com
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-center">Phone Number</h1>
                <p className="text-sm text-[#9d8c86] text-center lg:text-left" >0449995528</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-[100px]">
        <h1 className="text-center text-4xl mb-12">FAQS</h1>
        <div class="border-t-[3px] border-transparentPink  w-[50%] "></div>

        <Container size="sm" className={classes.wrapper}>
          <Title align="center" className={classes.title}>
            Frequently Asked Questions
          </Title>

          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>
                Do you offer any behaviour training?
              </Accordion.Control>
              <Accordion.Panel>Currently I do not offer any behavioural based training. Basic training, including commands such as “sit, wait, cross and stay are used throughout my services. If your pet is already undergoing any training this can be incorporated whilst your pet is in my care.</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>
                Do you allow pets off lead?
              </Accordion.Control>
              <Accordion.Panel>Generally, your pet will remain on lead for the duration of the service, unless requested otherwise by the owner. If you would like your pet to have some off lead time, this will only be facilitated at a secure location, for example an enclosed dog park. </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>
              How many pets do you walk at a time?
              </Accordion.Control>
              <Accordion.Panel>I only service one client at a time. If you have multiple pets in your household, they can be walked together. If you would like your pet to be walked with a buddy this can be discussed individually. </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>
              Does someone need to be home when you collect/return my pet?
              </Accordion.Control>
              <Accordion.Panel>This is up to the owner’s discretion. Some clients prefer to be home, and others prefer to have their pet/s walked whilst they are away. If this is the case, I do require access to the property for the purpose of returning your pet, this can be through issuing a key or having access through a lock box. </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>
                What is the cost of your services?
              </Accordion.Control>
              <Accordion.Panel>I offer a range of service which differ in price. Please contact Kat&Dog via the online enquiry form for further information regarding pricing.</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </section>
    </main>
  );
};

export default ContactUs;
