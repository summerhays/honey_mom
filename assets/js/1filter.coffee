---
---
list_div = document.getElementsByClassName("list_div")
list_button = document.getElementsByClassName("list_button")
list_caret = document.getElementsByClassName("caret")

`function filterFunction(input) {`
input = document.getElementById("myInput")
filter = input.value.toUpperCase()
# Remove alpha headers
alpha = document.getElementsByClassName("abc")
filterbye = document.getElementsByClassName("filterbye")
if filter.length > 1
  for alph,i in alpha
    alpha[i].style.display = 'none'
    filterbye[i].style.display = 'none'
# make extra page stuff disappear
else
#  make extra page stuff reappear
  for alph,i in alpha
    alpha[i].style.display = 'block'
    filterbye[i].style.display = 'block'
for list,i in list_button
  y = document.getElementById("momism_id" + i); # The button
  x = document.getElementById("momism" + i); # The div
  caretid = document.getElementById("caret" + i)
  txtValue = y.textContent || list_button[i].innerText;
#  If there's a match
  if txtValue.toUpperCase().indexOf(filter) > -1
    y.style.display = ""
    if filter.length > 2 and x.className.indexOf("w3-show") == -1
      toggleAccordion(i)
  else
    if x.className.indexOf("w3-show") > -1
      toggleAccordion(i)
    y.style.display = "none";
`}`

# These are the open all / close all buttons

`function openAll() {`
for listy,i in list_button
  x = document.getElementById("momism" + i) # The div
  if x.className.indexOf("w3-show") == -1
    toggleAccordion(i)
`}`

`function closeAll() {`
for list,i in list_button
  x = document.getElementById("momism" + i) # The div
  if x.className.indexOf("w3-show") > -1
    toggleAccordion(i)
`}`

`function randomMomism() {`
num = Math.floor(Math.random() * ({{ site.data.honey-mom-csv.size }} - 1 + 1))
randLink = '/list.html#momism_id' + num;
window.open(randLink,"_self");
x = document.getElementById("momism" + num); # The div
if x.className.indexOf("w3-show") == -1
  toggleAccordion(num)
`}`

`function toggleAccordion(num) {`
y = document.getElementById("momism_id" + num); # The button
x = document.getElementById("momism" + num); # The div
caretid = document.getElementById("caret" + num);
if x.className.indexOf("w3-show") == -1 # ### && y.style.display == ""###
  x.className += " w3-show"
  y.className =
  y.className.replace("smiley", "color-triad-2")
  caretid.className = "fas fa-caret-down bit_left caret"
else
  x.className = x.className.replace(" w3-show", "")
  y.className =
  y.className.replace("color-triad-2", "smiley")
  caretid.className = "fas fa-caret-right caret"
`}`
