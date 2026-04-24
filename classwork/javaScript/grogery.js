// declare variables for customer's data
let itemName = prompt("Enter the name of the item to Purchase");
let itemQuantity = parseInt(prompt("Enter the quantity"));
let itemPrice = parseInt(prompt("Enter the Price"));

let actualPrice = itemPrice * itemQuantity;
let discount;
let totalPrice;
let percentageDiscount;

// use conditional statement to apply discount(s)
if (itemPrice > 50) {
  discount = actualPrice * 0.1;
  percentageDiscount = 10;
  totalPrice = actualPrice - discount;
} else {
  totalPrice = actualPrice;
}
//display the items details and totalPrice on the browser
document.write(`
    <div>
    <ul>
    <li>Item Name: ${itemName}</li>
    <li>Quantity: ${itemQuantity}</li>
    <li>Unit Price: N${itemPrice}</li>
    <li>Discount: ${percentageDiscount === undefined ? 0 : percentageDiscount}%</li>
    <li>Total Price: N${totalPrice}</li>
    </ul>
    </div>
    `);
