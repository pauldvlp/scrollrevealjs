# scrollreveal.js 😎🤩
Mi primer libreria.📖💻

Este es mi segundo proyecto... una pequeña libreria de JavaScript y CSS y su funcion es hacer el efecto de scroll-reveal (revelar al desplazar). Los elementos van apareciendo a medida vas scrolleando la pagina.

## Invocación

Hacerlo dentro y al final de la etiqueta **body**

```html
<script src="scrollreveal.min.js"></script>
```
## Uso

Invocar la funcion **scrollReveal()** dentro de un etiqueta **script** al final y dentro del **body** o en un archivo **js** externo.

```js
scrollReveal(element[, options])
```

### element

Es el elemento o elementos a los que desees agregar la animacion, este parametro puede ser:
- **Node** : Nodo del documento;
- **String** : Selector CSS *(Solo selecciona el primer elemento que coincida con ese selector)*
- **Array** || **NodeList** : Arreglo o Lista de Nodos del documento

### options
- ```value : Object ```

Es un objeto con las siguientes propiedades

**Default**
```js
{
  delay = '0s',
  distance = '0',
  duration = '1s',
  opacity = 0,
  origin = 'bottom',
  scale = 0.75,
  repeat = true,
}
```

### options.delay
- ```value : String ```

Es el tiempo de retraso que tendra la animacion al aparecer y desaparecer.

**Default**
```js
{ delay: '0s' }
```

### options.distance
- ```value : String```

Es la distancia en cualquier unidad de CSS que tendra desde el posicion inicial hasta la posicion final.

**Default**
```js
{ distance: '100px' }
```

### options.origin
- ```value : String - ['left', 'top', 'right', 'bottom']```

Es la direccion desde la cual la animacion iniciara, si su valor el ```left``` al mostrar el elemento este vendra desde la izquierda.

**Default**
```js
{ origin: 'bottom' }
```

### options.duration
- ```value : String```

Duracion que tendra la animacion al aparecer el elemento, la duracion se tendra en cuenta despues del ```options.delay```

**Default**
```js
{ duration: '1s' }
```

### options.opacity
- ```value : Number```

Es la opacidad del elemento con la que empezara la animacion, si su valor es ```0.5``` al comenzar la animacion de revelacion el elemento tendra un 50% de opacidad.

**Default**
```js
{ opacity: 0 }
```

### options.scale
- ```value : Number```

Es la escala del elemento con la que empezara la animacion, si su valor es ```0.5``` al comenzar la animacion de revelacion el elemento tendra un valor relativo al mismo del 50%.

**Default**
```js
{ scale: 0.75 }
```

### options.repeat
- ```value : Boolean```

Si la opcion es ```true``` la animacion se repetira cada vez que el/los elementos entren al viewport, si es ```false``` la animacion solo se ejecutara una vez.

**Default**
```js
{ repeat: true }
```
