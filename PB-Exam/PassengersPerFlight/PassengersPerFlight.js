function solve(params) {
  let companies = Number(params.shift());
  let bestCompany = "";
  let maxPassengers = 0;

  for (let i = 0; i < companies; i++) {
    let name = params.shift();
    let totalPassengers = 0;
    let passengersCount = 0;
    let averagePassengers = 0;

    while (true) {
      let command = params.shift();
      if (command === "Finish") {
        console.log(`${name}: ${Math.floor(averagePassengers)} passengers.`);
        break;
      }
      let passengers = Number(command);
      totalPassengers += passengers;
      passengersCount++;
      averagePassengers = totalPassengers / passengersCount;
    }
    if (averagePassengers > maxPassengers) {
      maxPassengers = averagePassengers;
      bestCompany = name;
    }
  }
  console.log(
    `${bestCompany} has most passengers per flight: ${Math.floor(
      maxPassengers
    )}`
  );
}

solve([
  "3",
  "WizzAir",
  "180",
  "230",
  "100",
  "Finish",
  "BulgariaAir",
  "50",
  "60",
  "90",
  "Finish",
  "Lufthansa",
  "260",
  "320",
  "Finish"
]);

console.log("_".repeat(40) + "\n");

solve([
  "2",
  "Qatar Airways",
  "95",
  "231",
  "323",
  "Finish",
  "LOT",
  "76",
  "89",
  "55",
  "Finish"
]);
