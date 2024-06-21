const app = require('./app');
const { PORT } = require('./config/index.config');
 

app.listen(PORT | 3000, () => {
    console.log(`Server is running on port ${PORT}`);
});
