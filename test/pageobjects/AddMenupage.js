class AddMenuDetails {
    get menuButton(){
        return $("//span[text()='Menu']")

    }
    get ADDMenuButton()
    {
        return $("//a[text()='Add Menu']")
    }
    get MenuNameTextField(){
        return $("//label[text()='Dish Name']//ancestor::div[@class='col-md-6']//input[@type='text']")
    }
    get MenuDescription(){
        return $("//label[text()='Description']//ancestor::div[@class='col-md-6']//input[@type='text']")
    }
    get AboutMenu(){
        return $("//label[text()='About']//ancestor::div[@class='form-group has-danger']//input[@type='text']")
    }
    get MenuPrice(){
        return $("//label[text()='Price ']//ancestor::div[@class='col-md-6']//input[@type='text']")
    }
    get MenuAvaliableRestName(){
    return $("//select[@data-placeholder='Choose a Category']")

}
get SubMitButton(){
    return $("//input[@type='submit']")
}
get AllMenuButton(){
    return $("//a[text()='All Menues']")
}
get UpdateButtonIcon(){
    return $("//td[text()='Indian Resturant']//ancestor::tr[@role='row']/descendant::i[@class='fa fa-edit']")
}
}
module.exports=new  AddMenuDetails ()
