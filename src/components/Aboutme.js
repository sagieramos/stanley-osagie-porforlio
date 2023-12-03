import React from 'react';
import data from './data.json';
import Title from './Title';

const Aboutme = () => {
  const { title, heading, paragraph } = data.aboutme;
  return (
    <section>
      <Title text={title} />
      <article>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </article>
      <article>
        <h3>RESIDENCE . . . . Nigeria</h3>
        <h3>FREELANCE . . . . Available</h3>
        <h3>REMOTE . . . . Available</h3>
        <h3>ADDRESS . . . . Lagos, Nigeria</h3>
      </article>
    </section>
  );
};

export default Aboutme;
