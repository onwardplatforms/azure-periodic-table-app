import { useState, useEffect } from 'react';

const useMobile = () => {
  // Check for window object existence
  const hasWindow = typeof window !== 'undefined';

  // Only access window.innerWidth if window is defined
  const [isMobile, setIsMobile] = useState(
    hasWindow ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    // Do nothing if window is not defined (i.e., we're on the server)
    if (!hasWindow) return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [hasWindow]); // Empty array ensures that effect is only run on mount and unmount

  return isMobile;
};

export default useMobile;
