gas = [1, 2, 3, 4, 5];
cost = [3, 4, 5, 1, 2];
totalGas = gas.reduce((a, i) => {
  return a + i;
});
totalCost = cost.reduce((a, i) => {
  return a + i;
});
console.log(gasStations(gas, cost));

function gasStations(gas, cost) {
  if (totalCost > totalGas) {
    return -1;
  } else {
    fuel = 0;
    currentIndex = 0;
    for (i in gas) {
      if (gas[currentIndex] + fuel < cost[currentIndex]) {
        currentIndex++;
      } else fuel += gas[currentIndex];
    }
  }
  return currentIndex;
}
