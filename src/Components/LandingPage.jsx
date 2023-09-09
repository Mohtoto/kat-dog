import React from 'react'
import main_img from "../assets/Photos/1.jpg";
import walk from "../assets/icons/walk.png";
import home from "../assets/icons/home.png";
import food from "../assets/icons/food.png";
import dog from "../assets/icons/dog.png";
import sub_img from "../assets/Photos/2.png";



const LandingPage = () => {
  return (
    <section className='row'>
      <div className="container">
        <div className="main__image--wrapper">
          <img src={main_img} className="main__img" />
          <h2>Woofs, Walks & Talks</h2>
        </div>

        <div className="main_page_info">
          <h1>Trusted and reliable service in your area!</h1>
          <h2>Services offered</h2>
        </div>
        <div class="divider"></div>

        <div className="flex flex-col items-center">
          <div className="icons flex items-center gap-[200px] ml-8">
            <div className="icons-left">
              <div className="icon-wrapper">
                <img src={walk} />
                <h3>Dog Walking</h3>
              </div>
              <div className="icon-wrapper my-8 ">
                <img src={home} />
                <h3>Short-Term Pet Sitting</h3>
              </div>
              <div className="icon-wrapper">
                <img src={home} />
                <h3>Home Visits</h3>
              </div>
            </div>
            <div className="icons-right">
              <div className="icon-wrapper">
                <img src={dog} />
                <h3>Pet Outings</h3>
              </div>
              <div className="icon-wrapper my-8 ">
                <img src={food} />
                <h3>Pet Taxi</h3>
              </div>
              <div className="icon-wrapper">
                <img src={home} />
                <h3>Medical Administration</h3>
              </div>
            </div>
          </div>

          <img
            src={sub_img}
            className="border-2 border-blue-500 object-contain w-[300px]"
          />

          <div className="mt-8">
            <h1 className="uppercase text-xl">testimonials</h1>
          </div>
        </div>
        <div class="divider"></div>

        {/* testonminals */}
        <div className="w-full flex mt-12 items-center justify-evenly">
          <div className=" w-1/2 mr-12 flex flex-col items-center gap-4">
            <p>
              “Kat has proven to be extremely reliable and trustworthy when it
              comes to referring new clients to her that I do not have the
              capacity to take on or to assist me while I have been away on
              leave. She is a true professional and you can clearly see that she
              has a real passion for what she does. Highly recommend”. - Lauren,
              Marely & Me Pet Services
            </p>
            <p>
              “Kat has been taking time out of her day to drop in and care for
              my two dogs daily for 2 years now. She is always reliable and able
              to work with my ever-changing schedule with ease. My dogs love
              her, and she makes habit of treating them as her own. I often get
              photos from her which make my day. Kat lets herself in and out of
              my property and I have never had any issues. Thank you for being a
              part of the family. - Wayne, Yuki & Wombat's dad
            </p>
            <p>
              “I highly recommend Kat & Dog Walking. Kat is prompt, reliable,
              trustworthy and very accommodating to our needs. Prior too taking
              our dog Albert for walks, we met with Kat, and she genuinely paid
              interest to Alberts likes and dislikes to get to know him
              properly. Kat provided daily updates with photos of the walks she
              and my dog Albert went on which was so lovely to see. We are so
              happy that we are continuing to use Kat & Dog Walking. - Chris,
              Alberts dad
            </p>
            <p>
              “I’m so glad I’ve met Kat, my fluffy boy absolutely loves his
              walking days, and she is honestly the nicest person who always
              tries to work around availabilities and takes such good care of my
              dog! I’ve never had an issue in trusting Kat with a key to come
              and collect and lock up if I was at work. Cannot recommend
              enough!” - Samantha, Buddy’s mum
            </p>
          </div>
          <div className="border-l-[3px] border-[#6C3E2E] h-[700px] mt-5"></div>
          <div className=" w-1/2 ml-12 flex flex-col items-center gap-4">
            <p>
              “Kat has walked my boys since starting her business. They looked
              forward to their walk every day. When our old boy slowed down, she
              compassionately used to take him on short slow walks which he
              loved. Duke still enjoys his regular outings with his best mate
              Buddy. Kat has always loved my dogs like her own and has always
              put their safety first.” - Emma, Duke & Dez’s mum
            </p>
            <p>
              “We engaged Kat after seeing her recommendation on a neighbourhood
              forum. When we first met, I was amazed at how professional she
              was. Kat arrived on time with police checks and references ready,
              notes on terms and conditions relating to the welfare of our dog
              and a list of available dates and times. Kat has changed our
              one-year-old dog into a more settled boy. She is so conscious of
              creating wonderful experiences for him which she documents daily
              for us. We trust her completely and feel so fortunate to have
              found her. I cannot recommend her more highly.” - Helen, Fletchers
              mum
            </p>
            <p>
              “Kat has been walking and caring for my male rottweiler for over a
              year now and they have formed a very special bond. Kat tracks
              their walks together and is always very informative, I never have
              any concerns when he is in her care. She has full access to my
              home and is extremely trustworthy. Kat 7 Dog have an array of
              services to choose from at very competitive prices. I highly
              recommend Kat when considering care for your pet. - Vanessa,
              Glutes’ mum
            </p>
          </div>
        </div>
        </div>
      
    </section>
  )
}

export default LandingPage