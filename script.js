// TODO: add styling 
// add a search bar and console log every time a user enters information inside of it
// look up the filter and map method on JS arrays
// add a button to each element (it should say "Buy")

// add images, titles, prices to the screen

// grab all elements and store them in a variable



const products = document.getElementById("products")
const searchBar = document.getElementById("searchBar")

searchBar.addEventListener('keyup', e => {
  console.log(value);
});

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then((json) => {

    // display the data
    for (let i = 0; i < json.length; i++) {
      console.log(json[i])
      // build an html element and append it to the DOM
      const title = json[i].title
      const price = json[i].price
      const image = json[i].image

      // create elements
      const div = document.createElement('div')
      const img = document.createElement('img')
      const p = document.createElement('p')
      const header = document.createElement('h2')

      // updated the content of our elements
      div.className = 'item'
      img.src = image
      p.textContent = `$${price.toFixed(2)}`
      header.textContent = title

      //built individual product by adding these to a div
      div.appendChild(img)
      div.appendChild(header)
      div.appendChild(p)

      // add the div to the products element
      products.appendChild(div)
    }

  })