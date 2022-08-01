Feature: Shop Feature

    Scenario: [Shop] AC1 - Verify Item Unit Prices
        When @setup I Go to Home Page
        Then I go to Shop Page
        Then I click to add teddy bear
        Then I click to add flog
        Then I click to valentine bear
        Then I go to Cart Page
        Then I enter teddy bear qty as 3
        Then I enter frog qty as 2
        Then I enter valentine bear qty as 4
        Then I proceed to checkout
        Then Item "Stuffed Frog" Price should be "10.99"
        Then Item "Teddy Bear" Price should be "10.99"
        Then Item "Valentine Bear" Price should be "10.99"

    Scenario: [Shop] AC2 - Verify Purchase Sub Total and Total
        When @setup I Go to Home Page
        Then I go to Shop Page
        Then I click to add teddy bear
        Then I click to add flog
        Then I click to valentine bear
        Then I go to Cart Page
        Then I enter teddy bear qty as 3
        Then I enter frog qty as 2
        Then I enter valentine bear qty as 4
        Then I proceed to checkout
        # Then subtotal of product <productRow> qty <productQty> is

        # Examples:
        #     | productRow | productQty |
        #     | "1"        | "3"        |
        #     | "2"        | "2"        |
        Then subtotal of product "1" qty "3" is
        Then subtotal of product "2" qty "2" is
        Then subtotal of product "3" qty "4" is
        Then Item total should be

