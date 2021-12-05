let i = 1;
let res = new Map(); //exception; x1; x2; discriminant;

function send() {
    res.clear()
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    calculate(a, b, c);
    printResult();
    addToTable();
}

function calculate(a, b, c) {
    let D;
    if (a == 0) {
        res.set("exception", "Недопустимое значение A");
    }
    D = b * b - 4 * a * c;
    res.set("discriminant", D);
    let x1, x2;

    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        res.set("x1", x1.toFixed(3));
        res.set("x2", x2.toFixed(3));
    } else if (D == 0) {
        x1 = -b / (2 * a);
        res.set("x1", x1.toFixed(3));
    } else {
        res.set("exception", "Корней нет!");
    }
}

function printResult(result) {
    let element = document.getElementById("solutionResult");
    element.innerHTML = result;
}

function addToTable() {
    let tbody = document.getElementById('result');
    let row = document.createElement("TR");
    tbody.appendChild(row);

    for (let j = 0; j < tbody.rows.length; j++) {
        if (j % 2 == 1) {
            tbody.rows[j].classList.add("evenColor");
        } else if (j % 2 == 0) {
            tbody.rows[j].classList.add("unevenColor");
        }
    }

    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");
    let td3 = document.createElement("TD");
    let td4 = document.createElement("TD");

    td1.appendChild(document.createTextNode(i++));
    td4.appendChild(document.createTextNode("D = " + res.get("discriminant")));

    row.appendChild(td1);

    if (res.has("exception")) {
        td2.appendChild(document.createTextNode(res.get("exception")));
        mergeCells(row, td2);
    } else if (res.has("x1") && !res.has("x2")) {
        td2.appendChild(document.createTextNode("X1 = " + res.get("x1")));
        mergeCells(row, td2);

    } else {
        td2.appendChild(document.createTextNode("X1 = " + res.get("x1")));
        td3.appendChild(document.createTextNode("X2 = " + res.get("x2")));
        row.appendChild(td2);
        row.appendChild(td3);
    }
    row.appendChild(td4);

    document.getElementById('response').classList.remove("shadow");
}

function mergeCells(row, td2) {
    td2.setAttribute('colspan', 2);
    row.appendChild(td2);
}


result.addEventListener('click', function (evt) {
    if (!evt.target.closest('.firstLine')) {
        evt.target.closest('tr').remove();
    }

    let tbody = document.getElementById('result');
    for (let j = 0; j < tbody.rows.length; j++) {
        if ((j % 2 == 1) && (tbody.rows[j].classList.contains("evenColor"))) {
            tbody.rows[j].classList.remove("evenColor");
            tbody.rows[j].classList.add("unevenColor");
        } else if ((j % 2 == 0) && (tbody.rows[j].classList.contains("unevenColor"))) {
            tbody.rows[j].classList.remove("unevenColor");
            tbody.rows[j].classList.add("evenColor");
        }
    }
});


