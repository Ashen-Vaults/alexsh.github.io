---
title: About
layout: page
---

<link rel="preload" href="/assets/images/platform_icons/steam-icon.webp" as="image">
<link rel="preload" href="/assets/images/platform_icons/ps-icon.webp" as="image">
<link rel="preload" href="/assets/images/platform_icons/xbox-icon.webp" as="image">
<link rel="preload" href="/assets/images/platform_icons/switch-icon.webp" as="image">
<link rel="preload" href="/assets/images/platform_icons/ios-icon.webp" as="image">
<link rel="preload" href="/assets/images/platform_icons/android-icon.webp" as="image">
<link rel="preload" href="/assets/images/platform_icons/htc-vive-icon.webp" as="image">
<link rel="preload" href="/assets/images/platform_icons/oculus-rift-icon.webp" as="image">
<link rel="preload" href="/assets/images/platform_icons/itch-icon.webp" as="image">

<!-- <div class="profile-image-wrapper">
  <img src="{{ site.url }}/{{ site.picturecats }}" alt="Profile Image">
  <div class="tooltip">My cats, Ascii and Hex</div>
</div> -->
<br>
Hi, I’m **Alex**, a passionate software engineer at [PHL Collective](https://www.phlcollective.com/). I’ve been professionally working in the video game industry since 2016, specializing in cross-platform development, build pipeline automation, and performance optimization. I’m always eager to tackle new challenges that contribute to a project’s success.


I’ve worn many hats as a software engineer, embracing diverse aspects of game development to move a project forward. Whether it's rendering in C++ with low-level APIs like DirectX 12, NVN, Agc, or Gnm, automating build pipelines with Jenkins using Groovy and Python, or implementing core game mechanics, I thrive on solving complex technical problems.

Throughout my career, I’ve collaborated closely with artists, designers, producers, writers, audio engineers, and fellow programmers to ship {% assign professional_projects = site.posts | where: "categories", "professional" | size %}{{ professional_projects }} titles across multiple platforms. Each project presented unique challenges—some straightforward, others complex—and through teamwork and dedication, I’m proud to have played a key role in their successful launches.

As I continue to grow, I’m excited to bring my experience and passion to future projects by crafting engaging experiences, overcoming technical challenges, and collaborating with talented teams to create fun, memorable games.

###### Interested in learning more? Expand the portfolio breakdown below or check out the full [Portfolio](/projects/).

<br>
<button id="toggle-section-btn" onclick="toggleSection()">
    <span id="toggle-icon">▼</span> Portfolio Breakdown
</button>

<div id="collapsible-section" class="hidden">
  <style>
    .platform-icon-link img {
      transition: filter 0.3s;
    }
    .platform-icon-link:hover img {
      /* Disabling apparently violates xbox logo law */
      /* filter: brightness(1.5) contrast(1.1);
      transform: scale(1.1); */
    }
  </style>
  <script>
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
        "itch": "/assets/images/platform_icons/itch-icon.webp"
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
  </script>

  <h2>Professional</h2>

  <table>
    <thead>
      <tr>
        <th>Project</th>
        <th>Role</th>
        <th>Platforms</th>
      </tr>
    </thead>
    <tbody>
      {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
      {% for post in sorted_posts %}
      {% if post.projects and post.categories contains "professional" %}
      <tr>
        <td><a href="{% if post.externalLink %}{{ post.externalLink }}{% else %}{{ site.url }}{{ post.url }}{% endif %}">{{ post.title }}</a></td>
        <td>{{ post.role }}</td>
        <td>
          <div id="platform-icons-{{ forloop.index0 }}"></div>
          <script>
            document.addEventListener("DOMContentLoaded", function() {
              renderPlatformIcons("{{ post.platforms }}", {{ post.platform_links | jsonify }}, "platform-icons-{{ forloop.index0 }}");
            });
          </script>
        </td>
      </tr>
      {% endif %}
      {% endfor %}
    </tbody>
  </table>
  
  <h2>Personal</h2>

  <table>
    <thead>
      <tr>
        <th>Project</th>
        <th>Role</th>
        <th>Platforms</th>
      </tr>
    </thead>
    <tbody>
      {% for post in sorted_posts %}
      {% if post.projects and post.categories contains "personal" %}
      <tr>
        <td><a href="{% if post.externalLink %}{{ post.externalLink }}{% else %}{{ site.url }}{{ post.url }}{% endif %}">{{ post.title }}</a></td>
        <td>{{ post.role }}</td>
        <td>
          <div id="platform-icons-personal-{{ forloop.index0 }}"></div>
          <script>
            document.addEventListener("DOMContentLoaded", function() {
              renderPlatformIcons("{{ post.platforms }}", {{ post.platform_links | jsonify }}, "platform-icons-personal-{{ forloop.index0 }}");
            });
          </script>
        </td>
      </tr>
      {% endif %}
      {% endfor %}
    </tbody>
  </table>
</div>

<script>

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


</script>

## Experience
- **Lead Platform Programmer**: PHL Collective \| 2021 - Present \| Remote
- **Gameplay Programmer**: PHL Collective \| 2018 - 2021 \| Philadelphia, PA (Remote 2020-2021)
- **Gameplay Programmer**: Skyless Game Studios \| 2016 - 2018 \| Philadelphia, PA

## Skills
- **Languages**: C#, C, C++, Python, Groovy, HLSL, SQL
- **Game Engines**: Unity, Unreal, Custom Engines
- **Tools**: Visual Studio, RenderDoc, SDL2, Perforce, Plastic SCM, Git, Jenkins, Jira, ClickUp, FMOD, Discord
- **Platforms**: PS4, PS5, Xbox One, Xbox Series X, Nintendo Switch, Windows, Steamdeck, iOS, Android, Linux

## Education
- **Bachelors in Computer Science**
- **Concentrations**: Human-Computer Interaction & Game Programming
- **Drexel University** \| *2016* \| *Philadelphia, PA*

## Awards
- **Deans List** \| Drexel University \| *2015 \| 2016*
- **1st Place for Gameplay** \| *Intel University Games Showcase \| GDC \| 2016* \| **[Mirrors of Grimaldi]({{ site.baseurl }}/projs/personal/mirrors-of-grimaldi/)**