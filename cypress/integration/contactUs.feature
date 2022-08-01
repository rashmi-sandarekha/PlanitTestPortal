Feature: Contact Us Feature

    Scenario Outline: [Contact Us] AC1 - Should populate error messages upon the submssion of Empty Required Fields
        When @setup I Go to Home Page
        Then I go to Contact Us Page
        When I submit Empty Required Fields
        Then Contact Us Page should contain the error message <errorMessage>
        #"Email is required"
        # Then Contact Us Page should contain the questions "Message is required"
        # Then Contact Us Page should contain the questions "Forename is required"

          Examples:
            | errorMessage           |
            | "Forename is required" |
            | "Email is required"    |    
            | "Message is required"  |   


    Scenario: [Contact Us] AC2 - Should NOT populate error messages upon the submssion of contact us only with Required Fields
        When @setup I Go to Home Page
        Then I go to Contact Us Page
        When I submit valid details on Required Fields
        Then I see the success alert of contact form submission as "we appreciate your feedback."
