

const formDeseos = document.getElementById('form-deseos');
const inputDeseo = document.getElementById('deseo');
const botonEnviar = document.getElementById('enviar-deseo');
const mensajeDeseo = document.getElementById('mensaje-deseo');

botonEnviar.addEventListener('click', (e) => {
e.preventDefault();
const deseo = inputDeseo.value;
if (deseo !== '') {
mensajeDeseo.innerHTML = ¡Gracias por compartir tu deseo!;
inputDeseo.value = '';
} else {
mensajeDeseo.innerHTML = Por favor, escribe un deseo;
}
});
