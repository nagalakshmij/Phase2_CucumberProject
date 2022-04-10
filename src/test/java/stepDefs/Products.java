package stepDefs;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;


public class Products
{
	WebDriver driver = BaseClass.driver;
	@Then("Product price should match the below table")
	public void product_price_should_match_the_below_table(io.cucumber.datatable.DataTable dataTable)
	{
		int count =dataTable.height();
		for(int i=0; i<count;i++)
		{
			String product= dataTable.cell(i, 0);
			String price= dataTable.cell(i, 1);
			String actualprice=driver.findElement(By.xpath("//div[text()='"+product+"']/following::div[@class='inventory_item_price'][1]")).getText();
			Assert.assertEquals(price, actualprice);
		}
	}
}
