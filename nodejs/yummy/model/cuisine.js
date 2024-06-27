module.exports = {

    // Get the list of cuisines with their id
    getCuisineList: (callback) => {

        let querySQL = 'SELECT id, name FROM cuisine';

        db.query(querySQL,(err,result) => {

            if (err) {
                console.log(err.message);
                callback(err,[]);
                return;
            }

            callback(err,result);

        })

    }


}