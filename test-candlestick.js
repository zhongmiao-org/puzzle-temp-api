const http = require('http');

// Make a request to the candlestick endpoint
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/candlestick-and-ohlc',
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response received');

    try {
      const response = JSON.parse(data);

      if (response.success && Array.isArray(response.data) && response.data.length > 0) {
        const firstItem = response.data[0];
        console.log('First item date:', firstItem.date);

        // Check if the date is returned as a number (timestamp) that can be used to create a Date
        if (firstItem.date && typeof firstItem.date === 'number') {
          console.log('SUCCESS: Date is returned as a number (timestamp)');
          // Create a Date object from the timestamp
          const date = new Date(firstItem.date);
          console.log('Reconstructed Date:', date);
          console.log('Is valid date:', !isNaN(date.getTime()));
        } else {
          console.log('FAILURE: Date is not returned as expected');
        }
      } else {
        console.log('FAILURE: Invalid response format or empty data array');
      }
    } catch (error) {
      console.error('Error parsing response:', error);
    }
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();
