async function main() {

    const url = "https://api.sejm.gov.pl/sejm/term10/videos?limit=100";

    console.log("Pobieram:", url);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.status);
    }

    const videos = await response.json();

    console.log("\n=== KONFERENCJE ===\n");

    for (const v of videos) {

        if (v.type === "konferencja") {

            console.log(v.title);

        }

    }

}

main().catch(console.error);
