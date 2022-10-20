class OrderStatusUpdate{
    get OrdersButton(){
        return $("//a[@href='all_orders.php']")
    }
    get  UpdateButtonIcon(){
        return $("//tr//td[text()='manojbh']/following-sibling::td//a[@class='btn btn-info btn-flat btn-addon btn-sm m-b-10 m-l-5']")
    }
    get UpdateOrderDetailsButton(){
        return $("//button[text()='Update Order Status']")
    }
    get StatusDropdown(){
        return $("//select[@name='status']")
    }
    get Textmsg(){
        return $("//textarea[@name='remark']")
    }
    get SubmitButtons(){
        return $("//td[.='Action']//ancestor::tr//following::input[@name='update']")
    }
}
module.exports=new  OrderStatusUpdate()
