
Requerimiento sin poder realizar
--------------------------------
- Home: No se puedo realizar a la perfección el "Sort By Birthday". El evento esta creado, sin embargo no funciona a lo esperado.
- Episodes: No se pudo concluir la segunda página para mostrar el listado de Episodios. 
- Episodes: No se pudo aplicar el filtro en la página de "Episodes".
- Extras: No se uso Typescript, ni se implemento el "Infinite Scroll".


Bugs o errores identificados
--------------------------------
- Home: Al lista de "characters" y "deaths" cargan un segundo o segundos después por lo que se ve un salto de página (salto de scroll)
- Home: Idealmente, me hubiera gustado implementar una pequeña animación (spin) al dar click sobre el botón "Load More"
- Look and feel: Me hubiera gustado mejorar en general el "look and feel" de la aplicación. Implementando elementos de Material Design. 
- General: Al cambiar de página entre Home y Episodes, se pierde la información y se recarga la página. Debe estar asociado al state del la lista de characters. Sin embargo, es algo que no pude resolver a tiempo. 
- General: Existe una única hoja de estilo, esto no es correcto porque todo el CSS se cargaría siempre, aun sin ser necesario.


Requerimientos que podría concluir con más tiempo
-------------------------------------------------
- Home: Resolver el sort de "birthday".
- Home: Implementar el "Infinite Scroll".
- Episodes: Mostrar la lista de "Episodes".
- Episodes: Aplicar el filtro para los "Episodes" por temporada.
- General: Mejorar el "look and feel" y extraer el CSS por "components"


By German Vargas Vargas
GVV