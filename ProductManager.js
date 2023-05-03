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

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }

    if(!Object.values(newProduct).includes(undefined)){
      ProductManager.id++;
      this.products.push({...newProduct,
      
        id: ProductManager.id,
      });
    }else{
      console.log("ERROR..Complete todos los campos")
    }
   
  }

  getProducts() {
    return this.products;
  }

  buscado(id) {
    return this.products.find((el) => el.id === id);
  }

  getProductById(id) {
    this.buscado(id) ? console.log(this.buscado(id)) : console.log("ERROR...not found");
  }
}

export default ProductManager;



