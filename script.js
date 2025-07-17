document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const apellido = document.getElementById('apellido').value.trim();
      
      if (!nombre || !apellido) {
        alert('Por favor, ingresa nombre y apellido');
        return;
      }
      
      // Guardar usuario en localStorage
      const usuario = { nombre, apellido };
      localStorage.setItem('usuario', JSON.stringify(usuario));
      
      // Registrar acceso con fecha y hora
      const ahora = new Date();
      const acceso = {
        nombre,
        apellido,
        fecha: ahora.toLocaleDateString(),
        hora: ahora.toLocaleTimeString()
      };
      
      // Obtener registros previos
      const registros = JSON.parse(localStorage.getItem('registrosAcceso')) || [];
      registros.push(acceso);
      localStorage.setItem('registrosAcceso', JSON.stringify(registros));
      
      // Redirigir a dashboard
      window.location.href = 'dashboard.html';
    });
  }
});
