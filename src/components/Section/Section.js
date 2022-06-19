import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

// рендерит секцию с заголовком и детей (children)
const Section = ({ title, children }) => (
  <section className={s.section}>
    {title}
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
