const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();

const PORT = 3001;

router.get('/test', (request, response) => {
    return response.json({ progressData: {
            todo: [
                "First Todo Item",
                "Second Todo Item",
                "Third Todo Item",
                "Fourth Todo Item",
            ],
            doing: [
                "First Doing Item",
                "Second Doing Item",
                "Third Doing Item",
                "Fourth Doing Item",
            ],
            done: [
                "First Done Item",
                "Second Done Item",
                "Third Done Item",
                "Fourth Done Item",
            ]
        }
    });
});

app.use(cors());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is on port ${PORT}`);
});
