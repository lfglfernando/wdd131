document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('#submit');
    const list = document.querySelector('#list');

    button.addEventListener('click', function(){
        //verificar que la entrada no este vacia
        if (input.value.trim() !== '') {
            //crear un nuevo elemento li
            const li = document.createElement('li');
            li.textContent = input.value;

            //crear un boton de eliminacion
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';

            //añadir el boton de eliminacion al li
            li.appendChild(deleteButton);

            //añadir el nuevo li a la lista
            list.append(li);

            //agregar evento al boton de eliminacion
            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
                input.focus(); //Enfocar el campo de entrada
            });

            //limpiar el campo de entrada y devolver el foco
            input.value = '';
            input.focus();
        } else {
            input.focus(); //Si esta vacio, solo enfocar el campo de entrada
        }
    });
});
