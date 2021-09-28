# Pokédex

Aplicación que utiliza la librería React junto con Axios para consumir los datos de la PokéAPI (pokeapi.co) y mostrar una lista de 150 pókemones agrupados en 15 páginas, que a su ves muestran 10 tarjetas individuales de los personajes que contienen su imagen, nombre y tipo. Se proporciona tambien una botonera de acciones para avanzar o retroceder entre las distintas páginas.

Se desarrollaron 4 componentes individales y uno contenedor:
    - Button: un botón simple con estilos para mostrar sus diferentes estados.
    - Card: componente para mostrar los datos de cada pokémon.
    - List: contenedor grid para agrupar y mostrar las tarjetas en orden.
    - Titlebar: contenedor con el título del proyecto y un fondo ubicado en la parte superior de la página.
    - Container: componente que aloja a los anteriores y además tiene el control del páginado de los pokémones. 

# Aplicación creada con Create React App

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Instalación

En el directorio del proyecto ejecutar:

### `yarn start`

Ejecuta la aplicación en el modo de desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.
