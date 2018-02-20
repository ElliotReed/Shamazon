const inquirer = require('inquirer');
const mySQL = require('mysql');

const connection = mySQL.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shamazon_db'
});

connection.connect();

displayProducts();

function displayProducts(){
  // Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
  connection.query('SELECT * FROM products', function(error, results, fields){
    if (error) throw error;
    console.log('==========================  STORE  ==========================');
    console.log('');
    results.forEach(function(result, index){
      console.log(`ID: ${result.item_id} | Name: ${result.product_name} | Price: ${result.price}`);
    });
    console.log('');
    console.log('==============================================================');
    console.log('');
    getUserChoice();

  });
}

function getUserChoice(){
  // The app should then prompt users with two messages.
  // The first should ask them the ID of the product they would like to buy.
  // The second message should ask how many units of the product they would like to buy.
  inquirer.prompt([
    {
      type: 'input',
      name: 'item_id',
      message: `Which item would you like to purchase? (by ID)`
    },
    {
      type: 'input',
      name: 'quantity',
      message: `How many would you like?`
    }
  ]).then(function(answer){
    // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
    let strSQL = 'SELECT * FROM products WHERE item_id =' + answer.item_id;
    // console.log(strSQL);
    connection.query(strSQL, function(error, result, fields){
      if (error) throw error;
      console.log('');
      if (result[0].stock_quantity < answer.quantity){
        console.log(`Due to a high demand for ${result[0].product_name}, we only have ${result[0].stock_quantity} left in stock.`);
        return;
      }
      // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
      // console.log(result);
    });
  });
}











// However, if your store does have enough of the product, you should fulfill the customer's order.


// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.



// If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.
function endConnection(){
  connection.end(function(error){
    if (error){
      console.log(error);
    }
  });
}