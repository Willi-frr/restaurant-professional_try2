
function checkLogin() {
    const code = document.getElementById('code').value;
    if (code === "1234") {
        document.getElementById('reslist').style.display = "block";
        const resList = JSON.parse(localStorage.getItem('reservierungen') || "[]");
        const ul = document.getElementById('reservierungen');
        ul.innerHTML = "";
        resList.forEach(r => {
            const li = document.createElement('li');
            li.textContent = r.name + " – " + r.datum + " um " + r.uhrzeit + " Uhr (" + r.personen + " Personen)";
            ul.appendChild(li);
        });
    } else {
        alert("Falscher Code!");
    }
}
