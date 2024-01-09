![alt text](images/readme/screens.jpg)

# Hou Hsiao-Hsien

✨ [**View the website here!**](https://johntobindev.github.io/hou-hsiao-hsien) ✨

## Design Requirements
- At least five webpages
- Clear and demonstrable interactive features
- A shopping cart
- Clear imagery
- At least one animation

## Site Description

An informational website about the Taiwanese filmmaker Hou Hsiao-Hsien.

## Page Descriptions

### Home

The home page features a quote from the filmmaker, alongside a selection of prizes awarded to him throughout his career. All of these elements use keyframe animations to appear on the page when it loads.

### About

The about page features a few images of the filmmaker and some temporary dummy text. The main images are captioned and have descriptive alt text.

### Films

The film page features a selection of the filmmaker's filmography in reverse chronological order, displayed as items in a grid. When hovered, the items display a border which transitions into view.

### Shop

The shop page features three merchandise products that users can add to a shopping basket. This functionality is enabled through the use of JavaScript. Each product is defined as an object with a title, image, and price, and the basket is defined as an array of numbers referring to the quanity of each product. When a user adds or removes a product, the array is modified accordingly and an update function is executed to adjust the total price. The update function also manages the HTML markup, ensuring an accurate view of the shopping basket state is rendered to the browser. Additionally, local storage is used to persist the state between sessions.

### Contact

The contact page features a simple form with fields for the user's name, email, and message. JavaScript is used to display any input validation errors to the user, and to display a success message when a message has been sent.

## References

Images and film descriptions retrieved from various sources, including:
- TMDB https://www.themoviedb.org
- Letterboxd https://letterboxd.com
- Wikipedia https://wikipedia.org