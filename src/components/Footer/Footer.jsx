import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Ziegler Aerospace GmbH Dr.-Ludwig-Bölkow-Str.1 86609 Donauwörth
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +49 906 705 868 095</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: abc.ziegler@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Seats & Comfort</div>
          <div className="text">Cabin Storage</div>
          <div className="text">Passenger Amenities</div>
          <div className="text">Crew & Services</div>
          <div className="text">Safety</div>
          <div className="text">Environmental Control</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Returns</div>
          <div className="text">Terms & Condition</div>
          <div className="text">Contact Us</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">ZIEGLER 2023 CREATED BY DEV.</span>
        </div>
        <img src={Payment} />
      </div>
    </footer>
  );
};

export default Footer;
