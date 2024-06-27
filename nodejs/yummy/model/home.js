module.exports = {

  getHomePage: (req,res) => {

    let querySQL = `SELECT f.* , c.name AS cuisine
                    FROM food f JOIN cuisine c
                        ON cuisine_id = c.id`;

    db.query(querySQL,(err, food) => {

      if (err) {

        console.log(err.message);
        return res.status(500).send(`<h1>ERROR: ${err.message} \n
             while performing \n
             ${querySQL}</h1>`);

      }

      // Controller (we've got it here close to the Model)
      res.render('index.ejs', {
        title: 'Yummy',
        food
      })

    })

  },
  
  getSampleHomePage: (req,res) => {

    res.render('index.ejs',
      {title: 'Yummy',
       food: [ 
        {
         id: 1,
         name: 'chumus masbacha',
         kosher_type: 'parve',
         cuisine_id: 1,
         image: 'chummus-masbacha.jpg', 
         calories: 550, 
         prepare_time_min: 120, 
         ingredients: 'chumus, tchina, oil',  
         type_of_dish: 'main'
        },
        {
         id: 2,
         name: 'sushi',
         kosher_type: 'parve',
         cuisine_id: 2,
         image: 'sushi.jpeg',
         calories: 250, 
         prepare_time_min: 90, 
         ingredients: 'rice, nuri, avocado',  
         type_of_dish: 'main'
        }
       ]
      })

  },

  getSmallHomePage: (req,res) => {

    res.render('small-index.ejs',
      {title: 'Yummy'})

  }

}