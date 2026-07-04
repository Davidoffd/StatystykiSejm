const dane = [
    { partia: "PiS", konferencje: 0 },
    { partia: "KO", konferencje: 0 },
    { partia: "Konfederacja", konferencje: 0 },
    { partia: "Polska 2050", konferencje: 0 },
    { partia: "PSL", konferencje: 0 },
    { partia: "Lewica", konferencje: 0 },
    { partia: "Razem", konferencje: 0 }
];

const tabela = document.getElementById("ranking");

tabela.innerHTML = "";

dane.forEach((partia, index) => {

    tabela.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${partia.partia}</td>
            <td>${partia.konferencje}</td>
        </tr>
    `;

});
