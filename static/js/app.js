// from data.js
var tableData = data;

// YOUR CODE HERE!
var clear = d3.select("#clear");
var filter = d3.select("#filter");

// Limpiar Formuladio
clear.on("click", function() {
  // Evita que la página se actualice
  d3.event.preventDefault();
  // Reinicia el formulario con los valores por default
  document.getElementById("mainForm").reset();
});

// Filtrar la tabla
filter.on("click", function() {
    // Evita que la página se actualice
    d3.event.preventDefault();

    // Selecciona los elementos por el cual se van a filtrar las consultas
    var Date = d3.select("#datetime").property("value");
    var City = d3.select("#city").property("value");
    var State = d3.select("#state").property("value");
    var Country = d3.select("#country").property("value");
    var Shape = d3.select("#shape").property("value");

    // Filtras información
    Data = tableData.filter(function(ufo) {
      return (ufo.datetime=== Date || Date === "") &&
      (ufo.city === City || City === "") &&
      (ufo.state=== State || State === "") && 
      (ufo.country=== Country || Country === "") &&
      (ufo.shape=== Shape || Shape === "")
  });
  // Obtiene los campos del html para llenar la tabla
  var tbody = d3.select("tbody");
  // Limpia los campos anteriores
  tbody.html("");
  // Se realiza un ciclo para agregar los datos en la tabla
  Data.forEach((dataRow) => {
    // Agrega un nuevo renglon
    var row = tbody.append("tr");
    // Agrega cada campo en el renglon
    Object.values(dataRow).forEach((val) => {
      row.append("td").text(val);
      }
    );
  });
});
