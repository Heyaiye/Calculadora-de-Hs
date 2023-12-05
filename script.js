// Obteniendo referencias a los elementos del formulario y resultados
const employeeForm = document.getElementById('employeeForm');
const resultsDiv = document.getElementById('results');

// Objeto para almacenar los registros de horas trabajadas por empleado
const hoursWorked = {};

// Manejar el evento de envío del formulario
employeeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const employeeNumber = document.getElementById('employeeNumber').value;
  const entryTime = document.getElementById('entryTime').value;
  const exitTime = document.getElementById('exitTime').value;

  // Calcular las horas trabajadas
  const startTime = new Date(`01/01/2000 ${entryTime}`);
  const endTime = new Date(`01/01/2000 ${exitTime}`);
  const hours = (endTime - startTime) / 1000 / 60 / 60;

  // Actualizar el total de horas trabajadas por empleado
  if (hoursWorked[employeeNumber]) {
    hoursWorked[employeeNumber] += hours;
  } else {
    hoursWorked[employeeNumber] = hours;
  }

  // Mostrar los resultados
  resultsDiv.innerHTML = '';
  for (const [employee, totalHours] of Object.entries(hoursWorked)) {
    resultsDiv.innerHTML += `Empleado ${employee}: ${totalHours.toFixed(2)} horas<br>`;
  }

  // Limpiar el formulario
  employeeForm.reset();
});
