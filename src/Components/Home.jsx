import React from "react";
import Choosecard from "./Choosecard";
import "./home.css";
const subject = [
  {
    imago: "./images/first.svg",
    heado: "Clean Handover",
    paragraph:
      "A project can be started by any MEP business in Dubai, but only a select handful can finish them on schedule. Urban Science gives you the opportunity to speak with past clients before your project even begins. In order for you to receive full feedback on URBAN SCIENCE. Our clean and on-time handover makes us among the best facilities management companies in Dubai.",
  },
  {
    imago: "./images/qualified.svg",
    heado: "Qualified and Certified",
    paragraph:
      "Urban Science is one of the leading companies in Dubai with a mission to provide customer satisfaction at every level. We provide effective solutions for all your MEP and facility management needs with a commitment to quality, environmental sustainability, and people-centered development. Urban Science is among the few companies in Dubai to be certified and approved by Dubai Municipality. Our professional and certified approach makes us among the best facilities management companies in Dubai",
  },
  {
    imago: "./images/experience.svg",
    heado: "Experienced team",
    paragraph:
      "Urban Science is the best MEP and facility management company that provides comprehensive and reliable services to meet all your needs. We've been in Dubai for over 10 years, and have helped more than 200 companies around the city with their facilities management needs. We are a well-established company with years of experience in the field. Our workforce of over 200 employees is backed by advanced technology and the latest tools to provide quality services.",
  },
  {
    imago: "./images/commonimg.png",
    heado: "Facility management",
    paragraph:
      "We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money",
  },
  {
    imago: "./images/commonimg.png",
    heado: "MEP works",
    paragraph:
      "We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money",
  },
  {
    imago: "./images/commonimg.png",
    heado: "Air conditioning services",
    paragraph:
      "We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money",
  },
  {
    imago: "./images/commonimg.png",
    heado: "Chilled Water System",
    paragraph:
      "We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money ",
  },
  {
    imago: "./images/commonimg.png",
    heado: "Electric Works",
    paragraph:
      "We comply with the highest standards of professionalism and have one of the lowest employee turnover rates in the industry. Our urban science experts who are reliable and on time have a combined experience of over 18+ years. Financially, we offer the best rates in the industry with no hidden fees or expensive contracts. If you want to save money.",
  },
];
const Home = () => {
  return (
    <div className="mainhome">
      <div className="topbanner">
        <div className="topbannerleft">
          <h1>Leading MEP & Facility management company in Dubai</h1>
          <p>
            Urban Science is always ready to accept your challenges Meeting your
            goals is our main objective. Professional services for facility
            management & MEP works.
          </p>
          <div className="buttonbar">
            <button className="companybutton">Company profile</button>
            <button className="watchbutton">Watch video</button>
          </div>
        </div>
        <div className="topbannerright">
          <img src="./images/bannerright.png" alt="" />
        </div>
      </div>
      <div className="chooseus" style={{ display: "flex73" }}>
        <h2>YOU CANNOT CREATE THE EXPERIENCE.YOU MUST UNDERGO IT</h2>
        <h1>Why Choose US</h1>
        <div className="cards">
          <Choosecard
            imago={subject[0].imago}
            heado={subject[0].heado}
            paragraph={subject[0].paragraph}
          />
          <Choosecard
            imago={subject[1].imago}
            heado={subject[1].heado}
            paragraph={subject[1].paragraph}
          />
          <Choosecard
            imago={subject[2].imago}
            heado={subject[2].heado}
            paragraph={subject[2].paragraph}
          />
        </div>
      </div>
      <div className="wedo">
        <h1>What we Do ?</h1>
        <div className="flexcards">
          <Choosecard
            imago={subject[3].imago}
            heado={subject[3].heado}
            paragraph={subject[3].paragraph}
          />
          <Choosecard
            imago={subject[4].imago}
            heado={subject[4].heado}
            paragraph={subject[4].paragraph}
          />
          <Choosecard
            imago={subject[5].imago}
            heado={subject[5].heado}
            paragraph={subject[5].paragraph}
          />
          <Choosecard
            imago={subject[6].imago}
            heado={subject[6].heado}
            paragraph={subject[6].paragraph}
          />
          <Choosecard
            imago={subject[7].imago}
            heado={subject[7].heado}
            paragraph={subject[7].paragraph}
          />
        </div>
      </div>
      <div className="ourteam" >
        <h1>OUR TEAM</h1>
        <h3>"A satisfied customer is the best business strategy off all"</h3>
        <div className="ourteamparts" style={{display:"flex"}}>
            <div className="leftteam">
                <img style={{width:"300px",height:"350px",borderRadius:"40px"}} src="./images/ourteamimages.jpg" alt="" />
            </div>
            <div className="rightteam">
                <p>After spending a huge time in facility management and MEP works. And after failing several times we have come to know that a satisfied customer is what makes you the best facility management company in Dubai. Our team is a blend of young and experience, and having an experienced core team helps us work through challenging problems while the youth ideas help us lay the groundwork for the future. Having this great vision for preparing for the better tomorrow makes us the best MEP companies in Dubai.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
