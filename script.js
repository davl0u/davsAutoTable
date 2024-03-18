document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generateBtn");
  
  generateBtn.addEventListener("click", () => {
    const numberInput = document.getElementById("number");
    const number = parseInt(numberInput.value);

    if (number) {
      const multiplicationTableElement = document.getElementById("multiplicationTable");
      multiplicationTableElement.innerHTML = "";

      const table = document.createElement("table");
      const firstRow = document.createElement("tr");

      // Adiciona os títulos na primeira linha
      const xTitle = document.createElement("th");
      xTitle.textContent = "x";
      firstRow.appendChild(xTitle);

      const multiplicationSign = document.createElement("th");
      multiplicationSign.textContent = "*";
      firstRow.appendChild(multiplicationSign);

      const yTitle = document.createElement("th");
      yTitle.textContent = "y";
      firstRow.appendChild(yTitle);

      const resultTitle = document.createElement("th");
      resultTitle.textContent = "=";
      firstRow.appendChild(resultTitle);

      const equalSign = document.createElement("th");
      equalSign.textContent = "Result";
      firstRow.appendChild(equalSign);

      table.appendChild(firstRow);

      for (let i = 1; i <= 10; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${number}</td><td>*</td><td>${i}</td><td>=</td><td>${number * i}</td>`;
        table.appendChild(row);
      }

      multiplicationTableElement.appendChild(table);
    } else {
      alert("Please enter a valid number.");
    }
  });
});
