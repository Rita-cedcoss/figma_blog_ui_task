import React from "react";

const ArticleBlog = () => {
  return (
    <section>
      <div className="articleBlog">
        <div className="articleBlog__top">
          <div className="articleBlog__left">
            <img src="image14.png" className="articleBlog__left__image" />
            <div>
              <p>Mika MAtikainen</p>
              <p>Apr 15, 2020 · 4 min read</p>
            </div>
          </div>
          <div>
            <span className="articleBlog__favicon">
              <i className="bi bi-facebook"></i>
            </span>
            <span className="articleBlog__favicon">
              <i className="bi bi-twitter"></i>
            </span>
          </div>
        </div>
        {/* blog content1 */}
        <div className="articleBlog__content">
          <p className="articleBlog__content__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra.
          </p>
          <p className="articleBlog__content__para">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
            molestie, molestie lectus eu, semper lectus.
          </p>
        </div>
        {/*  blog content2*/}
        <div className="articleBlog__content">
          <h3>Next on the pipeline</h3>
          <p className="articleBlog__content__para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra.
          </p>
          <p className="articleBlog__content__para">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
            molestie, molestie lectus eu, semper lectus.
          </p>
        </div>
      </div>
      {/* banner  */}
      <div className="articleBlog__banner">
        <img src="Rectangle 16.png" width="100%" alt="img" />
        <p>Image caption centered this way and I’ll make this a bit longer  </p>
        <p>to indicate the amount of line-height.</p>
      </div>
      <div className="articleBlog ">
        <div className="articleBlog__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra.
          </p>
          <p className="articleBlog__content__para">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui
            molestie, molestie lectus eu, semper lectus.
          </p>
          <p className="articleBlog__content__para">A list look like this:</p>

          <ul className="articleBlog__content__para">
            <li>First item in the list</li>
            <li style={{ paddingTop: "10px" }}>
              Second item in the list lorem ipsum dolor sit amet nunc felis
              dolor lorem ipsum sit amet
            </li>
            <li style={{ paddingTop: "10px" }}>Third item in the list</li>
          </ul>
          <p className="articleBlog__content__para">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula.
          </p>
          <p className="articleBlog__content__para">
            Thanks For Regarding.
            <br />
            Mika
          </p>
        </div>
        <div className="articleBlog__favicon1">
          <div className="articleBlog__social">
            <div className="articleBlog__social__fav">
              <i className="bi bi-facebook"></i>
              <span>Share on facebook</span>
            </div>
            <div className="articleBlog__social__fav articleBlog__social__fav--border">
              <i className="bi bi-twitter"></i>
              <span>Share on twiter</span>
            </div>
          </div>
          <p className="articleBlog__content__para">
            Tags: product design, culture
          </p>
          <div className="articleBlog__left articleBlog__left--btm">
            <img
              src="image14.png"
              className="articleBlog__left__image"
              height="70px"
              width="70px"
            />
            <div>
              <p>
                Mika Matikainen is a Design Founder & Advisor, Berlin School of
                Creative Leadership Executive MBA participant, Zippie advisor,
                Wolt co-founder, and Nordic Rose stakeholder.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="articleBlog__eye">
        <hr></hr>
        <img src="Group 10.png" className="article__eye"></img>
      </div>
    </section>
  );
};

export default ArticleBlog;
