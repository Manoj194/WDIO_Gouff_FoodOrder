const fs=require("fs")
var Credential=JSON.parse(fs.readFileSync("./TestData/login.json"))
var Credential1=JSON.parse(fs.readFileSync("./TestData/AddResturantScriptTestData.json"))
const  AdminLogin=require("../pageobjects/AdminLoginPage")
const AddNewResturant=require("../pageobjects/AddNewResturants")
var Adminlogout=require("../pageobjects/AdminLogoutPage")
const DropDownS= require("../pageobjects/AddNewResturantsDropdowns")

describe("TestScript_01",async()=>{
it('login as a Admin ',async()=>{
await browser.url ("http://rmgtestingserver/domain/Online_Food_Ordering_System/admin")
await browser.maximizeWindow()
})

Credential.forEach(({adminUsername,adminPSSWORD}) => {
it('Adminlogin',async()=>{
await AdminLogin.AdminUserName.setValue(adminUsername)
await AdminLogin.AdminPassword.setValue(adminPSSWORD)
await AdminLogin.AdminLoginSubmitButton.click()
await console.log( browser.getTitle())
expect(browser).toHaveTitleContaining("Admin Login")
})
});

Credential1.forEach(({ResturantName,MobNumb,EmailID,WebSiteURL,OpenHours,CloseHours,OpenDays,SelectCategory,ResturantAddress})=>{
it('Add Resturant',async()=>{
await AddNewResturant.ResturantTextLink.click()
await console.log( browser.getTitle())
expect(browser).toHaveTitleContaining("Add Restaurant")
await AddNewResturant.AddResturantTextLink.click()
await AddNewResturant.ResturantNameTextField.setValue(ResturantName)
await AddNewResturant.PhoneNumbTextField.setValue(MobNumb)
await AddNewResturant.EmailAddTextField.setValue(EmailID)
await AddNewResturant.WebsiteURLTextField.setValue(WebSiteURL)
})

it('DropDowns',async()=>{
await DropDownS.DropDownForOpenHours.selectByVisibleText(OpenHours)
await DropDownS.DropDownForCloseHours.selectByVisibleText(CloseHours)
await console.log( browser.getTitle())
await DropDownS.DropDownForOpenDays.selectByVisibleText(OpenDays)
await DropDownS.DropDownForSelectCategory.selectByVisibleText(SelectCategory)
await DropDownS.ResturantAddress.setValue(ResturantAddress)
const filepath="C:/Users/LENOVO/Desktop/ResturantImage.png"
const remotefilepath=await browser.uploadFile(filepath)
await $("//label[text()='Image']/ancestor::div[@class='form-group has-danger']//input[@type='file'] ").setValue(remotefilepath)
await DropDownS.SaveButton.click()
await Adminlogout.LogoutIcon.click()
await Adminlogout.LogoutButton.click()
})
})
})




 //const AdminUsername= await browser.$("//input[@placeholder='Username']")
// await AdminUsername.setValue("admin")
// const AdminPassword =await browser.$("//input[@placeholder='Password']")
 //await AdminPassword .setValue("codeastro")
 //const AdminLoginClick=await browser.$("//input[@name='submit']")
 //await AdminLoginClick.click()
//  await console.log( browser.getTitle())
//  expect(browser).toHaveTitleContaining("Admin Login")})
// it('Add Resturant',async()=>{
 //const ResturantText=await browser.$("//span[text()='Restaurant']")
 //await ResturantText.click()
//  await console.log( browser.getTitle())
//  expect(browser).toHaveTitleContaining("Add Restaurant")
 //const AddResturantText=await browser.$("//a[text()='Add Restaurant']")
 //await AddResturantText.click()
 //const ResturantNameTextField=await browser.$("//input[@name='res_name'] ")
 //await ResturantNameTextField.setValue("Indian Resturant")
 //const PhoneNumbTextField=await browser.$("//input[@name='phone'] ")
 //await PhoneNumbTextField.setValue("9535790978")
 //const EmailAddTextField=await browser.$("//label[text()='Bussiness E-mail']/ancestor::div[@class='form-group has-danger']//input[@type='text'] ")
 //await EmailAddTextField.setValue("manuvirat772@gmail.com")
// const WebsiteURLTextField=await browser.$("//label[text()='Website URL']/ancestor::div[@class='form-group has-danger']//input[@type='text'] ")
 //await WebsiteURLTextField.setValue("WWW.Resturant.com")
// })
// it('DropDowns',async()=>{
 //await browser.$("//label[text()='Open Hours']/ancestor::div[@class='form-group']//select[@class='form-control custom-select'] ").selectByVisibleText("10am")
 //await browser.$("//label[text()='Close Hours']/ancestor::div[@class='form-group']//select[@class='form-control custom-select'] ").selectByVisibleText("6pm")
 //await browser.$("//label[text()='Open Days']/ancestor::div[@class='form-group']//select[@class='form-control custom-select'] ").selectByVisibleText("Mon-Fri")
 //await browser.$("//label[text()='Select Category']/ancestor::div[@class='form-group']//select[@class='form-control custom-select'] ").selectByVisibleText("American")
 //const ResturantAddress=await browser.$("//textarea[@name='address'] ")
 //await ResturantAddress.setValue("Bangalore")
//  const filepath="C:/Users/LENOVO/Desktop/ResturantImage.png"
//  const remotefilepath=await browser.uploadFile(filepath)
//   await $("//label[text()='Image']/ancestor::div[@class='form-group has-danger']//input[@type='file'] ").setValue(remotefilepath)
 // const SaveButton=await browser.$("//input[@type='submit'] ")
 // await SaveButton.click()
  //const LogoutIcon= await browser.$("//img[@src='images/bookingSystem/user-icn.png']")
  //await  LogoutIcon.click()
  // const Logout= await browser.$("//a[@href='logout.php']")
  // await  Logout.click()
//   browser.refresh()

// })
// })


  







