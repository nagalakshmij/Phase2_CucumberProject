Feature: This feature would be used to design the product details of the SauceDemo application

  Background: Open the application
    Given I have opened the application in browser

  @Sanity
  Scenario: Validate the successful login
    And I enter username
    And I enter password
    And I click on the login Button
    Then I should be Landed on the home page
    And Product price should match the below table
                          
      | Sauce Labs Backpack               | $29.99 |
      | Sauce Labs Bike Light             | $9.99  |
      | Sauce Labs Bolt T-Shirt           | $15.99 |
      | Sauce Labs Fleece Jacket          | $49.99 |
      | Sauce Labs Onesie                 | $7.99  |
      | Test.allTheThings() T-Shirt (Red) | $15.99 |
