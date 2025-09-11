import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AIQARepos() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">⚡ AI-Driven QA Automation Repos</h1>
      <p className="mb-8 text-lg">
        Showcasing AI-powered test automation across real-world projects.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Repo 1 */}
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">🪪 EiXNFCPro – AI QA</h2>
            <p className="mb-4">
              Smart NFC-enabled digital business cards with AI-powered QA.
            </p>
            <pre className="bg-gray-800 text-green-300 p-3 rounded text-sm overflow-x-auto">
{`test('NFC tap opens digital profile', async ({ page }) => {
  await page.goto('https://eixnfcpro-demo.com/nfc-scan');
  await page.click('#simulate-nfc');
  await expect(page.locator('#profile-name')).toContainText('Shaheen Toefy');
});`}
            </pre>
            <Link href="https://github.com/ShaheenT/eixnfcpro-ai-qa" target="_blank" className="text-blue-500 underline">
              View Repo →
            </Link>
          </CardContent>
        </Card>

        {/* Repo 2 */}
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">🕌 Athaan Fi Beit – AI QA</h2>
            <p className="mb-4">
              IoT Athaan triggers with Cucumber + AI-driven regression.
            </p>
            <pre className="bg-gray-800 text-green-300 p-3 rounded text-sm overflow-x-auto">
{`Scenario: Athaan notification plays at Maghrib
  Given I am a registered user in Cape Town
  When it is time for Maghrib
  Then the Athaan trigger should play on my connected device`}
            </pre>
            <Link href="https://github.com/ShaheenT/athaanfibeit-ai-qa" target="_blank" className="text-blue-500 underline">
              View Repo →
            </Link>
          </CardContent>
        </Card>

        {/* Repo 3 */}
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">🎰 EiXBets – AI QA</h2>
            <p className="mb-4">
              Betting & wallet platform with AI-driven compliance testing.
            </p>
            <pre className="bg-gray-800 text-green-300 p-3 rounded text-sm overflow-x-auto">
{`test('User wallet top-up via EFT', async ({ page }) => {
  await page.goto('https://eixbets-demo.com/login');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('button[type=submit]');
  await page.click('#wallet-topup');
  await page.fill('#amount', '500');
  await page.click('#confirm-payment');
  await expect(page.locator('#wallet-balance')).toContainText('R500');
});`}
            </pre>
            <Link href="https://github.com/ShaheenT/eixbets-ai-qa" target="_blank" className="text-blue-500 underline">
              View Repo →
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
