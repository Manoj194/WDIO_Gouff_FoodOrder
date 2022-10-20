const fs=require('fs');
var Credential=JSON.parse(fs.readFileSync("./TestData/login.json"))
const  UserLogin=require("../pageobjects/UseLoginPage")
const ResturantsModule =require("../pageobjects/ResturantModule")
console.log(Credential);

describe("TestScript-02",async()=>{
it('Login to Application',async()=>{
await browser.url("http://rmgtestingserver/domain/Online_Food_Ordering_System/")
await browser.maximizeWindow()
})

Credential.forEach(({username,password}) => {
it('userloginpage',async()=>{
await UserLogin.LoginButton.click()
await console.log(browser.getTitle()); 
expect(browser).toHaveTitleContaining(" Login")
await UserLogin.UserName.setValue(username)
await UserLogin.Password.setValue(password)
await UserLogin.LoginSubmitButton.click()
})
});

it('Resturant Module',async()=>{
await ResturantsModule.ResturantsTextButton.click()
await console.log(browser.getTitle()); 
expect(browser).toHaveTitleContaining(" Restaurants")
await ResturantsModule.ViewMenuButton.click()
await console.log(browser.getTitle()); 
expect(browser).toHaveTitleContaining(" Dishes")
await ResturantsModule.AddToCartButton.click()
await ResturantsModule.CheckOutButton.click()
//await browser.waitUntil(()=> (ResturantsModule.CashOnDeliveryButton).isClickable(),{
//timeout:10000,
//timeoutMsg:"Element is not clickable"
//})
await  ResturantsModule.CashOnDeliveryButton.click()
await ResturantsModule.OrderNowButtonButton.click()
await browser.acceptAlert() 
console.log(browser.getAlertText());
await browser.acceptAlert()
console.log(browser.getAlertText());
await ResturantsModule.UserLogoutButton.click()
})

})





    //  const UserLogin=await browser.$("//a[text()='Login']")
    //  await UserLogin.click()
    //   const LoginUserName=await browser.$("//input[@placeholder='Username']")
    //   await LoginUserName.setValue("manojbh")
    //   const LoginPassword=await browser.$("//input[@placeholder='Password']")
    //   await LoginPassword.setValue("maruthii")
    //   const LoginSubmitButton=await browser.$("//input[@name='submit']")
    //   await LoginSubmitButton.click()
    // const ResturantsText=await browser.$("//a[@href='restaurants.php']")
    // await  ResturantsText.click()
    // await console.log(browser.getTitle()); 
    // expect(browser).toHaveTitleContaining(" Restaurants")
    // const ViewMenuButton=await browser.$("//div[@class='right-content bg-white']//a[@href='dishes.php?res_id=1']")
    // await  ViewMenuButton.click()
    // await console.log(browser.getTitle()); 
    //   expect(browser).toHaveTitleContaining(" Dishes")
    //   const AddToCartButton=await browser.$("//span[text()='$14.00']/ancestor::div[@class='col-xs-12 col-sm-12 col-lg-3 pull-right item-cart-info']//input[@type='submit']")
    //   for (var i=0;i<=1;i++){
    //   await  AddToCartButton.click()
    //   }
    // const CheckOutButton=await browser.$("//a[text()='Checkout']")
    // await  CheckOutButton.click()
    //  const CashOnDelivery=await browser.$("//span[text()='Cash on Delivery']")
    // await  CashOnDelivery.click()
    // const OrderNowButton=await browser.$("//input[@name='submit']")
    // await  OrderNowButton.click()
    // browser.acceptAlert() 
    // console.log(browser.getAlertText());
    // browser.acceptAlert()
    // console.log(browser.getAlertText());
    // const Logout=await browser.$("//a[text()='Logout']")
    // await Logout.click()
//        browser.refresh()

// })
// })
