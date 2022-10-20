class AdminLogin{
    get AdminUserName()
        {
    return $("//input[@placeholder='Username']")
    
}
get 
AdminPassword()
{
    return $("//input[@placeholder='Password']")
}
get AdminLoginSubmitButton()
{
    return $("//input[@name='submit']")
}
}
module.exports=new AdminLogin()
