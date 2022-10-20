class ResturantsModule{
    get ResturantsTextButton(){
        return $("//a[@href='restaurants.php']")
    }
    get ViewMenuButton(){
        return $("//div[@class='right-content bg-white']//a[@href='dishes.php?res_id=1']")
    }
    get  AddToCartButton(){
        return $("//span[text()='$14.00']/ancestor::div[@class='col-xs-12 col-sm-12 col-lg-3 pull-right item-cart-info']//input[@type='submit']")
    }
    get CheckOutButton(){
        return $("//a[text()='Checkout']")
    }
    get CashOnDeliveryButton(){
        return $("//label[@class='custom-control custom-radio  m-b-20']")
    }
    get  OrderNowButtonButton(){
        return $("//input[@name='submit']")
    }
    get UserLogoutButton(){
        return $("//a[text()='Logout']")
    }
}
module.exports=new ResturantsModule()