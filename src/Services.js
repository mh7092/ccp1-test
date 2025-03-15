import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css"; // استایل‌ها در فایل جداگانه

function Services() {
  const navigate = useNavigate();

   // آرایه خدمات با عنوان و لینک تصاویر
   const services = [
    {
      title: "ارائه مشاوره",
      image: "/images/consulting.png", // مسیر تصویر
      route: "/consulting",
    },
    {
      title: "ویزیت آنلاین",
      image: "/images/onlineV.png",
      route: "/OnlineV",
    },
    {
      title: "شبکه اجتماعی بیماران",
      image: "/images/social.png",
      route: "/SocialN",
    },
  ];


  return (
    <div className="services-container">
      <h3>خدمات ما</h3>
      <div className="services-grid">
        {
        services.map((service, index) => ( <div   key={index}   className="service-card"   onClick={() => navigate(service.route)} >
            <img src={service.image} alt={service.title} className="service-image" />
            <h4>{service.title}</h4>
          </div>
        ))
        }
      </div>
         {/* دکمه بازگشت به صفحه اصلی */}
         <button className="back-button" onClick={() => navigate("/")}>
         صفحه اصلی
      </button>
    </div>
  );
  
}

export default Services;


/*
return (
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => navigate(service.route)}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
   
  );
*/