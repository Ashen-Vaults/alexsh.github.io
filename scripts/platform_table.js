function getPlatformIcon(platform) {
    const platformIcons = {
      "steam": "/assets/images/platform_icons/steam-icon.webp",
      "ps": "/assets/images/platform_icons/ps-icon.webp",
      "xbox": "/assets/images/platform_icons/xbox-icon.webp",
      "switch": "/assets/images/platform_icons/switch-icon.webp",
      "ios": "/assets/images/platform_icons/ios-icon.webp",
      "android": "/assets/images/platform_icons/android-icon.webp",
      "htc vive": "/assets/images/platform_icons/htc-vive-icon.webp",
      "oculus rift": "/assets/images/platform_icons/oculus-rift-icon.webp",
      "itch": "/assets/images/platform_icons/itch-icon.webp",
    };
    return platformIcons[platform] || null;
  }

  function renderPlatformIcons(platformsString, platformLinks, containerId) {
  const platforms = platformsString.split(", ").map(p => p.trim().toLowerCase());
  const uniquePlatforms = [...new Set(platforms.map(platform => {
    if (platform === "ps4" || platform === "ps5") return "ps";
    if (platform === "xbox one" || platform === "xbox series x") return "xbox";
    return platform;
  }))];

  const container = document.getElementById(containerId);
  if (!container) return;

  uniquePlatforms.forEach(platform => {
    const iconPath = getPlatformIcon(platform);
    const platformLink = platformLinks[platform];
    if (iconPath && platformLink) {
      const a = document.createElement("a");
      a.href = platformLink;
      a.target = "_blank";
      a.className = "platform-icon-link";
      
      const img = new Image();
      img.src = iconPath;
      img.alt = platform;
      img.width = 30;
      img.height = 30;
      img.style.margin = "0 5px";

      a.appendChild(img);
      container.appendChild(a);
    }
  });
}
function toggleWithDisplay() {
  const element = document.getElementById('animatedElement');
  if (element.style.display === "none" || !element.style.display) {
    element.style.display = "block";
    requestAnimationFrame(() => {
      element.classList.add('visible');
    });
  } else {
    element.classList.remove('visible');
    element.addEventListener('transitionend', () => {
      element.style.display = "none";
    }, { once: true });
  }
}
function toggleSection() {
  const section = document.getElementById("collapsible-section");
  const icon = document.getElementById("toggle-icon");

  if (!section) return;

  const isVisible = section.classList.contains("visible");
  section.classList.toggle("visible", !isVisible);

  icon.textContent = isVisible ? "▼" : "▲";

  if (!isVisible) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}