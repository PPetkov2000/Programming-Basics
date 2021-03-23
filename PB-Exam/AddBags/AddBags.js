function solve(params) {
  let luggagePriceOver20Kg = Number(params.shift());
  let luggageKgs = Number(params.shift());
  let daysUntilTrip = Number(params.shift());
  let luggages = Number(params.shift());
  let price = 0;

  if (luggageKgs < 10) {
    price = luggagePriceOver20Kg * 0.2;
  } else if (luggageKgs >= 10 && luggageKgs <= 20) {
    price = luggagePriceOver20Kg * 0.5;
  } else if (luggageKgs > 20) {
    price = luggagePriceOver20Kg;
  }

  if (daysUntilTrip < 7) {
    price += price * 0.4;
  } else if (daysUntilTrip >= 7 && daysUntilTrip <= 30) {
    price += price * 0.15;
  } else if (daysUntilTrip > 30) {
    price += price * 0.1;
  }

  price *= luggages;

  console.log(`The total price of bags is: ${price.toFixed(2)} lv.`);
}

solve(["30", "18", "15", "2"]);

console.log("_".repeat(40) + "\n");

solve(["25.50", "5", "36", "6"]);

console.log("_".repeat(40) + "\n");

solve(["63.80", "23", "3", "1"]);
