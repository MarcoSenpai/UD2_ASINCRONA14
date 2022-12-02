$(document).ready(function(){
    $("#submit").click(function(){
      var nombre = $("#firstName").val();
      var apellido = $("#lastName").val();
      var email = $("#email").val();
      var gender = $("#gender").val();
      var date = $("#dateBirth").val();
      var phone = $("#phone").val();
      var message = $("#comentario").val();
      var alerta = "Hola estimado "+nombre+" "+apellido+".\nEmail: "
      +email+"\nGenero: "+gender+"\nFecha de Nacimiento: "+date
      +"\nCelular: "+phone+"\nComentario: "+message;
      alert(alerta);
  } )
}
  
  )