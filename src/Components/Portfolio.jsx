/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/aws.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Next.js Portfolio 🎉",
    description:
      "My first Next.js project. I used this to learn Next.js and to create a portfolio site for myself.",
    url: "https://portfolio-gab.vercel.app/",
  },
  {
    title: "VloggersTV",
    description:
      "This project was created using a combination of Tailwind, SCSS, HTML, and JS. Together, these tools enabled the creation of a modern, responsive, and functional web application.",
    url: "https://gabthegreat25.github.io/Final-Project-ITOS322-T/",
  },
  {
    title: "Camera Rental",
    description:
      "This project was created using the MERN (MongoDB, Express, React, Node.js) stack, incorporating the powerful state management tools of Redux Toolkit and the streamlined data fetching capabilities of RTK Query.",
    url: "https://camera-rental-fe.vercel.app/dashboard",
  },
  {
    title: "Everything You Need To Know About HTML5",
    description:
      "This project was created using HTML5, and CSS3. It is a website that provides information about HTML5.",
    url: "https://github.com/GabTheGreat25/Everything-You-Need-To-Know-About-HTML5",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
