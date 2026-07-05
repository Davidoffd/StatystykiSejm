console.log("NOWA WERSJA SKRYPTU 123456");
const fs = require("fs");

async function main() {

    // adres API - pierwsze 100 rekordów
    const url = "https://api.sejm.gov.pl/sejm/term10/videos?limit=100";

    console.log("Pobieram:", url);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Błąd API: " + response.status);
    }

    const videos = await response.json();
    console.log(JSON.stringify(videos[0], null, 2));
return;

    const ranking = {
        "PiS": 0,
        "KO": 0,
        "Konfederacja": 0,
        "Polska 2050": 0,
        "PSL": 0,
        "Lewica": 0,
        "Razem": 0
    };

    for (const v of videos) {

        if (v.type !== "konferencja")
            continue;

        const txt = (
            (v.title || "") +
            " " +
            (v.description || "")
        ).toLowerCase();

        if (txt.includes("pis"))
            ranking["PiS"]++;

        else if (txt.includes("ko"))
            ranking["KO"]++;

        else if (txt.includes("psl"))
            ranking["PSL"]++;

        else if (txt.includes("2050"))
            ranking["Polska 2050"]++;

        else if (txt.includes("lewica"))
            ranking["Lewica"]++;

        else if (txt.includes("razem"))
            ranking["Razem"]++;

        else if (txt.includes("konfeder"))
            ranking["Konfederacja"]++;
    }

    const wynik = Object.entries(ranking).map(([partia, konferencje]) => ({
        partia,
        konferencje
    }));

    fs.writeFileSync(
        "data/konferencje.json",
        JSON.stringify(wynik, null, 4)
    );

    console.log(wynik);
}

main().catch(console.error);
