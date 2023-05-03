import ProductManager from "./ProductManager.js";

// Proceso de testing //

// Se creará una instancia de la clase “ProductManager”

const test = new ProductManager();

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log("------------ Productos -----------");
console.log(test.getProducts());
console.log("----------------------------------");


// Se llamará al método “addProduct” con los campos:
test.addProduct("text product", "se ingresa producto de prueba", 5000, "imagen", "abc123", 25);
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE


// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log("------------ Productos -----------");
console.log(test.getProducts())
console.log("----------------------------------");

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
console.log("--------Agregando Producto--------");
test.addProduct("text product", "se ingresa producto de prueba", 5000, "imagen", "abc123", 25);
console.log("----------------------------------");
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

// producto existente
console.log("--------Buscando Producto--------");
test.getProductById(1);
console.log("----------------------------------");
// producto no existente
console.log("--------Buscando Producto--------");
test.getProductById(3);
console.log("----------------------------------");

//Validacion de campos

// Se llamará al método “addProduct” omitiendo un campo, debe arrojar un error porque todos los campos son requeridos.
 test.addProduct("test product", "se ingresa producto de prueba", 5000, "imagen", "abc127");
// en este caso se elimina el campo "stock", a fin de forzar el error.

