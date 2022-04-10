$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/SauceDemo.feature");
formatter.feature({
  "name": "This feature would be used to design the Login page of the SauceDemp application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@F_Login"
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SauceDemoSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username",
  "keyword": "And "
});
formatter.match({
  "location": "SauceDemoSteps.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "SauceDemoSteps.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "SauceDemoSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be Landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "SauceDemoSteps.i_have_opened_the_application_in_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Invalid login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@F_Login"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username",
  "keyword": "And "
});
formatter.match({
  "location": "SauceDemoSteps.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \u003cpassword\u003e",
  "rows": [
    {
      "cells": [
        "lakshmi"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SauceDemoSteps.i_enter_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "SauceDemoSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be see the error message as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SauceDemoSteps.i_should_be_see_the_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});