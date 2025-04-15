
document.getElementById('reservierungsformular')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const res = {
        name: document.getElementById('name').value,
        datum: document.getElementById('datum').value,
        uhrzeit: document.getElementById('uhrzeit').value,
        personen: document.getElementById('personen').value
    };
    const list = JSON.parse(localStorage.getItem('reservierungen') || "[]");
    list.push(res);
    localStorage.setItem('reservierungen', JSON.stringify(list));
    alert("Reservierung gespeichert!");
    this.reset();
});
