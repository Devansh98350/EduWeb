import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../Layout";

// Blog data as a variable
const blogData = [
  {
    id: 1,
    title: "Mastering the Basics: GTSE Sample Questions Explained",
    date: "2023-09-30",
    description:
      "Explore a wealth of exam resources, including the best test series for neet, to enhance your medical exam preparation and ensure a successful outcome. Explore a wealth of exam resources, including the best test series for neet, to enhance your medical exam preparatio",
    highlight: "best test series for neet",
    image:
      "https://www.goalinstitute.org/product/blog_image_1706652571_1082.jpeg",
    link: "/link-to-article1",
  },
  {
    id: 2,
    title: "Understanding Core Concepts: GTSE Exam Tips",
    date: "2023-08-30",
    description:
      "Delve into key exam tips, covering the most challenging areas for success in competitive exams.",
    highlight: "exam tips",
    image:
      "https://www.goalinstitute.org/product/blog_image_1706652571_1082.jpeg",
    link: "/link-to-article2",
  },
];

// Styled components
const Container = styled.div`
  padding: 0 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  width: 80%;
  height: auto;
  //   max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  max-width: 40%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
    height: auto;
    justify-content: center; // Center the image horizontally
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  flex: 3;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Date = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Highlight = styled.span`
  color: #e74c3c;
  font-weight: bold;
`;

const ReadMore = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
`;

const BlogCard = ({ title, date, description, highlight, image, link }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Description>
          {description.replace(highlight, "")}
          <Highlight>{highlight}</Highlight>
        </Description>
        <ReadMore href={link}>Read More →</ReadMore>
      </ContentContainer>
    </CardContainer>
  );
};

const Blogmain = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(blogData);
  }, []);

  return (
    <Layout>
      <Container>
        {cards.map((card) => (
          <BlogCard
            key={card.id}
            title={card.title}
            date={card.date}
            description={card.description}
            highlight={card.highlight}
            image={card.image}
            link={card.link}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Blogmain;
