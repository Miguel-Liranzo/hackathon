const possible = ["McCrispy","McCrispy Meal","Big Mac Meal","Double Quarter Pounder with Cheese Meal","10 Piece McNuggets Meal","20 Piece McNuggets","40 McNuggets","French Fries","Strawberry Shortcake McFlurry®","Regular Oreo McFlurry","Coke®","Deluxe McCrispy Meal","Spicy McCrispy Meal","Deluxe Spicy McCrispy Meal","Quarter Pounder with Cheese Meal","Double Bacon Quarter Pounder with Cheese Meal","2 Cheeseburger Meal","Bacon Quarter Pounder with Cheese Meal","Quarter Pounder with Cheese Deluxe Meal","Double Quarter Cheese Deluxe Meal","Filet O Fish Meal","4 Piece McNuggets","6 Piece McNuggets","6 Piece McNuggets Meal","10 Piece McNuggets","6 Piece Spicy McNuggets ","6 Piece Spicy McNuggets Meal","10 Piece Spicy McNuggets ","10 Piece Spicy McNuggets Meal","20 Piece Spicy McNuggets","Classic Big Mac Pack with Apple Pie ","40 McNuggets & 2 L Fries","Classic Cheeseburger Pack ","Classic Big Mac Pack ","13 Cookie Tote","Hamburger - Happy Meal","4 Piece Chicken McNugget - Happy Meal","6pc Chicken McNuggets Happy Meal","Premium Roast Coffee","Decaf Coffee","Medium Hot Tea","Iced Coffee","Iced Caramel Coffee","Iced Hazelnut Coffee","Iced French Vanilla Coffee","Iced Sugar Free Vanilla Coffee","Premium Hot Chocolate","Caramel Hot Chocolate","Mocha Frappé","Caramel Frappé","Caramel Macchiato","Iced Caramel Macchiato","Mocha","Caramel Mocha","Iced Mocha","Iced Caramel Mocha","Latte","Caramel Latte","Hazelnut Latte","French Vanilla Latte","Sugar Free Vanilla Latte","Iced Latte","Iced Hazelnut Latte","Iced Caramel Latte","Iced French Vanilla Latte","Iced Sugar Free Vanilla Latte","Cappuccino","Vanilla Cappuccino","Sugarfree Vanilla Cappuccino","Hazelnut Cappuccino","Caramel Cappuccino","Americano","1 Cookie","3 Pack Of Cookies","Apple Pie","Strawberry & Crème Pie","Big Mac Sauce Cup","Pepper Packet","Salt Packet","Tangy BBQ Dipping Sauce","Ketchup Packet","Sweet N Sour Dipping Sauce","Hot Mustard Dipping Sauce","Creamy Ranch Sauce","Honey Mustard","Spicy Buffalo","Butter","Grape Jam","Strawberry Preserve","Hot Picante Salsa","Mild Picante Salsa","Apple Slices","3 Half Strips Bacon","Chocolate Shake","Strawberry Shake","Vanilla Shake","Regular M&M McFlurry","Caramel Sundae","Hot Fudge Sundae","Plain Sundae","Hi-C® Orange","Diet Coke®","Sprite®","Fanta Orange","Fanta Strawberry","Dr Pepper®","Fruit Punch","Lemonade","Minute Maid® Orange Juice","Dasani® Bottled Water","Milk","Chocolate Milk","Honest Kids® Organic Apple Juice Drink","Frozen Coca-Cola®","Frozen Fanta® Blue Raspberry","Frozen Fanta® Wild Cherry","Sweet Tea Lemonade","Unsweetened Tea Lemonade","Sweet Iced Tea","Unsweetened Iced Tea","Strawberry Banana Smoothie","Mango Pineapple Smoothie","Deluxe McCrispy","Spicy McCrispy","Deluxe Spicy McCrispy","Big Mac","Quarter Pounder with Cheese","Double Bacon Quarter Pounder with Cheese","Double Quarter Pounder with Cheese","Cheeseburger","Double Cheeseburger","Triple Cheeseburger","Bacon Quarter Pounder with Cheese","Quarter Pounder with Cheese Deluxe","Hamburger","Double Hamburger","Double Quarter Cheese Deluxe","Bacon McDouble","McDouble","Filet O Fish","McChicken","Bacon Ranch McCrispy","Bacon Ranch McCrispy Meal","Bacon Ranch Deluxe McCrispy Meal","Triple Cheeseburger Meal","Double Filet O Fish Meal","40 Piece Spicy McNuggets","Hot Tea","McCafé Blueberry Muffin","McCafé Apple Fritter","McCafé Cinnamon Roll","Creamer Packet","Sugar Packet","Equal Packet","Splenda Packet","Honey Packet","Syrup","Ranch Dressing","Southwest Dressing","Oreo Shamrock McFlurry","Bacon Ranch Deluxe McCrispy","Double Filet O Fish","20 Pc Spicy McNuggets and 2 Medium Fry","Southern Style Sweet Tea Lemonade","Iced Pumpkin Latte","Mustard Packet","Lite Mayo Packet","Mayonnaise Packet","Fruitopia®","Medium Iced Hazelnut Coffee","Peppermint Mocha","Iced Peppermint Mocha","Blueberry & Creme Pie","Guava and Creme Pie","40 Piece McNuggets & 2 Medium Fry","Burger Pack","Favorites for 4","Favorites for 6 ","Combo Pack","Classic Quarter Pounder with Cheese Pack ","2 Cookies"]

function setInputBox (text, id) {
  console.log(arguments)
  document.querySelector('#query').value = text
  document.querySelector('#query').disabled = true
  document.querySelector('.suggestions').innerHTML = ''
  document.querySelector('#thing').style.height = '100vh';
  showEntriesForItemName(text)
}

function addSuggestions (suggestions, startsWith) {
  let html = ''
  for (const suggestion of suggestions) {
    if (suggestion && !suggestion.toLowerCase().includes(startsWith)) continue
    html += `<div class="suggestion" onclick="setInputBox('${suggestion}', ${suggestions.indexOf(suggestion)})"><div>${suggestion}</div></div>`
  }
  console.log('html', html)
  document.querySelector('.suggestions').innerHTML = html
}

function onMainInput (event) {
  const t = event.target.value
  console.log('Event', t)
  addSuggestions(possible, t.toLowerCase());
}
