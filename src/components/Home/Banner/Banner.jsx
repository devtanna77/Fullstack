import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Ziegler Aerospace is an ingenious Aerospace company that offers a
            unique range of Services to cater the needs of Airlines, MRO’s &
            EASA DOA, POA and 145 organisations. ZA Strength revolves around a
            knowledgeable, professional and highly experienced team have the
            capability to produce a full suite (design and plan, produce and
            install, maintain, repair and certify) of multi-disciplined Minor
            and Major (STC) aircraft modifications (interiors, avionics,
            structures). On schedule and cost-effective implementation and
            certification of customer Modifications and projects according to
            the EASA, FAA and UAE regulations.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
