import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="footer">
      <Marquee>
        <div className="footer__top">
          <p>Digital product design</p>
          <p>Remote work</p>
          <p>UX design</p>
          <p>Distributed teams</p>
          <p>Creativity</p>
          <p>Strategy</p>
          <p>Suspense</p>
          <p>Growth</p>
        </div>
      </Marquee>
      <div className="footer__bottom">
        <img src="logobt.png" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
        <div className="footer__social">
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>RSS</p>
        </div>
        <div>
          <p>© 2012–2020 Nordic Rose Co. </p>
          <p> All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
