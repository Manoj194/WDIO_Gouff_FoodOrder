class UserLoginPage{
    get LoginButton(){
        return $("//a[text()='Login']")
    }
    get UserName(){
        return $("//input[@placeholder='Username']")
    }
    get Password(){
        return $("//input[@placeholder='Password']")
    }
    get LoginSubmitButton(){
        return $("//input[@name='submit']")
    }
    // get UserLogoutButton(){
    //     return $("//a[text()='Logout']")
    // }
}
module.exports=new UserLoginPage()
