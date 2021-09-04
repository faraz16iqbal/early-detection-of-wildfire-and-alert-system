import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div class="amu">
        <a href="https://www.amu.ac.in/">
          <img src="../images/amu.png" alt="AMU" />
        </a>
      </div>
      <div class="wrapper">
        <div class="fixed bg-1">
          <h4>Fuego α</h4>
          <Link to="/model">
            <button id="model">Model</button>
          </Link>
          <h1>31 percent!</h1>
          <h5>Scroll Down!</h5>
        </div>
        <div class="scroll">
          <h3>
            Forests cover 31 percent of the world's land surface, just over 4
            billion hectares. The forest cover of India is 712,249 square
            kilometers (21.67 percent of India's total geographical area).
          </h3>
        </div>
        <div class="fixed bg-2">
          <h1>Diverse Ecosystem</h1>
        </div>
        <div class="scroll">
          <h3>
            More than 10 million different species of animals, plants, fungi,
            and micro-organisms inhabit the Earth. They and the habitats in
            which they live represent the world's biological diversity or
            biodiversity as it is often called. Humans use at least 40,000
            species of plants and animals daily for food, shelter, clothing, and
            medicinal needs. Forests are the most diverse ecosystems on land,
            because they hold the vast majority of the world's terrestrial
            species. Some rain forests are among the oldest ecosystems on Earth.
            Timber, pulpwood, firewood, fodder, meat, cash crops, fish, and
            medicinal plants from the forest provide livelihoods for hundreds of
            millions of people worldwide. But only a fraction of known species
            have been examined for potential medicinal, agricultural or
            industrial value.
          </h3>
        </div>
        <div class="fixed bg-3">
          <h1>Forest fires</h1>
        </div>
        <div class="scroll">
          <h3>
            The most common hazard in forests is forests fire. Forest fires are
            as old as the forests themselves. They pose a threat not only to the
            forest wealth but also to the entire regime to fauna and flora
            seriously disturbing the bio-diversity and the ecology and
            environment of a region. During summer, when there is no rain for
            months, the forests become littered with dry senescent leaves and
            twinges, which could burst into flames ignited by the slightest
            spark.
          </h3>
        </div>
        <div class="fixed bg-4">
          <h1>Australia bushfire</h1>
        </div>
        <div class="scroll">
          <h3>
            The year 2020 started with massive Australian fires. An area about
            the size of South Korea, roughly 25.5 million acres, has been
            burned. More than 1 billion mammals, birds, and reptiles likely lost
            their lives in the blazes. Australia's total carbon emissions were
            equivalent to 535 million tonnes of CO2. The AQI(air quality index)
            of areas near the fires was 4600 which is almost 23 times the
            hazardous level of 200!.
          </h3>
        </div>
        <div class="fixed bg-5">
          <h1>MODIS</h1>
        </div>
        <div class="scroll">
          <h3>
            MODIS(Moderate Resolution Imaging Spectro-radiometer) satellite is
            used by almost every country to detect fires. It is somewhat
            accurate and fast.
          </h3>
          <h3>But there are some drawbacks of MODIS</h3>
          <ul>
            <li>
              MODIS is an optical sensor, which has inherent limitations in
              observing sea ice and snow. Unlike a passive-microwave sensor,
              which can detect microwave energy through clouds, MODIS cannot
              observe the surface when cloud cover is present.
            </li>
            <li>
              It also suffers to detect fires during the night as the smokes and
              cloud cover the fire.
            </li>
            <li>
              Since it is a sensor on satellite it detects the fire when an
              ample amount of land has already burned.
            </li>
          </ul>
          <h3>
            We need some technology that can detect fires in the early stages so
            that we can prevent it from becoming another Australia or Amazon
            fire.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
