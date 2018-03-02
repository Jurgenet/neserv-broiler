const express = require('express');

const app = express();

// static
app.use(express.static('./static/'));

// start
app.listen(3000, () => {
  console.log(
    'Server is running on http://localhost:3000 or http://127.0.0.1:3000'
  );
});
