import objectBinsToUuids from './object-bins-to-uuids';

function arrayOfObjectsBinsToUuids(arrayWithBins) {
  return arrayWithBins.map((objWithBins) => objectBinsToUuids(objWithBins));
}

export default arrayOfObjectsBinsToUuids;
