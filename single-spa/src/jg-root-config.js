import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import("@single-spa/welcome"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@jg/react-single",
  app: () => System.import("@jg/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@jg/react-multiple",
  app: () => System.import("@jg/react-multiple"),
  activeWhen: ["/react-multiple"],
});


start({
  urlRerouteOnly: true,
});
