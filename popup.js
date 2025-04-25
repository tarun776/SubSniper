fetch("https://raw.githubusercontent.com/EdOverflow/can-i-take-over-xyz/master/fingerprints.json")
  .then(res => res.json())
  .then(fingerprints => {
    // Filter out Acquia fingerprints
    fingerprints = fingerprints.filter(fp => fp.service.toLowerCase() !== "acquia");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = new URL(tabs[0].url);
      const hostname = url.hostname;

      // Ensure we don't try to fetch chrome:// URLs
      if (url.protocol === "chrome:" || url.protocol === "about:") {
        document.getElementById("result").innerText = "Cannot fetch content from chrome:// or about:// pages.";
        return;
      }

      // Body content check
      fetch(url.href)
        .then(res => res.text())
        .then(body => {
          let match = "No vulnerability detected (body).";
          let matchColor = "green";  // Default color for "No vulnerability detected"
          let possibleTakeover = [];

          for (let fp of fingerprints) {
            if (fp.fingerprint && body.includes(fp.fingerprint)) {
              match = `🚨 Possible takeover (body): ${fp.service}`;
              matchColor = "red";  // Color red for possible takeover
              possibleTakeover.push({ url: url.href, type: "Body", service: fp.service });
              break;
            }
          }

          document.getElementById("result").innerHTML = `<span style="color: ${matchColor}; font-weight: bold;">${match}</span>`;

          // Save results if takeover is possible
          if (possibleTakeover.length > 0) {
            chrome.storage.local.get(['takeoverData'], (result) => {
              let takeoverData = result.takeoverData || [];
              takeoverData.push(...possibleTakeover);
              chrome.storage.local.set({ takeoverData: takeoverData });

              // Alert the user about takeover detection
              chrome.notifications.create({
                type: 'basic',
                iconUrl: 'icon.png',
                title: 'Subdomain Takeover Detected',
                message: `Possible takeover detected for ${hostname}. Check details in the extension.`
              });

              // Highlight the result
              const resultElement = document.getElementById("result");
              resultElement.style.backgroundColor = "red"; // Highlight red color
              resultElement.style.color = "white";
              resultElement.style.fontWeight = "bold";
            });
          }
        })
        .catch(() => {
          document.getElementById("result").innerText = "Could not fetch page content.";
        });
    });
  })
  .catch((err) => {
    console.error("Error fetching fingerprints.json:", err);
    document.getElementById("result").innerText = "Failed to fetch fingerprints.";
  });
