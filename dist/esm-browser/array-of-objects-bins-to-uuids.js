import objectBinsToUuids from './object-bins-to-uuids';

function arrayOfObjectsBinsToUuids(arrayOfObjectsWithBins) {
  return arrayOfObjectsWithBins.map(function (objWithBins) {
    return objectBinsToUuids(objWithBins);
  });
}

export default arrayOfObjectsBinsToUuids;