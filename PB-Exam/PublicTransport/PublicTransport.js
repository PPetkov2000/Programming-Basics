function solve(params) {
  let lines = params.shift();
  let season = params.shift();
  let time = 0;

  switch (lines) {
    case "208":
      if (season === "Winter") {
        time = 65 + 18;
      } else if (season === "Autumn") {
        time = 45 + 18;
      } else if (season === "Spring") {
        time = 39 + 18;
      } else if (season === "Summer") {
        console.log("No lectures! It's summer!");
      }
      break;
    case "15":
      if (season === "Winter") {
        time = 57 + 21;
      } else if (season === "Autumn") {
        time = 42 + 21;
      } else if (season === "Spring") {
        time = 36 + 21;
      } else if (season === "Summer") {
        console.log("No lectures! It's summer!");
      }
      break;
    case "240":
      if (season === "Winter") {
        time = 48 + 18;
      } else if (season === "Autumn") {
        time = 37 + 18;
      } else if (season === "Spring") {
        time = 31 + 18;
      } else if (season === "Summer") {
        console.log("No lectures! It's summer!");
      }
      break;
    case "Subway":
      if (season === "Winter") {
        time = 35 + 21;
      } else if (season === "Autumn") {
        time = 35 + 21;
      } else if (season === "Spring") {
        time = 35 + 21;
      } else if (season === "Summer") {
        console.log("No lectures! It's summer!");
      }
      break;
  }

  if (season === "Winter" || season === "Autumn" || season === "Spring") {
    console.log(`Total travel time: ${time} minutes`);
  }
}

solve(["208", "Winter"]);

console.log("_".repeat(40) + "\n");

solve(["240", "Autumn"]);

console.log("_".repeat(40) + "\n");

solve(["Subway", "Spring"]);

console.log("_".repeat(40) + "\n");

solve(["15", "Summer"]);
