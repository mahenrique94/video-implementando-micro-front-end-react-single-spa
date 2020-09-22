import { registerApplication, start } from "single-spa";

fetch('https://run.mocky.io/v3/b2ed2729-fd28-4a2b-bc5b-987e3e69cc3d')
  .then(resp => resp.json())
  .then(data => {
    data.applications.forEach(app => {
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
          ? (location) => location.pathname === app.activeWhen
          : [app.activeWhen]
      });
    })
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    })
  })
