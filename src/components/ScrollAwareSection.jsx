import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

const ScrollAwareSection = ({ children, className, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // if (entry.isIntersecting) {
        //   setIsVisible(true);
        //   observer.unobserve(entry.target); // Stop observing once section is visible
        // }
        if (entry.isIntersecting) {
          setIsVisible(true); // Element is intersecting the viewport
        } else {
          setIsVisible(false); // Element is no longer intersecting the viewport
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup function
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`site-section ${className} transition-all duration-700 md:translate-y-8 md:opacity-0 [&.lqd-is-in-view]:translate-y-0 [&.lqd-is-in-view]:opacity-100 ${isVisible ? 'lqd-is-in-view' : ''}`}
    >
      {children}
    </section>
  );
};

export default ScrollAwareSection;

ScrollAwareSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};