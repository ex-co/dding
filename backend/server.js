const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();

const PORT = 3001;

router.get('/test', (request, response) => {
    return response.json({ data: "Hello I'm from server ~" });
});

app.use(cors());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
});
