var gaugeElement = document.querySelector(".newInspection");
function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
 //gauge.querySelector(".gauge__cover").textContent = `${Math.round(
   // value * 100
  // )}%`;
  document.querySelector('.newInspection .gauge_number').innerText = `${Math.round(
    value * 100
  )}%`;
}
setGaugeValue(gaugeElement, 1.1); 

var billedInspection = document.querySelector(".billedInspection");
function setbilledInspection(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }
console.log(value);
  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
 //gauge.querySelector(".gauge__cover").textContent = `${Math.round(
   // value * 100
  // )}%`;
  document.querySelector('.billedInspection .gauge_number').innerText = `${Math.round(
    value * 100
  )}%`;
}
setbilledInspection(billedInspection, 0.9); 

var supportTicket = document.querySelector(".supportTicket");
function setsupportTicket(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
 //gauge.querySelector(".gauge__cover").textContent = `${Math.round(
   // value * 100
  // )}%`;
  document.querySelector('.supportTicket .gauge_number').innerText = `${Math.round(
    value * 100
  )}%`;
}
setsupportTicket(supportTicket, 0.88); 
