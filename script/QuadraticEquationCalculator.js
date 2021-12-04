let i = 1;
let D = 0;

function send() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    let res = calculate(a, b, c);
    printResult(res);
    addToTable(res, D);
}

function calculate(a, b, c) {
    if (a == 0)
        return "Недопустимое значение A";
    D = b * b - 4 * a * c;
    let x1, x2;
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return "Корни уравнения: x1 = " + x1.toFixed(3) + ", x2 = " + x2.toFixed(3);
    } else if (D == 0) {
        x1 = -b / (2 * a);
        return "Корни уравнения: x1 = x2 = " + x1.toFixed(3);
    } else {
        return "Корней нет!";
    }
}

function printResult(result) {
    let element = document.getElementById("solutionResult");
    element.innerHTML = result;
}

function addToTable(result, d) {
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
    td1.appendChild(document.createTextNode(i));
    i++;

    let td2 = document.createElement("TD");
    td2.appendChild(document.createTextNode(result));

    let td3 = document.createElement("TD");
    td3.appendChild(document.createTextNode("D = " + d));

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    document.getElementById('response').classList.remove("shadow");
}

result.addEventListener('click', function (evt) {
    if (evt.target.closest('.firstLine')) {
    } else {
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


