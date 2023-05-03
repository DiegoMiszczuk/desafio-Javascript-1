class ProductManager {
  constructor() {
    this.products = [];
  }
  static id = 0;
  addProduct(title, description, price, thumbnail, code, stock) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].code === code) {
        console.log(`el codigo ${code} esta repetido`);
        return;
      }
  
    }

    ProductManager.id++;
    this.products.push({
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ProductManager.id,
    });
  }

  getProduct() {
    return this.products;
  }

  buscado(id) {
    return this.products.find((el) => el.id === id);
  }

  getProductById(id) {
    this.buscado(id) ? console.log(this.buscado(id)) : console.log("not found");
  }
}

const productos = new ProductManager();
console.log(productos.getProduct());

productos.addProduct(
  "producto1",
  "descripcion1",
  2000,
  "imagen1",
  "abc123",
  25
);
console.log(productos.getProduct());

productos.addProduct(
  "producto2",
  "descripcion1",
  2000,
  "imagen1",
  "abc123",
  25
);

productos.getProduct();
productos.getProductById("2");


