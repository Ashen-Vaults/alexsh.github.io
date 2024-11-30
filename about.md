---
title: About
layout: page
---
<!-- ![Profile Image]({{ site.url }}/{{ site.picture }}) -->

Hi, I’m **Alex**, a passionate software engineer at [PHL Collective](https://www.phlcollective.com/) with over six years of experience in the video game industry. I specialize in cross-platform development, build pipeline automation, and performance optimization, but I’m always eager to tackle new challenges that contribute to a project’s success.

<br>
I’ve worn many hats as a software engineer, exploring diverse aspects of game development. Whether it's rendering in C++ with low-level APIs like DirectX 12, NVN, Agc, or Gnm, automating build pipelines with Jenkins using Groovy and Python, or implementing core game mechanics, I thrive on solving complex technical problems.

<br>
Throughout my career, I’ve collaborated closely with artists, designers, producers, writers, audio engineers, and fellow programmers to ship nine titles across multiple platforms. Each project presented unique challenges—some straightforward, others complex—and through teamwork and dedication, I’m proud to have played a key role in their successful launches.

<br>
As I continue to grow, I’m excited to bring my experience and passion to future projects by crafting engaging experiences, overcoming technical challenges, and collaborating with talented teams to create fun, memorable games.

<br>
##### Interested in learning more? Expand the portfolio breakdown below or check out the full [Portfolio](/projects/).

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
        "steam": "/assets/images/platform_icons/steam-icon.png",
        "ps": "/assets/images/platform_icons/ps-icon.png",
        "xbox": "/assets/images/platform_icons/xbox-icon.png",
        "switch": "/assets/images/platform_icons/switch-icon.png",
        "pc": "/assets/images/platform_icons/pc-icon.png",
        "ios": "/assets/images/platform_icons/ios-icon.png",
        "android": "/assets/images/platform_icons/android-icon.png",
        "htc vive": "/assets/images/platform_icons/htc-vive-icon.png",
        "oculus rift": "/assets/images/platform_icons/oculus-rift-icon.png",
        "itch": "/assets/images/platform_icons/itch-icon.png"
      };
      return platformIcons[platform] || null;
    }

    function renderPlatformIcons(platformsString, platformLinks, containerId) {
      const platforms = platformsString.split(", ").map(platform => platform.trim().toLowerCase());
      const uniquePlatforms = [...new Set(platforms.map(platform => {
        if (platform === "ps4" || platform === "ps5") return "PS";
        if (platform === "xbox one" || platform === "xbox series x") return "Xbox";
        return platform.charAt(0).toUpperCase() + platform.slice(1);
      }))];
      
      const container = document.getElementById(containerId);
      container.style.display = "flex";
      container.style.justifyContent = "center";
      container.style.alignItems = "center";
      uniquePlatforms.forEach(platform => {
        const platformlink_lowercase = platform.toLowerCase();
        const iconPath = getPlatformIcon(platformlink_lowercase);
        const platformLink = platformLinks[platformlink_lowercase];
        if (iconPath && platformLink) {
          const a = document.createElement("a");
          a.href = platformLink;
          a.target = "_blank";
          a.className = "platform-icon-link";
          const img = document.createElement("img");
          img.src = iconPath;
          img.alt = platform;
          img.style.width = "30px";
          img.style.height = "30px";
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

    const animationDuration = 500;
    const viewportCenter = window.innerHeight / 2;
    const startScroll = window.scrollY;
    const startTime = performance.now();

    function animateScroll() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1);

        const sectionRect = section.getBoundingClientRect();
        const sectionCenter = sectionRect.top + sectionRect.height / 2 + window.scrollY;
        const scrollOffset = sectionCenter - viewportCenter;

        const currentScroll = startScroll + (scrollOffset - startScroll) * progress;
        window.scrollTo(0, currentScroll);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    const isVisible = section.classList.contains("visible");
    section.classList.toggle("visible", !isVisible);

    icon.textContent = isVisible ? "▼" : "▲";

    requestAnimationFrame(() => {
        animateScroll();
    });
}


</script>

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