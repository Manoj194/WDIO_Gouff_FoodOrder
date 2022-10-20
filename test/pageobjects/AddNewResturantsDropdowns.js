class DropDowns{
    get DropDownForOpenHours(){
        return $("//label[text()='Open Hours']/ancestor::div[@class='form-group']//select[@class='form-control custom-select']")
    }
    get DropDownForCloseHours(){
        return $("//label[text()='Close Hours']/ancestor::div[@class='form-group']//select[@class='form-control custom-select']")
    }
    get DropDownForOpenDays(){
        return $("//label[text()='Open Days']/ancestor::div[@class='form-group']//select[@class='form-control custom-select']")
    }
    get DropDownForSelectCategory(){
        return $("//label[text()='Select Category']/ancestor::div[@class='form-group']//select[@class='form-control custom-select']")
    }
    get ResturantAddress(){
        return $("//textarea[@name='address']")
    }
    get SaveButton(){
        return $("//input[@type='submit']")
    }
}
module.exports=new DropDowns()
