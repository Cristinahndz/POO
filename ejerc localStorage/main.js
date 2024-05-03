
    
    function addToDisplay(value) { //value represe el dig u operador
        document.getElementById('display').value += value;
    }

    // Función para limpiar el display
    function clearDisplay() { 
        document.getElementById('display').value = '';//establece el valor del campo de entrada en cadena vacia
    }

    
    function calcular() {
        var displayValue = document.getElementById('display').value; //obtiene valor actual
        var resultado = eval(displayValue); //evalua el valor con eval

        // Mostrar el resultado en el display
        document.getElementById('display').value = resultado;

        // Guardar el resultado en el localStorage
        localStorage.setItem('ultimoResultado', resultado);
    }

    // Al cargar la página, restaurar el último resultado si existe
    window.onload = function() {
        var ultimotResultado = localStorage.getItem('ultimoResultado'); //para obten el ultimo res guard en almac
        if (ultimotResultado !== null) { //si resul existe 
            document.getElementById('display').value = ultimotResultado; //establece el valor del campo de la calcu en el ultimo resul guardado
        }
    };

