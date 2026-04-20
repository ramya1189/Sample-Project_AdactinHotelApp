import { Page, Locator } from '@playwright/test';

export class SearchPage{
page: Page;
location_dropdown: Locator;
Hotels_dropdown: Locator;
RoomType_dropdown: Locator;
NoOfRooms_dropdown: Locator;
CheckIn_date: Locator;
CheckOut_date: Locator;
AdultsPerRoom_dropdown: Locator;
ChildPerRoom_dropdown: Locator;
    Search_button: Locator;
    Reset_button: Locator;


constructor (page:Page){

    this.page=page;
    this.location_dropdown = page.locator('#location');
    this.Hotels_dropdown = page.locator('#hotels');
    this.RoomType_dropdown= page.locator('#room_type');
    this.NoOfRooms_dropdown = page.locator('#room_nos');
    this.CheckIn_date=page.locator('#datepick_in');
    this.CheckOut_date=page.locator('#datepick_out');
    this.AdultsPerRoom_dropdown = page.locator('#adult_room');
    this.ChildPerRoom_dropdown = page.locator('#child_room')
    this.Search_button=page.locator('#Submit');
    this.Reset_button=page.locator('#Reset');

}

async SearchButtonClick(){

    await this.Search_button.click();
}

async ResetButtonClick(){

    await this.Reset_button.click();
}

async SearchHotel(
    location:string,
    hotels:string,
    RoomType:string,
    RoomNos:string,
    Checkin:string,
    Checkout:string,
    Adultsno:string,
    childrenno:string



){

    await this.location_dropdown.selectOption({ label:location});
    await this.Hotels_dropdown.selectOption({label:hotels});
    await this.RoomType_dropdown.selectOption({label:RoomType});
    await this.NoOfRooms_dropdown.selectOption({label:RoomNos});
    
    await this.CheckIn_date.fill(Checkin);
    await this.CheckIn_date.pressSequentially(Checkin); //types the checkin date charrater like a real user
    await this.CheckOut_date.fill(Checkout);
    await this.CheckIn_date.pressSequentially(Checkout);
    await this.AdultsPerRoom_dropdown.selectOption({label:Adultsno});
    await this.ChildPerRoom_dropdown.selectOption({label:childrenno});
}






}