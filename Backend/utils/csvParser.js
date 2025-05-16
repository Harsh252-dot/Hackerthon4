const csv = require("csvtojson");

const parseCSV = async (filePath) => {
  try {
    const jsonArray = await csv().fromFile(filePath);
    return jsonArray;
  } catch (err) {
    throw new Error("Error parsing CSV file: " + err.message);
  }
};

module.exports = parseCSV;
