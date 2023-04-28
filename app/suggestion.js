const possible = [
  'vanilla cone'
]

function setInputBox (text, id) {
  console.log(arguments)
  document.querySelector('#query').value = text
  document.querySelector('#query').disabled = true
  document.querySelector('.suggestions').innerHTML = ''
}

function addSuggestions (suggestions, startsWith) {
  let html = ''
  for (const suggestion of suggestions) {
    if (suggestion && !suggestion.startsWith(startsWith)) continue
    html += `<div class="suggestion" onclick="setInputBox('${suggestion}', ${suggestions.indexOf(suggestion)})"><div>${suggestion}</div></div>`
  }
  console.log('html', html)
  document.querySelector('.suggestions').innerHTML = html
}

function onMainInput (event) {
  const t = event.target.value
  console.log('Event', t)
  addSuggestions(possible, t.toLowerCase());
}


