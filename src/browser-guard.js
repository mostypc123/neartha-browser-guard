// Neartha Browser Guard - Protects your browser from malicious websites

// We'll store blocked domains in a structured format
let blockedSites = [];

// Function to load and parse the CSV file
async function loadBlockedSites() {
  try {
const csvData = `domain,risk_level,reason
softonic.com,high,Distributes malware and PUPs with legitimate software
kukaj.to,high,Known for distributing spyware and tracking software
kukaj.lc,high,Known for distributing spyware and tracking software
kukaj.fi,high,Known for distributing spyware and tracking software
4shared.com,medium,File sharing site known for malware distribution
mackeeper.com,medium,Potentially unwanted program (PUP)
getawesome.com,medium,Adware that displays unwanted advertisements
searchzee.com,medium,Browser hijacker that changes default search settings
onclickads.net,medium,Delivers malicious advertisements
onclickrev.com,medium,Delivers malicious advertisements
doubleclick.net,low,Excessive tracking and privacy concerns
utorrentie.com,high,Bundled malware with downloads
download-hub.com,high,Malware distribution platform
piratebay.org,medium,Contains potentially harmful downloads
cracksite.com,high,Distributes harmful cracks and keygens
pcspeedup.com,medium,Fake system optimizer with limited functionality
mysearchdial.com,medium,Browser hijacker that modifies search settings
webssearches.com,medium,Browser hijacker altering browser settings
freepdfsuite.com,medium,Bundles malware with legitimate software
opencandy.com,medium,Adware network that installs unwanted programs
speedupmypc.com,medium,Potentially unwanted program with minimal benefits
mysearchbar.com,medium,Browser hijacker that alters browser settings
installmonetizer.com,high,PUP distribution network
akamaihd.net,low,Content delivery network occasionally used for malware
lp.ilividnewtab.com,medium,Browser hijacker that changes homepage
reimageplus.com,medium,Potentially unwanted program with aggressive marketing
github.com,low,It contains some malware.
bittorent.com,high,Often bundles adware and PUPs with downloads
adplugg.com,medium,Aggressive advertising network with tracking concerns
installiq.com,high,Software bundler that installs unwanted applications
babylon.com,medium,Browser hijacker and toolbar with privacy issues
browser-update.info,medium,Fake browser update notifications leading to malware
coolwebsearch.com,high,Notorious spyware and browser hijacker
financeads.net,medium,Deceptive advertising network
babylon-software.com,medium,Installs unwanted toolbars and changes settings
searchult.com,high,Browser hijacker with aggressive tactics
downloadadmin.com,high,Malware distribution site disguised as download manager
pcmightymax.com,medium,Fake system optimizer with minimal benefits
safefinder.com,medium,Browser hijacker that redirects web searches
nationzoom.com,medium,Browser hijacker and adware bundle
sweetpacks.com,medium,Adware bundler that installs unwanted software
delta-homes.com,medium,Browser hijacker that changes homepage settings
clkmon.com,medium,Adware network that tracks user behavior
savehandler.com,medium,Browser extension with privacy concerns
fastfreeconverter.com,medium,Bundles unwanted programs with downloads
lollipop-network.com,medium,Adware distribution network
teoma.com,low,Search engine with privacy concerns
vlc-player.org,high,Fake VLC download site distributing malware
downloadmanager.digital,high,Fake download manager distributing malware
adobe-flash.download,high,Fake Adobe Flash distributing malware
freepdfconverter.org,medium,Bundles unwanted programs with legitimate software
savingsslider.com,medium,Adware that displays coupon and deal popups
mp3downloadcenter.com,high,Distributes malware under guise of MP3 downloads
winzip-download.com,high,Fake WinZip site distributing malware
searchtabnew.com,medium,Browser hijacker changing default search
conduit.com,medium,Toolbar and search engine with privacy issues
browsersafeguard.com,medium,Fake security software with minimal protection
couponcenter.club,medium,Adware displaying unwanted coupons and offers
mypcbackup.com,medium,Cloud backup with aggressive marketing tactics
yontoo.com,medium,Adware platform that injects ads into websites
browserdefender.com,medium,Potentially unwanted security software
smartwebsearch.net,medium,Browser hijacker that modifies search settings
webkinz.com,low,Children's website with some tracking concerns
toparcadehits.com,medium,Gaming site with aggressive ad practices
vidx.to,high,Video streaming site known for malware distribution
systweak.com,medium,System optimization tools with limited benefits
moviesbay.net,high,Illegal streaming site with malware risks
freecodecs.com,medium,Legitimate codecs but bundles unwanted software
uniblue.com,medium,Registry cleaner with aggressive marketing
aswMBR.net,high,Fake security software distributing malware
gearsuite.com,medium,PC optimization tools with limited functionality
convertfilesfor.me,medium,File converter that bundles unwanted software
mycleanpc.com,medium,System optimizer with aggressive marketing
startpage123.com,medium,Browser hijacker that changes homepage
optimizerprotool.com,medium,Fake optimization software
driverupdate.net,medium,Driver updater with questionable benefits
wisecleaner.com,low,Legitimate but aggressive marketing tactics
downloadastro.com,medium,Software distribution with some bundled adware
portaldosites.com,medium,Browser hijacker targeting Portuguese users
safesurfer.com,medium,Browser extension with privacy concerns
pcerror-fix.com,medium,Fake PC repair software
elex-tech.com,medium,Mobile game developer with aggressive ad practices
registry-cleaner.net,medium,Registry cleaner with limited functionality
safesearchgo.com,medium,Browser hijacker changing search settings
browsergames2018.com,medium,Gaming site with aggressive ad practices
gamingwonderland.com,medium,Gaming site with malware distribution concerns
freefilezilla.net,high,Fake FileZilla site distributing malware
downloadfreemp3.info,high,MP3 download site distributing malware
pdfviewerhub.com,medium,Bundles adware with PDF software
torrenttools.com,high,Distributes malware via torrent software
yourfiledownloader.com,high,Fake downloader distributing malware
web-start.org,medium,Browser hijacker changing start page
freesmartphone.cc,medium,Phone optimizer with aggressive ad practices
filesharefanatic.com,high,File sharing site with malware distribution
codecpack.co,medium,Codec packs bundled with unwanted software
toolsweb.com,medium,Fake web tools distributing adware
cleanmypc.com,medium,PC cleaner with aggressive marketing
gameboosters.net,medium,Game enhancement tools with minimal benefits
mplayerdownloader.com,high,Fake media player distributing malware
securesearch.org,medium,Browser hijacker with misleading name
driver-soft.com,medium,Driver updater with questionable benefits
registryfix.com,medium,Registry cleaner with aggressive marketing
flashexploit.com,high,Site exploiting Flash vulnerabilities
bestantivirus2025.com,high,Fake antivirus site distributing malware
freemoviestreaming.cc,high,Illegal streaming with malware distribution
adblockplus.me,high,Fake AdBlock site distributing malware
easyvideosuite.com,medium,Video tools with unwanted software bundles
directvideosearch.com,medium,Video search engine with privacy concerns
w3school.com,high,Fake w3schools website that may steal user data
w3schools.in,high,Fake w3schools site that steals user data
allza.website,high,Fake alza.cz site that steals user data
w3spaces.com,medium,Hosting platform known to contain numerous malware sites`;
    
    // Parse CSV and convert to array of objects
    const lines = csvData.split('\n');
    const headers = lines[0].split(',');
    
    for (let i = 1; i < lines.length; i++) {
      const currentLine = lines[i].split(',');
      if (currentLine.length === headers.length) {
        const site = {};
        for (let j = 0; j < headers.length; j++) {
          site[headers[j]] = currentLine[j];
        }
        blockedSites.push(site);
      }
    }
  } catch (error) {
    console.error("Error loading blocked sites:", error);
    // Fallback to empty array if loading fails
    blockedSites = [];
  }
}

// Function to check if current site is blocked and get its risk level
function checkBlockedSite() {
  const currentDomain = window.location.hostname.toLowerCase();
  
  // Special case for w3spaces.com domains
  if (currentDomain.endsWith('.w3spaces.com') && 
      currentDomain !== 'xedix.w3spaces.com' && 
      currentDomain !== 'neartha.w3spaces.com') {
    return {
      domain: currentDomain,
      risk_level: 'medium',
      reason: 'We don\'t know if this is really a virus, but it feels very suspicious. This hosting is used to host a lot of malware.'
    };
  }
  
  for (const site of blockedSites) {
    const domain = site.domain.toLowerCase();
    if (currentDomain === domain || currentDomain.endsWith('.' + domain)) {
      // Skip check for specific safe w3spaces domains
      if (domain === 'w3spaces.com' && 
          (currentDomain === 'xedix.w3spaces.com' || 
           currentDomain === 'neartha.w3spaces.com')) {
        return null;
      }
      return site;
    }
  }
  
  return null;
}

// Function to create warning page for high and medium risk sites
function createBlockingWarning(site) {
  // Clear the document to prevent any scripts from running
  document.head.innerHTML = '';
  document.body.innerHTML = '';
  
  // Create new elements from scratch
  const head = document.head;
  
  // Add viewport and charset meta tags
  const metaCharset = document.createElement('meta');
  metaCharset.setAttribute('charset', 'UTF-8');
  head.appendChild(metaCharset);
  
  const metaViewport = document.createElement('meta');
  metaViewport.setAttribute('name', 'viewport');
  metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
  head.appendChild(metaViewport);
  
  // Set title
  const title = document.createElement('title');
  title.textContent = 'Neartha Browser Guard';
  head.appendChild(title);
  
  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    :root {
        --primary: #00bcd4;
        --dark: #121212;
        --darker: #0a0a0a;
        --light: #ffffff;
        --gray: #333333;
        --code-bg: #1e1e1e;
        --high-risk: #ff5f56;
        --medium-risk: #ffbd2e;
        --low-risk: #27c93f;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: var(--dark);
        color: var(--light);
        line-height: 1.6;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    
    a {
        color: var(--primary);
        text-decoration: none;
    }
    
    .container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    /* Header */
    header {
        background-color: var(--darker);
        padding: 20px 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }
    
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .logo {
        font-size: 24px;
        font-weight: 700;
        color: var(--primary);
        display: flex;
        align-items: center;
    }
    
    .logo-icon {
        margin-right: 10px;
        font-size: 28px;
    }
    
    /* Main Content */
    main {
        flex: 1;
        padding: 40px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .warning-card {
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        width: 100%;
    }
    
    .warning-header {
        padding: 20px;
        text-align: center;
        background-color: ${site.risk_level === 'high' ? 'var(--high-risk)' : site.risk_level === 'medium' ? 'var(--medium-risk)' : 'var(--primary)'};
        color: var(--dark);
    }
    
    .warning-icon {
        font-size: 48px;
        margin-bottom: 10px;
    }
    
    .warning-title {
        font-size: 1.8rem;
        margin-bottom: 5px;
    }
    
    .warning-body {
        padding: 30px;
    }
    
    .site-details {
        background-color: var(--darker);
        border-radius: 6px;
        padding: 20px;
        margin: 20px 0;
    }
    
    .site-detail {
        display: flex;
        margin-bottom: 10px;
    }
    
    .site-detail-label {
        font-weight: bold;
        min-width: 100px;
        color: var(--primary);
    }
    
    .risk-badge {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 0.9rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--dark);
    }
    
    .risk-high {
        background-color: var(--high-risk);
    }
    
    .risk-medium {
        background-color: var(--medium-risk);
    }
    
    .risk-low {
        background-color: var(--low-risk);
    }
    
    .terminal {
        background-color: var(--code-bg);
        border-radius: 6px;
        overflow: hidden;
        margin: 20px 0;
    }
    
    .terminal-header {
        background-color: var(--gray);
        padding: 10px 15px;
        display: flex;
        align-items: center;
    }
    
    .terminal-button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 8px;
    }
    
    .terminal-button.red {
        background-color: #ff5f56;
    }
    
    .terminal-button.yellow {
        background-color: #ffbd2e;
    }
    
    .terminal-button.green {
        background-color: #27c93f;
    }
    
    .terminal-title {
        color: #ddd;
        font-size: 14px;
        margin-left: 5px;
    }
    
    .terminal-body {
        padding: 15px;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        color: #ddd;
        line-height: 1.5;
    }
    
    .buttons {
        display: flex;
        gap: 15px;
        margin-top: 30px;
        justify-content: center;
    }
    
    .btn {
        display: inline-block;
        padding: 12px 25px;
        border-radius: 4px;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        cursor: pointer;
        border: none;
    }
    
    .btn-primary {
        background-color: var(--primary);
        color: var(--dark);
    }
    
    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 188, 212, 0.4);
    }
    
    .btn-danger {
        background-color: var(--high-risk);
        color: white;
    }
    
    .btn-danger:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 95, 86, 0.4);
    }
    
    /* Footer */
    footer {
        background-color: var(--darker);
        padding: 20px 0;
        text-align: center;
    }
    
    .footer-text {
        font-size: 14px;
        color: #888;
    }
    
    /* Responsive */
    @media (max-width: 768px) {
        .warning-title {
            font-size: 1.5rem;
        }
        
        .buttons {
            flex-direction: column;
        }
    }
  `;
  head.appendChild(style);
  
  // Create body content
  const body = document.body;
  
  // Create header
  const header = document.createElement('header');
  const headerContainer = document.createElement('div');
  headerContainer.className = 'container';
  
  const nav = document.createElement('nav');
  const logo = document.createElement('div');
  logo.className = 'logo';
  
  const logoIcon = document.createElement('span');
  logoIcon.className = 'logo-icon';
  logoIcon.textContent = '🛡️';
  
  logo.appendChild(logoIcon);
  logo.appendChild(document.createTextNode('Neartha Guard'));
  
  nav.appendChild(logo);
  headerContainer.appendChild(nav);
  header.appendChild(headerContainer);
  body.appendChild(header);
  
  // Create main content
  const main = document.createElement('main');
  const mainContainer = document.createElement('div');
  mainContainer.className = 'container';
  
  const warningCard = document.createElement('div');
  warningCard.className = 'warning-card';
  
  // Warning header
  const warningHeader = document.createElement('div');
  warningHeader.className = 'warning-header';
  
  const warningIcon = document.createElement('div');
  warningIcon.className = 'warning-icon';
  warningIcon.textContent = site.risk_level === 'high' ? '🛑' : '⚠️';
  
  const warningTitle = document.createElement('h1');
  warningTitle.className = 'warning-title';
  warningTitle.textContent = site.risk_level === 'high' ? 
    'Dangerous Website Blocked' : 
    'Potentially Harmful Website';
  
  warningHeader.appendChild(warningIcon);
  warningHeader.appendChild(warningTitle);
  warningCard.appendChild(warningHeader);
  
  // Warning body
  const warningBody = document.createElement('div');
  warningBody.className = 'warning-body';
  
  const p1 = document.createElement('p');
  p1.textContent = 'Neartha Browser Guard has detected that this website may contain malware, spyware, or other harmful content that could put your personal information and device at risk.';
  warningBody.appendChild(p1);
  
  // Site details
  const siteDetails = document.createElement('div');
  siteDetails.className = 'site-details';
  
  // Site URL
  const siteUrlDetail = document.createElement('div');
  siteUrlDetail.className = 'site-detail';
  
  const siteUrlLabel = document.createElement('div');
  siteUrlLabel.className = 'site-detail-label';
  siteUrlLabel.textContent = 'Site:';
  
  const siteUrlValue = document.createElement('div');
  siteUrlValue.textContent = window.location.hostname;
  
  siteUrlDetail.appendChild(siteUrlLabel);
  siteUrlDetail.appendChild(siteUrlValue);
  siteDetails.appendChild(siteUrlDetail);
  
  // Risk level
  const riskLevelDetail = document.createElement('div');
  riskLevelDetail.className = 'site-detail';
  
  const riskLevelLabel = document.createElement('div');
  riskLevelLabel.className = 'site-detail-label';
  riskLevelLabel.textContent = 'Risk Level:';
  
  const riskLevelValue = document.createElement('div');
  const riskBadge = document.createElement('span');
  riskBadge.className = `risk-badge risk-${site.risk_level}`;
  riskBadge.textContent = site.risk_level.toUpperCase();
  riskLevelValue.appendChild(riskBadge);
  
  riskLevelDetail.appendChild(riskLevelLabel);
  riskLevelDetail.appendChild(riskLevelValue);
  siteDetails.appendChild(riskLevelDetail);
  
  // Reason
  const reasonDetail = document.createElement('div');
  reasonDetail.className = 'site-detail';
  
  const reasonLabel = document.createElement('div');
  reasonLabel.className = 'site-detail-label';
  reasonLabel.textContent = 'Reason:';
  
  const reasonValue = document.createElement('div');
  reasonValue.textContent = site.reason;
  
  reasonDetail.appendChild(reasonLabel);
  reasonDetail.appendChild(reasonValue);
  siteDetails.appendChild(reasonDetail);
  
  warningBody.appendChild(siteDetails);
  
  // Terminal look for threat details
  const terminal = document.createElement('div');
  terminal.className = 'terminal';
  
  const terminalHeader = document.createElement('div');
  terminalHeader.className = 'terminal-header';
  
  const redButton = document.createElement('div');
  redButton.className = 'terminal-button red';
  
  const yellowButton = document.createElement('div');
  yellowButton.className = 'terminal-button yellow';
  
  const greenButton = document.createElement('div');
  greenButton.className = 'terminal-button green';
  
  // Action buttons
  const buttons = document.createElement('div');
  buttons.className = 'buttons';
  
  const backButton = document.createElement('button');
  backButton.className = 'btn btn-primary';
  backButton.id = 'backButton';
  backButton.textContent = 'Go Back (Recommended)';
  backButton.addEventListener('click', function() {
    window.history.back();
  });
  buttons.appendChild(backButton);
  
  // Only add "Proceed Anyway" for medium risk sites
  if (site.risk_level === 'medium') {
    const proceedButton = document.createElement('button');
    proceedButton.className = 'btn btn-danger';
    proceedButton.id = 'proceedButton';
    proceedButton.textContent = 'Proceed Anyway (Unsafe)';
    proceedButton.addEventListener('click', function() {
      // Reload the page and set a flag to bypass the warning
      localStorage.setItem('nearthaGuardBypassedWarning_' + window.location.hostname, 'true');
      window.location.reload();
    });
    buttons.appendChild(proceedButton);
  }
  
  warningBody.appendChild(buttons);
  warningCard.appendChild(warningBody);
  
  mainContainer.appendChild(warningCard);
  main.appendChild(mainContainer);
  body.appendChild(main);
  
  // Create footer
  const footer = document.createElement('footer');
  const footerContainer = document.createElement('div');
  footerContainer.className = 'container';
  
  const footerText = document.createElement('p');
  footerText.className = 'footer-text';
  footerText.textContent = 'Neartha Browser Guard © 2025';
  
  footerContainer.appendChild(footerText);
  footer.appendChild(footerContainer);
  body.appendChild(footer);
  
  // Cancel any pending requests
  if (window.stop) {
    window.stop();
  }
}

// Function to create a non-blocking notification for low risk sites
function createSafetyNotification(site) {
  // Create a modal element
  const modal = document.createElement('div');
  
  // Add styles to match Neartha theme
  modal.style.position = 'fixed';
  modal.style.bottom = '20px';
  modal.style.right = '20px';
  modal.style.width = '350px';
  modal.style.backgroundColor = '#121212';
  modal.style.borderRadius = '8px';
  modal.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  modal.style.zIndex = '999999';
  modal.style.fontSize = '14px';
  modal.style.transition = 'opacity 0.3s ease-in-out';
  modal.style.border = '1px solid rgba(255, 255, 255, 0.1)';
  modal.style.color = '#ffffff';
  modal.style.overflow = 'hidden';
  
  // Add content
  modal.innerHTML = `
    <div style="background-color: #00bcd4; padding: 10px 15px; display: flex; align-items: center;">
      <div style="font-size: 20px; margin-right: 10px;">🛡️</div>
      <div style="font-weight: bold; color: #0a0a0a;">Neartha Browser Guard</div>
      <div style="margin-left: auto; cursor: pointer; color: #0a0a0a; font-weight: bold;" id="closeNotification">✕</div>
    </div>
    <div style="padding: 15px;">
      <div style="font-weight: bold; margin-bottom: 5px;">Low Risk Website Detected</div>
      <p style="margin: 0 0 10px 0; font-size: 13px;">This website is generally safe, but ${site.reason.toLowerCase()}</p>
      <div style="background-color: #1e1e1e; border-radius: 4px; padding: 10px; font-family: monospace; font-size: 12px; margin-top: 8px;">
        <div>Domain: ${window.location.hostname}</div>
        <div style="display: flex; align-items: center; margin-top: 5px;">
          <div>Risk Level: </div>
          <div style="background-color: #27c93f; color: black; border-radius: 10px; padding: 2px 8px; margin-left: 5px; font-size: 10px; font-weight: bold;">LOW</div>
        </div>
      </div>
      <p style="margin: 10px 0 0 0; font-size: 12px; color: #888;">Download only from sources you trust.</p>
    </div>
  `;
  
  // Add to document
  document.body.appendChild(modal);
  
  // Add close functionality
  document.getElementById('closeNotification').addEventListener('click', function() {
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.remove();
    }, 300);
  });
  
  // Auto-close after 12 seconds
  setTimeout(() => {
    modal.style.opacity = '0';
    setTimeout(() => {
      if (modal.parentNode) {
        modal.remove();
      }
    }, 300);
  }, 12000);
}

// Main execution - Run as early as possible
(async function() {
  // Load the blocked sites data
  await loadBlockedSites();
  
  // Check if current site is in our list
  const siteInfo = checkBlockedSite();
  
  if (siteInfo) {
    // Check if this warning has been bypassed (only for non-high risk sites)
    const bypassKey = 'nearthaGuardBypassedWarning_' + window.location.hostname;
    const hasBeenBypassed = localStorage.getItem(bypassKey) === 'true';
    
    if (siteInfo.risk_level === 'low') {
      // For low-risk sites, just show a notification
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => createSafetyNotification(siteInfo), { once: true });
      } else {
        createSafetyNotification(siteInfo);
      }
    } else if ((siteInfo.risk_level === 'high') || (siteInfo.risk_level === 'medium' && !hasBeenBypassed)) {
      // For high-risk sites or medium-risk sites that haven't been bypassed, show blocking warning
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => createBlockingWarning(siteInfo), { once: true });
      } else {
        createBlockingWarning(siteInfo);
      }
      
      // Set up MutationObserver as an extra safeguard
      const observer = new MutationObserver(function() {
        if (document.body && document.body.innerHTML !== '' && 
            !document.querySelector('.warning-card')) {
          createBlockingWarning(siteInfo);
        }
      });
      
      observer.observe(document, { 
        childList: true, 
        subtree: true 
      });
      
      // Intercept navigation
      const originalPushState = history.pushState;
      history.pushState = function() {
        originalPushState.apply(this, arguments);
        createBlockingWarning(siteInfo);
      };
      
      // Also intercept replaceState
      const originalReplaceState = history.replaceState;
      history.replaceState = function() {
        originalReplaceState.apply(this, arguments);
        createBlockingWarning(siteInfo);
      };
    }
  }
})();