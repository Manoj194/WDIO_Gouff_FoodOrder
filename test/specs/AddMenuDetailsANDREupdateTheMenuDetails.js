   var AdminLogin=require("../pageobjects/AdminLoginPage")
   var AdminLogout=require("../pageobjects/AdminLogoutPage")
   const MenuDetails=require("../pageobjects/AddMenupage")
   var fs=require("fs")
   var AdminLoginTestData=JSON.parse(fs.readFileSync("./TestData/login.json"))
   var MenudetailsTestData=JSON.parse(fs.readFileSync("./TestData/MenuDetailsTestdata.json"))
   var ReupdatedMenudetailsTestData1=JSON.parse(fs.readFileSync("./TestData/ReUpdatedMenudetails.json"))
   describe("TestScript_04",async()=>{
   AdminLoginTestData.forEach(({adminUsername,adminPSSWORD})=>{  
   it('login as a Admin ',async()=>{
   await browser.url ("http://rmgtestingserver/domain/Online_Food_Ordering_System/admin")
   await browser.maximizeWindow()
   await AdminLogin.AdminUserName.setValue(adminUsername)
   await AdminLogin.AdminPassword.setValue(adminPSSWORD)
   await AdminLogin.AdminLoginSubmitButton.click()
   await console.log( browser.getTitle())
   expect(browser).toHaveTitleContaining("Admin Login")
   })
   })

     MenudetailsTestData.forEach(({DishName,DishDetails,DishPrice,ResturantName})=>   {
     it('Adding Menu Details',async()=>{
     await MenuDetails.menuButton.click()
     await MenuDetails.ADDMenuButton.click()
     await MenuDetails.MenuNameTextField.setValue(DishName)
     await MenuDetails.MenuDescription.setValue(DishDetails)
     await MenuDetails.MenuPrice.setValue(DishPrice)  
     await MenuDetails.MenuAvaliableRestName.selectByVisibleText(ResturantName)
     const filepath="C:/Users/LENOVO/Desktop/ResturantImage.png"
     const remotefilepath=await browser.uploadFile(filepath)
     await $("//label[text()='Image']/ancestor::div[@class='form-group has-danger']//input[@class='form-control form-control-danger']").setValue(remotefilepath)
     await MenuDetails.SubMitButton.click()
     await console.log( browser.getTitle())
     expect(browser).toHaveTitleContaining("Add Menu")
})
})
ReupdatedMenudetailsTestData1.forEach(({DishName1,DishDetails1,DishPrice1,ResturantName1})=>{
it('ReUpdating The MenuDetails',async()=>{
await MenuDetails.AllMenuButton.click()
await MenuDetails.UpdateButtonIcon.click()
await MenuDetails.MenuNameTextField.setValue(DishName1)
await MenuDetails.AboutMenu.setValue(DishDetails1)
await MenuDetails.MenuPrice.setValue(DishPrice1)  
await MenuDetails.MenuAvaliableRestName.selectByVisibleText(ResturantName1)
const filepath1="C:/Users/LENOVO/Desktop/masalDose.png"
const remotefilepath1=await browser.uploadFile(filepath1)
await $("//label[text()='Image']/ancestor::div[@class='form-group has-danger']//input[@class='form-control form-control-danger']").setValue(remotefilepath1)
await MenuDetails.SubMitButton.click()
await console.log( browser.getTitle())
expect(browser).toHaveTitleContaining("Update Menu")
await AdminLogout.LogoutIcon.click()
await AdminLogout.LogoutButton.click()
})
})
})




//  const AdminUsername= await browser.$("//input[@placeholder='Username']")
    //  await AdminUsername.setValue("admin")
    //  const AdminPassword =await browser.$("//input[@placeholder='Password']")
    //  await AdminPassword .setValue("codeastro")
    //  const AdminLoginClick=await browser.$("//input[@name='submit']")
    //  await AdminLoginClick.click()
    //   await console.log( browser.getTitle())
    //  expect(browser).toHaveTitleContaining("Admin Login")})

        // it('Adding Menu Details',async()=>{
           // await browser.$("//span[text()='Menu']").click()
          //  await browser.$("//a[text()='Add Menu']").click()
          //  await browser.$("//label[text()='Dish Name']//ancestor::div[@class='col-md-6']//input[@type='text']").setValue("Donne Biryani")
          //  await browser.$("//label[text()='Description']//ancestor::div[@class='col-md-6']//input[@type='text']").setValue("Deep fry whole potatoes in oil for 8-10 minutes or coat each potato with little oil. Mix the onions, garlic, tomatoes and mushrooms. Add yoghurt, ginger, garlic, chillies, coriander")
           // await browser.$("//label[text()='Price ']//ancestor::div[@class='col-md-6']//input[@type='text']").setValue("9")
          //  await browser.$("//select[@data-placeholder='Choose a Category']").selectByVisibleText("Indian Resturant")
        //    const filepath="C:/Users/LENOVO/Desktop/ResturantImage.png"
        //     const remotefilepath=await browser.uploadFile(filepath)
        //     await $("//label[text()='Image']/ancestor::div[@class='form-group has-danger']//input[@class='form-control form-control-danger']").setValue(remotefilepath)
           // await browser.$("//input[@type='submit']").click()
        //     await console.log( browser.getTitle())
        //     expect(browser).toHaveTitleContaining("Add Menu")
        // })

          //  it('ReUpdating The MenuDetails',async()=>{
           /// await browser.$("//a[text()='All Menues']").click()
           // await browser.$("//td[text()='Indian Resturant']//ancestor::tr[@role='row']/descendant::i[@class='fa fa-edit']").click()
            // await browser.$("//label[text()='Dish Name']//ancestor::div[@class='col-md-6']//input[@type='text']").setValue("Masal Dose")
            // await browser.$("//label[text()='About']//ancestor::div[@class='form-group has-danger']//input[@type='text']").setValue("Deep fry whole potatoes in oil for 8-10 minutes or coat each potato with little oil. Mix the onions, garlic, tomatoes and mushrooms. Add yoghurt, ginger, garlic, chillies, coriander")
            // await browser.$("//label[text()='Price ']/ancestor::div[@class='form-group']//input[@type='text']").setValue("45")
            // await browser.$("//select[@data-placeholder='Choose a Category']").selectByVisibleText("Indian Resturant")
            //  const filepath1="C:/Users/LENOVO/Desktop/masalDose.png"
            //  const remotefilepath1=await browser.uploadFile(filepath1)
            //  await $("//label[text()='Image']/ancestor::div[@class='form-group has-danger']//input[@class='form-control form-control-danger']").setValue(remotefilepath1)
            // await browser.$("//input[@type='submit']").click() 
            //  browser.getUrl()
            // await console.log( browser.getTitle())
            //  expect(browser).toHaveTitleContaining("Update Menu")
            //  const LogoutIcon= await browser.$("//img[@src='images/bookingSystem/user-icn.png']")
            //  await  LogoutIcon.click()
            //  const Logout= await browser.$("//a[@href='logout.php']")
            //  await  Logout.click()
            //  browser.refresh()

            //  })
            //  })






        
