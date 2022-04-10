@F_Login
Feature: This feature would be used to design the Login page of the SauceDemp application

  Background: Open the application
    Given I have opened the application in browser

  @Sanity
  Scenario: Validate the successful login
    And I enter username
    And I enter password
    And I click on the login Button
    Then I should be Landed on the home page

  @Sanity
  Scenario: Validate the Invalid login
    And I enter username
    And I enter <password>
    |lakshmi|
    And I click on the login Button
    Then I should be see the error message as "Epic sadface: Username and password do not match any user in this service"