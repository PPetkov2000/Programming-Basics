function solve(params) {
  let capacity = Number(params.shift());
  let command = params.shift();
  let counter = 0;
  let luggagesLoaded = 0;

  while (command !== "End") {
    let briefcaseCapacity = Number(command);
    capacity -= briefcaseCapacity;
    counter++;
    if (counter % 3 === 0) {
      capacity -= briefcaseCapacity * 0.1;
    }
    if (capacity < 0) {
      console.log("No more space!");
      break;
    }
    luggagesLoaded++;
    command = params.shift();
  }

  if (command === "End") {
    console.log("Congratulations! All suitcases are loaded!");
  }

  console.log(`Statistic: ${luggagesLoaded} suitcases loaded.`);
}

solve(["550", "100", "252", "72", "End"]);

console.log("_".repeat(40) + "\n");

solve(["700.5", "180", "340.6", "126", "220"]);

console.log("_".repeat(40) + "\n");

solve(["1200.2", "260", "380.5", "125.6", "305", "End"]);
