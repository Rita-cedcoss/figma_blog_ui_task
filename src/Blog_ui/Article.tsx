import React from "react";

const Article = () => {
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
    {
      image: "Rectangle6.png",
      text: "I believe learning is the most important skill",
    },
    {
      image: "Rectangle8.png",
      text: "Clients are part of the team",
    },
    {
      image: "Rectangle9.png",
      text: "Clients are part of the team",
    },
    {
      image: "Rectangle10.png",
      text: "Here are some things you should know regarding how we work",
    },
    {
      image: "Rectangle11.png",
      text: "Connecting artificial intelligence with digital product design",
    },
    {
      image: "Rectangle13.png",
      text: "How modern remote working tools get along with Old School Cowboy's methods",
    },
  ];

  return (
    <div className="article">
      <h1 style={{ fontSize: "44px" }}> All articles</h1>
      <div className="autofill">
        {articleArr.map((item) => {
          return (
            <>
              <div className="item1">
                <img src={item.image} width="" />
                <p>{item.text}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Article;
