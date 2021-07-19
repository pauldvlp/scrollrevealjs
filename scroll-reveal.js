function scrollReveal(element, {
  delay = '0s',
  distance = '0',
  duration = '1s',
  opacity = 0,
  origin = 'bottom',
  scale = 0.75,
  repeat = true,
  threshold = 0,
}) {

  function setPropertys (el) {
    el.style.transform = `scale(${scale})`
    el.style.transitionDelay = delay;
    el.style.transitionDuration = duration;
    if (origin.toLowerCase() === 'bottom') el.style.bottom = '-' + distance;
    if (origin.toLowerCase() === 'top') el.style.top = '-' + distance;
    if (origin.toLowerCase() === 'left') el.style.left = '-' + distance;
    if (origin.toLowerCase() === 'right') el.style.right = '-' + distance;
    el.style.opacity = opacity;
  }

  function setPropertysOrigin (el) {
    el.style.transform = 'scale(1)'
    if (origin.toLowerCase() === 'bottom') el.style.bottom = '0'
    if (origin.toLowerCase() === 'top') el.style.top = '0'
    if (origin.toLowerCase() === 'left') el.style.left = '0'
    if (origin.toLowerCase() === 'right') el.style.right = '0'
    el.style.opacity = '1';
  }

  function repeatReveal (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setPropertysOrigin(entry.target)
      else setPropertys(entry.target);
    });
  }

  function justOne (entries, scrollRevealObserver) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
          setPropertysOrigin(entry.target)
          scrollRevealObserver.unobserve(entry.target);
      }
    });
  }

  let whatTheFunction;
  repeat ? whatTheFunction = repeatReveal : whatTheFunction = justOne;

  const scrollRevealObserver = new IntersectionObserver(whatTheFunction, {
    root: null,
    rootMargin: '0px',
    threshold: threshold,
  });

  if (typeof element === 'string' || element instanceof Node) {
    if (typeof element === 'string') {
      const elementSR = document.querySelector(element);
      setPropertys(elementSR)
      scrollRevealObserver.observe(elementSR)
    } else {
      setPropertys(element)
      scrollRevealObserver.observe(element);
    }
  }

  if (element instanceof Array || element instanceof NodeList) {
    element.forEach((el) => {
      setPropertys(el)
      scrollRevealObserver.observe(el);
    });
  }
}

