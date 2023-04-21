(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
        // private httpAdapter: Object; Petición HTTP

        getProduct(id: number) {
            console.log('Product: ', { id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            console.log('Guardando El Producto En La Base De Datos', product);
        }

    }

    class Mailer {
        private masterEmail: string = 'fernando@google.com';

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando Correo A Los Clientes', template);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private mailer: Mailer;
        private productService: ProductService;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.mailer.sendEmail(['eduardo@google.com'], 'to-clients');
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }

        // Se Quito addToCart
        // Por que No Tenemos Una Relación Directa De AddToCart Y Product
        // Para Que Se Encuentren En La Misma Clase
    
    }

    class CartBloc {
        private items: Object[] = [];

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);

})();