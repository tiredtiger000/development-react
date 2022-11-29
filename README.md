# Development

### Link to Deployed Website
If you used the stencil code, this is `https://tiredtiger000.github.io/development-react/`

### Goal and Value of the Application
The goal and value of the application is to allow the user to purchase foods from the korean food menu with more ease. It allows them to easily sort through the menu by popularity or by price. They can also filter by noodles if they want only see noodle dishes and/or filter by vegetarian options. It also shows the grand total of the price of their entire purchase (foods that they added to the cart).

### Usability Principles Considered
For the usabilities priciples considered for layout and hierarchy is how effectivley can all the menu food items be shown and categorized. I showed the menu itmes and the sorting/filtering/cart options side by side rather than having one on top of the other so that both can be seen at once. That way, the user is able to know that there are sorting, filtering, and see what is being added to their cart immediately. This aids with learnability since by having the layout easily seen, it makes it easy for new users to pick up on adding/filtering/sorting menu items. For each food item, I had an image, food name, description, price, then add to cart button from top to bottom respectively. This way, the user can first see visually what the food looks like and see the extra information about the food right underneath; this also makes the entire process extremely efficient, making typical tasks to be completed quickly and memorable for frequent users. In addition, the button stands out with a cart icon to indicate that it can be added to the cart. 

### Organization of Components, How Data is Passed Down Through Components, How the User Triggers State Changes
I had three main components: Header.js, Basket.js, and Main.js. This separates them into three big sections of the website. The title, the content of the food items (cards), and then the side bar with the cart basket and the sorting/filter options. They're organized in our App.js file. 
- Header.js: it does not have any props since it's just the title of the website which I named: "Tired Tiger's Korean Food." It's only text
- Main.js: this is the main area where all the food items are displayed. It has two props: foodItem and addToCart. foodItem is a single food item that is passed through and addToCart is function that updates the cart with the newly added foodItem when the "Add to Cart" button is clicked. This function uses a state to make our component interative: it allows to access cartItems and setCartItems to add to our list of food items in our cart. The user triggers state changes through the "Add to Cart" button. when it is clicked, it calls the addToCart function that takes in a foodItem to add it to its list. Then it's visually shown on the website by mapping all of these items (which is done in App.js)
- Basket.js: this component deals with all filtering and sorting. It has two props: foodData and updateFoodList. foodData is pretty self-explanatory: it's a list of all our food items. updateFoodList is a function that uses useState to update our new list of foods depending on what's being filtered or sorted and show those new foods on our main area with the food cards. The user triggers the sorting elements through a dropdown that gives two option: popularity and price. When popular is selected, we sort it in ascending order and udpate our sorted list by using the function updateFoodList that was passed through. For filtering (vegetarian and/or noodle option) we use a similar logic. If at least one of the options are selected, then we update our food list by filtering through our foodData and seeing which food items are tagged "true" with noodle or vegetarian booleans. Then, we update our food list using updateFoodList accordingly. I used useEffect() so that whenever one of either sorting or filtering states are triggered, we can make sure that our food list is sorted and filtered with the correct options that the user wanted each time (especially, when the user is using both filter and sort options).

