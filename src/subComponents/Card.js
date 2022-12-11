import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { mediaQueries } from "../components/Themes";
import "./Custom.css";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  ${mediaQueries(50)`
        width:16rem;
        margin-right:6rem;
        height:35vh;
  `};
  ${mediaQueries(40)`
        width:14rem;
        margin-right:4rem;
        height:35vh;
  `};
  ${mediaQueries(25)`
        width:12rem;
        margin-right:4rem;
        height:35vh;
padding:1.5rem 1.5rem;
  `};
  ${mediaQueries(20)`
        width:10rem;
        margin-right:4rem;
        height:40vh;
  `};
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;
const Description = styled.div`
  font-size: calc(0.7em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
  ${mediaQueries(25)`
  font-size:calc(0.7em + 0.3vw);
  `};
  ${mediaQueries(20)`
  font-size:calc(0.6em + 0.3vw);
  `};
`;
const Tags = styled.div`
  border-top: 2px solid #FCF6F4;
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
`;

const Image = styled.img`

`;


const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);

  ${mediaQueries(25)`
  font-size:calc(0.7em);


  `};
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;
const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);
`;
const Git = styled(NavLink)`
  text-decoration: none;
  }
`;

const item = {
  hidden: { scale: 1 },
  show: { scale: 1, transition: { type: "spring", duration: 0 } },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github, image } = props.data;
  return (
    <div class="mr-8rem">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <Box key={id} variants={item}>
              <Title>{name}</Title>
              <Description>{description}</Description>
            </Box>
          </div>
          <div class="flip-card-back">
            <Box class="box" key={id} variants={item}>
              <Image src={image} />
              <Tags class="box">
                {tags.map((t, id) => (
                  <Tag key={id}>#{t}</Tag>
                ))}
              </Tags>
              <Footer>
                <Link class="visit-link" to={{ pathname: `${demo}` }} target="_blank">
                  Visit
                </Link>
                <Git to={{ pathname: `${github}` }} target="_blank">
                  <Github class="git" width={30} height={30} />
                </Git>
              </Footer>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
