function tspToTbsp(measurement) {
  return (measurement / 3);
}

function tbspToOz(measurment) {
  return (measurment / 2);
}

function tbspToCup(measurement) {
  return (measurement / 16);
}

function cupToOz(measurement) {
  return (measurement * 8);
}

function cupToPint(measurement) {
  return (measurement / 2);
}

function pintToQt(measurement) {
  return (measurment / 2);
}

function qtToGal(measurement) {
  return (measurement / 4);
}

const measurement = parseInt(prompt("What is your measurement?"));

alert(cupToOz(measurement));