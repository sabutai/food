import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 6t4LxH_RBtBjehMmF8Imvh6ZA3wk12PnfOI2GJbymZbCuXh7DdKI2wlwwPr9sCV9hutpI3ogW2br_7EH-TZiuOb1Iubmph3-NnK3K-GDD1sZsTR1ejqpA6bJpknuYXYx'
    }
});
