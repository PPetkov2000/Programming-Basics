function solve(params) {
  let passengers = Number(params.shift());
  let windowSeats = 0;
  let middleSeats = 0;
  let pathSeats = 0;
  let totalSeats = 0;

  for (let i = 0; i < passengers; i++) {
    let seatNumber = params[i];

    if (seatNumber[1] === "A" || seatNumber[1] === "F") {
      windowSeats++;
      totalSeats++;
    } else if (seatNumber[1] === "B" || seatNumber[1] === "E") {
      middleSeats++;
      totalSeats++;
    } else if (seatNumber[1] === "C" || seatNumber[1] === "D") {
      pathSeats++;
      totalSeats++;
    }
  }

  console.log(
    `Window Seats: ${((windowSeats / totalSeats) * 100).toFixed(2)}%`
  );
  console.log(
    `Middle Seats: ${((middleSeats / totalSeats) * 100).toFixed(2)}%`
  );
  console.log(`Aisle Seats: ${((pathSeats / totalSeats) * 100).toFixed(2)}%`);
}

solve(["5", "1A", "6B", "9F", "3D", "2C"]);

console.log("_".repeat(40) + "\n");

solve(["3", "9F", "2A", "6C"]);
