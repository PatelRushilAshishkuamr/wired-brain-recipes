import { Component, OnDestroy, OnInit, ɵisListLikeIterable } from "@angular/core";
import { filter, Subscription } from "rxjs";
import { ProductService } from "./product.service";
import { IProduct } from "./products";

@Component({

    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']


})
export class ProductListComponent implements OnInit, OnDestroy {
    onclick() {
        throw new Error('Method not implemented.');
    }
    currentdate: any;
    //subscribe the observable 
    ngOnInit(): void {
        this._listFilter = "";
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.performFilter('');

            },
            error: err => this.errorMessage = err


        });
        // this.products=this.productService.getProducts();
        // console.log("",this.filteredProducts);


    }
    pageTitle: string = 'Product List of Acme';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = "";
    sub!: Subscription;



    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter :', value);
        this.filteredProducts = this.performFilter(value);
    }



    // filter the product array
    filteredProducts: IProduct[] = [];



    products: IProduct[] = [];

    constructor(private productService: ProductService) {

    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }




    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy) || product.price.toString().includes(filterBy)
        );

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
        this.filteredProducts.forEach(f => {
            f.showImage = this.showImage;
        })

    }
    onRatingClicked(message: String): void {
        this.pageTitle = "Product list :" + message;
    }
    hideShowImage(id: number): void {
        this.filteredProducts.forEach(product=> {
            if (product.productId == id)
                product.showImage=!product.showImage
            else product.showImage=product.showImage
        })
    }

}