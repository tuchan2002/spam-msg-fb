const puppeteer = require("puppeteer");

const username = "";
const password = "";
const receiverId = "";
const messages = [
  "_______________________",
  "Hello! chào bạn nhé.",
  "Mình là đệ của anh Tú",
  "Mình muốn nói hộ anh Tú là:",
  "Anh Tú thích bạn",
  "Ahihi",
  "_______Bye bye________",
];

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://m.facebook.com");
  await page.type("input#email", username);
  await page.type("input#pass", password);
  await page.click("button[name='login']");
  await page.waitForNavigation();
  await page.goto("https://m.facebook.com/messages/t/" + receiverId);

  setInterval(async () => {
    await messages.forEach(async function (msg, index) {
      setTimeout(async () => {
        await page.type("textarea#composerInput", msg);
        await page.click("button[name='send']");
      }, index * 1000);
    });
  }, 20000);
})();
