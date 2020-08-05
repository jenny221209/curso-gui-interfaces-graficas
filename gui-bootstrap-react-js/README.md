
## INSTALACION

### Instalacion en react 
    - $ npm install react-bootstrap bootstrap

### Importacion de componente 

    $ import Button from "react-bootstrap/Button"

    // Menos ideal es 

    import { Button } from "react-bootstrap"

### Styles importar - estilos

    - Debido a que React Bootstrap no depende de una versión muy precisa de Bootstrap, No enviamos ningun CSS incluido. Sin embrago, Se requiere alguna hoja de estilo para usar estos componentes.

    - La siguiente linea se pede incluir en su archivo src index.js o App.js

    $ import bootstrap/dist/css/bootstrap.min.css";