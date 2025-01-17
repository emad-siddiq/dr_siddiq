import React from "react";
import Card from "../../web/AboutSection/Card";
import about1 from "../../../assets/images/about1.jpg";
import "./AboutSection.css";

const AboutSection2 = () => (
  <div className="about-section-container">
    <Card
      image={about1}
      altText="Dr. Ghulam Siddiq Experience"
      title="Bariatric Surgery"
      credentials={`A novel solution for obesity`}
      description={`Laparoscopic Bariatric surgery, a transformative weight-loss procedure, has found a pioneering champion in Dr. Ghulam Siddiq at Shifa International Hospital, Islamabad. Since 2010, he has performed over 1,400 successful laparoscopic cases, establishing himself as Pakistan's leading authority in minimally invasive bariatric procedures.`}
      actionLink="/experience"
      actionText="Learn More About Bariatric Surgery"
    />
  </div>
);

export default AboutSection2;
