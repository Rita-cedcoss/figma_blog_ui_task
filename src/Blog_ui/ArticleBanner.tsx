import React from "react";

const ArticleBanner = () => {
  return (
    <>
      <section className="Banner Banner-bottom">
        <div style={{ padding: "10px 0px 0px 0px" }}>
          <p>
            A few words about this blog platform, Ghost, and how this site was
            made
          </p>
          <div className="Banner__bottom Banner__bottom--border ">
            <p className="Banner__content">
              Why Ghost (& Figma) instead of Medium,
            </p>
            <p className="Banner__content "> WordPress or other options?</p>
          </div>
        </div>
      </section>
      <img src="image2.png" height="533px" width="1140px" />
    </>
  );
};

export default ArticleBanner;
