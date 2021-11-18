---
---
var allMomisms = [
{% for each in site.data.honey-mom-csv %} {momism: `{{ each.momism | smartify }}`,{% if each.definition %} definition: `{{ each.definition | smartify }}`,{% endif %}{% if each.example %} example: `{{ each.example | smartify }}`,{% endif %}{% if each.mommentary %} mommentary: `{{ each.mommentary | smartify }}`,{% endif %} momism_id: `{{ each.order }}`},{% endfor %}
];

var randomNum = [
{% for each in site.data.randday %}
        {% comment %}
          Random momisms aren't yet stored as integers. 
          "| plus: 0" makes the string an integer. 
          Then, if the momism ID for the day is greater 
          than the number of momisms, the if statement 
          assigns an alternate momism
	{% endcomment %}
    {% assign randomInteger = each.rand | plus: 0 %}
    {% assign randomAlterate = each.alt | plus: 0 %}
    {% if randomInteger > site.data.honey-mom-csv.size %}
      {% assign randomMomism = each.alt %}
    {% else %}
      {% assign randomMomism = each.rand %}
    {% endif %}
  {day: {{ each.day }}, 
  randomMomism: `{{ randomMomism }}`}, {% endfor %}
];

var today=new Date();
const month = today.toLocaleString('default', { month: 'long' });

// Testing, run through all momisms
//
// var i = 1;
// var x = 0;
// var randforToday = 1;
// setInterval(increase, 1000);
// 
// function increase() {
//     if (i < {{ site.data.honey-mom-csv.size }}) {
//       i++;
//       x = i;
//     }

// var x = 5;

function daysIntoYear(date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}

function periodatEnd(str) {
  if (typeof str !== 'undefined') {
    const result = str.search(/[\.!?;"]$/i);
    if (result === -1) {
            return str + ".";
    } else {
            return str;
    }
  }
}

// var testdate = new Date(2020, 5, 1);
// console.log(daysIntoYear(testdate));

var randforToday = randomNum[(daysIntoYear(today) - 1)];
//
// var randforToday = {day: 1, rand: 1,}; // Definition & example
// var randforToday = {day: 1, rand: 16,}; // Definition & mommentary
// var randforToday = {day: 1, rand: 18,}; // Definition, example, & mommentary
var today_date = month + " " + today.getDate() + ", " + today.getFullYear();

var arrayFinal = allMomisms.find( ({ momism_id }) => momism_id == randforToday.randomMomism);

// Making these all into variables to be easier to handle:
// var modFinal = allMomisms[randforToday.randomMomism - 1].momism;
var modFinal = arrayFinal.momism;
var defFinal = periodatEnd(arrayFinal.definition);
var exFinal = periodatEnd(arrayFinal.example);
var mommFinal = periodatEnd(arrayFinal.mommentary);
var idFinal = arrayFinal.momism_id;
var idFinalInteger = parseInt(idFinal, 10);
var linkFinal = '/dictionary/' + idFinal;

document.getElementById("randomMom").innerHTML = modFinal;
if (typeof defFinal === 'undefined') {
  // document.getElementById("randomDefinition").style.display = "none";
  // document.getElementById("defLabel").style.display = "none";
  defFinal = 'Definition unknown';
  document.getElementById("randomDefinition").innerHTML = defFinal;
} else {
  document.getElementById("randomDefinition").innerHTML = defFinal;
}

if (typeof exFinal === 'undefined') {
  document.getElementById("randomExample").style.display = "none";
  document.getElementById("exLabel").style.display = "none";
} else {
  document.getElementById("randomExample").innerHTML = exFinal;
}

if (typeof mommFinal === 'undefined') {
  document.getElementById("randomMommentary").style.display = "none";
  document.getElementById("mommLabel").style.display = "none";
} else {
  document.getElementById("randomMommentary").innerHTML = mommFinal;
}
document.getElementById("randomID").innerHTML = idFinalInteger;
document.getElementById("today").innerHTML = today_date;
document.getElementById("linkFinal2").href = linkFinal;
// document.getElementById("linkFinal").setAttribute("href", linkFinal)
// document.getElementById("linkFinal2").setAttribute("href", linkFinal)

// }
