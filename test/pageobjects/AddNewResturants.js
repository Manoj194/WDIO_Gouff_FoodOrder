class AddNewResturantss{
    get ResturantTextLink(){
        return $("//span[text()='Restaurant']")
    }
    get AddResturantTextLink(){
        return $("//a[text()='Add Restaurant']")
    }
    get ResturantNameTextField(){
        return $("//input[@name='res_name']")
    }
    get  PhoneNumbTextField(){
        return $("//input[@name='phone'] ")
    }
    get EmailAddTextField(){
        return $("//label[text()='Bussiness E-mail']/ancestor::div[@class='form-group has-danger']//input[@type='text'] ")
    }
    get  WebsiteURLTextField(){
        return $("//label[text()='Website URL']/ancestor::div[@class='form-group has-danger']//input[@type='text'] ")
    }

}
module.exports=new AddNewResturantss()
