import objectBinsToUuids from './object-bins-to-uuids';

function arrayOfObjectsBinsToUuids(arrayOfObjectsWithBins) {
  return arrayOfObjectsWithBins.map((objWithBins) => objectBinsToUuids(objWithBins));
}

export default arrayOfObjectsBinsToUuids;
