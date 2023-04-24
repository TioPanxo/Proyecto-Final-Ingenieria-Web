$("#formulario").validate({

    rules: {
        input_nombre: {
          required: true,
          solo_letras: true,
        },
        input_email:{
            required:true,
            email:true,
        },
        input_password:{
            required:true,
        },
      },
      messages:{
          input_nombre: {
              required: "Ingresa un nombre"
          },
          input_email:{
              required: "Ingresa un telefono",
              email:"Formato no valido",
          },
          input_password:{
            required:"Ingrese Contraseña",
        },

      },

    submitHandler: function(form) {
      form.submit();
      alert("Registro hecho satisfactoriamente!")
    }
});

jQuery.validator.addMethod("solo_letras", function(value, element) {
  return /[a-z," "]/.test(value);
}, "Deben sor solo letras");