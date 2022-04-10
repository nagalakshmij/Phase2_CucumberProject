package stepDefs;
import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SauceDemoSteps
{
	WebDriver driver = BaseClass.driver;
	@Given("I have opened the application in browser")
	public void i_have_opened_the_application_in_browser() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	    
		driver.get("https://www.saucedemo.com/");
		Thread.sleep(5000);
	}
	
	@When("I enter username")
	public void i_enter_username() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys("standard_user");
	}

	@When("I enter password")
	public void i_enter_password() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("secret_sauce");
	}

	@When("I click on the login Button")
	public void i_click_on_the_login_button() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement LoginBtn = driver.findElement(By.name("login-button"));
		LoginBtn.click();
		
		
	}
	
	@Then("I should be Landed on the home page")
	public void i_should_be_landed_on_the_home_page() {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Inside the home page");
	}

	@Then("I should be see the error message as {string}")
	public void i_should_be_see_the_error_message(String Errormsg) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement Errormessage= driver.findElement(By.id("login_button_container"));
		String actualmessage= Errormessage.getText();
		Assert.assertEquals(actualmessage, Errormsg);
	}
	
	@Given("I enter <password>")
	public void i_enter_password(io.cucumber.datatable.DataTable dataTable) {
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(dataTable.cell(0, 0));
	}

	@Then("I should check the product details")
	public void i_should_check_the_product_details() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}


}
