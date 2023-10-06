# E-commerce Website - Assignment

### Tech Stack Used - ReactJS


## `Features of this app` 

### Product Listing: 

Displays a variety of products with images, names, prices, and "Add to Cart" buttons. Implemented filters to allow users to sort products by category, price range, or ratings. 

### Shopping Cart: 

Implemented a cart section to display the added products, quantities, and total cost. Users can increase, decrease, or remove items from the cart. 
Displayed real-time updates of the cart total and item count. 

### Checkout: 

Implemented a checkout process that calculates the total cost of items in the cart. Users can enter shipping information and payment details. 

### Responsive Design: 

Ensured the website is responsive and works seamlessly on both desktop and mobile devices. 

Optimized the layout for different screen sizes. 

## `Working`

### App.js

1. I have created an array of dummy products of different categories with fields - ID, Name, Price, Rating, Image and Category.

2. In App.js file, I have created Routes to display different components- Home, Cart, Checkout with Navbar as parent.

3. Created a global state to store cart items using context. I used context to prevent prop drilling.

### Homepage

1. This is the place where all the products are available.

2. This component accepts products array along with cartContext(contains cart items array and function to change cart state).

3. Implemented Sort functionality using the sort function in javascript.

4. Applied the filters on initial products according to user input and updated the resultant items to be displayed on the screen , stored the same in state so that the component re-renders on each filter change.

5. Prevented adding same item multiple times by checking if that item already exist in the cart.

6. Handled edge case - when a given filter resulted in null items then displayed suitable message. 

### Cart

1. This accepts cartContext.

2. Calculated total price from the items present in the cart. As cart data is stored in state, whenever an item is added or removed, total price is updated accordingly.

3. Added a link to checkout form when the user clicks on the button to checkout.

4. Checkout form is displayed with the total cart value. 

5. I have intentionally not applied any form validation to test the app and also to allow you the test my app too 😀. 