const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
  const yOffset = -100;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

export default scrollWithOffset;