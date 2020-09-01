var socket = io();

//Escuchar sucesos
socket.on('connect', function(){
     console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
     console.log('Perdimos conexión con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
     usuario: 'Fernando',
     mensaje: 'Hola Mundo'
}, function(resp){
     console.log(resp);
});

socket.on('enviarMensaje',  function(msg){
     console.log('Servidor:', msg);
});