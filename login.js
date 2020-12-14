/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */

module.exports = async (browser, context) => {
  const { MM_SERVER_URL, MM_USERNAME, MM_PASSWORD } = process.env;

  // launch browser for LHCI
  const page = await browser.newPage();
  await page.goto(`${MM_SERVER_URL}/login`);
  await page.waitForSelector("#loginId", { visible: true });
  await page.type("#loginId", MM_USERNAME);
  await page.type("#loginPassword", MM_PASSWORD);

  await Promise.all([page.click("#loginButton"), page.waitForNavigation()]);

  await page.close();
};
