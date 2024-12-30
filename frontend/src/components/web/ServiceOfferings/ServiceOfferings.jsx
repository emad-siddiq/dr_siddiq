import React from 'react';
import ServiceCard from './ServiceCard';
import './ServiceOfferings.css';

const ServiceOfferings = () => {
  // Predefined list of counts that can be easily modified
  const serviceCounts = [
    9000, 8000, 1500, 65, 
    88, 79, 63, 71, 
    59, 82
  ];

  const surgicalServices = [
    { name: 'Gall Bladder Surgery', count: serviceCounts[0], speed: 50 },
    { name: 'Appendix Surgery', count: serviceCounts[1], speed: 120 },
    { name: 'Laparoscopic Surgery', count: serviceCounts[2], speed: 80 },
    { name: 'Colon Surgery', count: serviceCounts[3], speed: 90 },
    { name: 'Anterior Resection', count: serviceCounts[4], speed: 110 },
    { name: 'Low Anterior Resection', count: serviceCounts[5], speed: 100 },
    { name: 'Right & Left Hemicolectomy', count: serviceCounts[6], speed: 70 },
    { name: 'Partial Gastrectomy', count: serviceCounts[8], speed: 95 },
    { name: 'Esophagectomy', count: serviceCounts[9], speed: 105 }
  ];

  const patientCareDescription = (
    <>
      <p>
        With 38 years of surgical experience, Dr. Siddiq specializes in delivering personalized, state-of-the-art medical interventions. His holistic approach ensures comprehensive patient support throughout the entire treatment journey.
      </p>
      <p>
        From initial consultation to post-operative care, Dr. Siddiq and his team provide unparalleled medical expertise, advanced diagnostic capabilities, and compassionate treatment strategies tailored to individual patient needs.
      </p>
      
    </>
  );

  return (
    <div className="services-container">
      <ServiceCard 
        title="Surgical Expertise"
        services={surgicalServices}
        learnMoreLink="/services"
        learnMoreText="Explore Full Service Range"
      />
      
      <div className="separator"></div>
      
      <ServiceCard 
        title="Patient-Centered Surgical Care"
        description={patientCareDescription}
        learnMoreLink="/patient-care"
        learnMoreText="Learn About Our Approach"
      />
    </div>
  );
};

export default ServiceOfferings;