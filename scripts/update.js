const fs = require("fs");

async function main() {

    const url = "https://api.sejm.gov.pl/sejm/term10/videos?limit=100";

    console.log("Pobieram:", url);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.status);
    }

    const videos = await response.json();

    const typy = {};

    for (const v of videos) {

        const type = v.type || "(brak)";

        if (!typy[type]) {
            typy[type] = 0;
        }

        typy[type]++;

    }

    console.log("\n=== TYPY ===\n");

    console.table(typy);

    console.log("\n=== PRZYKŁADY ===\n");

    for (const t of Object.keys(typy)) {

        const film = videos.find(v => v.type === t);

        console.log("TYPE:", t);
        console.log("TITLE:", film.title);
        console.log("---------------------------");

    }

}

main().catch(console.error);
