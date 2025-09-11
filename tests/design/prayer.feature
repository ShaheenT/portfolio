Feature: Athaan Notification
  Scenario: Maghrib notification plays
    Given I am registered in Cape Town
    When it is time for Maghrib
    Then the Athaan notification should play on my device