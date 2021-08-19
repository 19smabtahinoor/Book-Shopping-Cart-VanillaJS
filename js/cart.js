const book1Cost = 277;
const book2Cost = 255;
let booksTotalCost = book1Cost + book2Cost;

//Increment and Decrement Handling
function handleClick(bookName, operator) {
    //select the quantity input
    const bookQuantityField = document.getElementById(bookName + '_quantity');

    //get the value of book quantity input
    let bookQuantity = parseInt(bookQuantityField.value);

    //increment and decrement condition 
    operator === 'plus' ? bookQuantity += 1 : (bookQuantity > 0 ? bookQuantity -= 1 : null);

    //update the value
    bookQuantityField.value = bookQuantity;

    //calculating the price 
    calculateBookPrice(bookName, bookQuantity);

}

//Calculate the book price 

let book1Price = 0;
let book2Price = 0;

function calculateBookPrice(bookName, bookQuantity) {

    if (bookName == 'book1') {
        book1Price = book1Cost * bookQuantity;
        updateUI(bookName, book1Price);
    } else {
        book2Price = book2Cost * bookQuantity;
        updateUI(bookName, book2Price);
    }
    let total = book1Price + book2Price

    //update the book total
    updateBooksTotal(total)
}

//update book total UI 
function updateUI(bookName, bookTotal) {
    //Select the Total bookPrice
    const bookPriceValue = document.getElementById(bookName + '_price');
    bookPriceValue.innerText = bookTotal;
}

//update total 
function updateBooksTotal(total) {
    const bookTotals = document.getElementById('book_total');
    bookTotals.innerText =  total;
}