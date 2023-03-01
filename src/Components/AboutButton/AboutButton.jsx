import React from "react";
import { Button } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./Buton.css";
import alan from "./imagenesNosotros/alan.jpg"
import erika from "./imagenesNosotros/erika.jpg"
import brayan from "./imagenesNosotros/brayan.jpg"
import gabi from "./imagenesNosotros/gabi.jpg"
import jheison from "./imagenesNosotros/jheison.jpg"
import david from "./imagenesNosotros/david.jpg"
import dario from "./imagenesNosotros/dario.jpg"
import emi from "./imagenesNosotros/emi.jpg"



import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { hover } from "@testing-library/user-event/dist/hover";
const { Meta } = Card;

const AboutButton = ({ linkedin, github, name,image }) => {
  return (
    <div className="button">
      <Card
        style={{
          width: 300,
          

        }}
        cover={
          <img style={{

            borderRadius:500,
            
          }}
            alt="example"
            src={image}
          />
        }
        actions={[
          <Button
            href={linkedin}
            target="_blank"
            icon={<LinkedinOutlined />}
          />,
          <Button href={github} target="_blank" icon={<GithubOutlined />} />,
        ]}
      >
        <Meta title={name} />
      </Card>
    </div>
  );
};

const integrantes = [
  {
    linkedin: "https://www.linkedin.com/in/emiliano-villa-686364241/",
    github: "https://github.com/e0212",
    name: "Emiliano Villa",
    image:emi
    
  },
  {
    linkedin: "http://www.linkedin.com/in/alan-delgado8",
    github: "https://github.com/DelgadoAlan",
    name: "Alan Delgado",
    image:alan
  },
  {
    linkedin:
      "https://www.linkedin.com/in/brayan-jose-mendoza-rondon-52625a160/",
    github: "https://github.com/BrayanMen",
    name: "Brayan Mendoza",
    image:brayan
  },
  {
    linkedin: "https://www.linkedin.com/in/erikaladner/?originalSubdomain=ar",
    github: "https://github.com/erikalad",
    name: "Erika Ladner",
    image:erika
  },
  {
    linkedin: "https://www.linkedin.com/in/david-barboza-6a4702170/",
    github: "https://github.com/eldeividrig",
    name: "David Barboza",
    image:david
  },
  {
    linkedin: "https://www.linkedin.com/in/dario-balmaceda-/",
    github: "https://github.com/dbandres",
    name: "Dario Andres Balmaceda",
    image:dario
  },
  {
    linkedin: "https://www.linkedin.com/in/gabriel-p%C3%A9rez-52557534/",
    github: "https://github.com/gabiperez",
    name: "Gabriel Perez",
    image:gabi
  },
  {
    linkedin: "https://www.linkedin.com/in/jheison-david-vargas-rayo/",
    github: "https://github.com/JheisonVR",
    name: "Jheison David Vargas",
    image:jheison
  },
];

const AboutButtons = () => {
  return (
    <div className="container_cards">
      {integrantes.map((integrante) => (
        <AboutButton
          key={integrante.name}
          name={integrante.name}
          github={integrante.github}
          linkedin={integrante.linkedin}
          image={integrante.image}
        />
      ))}
    </div>
  );
};

export default AboutButtons;
