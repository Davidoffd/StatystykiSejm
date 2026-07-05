async function main() {

    let offset = 0;
    const limit = 100;

    while (true) {

        const url =
            `https://api.sejm.gov.pl/sejm/term10/videos?offset=${offset}&limit=${limit}`;

        console.log("\n=================================================");
        console.log(url);

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const videos = await response.json();

        console.log("Rekordów:", videos.length);

        if (videos.length === 0) {
            console.log("\nKONIEC");
            break;
        }

        let konferencje = 0;

        for (const film of videos) {

            if (film.type === "konferencja") {

                konferencje++;

                console.log("--------------------------------");
                console.log("Tytuł:", film.title);
                console.log("Data :", film.startDateTime);
                console.log("Opis :", film.description);

            }

        }

        console.log("Konferencji na tej stronie:", konferencje);

        offset += limit;

        if (offset >= 500) {
            console.log("\nSTOP TEST (500 rekordów)");
            break;
        }

    }

}

main().catch(console.error);
