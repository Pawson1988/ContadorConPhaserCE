# PRUEBA TÉCNICA

En esta prueba nos gustaría que creases un contador muy simple utilizando Phaser-ce (Edición de la comunidad de Phaser 2)

Queremos un contador básico:

- Un botón de incrementar
- Un botón de decrementar
- Un recuadro donde ver el valor del contador

## GUIA

### 1 - DESCARGATE LA PRUEBA Y PREPARA EL REPOSITORIO

La idea es que realices la prueba técnica en un repositorio personal para compartirlo con nosotros,
utiliza el que más te guste (GitHub, GitLab, Bitbucket...) 

Puedes descargarte el proyecto en ZIP o hacer un Fork.


### 3 - ARRANCA EL PROYECTO

Entra en la raíz del proyecto, instala las dependencias con el comando

```
npm install
```

Para arrancar el proyecto

```
npm run dev
```

### 4 - PINTAR EL CONTADOR

Se creativo y utiliza solo gráficos de Phaser

Aquí puedes encontrar la documentación sobre los gráficos https://photonstorm.github.io/phaser-ce/Phaser.Graphics.html
y aquí un ejemplo: https://phaser.io/examples/v2/display/graphics


### 5 - AÑADIR EVENTOS

Añade los eventos en los gráficos de incrementar/decrementar para actualizar el valor del contador.
Aquí puedes ver un ejemplo: https://phaser.io/examples/v2/display/graphics-input-events


### 6 - EJERCICIO 1

El contador solo ha de permitir valores entre el 10 y el 0.

- Si el contador llega a 10, pinta de rojo el valor del contador y bloquea el botón de incrementar (deshabilita el evento y pinta de color gris oscuro el fondo del botón)
- Si el contador esta a 0, bloquea el botón de decrementar (deshabilita el evento y pinta de color gris oscuro el fondo del botón)

### 7 - EJERCICIO 2

En la carpeta assets hay una imagen 'assets/ufo.png' carga esta imagen en el juego y haz que se mueva cada vez que incremente o decremente el valor del contador.
(Elige el movimiento que quieras, este ejercicio tan solo tiene la finalidad de ver que añades una imagen en el juego e interactuar con ella)

Aquí tienes un ejemplo de animación
https://phaser.io/examples/v2/tweens/tween-to
