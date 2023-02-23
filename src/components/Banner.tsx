import React from "react";

const Banner = () => {
  return (
    <section className="Banner">
      <img src="image2.png" height="533px" width="100%" />
      <div style={{ padding: "30px 0px 0px 0px" }}>
        <p>
          A few words about this blog platform, Ghost, and how this site was
          made
        </p>
        <div className="Banner__bottom">
          <p className="Banner__content">
            Why Ghost (& Figma) instead of Medium,
          </p>
          <p className="Banner__content"> WordPress or other options?</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
