class AdminLogouts{
    get LogoutIcon(){
        return $("//img[@src='images/bookingSystem/user-icn.png']")
    }
    get LogoutButton(){
        return $("//a[@href='logout.php']")

    }
}
module.exports=new  AdminLogouts()
