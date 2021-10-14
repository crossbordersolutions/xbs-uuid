import objectBinsToUuids from './object-bins-to-uuids';

function arrayOfObjectsBinsToUuids(arrayWithBins) {
  return arrayWithBins.map(function (objWithBins) {
    return objectBinsToUuids(objWithBins);
  });
}

export default arrayOfObjectsBinsToUuids;