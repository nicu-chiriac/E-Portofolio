import { useEffect, useRef } from 'react'

const ScrollToTop = ({ children }) => {

  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollTo(0, -document.body.scrollHeight);
    }
  }, []);

  return (
    <>
      <div ref={elementRef} />
      {children}
    </>
  )
}

export default ScrollToTop;


