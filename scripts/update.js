const { chromium } = require("playwright");

(async () => {

    const browser = await chromium.launch({
        headless: true
    });

    const page = await browser.newPage();

    await page.goto(
        "https://www.sejm.gov.pl/sejm10.nsf/transmisje_arch.xsp",
        {
            waitUntil: "networkidle"
        }
    );

    console.log(await page.title());

    await browser.close();

})();
