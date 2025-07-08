class Payment {
  constructor( paymentMethod, date, price, user, cart, isPaid) {
    this.cart = cart;
    this.price = price;
    this.user = user;
    this.paymentMethod = paymentMethod;
    this.date = date;
    this.isPaid = isPaid;

    console.log(this.name);
  }
}