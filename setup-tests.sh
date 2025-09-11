#!/bin/bash
echo "🚀 Starting AI QA Test Setup & Execution..."

# Step 1: Init Node project if missing
if [ ! -f "package.json" ]; then
  echo "📦 Initializing package.json..."
  npm init -y
fi

# Step 2: Install Playwright
echo "📥 Installing Playwright..."
npm install @playwright/test --save-dev

# Install Playwright browsers (Chromium, Firefox, WebKit)
npx playwright install

# Step 3: Ensure test folder structure exists
mkdir -p tests/design tests/reports

# Step 4: Add sample test if none exist
if [ ! -f "tests/design/login.spec.ts" ]; then
  echo "📝 Creating sample test (login.spec.ts)..."
  cat > tests/design/login.spec.ts <<'EOL'
import { test, expect } from '@playwright/test';

test('Login works', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'user1');
  await page.fill('#password', 'Password123');
  await page.click('button[type=submit]');
  await expect(page).toHaveURL(/.*dashboard/);
});
EOL
fi

# Step 5: Run tests
echo "▶️ Running Playwright tests..."
npx playwright test

# Step 6: Generate and move HTML report
echo "📊 Generating HTML report..."
npx playwright show-report --host 127.0.0.1 --port 9323 &
sleep 5

REPORT_DIR="tests/reports/$(date +%Y%m%d_%H%M%S)"
mkdir -p $REPORT_DIR
cp -r playwright-report/* $REPORT_DIR/

echo "✅ Tests complete!"
echo "Report saved in: $REPORT_DIR"
echo "Embed with: <a href=\"$REPORT_DIR/index.html\">View Report</a>"
