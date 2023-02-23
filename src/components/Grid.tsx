import React from "react";
const Grid = () => {
  let articleArr = [
    {
      image: "Rectangle 12.png",
      text: "Here are some things you should know regarding how we work",
    },
    {
      image: "Rectangle 13.png",
      text: "Granny gives everyone the finger, and other tips from OFFF Barcelona",
    },
    {
      image: "Rectangle3.png",
      text: "Hello world, or, in other words, why this blog exists",
    },
    {
      image: "Rectangle4.png",
      text: "Here are some things you should know regarding how we work",
    },
    {
      image: "Rectangle5.png",
      text: "Connecting artificial intelligence with digital product design",
    },
    {
      image: "Rectangle7.png",
      text: "It’s all about finding the perfect balance",
    },
  ];
  return (
    <>
      <div className="article__grid">
        <h1 style={{ fontSize: "44px" }}>What to read next</h1>
        <div className="autofill1">
          {articleArr.map((item) => {
            return (
              <>
                <div className="item2">
                  <img src={item.image} width="100%" />
                  <p>{item.text}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="newsletter">
        <h3>Sign up for the Newsletter</h3>
        <p>If you want relevant updates occasionally, sign up for the</p>
        <p>private newsletter. Your email is never shared.</p>
        <div>
          <input placeholder="Enter your email" className="inp"></input>
          <button className="btn">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Grid;
