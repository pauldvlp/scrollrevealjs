// Definicion de la funcion y sus parametros
function scrollReveal(
  element,
  mode,
  {
    animation = "scale",
    delay = undefined,
    delayShow = 0,
    delayHide = 0,
    margin = "0px",
    speed = "fast",
    treshold = 1
  }
) {
  //Definicion de la velocidad de la transision.
  if (speed === "verySlow") speed = 1.25;
  if (speed === "slow") speed = 1;
  if (speed === "medium") speed = 0.75;
  if (speed === "fast") speed = 0.5;
  if (speed === "veryFast") speed = 0.25;

  //Seleccionando los elementos que desea animar.
  const elements = document.querySelectorAll(element);

  //añadiendo clases y algunos estilos a los elementos y al padre de los elementos.
  elements.forEach((el) => {
    el.classList.add(`sr-${animation}`);
    el.style.transition = `${speed}s`;
    el.parentNode.style.overflowX = "hidden";
    el.parentNode.style.overflowY = "hidden";
  });

  //funcion @repeat. Hace que la animacion se repita si se vuelve a visualizar.
  const repeat = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add(`show-sr-${animation}`);
        }, delay || delayShow);
      } else {
        setTimeout(() => {
          entry.target.classList.remove(`show-sr-${animation}`);
        }, delay || delayHide);
      }
    });
  };
  //funcion @justOne. La animacion solo se produce una vez y los elementos quedan en estado estatico.
  const justOne = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add(`show-sr-${animation}`);
          observer.disconnect();
        }, delay || delayShow);
      }
    });
  };
  //Inicializando la variable que contendra una de las dos funciones anteriores.
  let whatFunction;

  //Se le asigna la funcion a la variable anterior.
  if (mode === "repeat") whatFunction = repeat;
  if (mode === "justone") whatFunction = justOne;
  if (animation === "btt") whatFunction = justOne;

  //Creando el observador y añadiendoselo a los elementos.
  elements.forEach((el) => {
    const observer = new IntersectionObserver(whatFunction, {
      rootMargin: margin,
      treshold: treshold
    });
    observer.observe(el);
  });
}
