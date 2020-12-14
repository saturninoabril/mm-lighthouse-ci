require("dotenv").config();

const {
  LHCI_SERVER,
  LHCI_TOKEN_AUTHENTICATED_PAGE_DISABLE_RESET,
  MM_SERVER_URL,
} = process.env;

module.exports = {
  ci: {
    collect: {
      url: [
        MM_SERVER_URL,
        `${MM_SERVER_URL}/ad-1/channels/town-square`,
        `${MM_SERVER_URL}/admin_console/about/license`,
      ],
      numberOfRuns: 1,
      settings: {
        // Set the screen size
        emulatedFormFactor: "desktop",
        disableStorageReset: true,
      },
      puppeteerScript: "./login.js",
    },
    // upload: {
    //   target: 'temporary-public-storage',
    // },
    upload: {
      target: "lhci",
      serverBaseUrl: LHCI_SERVER,
      token: LHCI_TOKEN_AUTHENTICATED_PAGE_DISABLE_RESET,
    },
  },
};
