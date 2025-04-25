# SubSniper - Subdomain Takeover Checker chrome extesion

**SubSniper** is a Chrome extension designed to automatically check subdomains for potential takeover vulnerabilities. It uses body fingerprinting and service detection to alert you when a subdomain is vulnerable to takeover

This tool helps security professionals and researchers easily identify and address security risks related to subdomain takeovers.

---

## Video POC
   https://github.com/user-attachments/assets/c4622584-af2c-4ec2-8648-ab01d9e6f911

---

## Features
- **Fingerprinting-Based Detection**: SubSniper checks the body of subdomain pages for specific service fingerprints, which are indicators of vulnerable services.
- **Real-Time Alerts**: If a vulnerability is detected, SubSniper will show a red alert with the details and highlight the issue.

---

## Installation

### 1. Download the Extension
Clone this repository or download the files directly to your local machine.

### 2. Load the Extension in Chrome
1. Open Chrome and go to `chrome://extensions/`.
2. Enable **Developer Mode** (toggle at the top right).
3. Click **Load unpacked**.
4. Select the folder where you saved the SubSniper files.

The extension will now be active and will start running automatically on every page you visit.

---

## Usage

Once installed, SubSniper will automatically analyze every page you visit. If a subdomain vulnerability is detected, an alert will be shown in the extension UI with details of the detected issue.

You can also configure which domains you want to be alerted about and customize the settings to fit your needs.

---

## How It Works

SubSniper uses the [Can I Take Over XYZ Fingerprints](https://raw.githubusercontent.com/EdOverflow/can-i-take-over-xyz/master/fingerprints.json) to check subdomain pages for specific service fingerprints that indicate a potential for subdomain takeover. 

If a vulnerable service is detected based on the body content, the extension will show an alert. 

---

## Technologies Used
- **Chrome Extensions API**: For developing the extension.
- **JavaScript (ES6)**: For background scripts and content scripting.
- **Fetch API**: To retrieve and check domain details and fingerprints.
- **JSON**: To store and parse the fingerprint data for vulnerability checking.

---

## Contributing

We welcome contributions to SubSniper! If you would like to contribute, please fork this repository, make your changes, and submit a pull request.

### Steps for contributing:
1. Fork the repository.
2. Create a branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Submit a pull request.

---

## Contact

For any questions, feel free to reach out at:
- **Twitter**: [@sratarun]

---

## Acknowledgements

- **EdOverflow** for creating the [Can I Take Over XYZ](https://github.com/EdOverflow/can-i-take-over-xyz) fingerprints database.
- **Google** for providing the Chrome Extensions API.
