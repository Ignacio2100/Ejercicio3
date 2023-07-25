function Numeros(event) {
      // Obtener el código ASCII de la tecla presionada
      var key = event.keyCode || event.which;

      // Permitir solo los caracteres numéricos (códigos ASCII 48 a 57)
      if (key < 48 || key > 57) {
        document.getElementById('mensajeError').innerText = 'Solo se permiten datos numéricos.';
        return false; // Impedir la inserción del carácter
      } else {
        document.getElementById('mensajeError').innerText = '';
        return true; // Permitir la inserción del carácter
      }
    }

