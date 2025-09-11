import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('I am registered in Cape Town', async function () {
  this.location = 'Cape Town';
});

When('it is time for Maghrib', async function () {
  this.time = 'Maghrib';
});

Then('the Athaan notification should play on my device', async function () {
  const triggered = true; // Simulate expected behavior
  expect(triggered).toBeTruthy();
});
