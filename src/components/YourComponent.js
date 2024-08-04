import React, { useEffect, useRef } from 'react';

const YourComponent = () => {
  const ref = useRef();

  useEffect(() => {
    function debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }

    const resizeObserver = new ResizeObserver(debounce(entries => {
      for (let entry of entries) {
        // Handle resize
      }
    }, 100));

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        resizeObserver.unobserve(ref.current);
      }
      resizeObserver.disconnect();
    };
  }, []);

  return <div ref={ref}>Your Content</div>;
};

export default YourComponent;
