require("dotenv").config();

const {
  LHCI_SERVER,
  LHCI_TOKEN_NOT_AUTHENTICATED_PAGE,
  MM_SERVER_URL,
} = process.env;

module.exports = {
  ci: {
    collect: {
      url: [`${MM_SERVER_URL}/login`, `${MM_SERVER_URL}/signup_email`],
      numberOfRuns: 1,
      settings: {
        // Set the screen size
        emulatedFormFactor: "desktop",
        disableStorageReset: false,
      },
    },
    // upload: {
    //   target: 'temporary-public-storage',
    // },
    upload: {
      target: "lhci",
      serverBaseUrl: LHCI_SERVER,
      token: LHCI_TOKEN_NOT_AUTHENTICATED_PAGE,
    },
  },
};
