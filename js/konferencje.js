fetch("data/konferencje.json")
    .then(response => response.json())
    .then(dane => {

        const tabela = document.getElementById("ranking");

        tabela.innerHTML = "";

        dane.sort((a, b) => b.konferencje - a.konferencje);

        dane.forEach((partia, index) => {

            tabela.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${partia.partia}</td>
                    <td><strong>${partia.konferencje}</strong></td>
                </tr>
            `;

        });

    })
    .catch(() => {

        document.getElementById("ranking").innerHTML =
        `<tr>
            <td colspan="3">
                Błąd wczytywania danych.
            </td>
        </tr>`;

    });
