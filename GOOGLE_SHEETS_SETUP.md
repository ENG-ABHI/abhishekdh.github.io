# Google Sheets contact form setup

The portfolio sends contact submissions directly to a Google Apps Script Web App. No Google credential, service-account file, or secret is placed in the website.

## 1. Create the sheet

1. Create a new Google Sheet, for example **Portfolio Contact Messages**.
2. Rename its first tab to `Messages` (or change `SHEET_NAME` in the script below).
3. In row 1, add these columns in this exact order:

   `Timestamp | Name | Email | Subject | Message`

## 2. Add the Apps Script

1. In the Sheet, select **Extensions → Apps Script**.
2. Replace the editor contents with the code below.
3. Click **Save**.

```javascript
const SHEET_NAME = 'Messages';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error(`Sheet tab "${SHEET_NAME}" was not found.`);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || '',
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, message: 'Portfolio contact endpoint is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon and choose **Web app**.
3. Set **Execute as** to **Me**.
4. Set **Who has access** to the most appropriate public option for your account—usually **Anyone**. The portfolio is public, so its form needs a public endpoint.
5. Click **Deploy**, complete Google’s authorization steps, and copy the **Web app URL**. It ends in `/exec`.

## 4. Connect it to the portfolio

1. Copy `.env.example` to a new file named `.env` in the project root.
2. Paste the deployment URL as the value of `VITE_GOOGLE_APPS_SCRIPT_URL`:

   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```

3. Restart `npm run dev` if it is running.
4. For GitHub Pages, add the same value as a repository **Actions secret** named `VITE_GOOGLE_APPS_SCRIPT_URL` under **Settings → Secrets and variables → Actions**. The included deployment workflow already reads this secret at build time.

5. Push again to deploy the updated site.

## Notes

- The endpoint URL is public by design; it is not a secret. Keep any Google account credentials out of the repository.
- The form disables duplicate clicks while a message is sending, validates required fields, and clears only after a successful response.
- If you update the Apps Script, use **Deploy → Manage deployments → Edit** to create a new version under the same Web App URL.
