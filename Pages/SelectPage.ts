import { Page, Locator } from '@playwright/test';

export class SelectPage{
    page:Page;
    select_radiobutton: Locator;
    ContinueButton: Locator;
    CancelButton: Locator;
    HotelName: Locator;
    Location: Locator;
    Rooms: Locator;
    arrdate: Locator;
    depdate: Locator;
    nodays: Locator;
    roomtype: Locator;





    constructor(page:Page){

        this.page=page;
        this.select_radiobutton=page.locator("#radiobutton_0");
        this.ContinueButton = page.locator("#continue");
        this.CancelButton=page.locator("#cancel")
        this.HotelName=page.locator("[id^='hotel_name_']") //^= means "starts with" in CSS selectors for dynamic values
        this.Location=page.locator("[id^='location_']")
        this.Rooms=page.locator("[id^='rooms_']")
        this.arrdate=page.locator("[id^='arr_date_']")
        this.depdate=page.locator("[id^='dep_date_']")
        this.nodays=page.locator("[id^='no_days_']")
        this.roomtype=page.locator("[id^='room_type_']")
        

    }
    async ContinueButtonClick(){
        await this.ContinueButton.click();
    }

    async CancelButtonClick(){
        await this.CancelButton.click();

    }
    async SelectButtonClick(){
        await this.select_radiobutton.click();
    }


}

