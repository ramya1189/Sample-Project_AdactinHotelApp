import { expect, test, Page } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { SearchPage } from '../Pages/SearchPage';
import { SelectPage } from '../Pages/SelectPage'


test.describe("Search Page Tests", () => {

    let search: SearchPage;
    let select: SelectPage;


    test.beforeEach(async ({ page }) => {

        let login = new LoginPage(page);
        search = new SearchPage(page);
        select = new SelectPage(page);

        await login.gotoLoginPage();
        await login.login('Ramya2507', '123456');

    }); 


    test("Validate with valid details", async ({ page }) => {

        const location = 'Sydney';
        const hotels = 'Hotel Creek';
        const RoomType = 'Standard';
        const RoomNos = '1 - One';
        const Checkin = '17/07/2026';
        const Checkout = '20/07/2026';
        const Adultsno = '1 - One';
        const childrenno = '1 - One';

        // console.log('Room nos:', await search.NoOfRooms_dropdown.locator('option').allTextContents());
        // console.log('Adults', await search.AdultsPerRoom_dropdown.locator('option').allTextContents());
        // console.log('Chlildren/room:' ,await search.ChildPerRoom_dropdown.locator('option').allTextContents());
        // console.log('Room Type:' ,await search.RoomType_dropdown.locator('option').allTextContents());
        // console.log('Hotels:' ,await search.Hotels_dropdown.locator('option').allTextContents());
        // console.log('Location:', await search.location_dropdown.locator('option').allTextContents());

        await search.SearchHotel(
            location,
            hotels,
            RoomType,
            RoomNos,
            Checkin,
            Checkout,
            Adultsno,
            childrenno);

        await search.SearchButtonClick();
        await expect(page).toHaveTitle(/Select Hotel/);
        const locationCells = await select.Location.all()
        for (const cell of locationCells) {
            const value = await cell.inputValue();
            expect(value).toEqual(location);
        }
        
        

    }); //closes first scenario


    test("Invalid date error message - past check in date", async ({ page }) => {

        const location = 'Sydney';
        const hotels = 'Hotel Creek';
        const RoomType = 'Standard';
        const RoomNos = '1 - One';
        const Checkin = '17/02/2025';
        const Checkout = '20/02/2025';
        const Adultsno = '1 - One';
        const childrenno = '1 - One';

      
        await search.SearchHotel(
            location,
            hotels,
            RoomType,
            RoomNos,
            Checkin,
            Checkout,
            Adultsno,
            childrenno);

        await search.SearchButtonClick();
        //await page.pause();
        await page.waitForLoadState('domcontentloaded');
        await expect(page.locator('#checkin_span')).toContainText("Check-In Date should be either Today or Later Date")
      //await expect(page).toHaveTitle(/Select Hotel/);
        
});

test("Invalid date error message - past check out date", async ({ page }) => {

        const location = 'Sydney';
        const hotels = 'Hotel Creek';
        const RoomType = 'Standard';
        const RoomNos = '1 - One';
        const Checkin = '17/09/2026';
        const Checkout = '20/02/2025';
        const Adultsno = '1 - One';
        const childrenno = '1 - One';

      
        await search.SearchHotel(
            location,
            hotels,
            RoomType,
            RoomNos,
            Checkin,
            Checkout,
            Adultsno,
            childrenno);

        await search.SearchButtonClick();
        //await page.pause();
        await page.waitForLoadState('domcontentloaded');
        await expect(page.locator('#checkin_span')).toContainText("Check-In Date shall be before than Check-Out Date");
        await expect(page.locator('#checkout_span')).toContainText("Check-Out Date shall be after than Check-In Date");
      //await expect(page).toHaveTitle(/Select Hotel/);
        
});
test("Only mandatory fields input", async ({ page }) => {

        const location = 'Sydney';
        

      
        await search.SearchHotel(
            location
            );

        await search.SearchButtonClick();
        await expect(page).toHaveTitle(/Select Hotel/);
        const locationCells = await select.Location.all()
        for (const cell of locationCells) {
            const value = await cell.inputValue();
            expect(value).toEqual(location);
        }
        
        
});
});
        
        




