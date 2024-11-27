---
title: About
layout: page
---
<!-- ![Profile Image]({{ site.url }}/{{ site.picture }}) -->

Hi, I’m **Alex**, a passionate software engineer at [PHL Collective](https://www.phlcollective.com/) with over six years of experience in the video game industry. I specialize in cross-platform development, build pipeline automation, and performance optimization, but I’m always eager to take on any task that contributes to a project’s success.

I’ve had the opportunity to wear many hats as a software engineer in video games, and I enjoy exploring different aspects of development. Whether it’s graphics rendering in C++ with low-level APIs like DirectX 12, NVN, Agc, or Gnm, automating build pipelines with Jenkins using Groovy and Python, or implementing core game mechanics, I’m always ready to take on new challenges.

Throughout my career, I’ve worked closely with artists, designers, producers, writers, audio engineers, and fellow programmers to ship nine titles across multiple platforms. Each project brought its own unique challenges—some straightforward, others complex—and through teamwork and dedication, I’m proud to have played a role in their successful launches.

As I continue to grow, I’m excited to bring my experience and passion to future projects by creating engaging experiences, solving complex technical problems, and collaborating with talented people to deliver fun games.

##### For more information on the projects I've worked on, expand the project breakdown below or visit [projects](/projects/).

<br>
<button id="toggle-section-btn" onclick="toggleSection()">
    <span id="toggle-icon">▼</span> Projects
</button>

<div id="collapsible-section" style="display: none;">
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

  <h2>Professional Projects</h2>

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
  
  <h2>Personal Projects</h2>

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
function toggleSection() {
    const section = document.getElementById("collapsible-section");
    const icon = document.getElementById("toggle-icon");
    const isHidden = section.style.display === "none";

    section.style.display = isHidden ? "block" : "none";
    icon.textContent = isHidden ? "▲" : "▼";
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