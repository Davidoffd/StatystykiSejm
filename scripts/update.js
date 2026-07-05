async function main() {

    const response = await fetch("https://api.sejm.gov.pl/sejm/term10/videos?limit=100");
    const videos = await response.json();

    console.log("=== KONFERENCJE ===");

    for (const v of videos) {
        if (v.type === "konferencja") {
            console.log(v.title);
        }
    }

}

main().catch(console.error);

    }

}

main().catch(console.error);
