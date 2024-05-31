const ask = Number(prompt('Zadejte své rodné číslo: '));
let valid = true;
if (ask.length < 10) {
  document.body.innerHTML += '❌ Uživatel zadal rodné číslo neplatné délky.';
} else if (ask.length === 10) {
  document.body.innerHTML += '✔️ Zadané rodné číslo má správně deset znaků.';
  valid = false;
}

if (Number.isInteger(ask)) {
  document.body.innerHTML += '✔️ Rodné číslo je celé číslo.<br>';
} else {
  document.body.innerHTML += '❌ Rodné číslo obsahuje nepovolené znaky.<br>';
  valid = false;
}

if (Number(ask) % 11 === 0) {
  document.body.innerHTML += '✔️ Rodné číslo je dělitelné 11.<br>';
} else {
  document.body.innerHTML += '❌ Rodné číslo není dělitelné číslem 11.<br>';
  valid = false;
}

if (valid) {
  document.body.innerHTML += '✔️ Zadané rodné číslo je platné.<br>';
} else {
  document.body.innerHTML += '❌ Uživatel zadal neplatné rodné číslo.<br>';
}
