// https://leetcode.com/problems/bus-routes/

/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function (routes, S, T) {
  if (S === T) return 0;

  const stopToRoutes = new Map();
  const visitedRoutes = new Set();
  const visitedStops = new Set();

  routes.forEach((route, index) => {
    route.forEach((stop) => {
      if (!stopToRoutes.has(stop)) {
        stopToRoutes.set(stop, []);
      }
      stopToRoutes.get(stop).push(index);
    });
  });

  const queue = [];
  queue.push(S);
  visitedStops.add(S);

  let steps = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currentStop = queue.shift();

      // Get the routes that cover the current stop
      const routesAtStop = stopToRoutes.get(currentStop);

      try {
        for (const route of routesAtStop) {
          // If the route is already visited, skip
          if (visitedRoutes.has(route)) continue;

          // Mark the route as visited
          visitedRoutes.add(route);

          // Check if the destination is on this route
          if (routes[route].includes(T)) {
            return steps + 1;
          }

          // Add unvisited stops from this route to the queue
          for (const nextStop of routes[route]) {
            if (!visitedStops.has(nextStop)) {
              queue.push(nextStop);
              visitedStops.add(nextStop);
            }
          }
          console.log("");
        }
      } catch (e) {
        console.log("invalid source or destination");
      }
    }

    steps++;
  }

  return -1; // No valid route found
};

// Example usage:
const routes = [
  [1, 2, 7],
  [3, 6, 7],
];
const S = 1;
const T = 6;

console.log(numBusesToDestination(routes, S, T)); // Output: 2
