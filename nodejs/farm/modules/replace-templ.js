/** obj
 * {
    "id": 1,
    "productName": "Goat and Sheep Cheese",
    "image": "🧀",
    "from": "Portugal",
    "nutrients": "Vitamin A, Calcium",
    "quantity": "250g",
    "price": "5.00",
    "organic": false,
    "description": "Creamy and distinct in flavor, goat cheese is a dairy product enjoyed around the world. Goat cheese comes in a wide variety of flavors and textures, from soft and spreadable fresh cheese to salty, crumbly aged cheese. Although it’s made using the same coagulation and separation process as cheese made from cow’s milk, goat cheese differs in nutrient content."
  }
 */

module.exports = function(templ, obj) {

    /* return templ.replaceAll('%*PRODUCTNAME*%',obj.productName)
                .replaceAll('%*IMAGE*%',obj.image)
                .replaceAll('%*PRICE*%',obj.price)
                .replaceAll('%*DESCRIPTION*%',obj.description)
                ; */
    let newStr = templ;
    const entries = Object.entries(obj);
    entries.forEach(entry => {

      newStr = newStr.replaceAll(`%*${entry[0].toUpperCase()}*%`,entry[1])

    })

    newStr = newStr.replaceAll('%*NOTORGANIC*%',obj.organic ? '' : 'not-organic');

    newStr = newStr.replaceAll('%*HOSTINGDIR*%',hostingDir)

    return newStr;
}