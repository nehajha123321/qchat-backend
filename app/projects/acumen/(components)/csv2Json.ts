import { csvData } from "../_assets/athena-result";

export function csvToJson() {
  try {
    // Split the data into lines
    const lines = csvData.split('\n');

    // Extract headers
    const headers = lines[0].split(',');

    // Initialize an array to hold our JSON objects
    var result: any[] = [];

    // Process each line except the first one
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i]) continue;  // Skip empty lines

      var obj = {};
      const currentline = lines[i].split(',');

      // Map the headers to the parts of the current line
      headers.forEach((header, j) => {
        obj[header] = currentline[j];
      });

      result.push(obj);
    }
    //console.log(result);
    return result  // Return the JSON array as a string
  } catch (error) {
    console.error('Error processing the CSV file', error);
  }
}
