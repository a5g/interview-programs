const findBestRoute = function (routes, s, t) {
  if (s === t) {
    return 0;
  }

  const stopsToRoute = new Map();
  const visitedStops = new Set();
  const vistedRoutes = new Set();

  routes.forEach((route, index) => {
    route.forEach((stop) => {
      if (!stopsToRoute.has(stop)) {
        stopsToRoute.set(stop, []);
      }
      stopsToRoute.get(stop).push(index);
    });
  });

  const queue = [];
  queue.push(s);

  visitedStops.add(s);

  let steps = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currStop = queue.shift();
      const rts = stopsToRoute.get(currStop);

      for (const route of rts) {
        if (vistedRoutes.has(route)) continue;

        vistedRoutes.add(route);

        if (routes[route].includes(t)) {
          return steps + 1;
        }

        for (const nextStop of routes[route]) {
          if (!visitedStops.has(nextStop)) {
            queue.push(nextStop);
            visitedStops.add(nextStop);
          }
        }
      }
    }

    steps += 1;
  }
  // could not find the route
  return -1;
};

const routes = [
  [1, 2, 7],
  [3, 6, 7],
];
const s = 1;
const t = 6;

const bestRoutes = findBestRoute(routes, s, t);

console.log(`routes: `, routes);
console.log(`best route: `, bestRoutes);
