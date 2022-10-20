    const  UserLogin=require("../pageobjects/UseLoginPage")
    const ResturantsModule =require("../pageobjects/ResturantModule")
    var AdminLoginPage=require("../pageobjects/AdminLoginPage")
    var fs=require("fs")
    const LoginTestdata=JSON.parse(fs.readFileSync("./TestData/login.json"))
    var PlacedOrderStatusUpdate=require("../pageobjects/PlacedOrderStatusUpdatePage")

    describe("TestScript_03",async()=>{
    it('URL lanching',async()=>{
    await browser.url("http://rmgtestingserver/domain/Online_Food_Ordering_System/")
    await browser.maximizeWindow()
    })

    LoginTestdata.forEach(({username,password})=>{
    it('Login',async()=>{
    await UserLogin.LoginButton.click()
    await UserLogin.UserName.setValue(username)
    await UserLogin.Password.setValue(password)
    await UserLogin.LoginSubmitButton.click()
    expect(browser).toHaveTitleContaining(" Home")
    })
    })

    it('Resturant Module',async()=>{
    await ResturantsModule.ResturantsTextButton.click()
    await ResturantsModule.ViewMenuButton.click()
    await ResturantsModule.AddToCartButton.click()
    await ResturantsModule.CheckOutButton.click()
    await ResturantsModule.CashOnDeliveryButton.click()
    await ResturantsModule.OrderNowButtonButton.click()
    await browser.acceptAlert() 
    console.log(browser.getAlertText());
    await browser.acceptAlert()
    console.log(browser.getAlertText());
    });

    LoginTestdata.forEach(({adminUsername,adminPSSWORD})=>{
    it('Admin Login',async()=>{
    await browser.url ("http://rmgtestingserver/domain/Online_Food_Ordering_System/admin")
    await browser.maximizeWindow()
    await AdminLoginPage.AdminUserName.setValue(adminUsername)
    await AdminLoginPage.AdminPassword.setValue(adminPSSWORD)
    await AdminLoginPage.AdminLoginSubmitButton.click()
    await console.log( browser.getTitle())
    expect(browser).toHaveTitleContaining("Admin Login") 
    await PlacedOrderStatusUpdate.OrdersButton.click()
    await PlacedOrderStatusUpdate.UpdateButtonIcon.click()
    await PlacedOrderStatusUpdate.UpdateOrderDetailsButton.click()
    await console.log( browser.getTitle()); 
    expect(browser).toHaveTitleContaining("Order Update")
    await browser.switchWindow("Order Update")
    await PlacedOrderStatusUpdate.StatusDropdown.selectByVisibleText("On the way")
    await PlacedOrderStatusUpdate.Textmsg.setValue("Order is on the way")
    await PlacedOrderStatusUpdate.SubmitButtons.click()
    })
    })     
    })
 


    
     //const UserLogin=await browser.$("//a[text()='Login']")
     //await UserLogin.click()
      //const LoginUserName=await browser.$("//input[@placeholder='Username']")
     // await LoginUserName.setValue("manojbh")
      //const LoginPassword=await browser.$("//input[@placeholder='Password']")
      //await LoginPassword.setValue("maruthii")
     // const LoginSubmitButton=await browser.$("//input[@name='submit']")
      //await LoginSubmitButton.click()
    //  expect(browser).toHaveTitleContaining(" Home")
    // })
    
     //})
   
        // const ResturantsText=await browser.$("//a[@href='restaurants.php']")
        // await  ResturantsText.click()
        // await console.log(browser.getTitle()); 
        // expect(browser).toHaveTitleContaining(" Restaurants")
        // const ViewMenuButton=await browser.$("//div[@class='right-content bg-white']//a[@href='dishes.php?res_id=1']")
        // await  ViewMenuButton.click()
        // await console.log(browser.getTitle()); 
        //   expect(browser).toHaveTitleContaining(" Dishes")
        // const AddToCartButton=await browser.$("//span[text()='$14.00']/ancestor::div[@class='col-xs-12 col-sm-12 col-lg-3 pull-right item-cart-info']//input[@type='submit']")
        // await  AddToCartButton.click()
        // const CheckOutButton=await browser.$("//a[text()='Checkout']")
        // await  CheckOutButton.click()
        // const CashOnDelivery=await browser.$("//label[@class='custom-control custom-radio  m-b-20']")
        // await  CashOnDelivery.click()
        // const OrderNowButton=await browser.$("//input[@name='submit']")
        // await  OrderNowButton.click()
        // browser.acceptAlert() 
        // browser.acceptAlert()})
        //

        
           // const AdminUsername= await browser.$("//input[@placeholder='Username']")
           // await AdminUsername.setValue("admin")
           // const AdminPassword =await browser.$("//input[@placeholder='Password']")
          //  await AdminPassword .setValue("codeastro")
           // const AdminLoginClick=await browser.$("//input[@name='submit']")
           // await AdminLoginClick.click()
            //await console.log( browser.getTitle())
            //expect(browser).toHaveTitleContaining("Admin Login") 
           // const OrderButton= await browser.$("//a[@href='all_orders.php']")
           // await OrderButton.click()
            //const UpdareButton= await browser.$("(//h4[text()='All Orders']/ancestor::div[@class='card card-outline-primary']//tbody//tr//td//a[@class='btn btn-info btn-flat btn-addon btn-sm m-b-10 m-l-5'])[9]")
            //await UpdareButton.click()
           // const UpdateOrderDetails= await browser.$("//button[text()='Update Order Status']")
            //await UpdateOrderDetails.click()
            //await browser.switchWindow("Order Update")
            // await browser.$("//select[@name='status']").selectByVisibleText("Delivered")
          // const Textmsg= await browser.$("//textarea[@name='remark']")
           //await Textmsg.setValue("Some problem happend in the application")
           //const SubmitButton= await browser.$("//b[text()='Action']/ancestor::tr//input[@class='btn btn-primary']")
           //await SubmitButton.click()
          // await console.log( browser.getTitle());
           //expect(browser).toHaveTitleContaining("Order Update") 
           //browser.refresh()

    //})
        



    
        
    
