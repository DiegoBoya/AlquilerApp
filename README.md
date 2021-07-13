# AlquilerApp

## Login Obligatorio

1. Al iniciar la app, esta solicita registrarte / logearte

---

## Buscar Auto por Garaje y Modelo

3 .Se muestran todos los garages en la pantalla principal con la cant de autos por garage.
4 .Al clickear en cada garage se muestran los autos que contiene.
5. El buscador por modelo está dentro del garaje
6. Al clickear en cada auto se muestran sus detalles.
7. Dentro de los detalles esta el boton para alquilar

---

## Alquiler Auto

1. Al entrar al auto , aparece el botón de alquilar
2. Al hacer click aparece el modal que asegura que se quiera alquilar el auto. Muestra algunos datos del auto
3. Si confirma : modal con "alquiler exitoso"
4. Al alquilar un auto , éste debe aparecer en la solapa de "alquilados"
5. El auto va a tener estado alquilado, no alquilado. No se maneja calendario.
6. Solo se puede alquilar un auto a la vez

---

## Devolver Auto

1. Al ingresar al auto que tengo alquilado (la solapa del punto 5)  figura el botón de devolver
2. Al tocar el botón devolver, se borra el auto de "alquilados"
3. Devolución exitosa
4. No se valida la devolución

---

## Agregar a Favoritos

1. En cada componente tenemos un toucheable estrellita, que tiene un state boolean, al tocarlo cambia el state de true a false.
2. Originalmente esta en false
3. Si está en true, se agrega a la lista de favoritos
4. Si está en false se borra de la lista de favoritos



