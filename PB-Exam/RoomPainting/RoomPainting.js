function solve(params) {
  let boxes = Number(params.shift());
  let rolles = Number(params.shift());
  let glovesPrice = Number(params.shift());
  let brushPrice = Number(params.shift());
  let boxPrice = 21.5;
  let rollPrice = 5.2;

  let totalDyePrice = boxes * boxPrice;
  let totalRollesPrice = rolles * rollPrice;
  let glovesNeeded = Math.ceil(rolles * 0.35);
  let brushesNeeded = Math.floor(boxes * 0.48);
  let totalGlovesPrice = glovesNeeded * glovesPrice;
  let totalBrushesPrice = brushesNeeded * brushPrice;
  let totalPrice =
    totalDyePrice + totalRollesPrice + totalGlovesPrice + totalBrushesPrice;

  console.log(`This delivery will cost ${(totalPrice / 15).toFixed(2)} lv.`);
}

solve(["10", "8", "2.2", "5"]);

console.log("_".repeat(40) + "\n");

solve(["21", "18", "5", "2.2"]);
