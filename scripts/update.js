const { chromium } = require("playwright");
const fs = require("fs");

(async () => {

    const browser = await chromium.launch({
        headless: true
    });

    const page = await browser.newPage();

    await page.goto(
        "https://www.sejm.gov.pl/sejm10.nsf/transmisje_arch.xsp",
        {
            waitUntil: "domcontentloaded",
            timeout: 60000
        }
    );

    console.log("Tytuł:", await page.title());

    await page.screenshot({
        path: "screenshot.png",
        fullPage: true
    });

    const html = await page.content();

    fs.writeFileSync("page.html", html);

    console.log("HTML zapisany.");

    await browser.close();

})();
