class Product {
  constructor(name, price, quantity, description, rating, user) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.rating = rating;
    this.user = user;

    console.log(this.name);
  }
}