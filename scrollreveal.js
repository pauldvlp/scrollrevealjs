const scrollReveal = (
  element,
  {
    delay = '0s',
    distance = '100px',
    duration = '1s',
    opacity = 0,
    origin = 'bottom',
    scale = 0.75,
    repeat = true,
  } = {}
) => {
  const setPropertys = (el) => {
    el.style.position = 'relative';
    el.style.transform = `scale(${scale})`;
    el.style.transitionDelay = delay;
    el.style.transitionDuration = duration;
    el.style[origin.toLowerCase()] = '-' + distance;
    el.style.opacity = opacity;
  };

  const setPropertysOrigin = (el) => {
    el.style.position = 'relative';
    el.style.transform = 'scale(1)';
    el.style[origin.toLowerCase()] = '0';
    el.style.opacity = '1';
  };

  const reveal = (repeat) => (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPropertysOrigin(entry.target);
        if (!repeat) observer.unobserve(entry.target);
      } else {
        setPropertys(entry.target);
      }
    });
  };

  const scrollRevealObserver = new IntersectionObserver(reveal(repeat), {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  if (typeof element === 'string' || element instanceof Node) {
    const elementSR =
      element === 'string' ? document.querySelector(element) : element;
    setPropertys(elementSR);
    scrollRevealObserver.observe(elementSR);
  }

  if (element instanceof Array || element instanceof NodeList) {
    element.forEach((el) => {
      setPropertys(el);
      scrollRevealObserver.observe(el);
    });
  }
};
