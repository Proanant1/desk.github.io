const agent = document.getElementById('agent');
const buildings = document.querySelectorAll('.building');
const terminal = document.getElementById('terminal');

let pos = { x: 60, y: 120 };

// ================= YOUR CYBERSECURITY DATA =================

const ZONES = {
  command: `
  <h2>CYBER COMMAND CENTER</h2>
  <p><strong>Anant Pandey</strong> – Aspiring Cybersecurity Professional</p>
  <p>
  I transitioned from Mechatronics Engineering into Cybersecurity, driven by deep interest
  in digital defense, network security, ethical hacking, and blockchain security.
  </p>
  <p>
  My focus is to pursue a Master's in Cybersecurity and contribute to secure digital systems.
  </p>
  `,

  threats: `
  <h2>THREAT ANALYSIS LAB</h2>
  <h3>InfiniteTraceX – Advanced Phishing URL Detector</h3>
  <a href="https://infinitetracex.netlify.app/" target="_blank">Live Demo</a>
  <ul>
    <li>Detects phishing and malicious URLs.</li>
    <li>Demonstrates threat detection understanding.</li>
  </ul>
  <h3>Blockchain Node Infrastructure</h3>
  <ul>
    <li>Operated nodes for Aztec, Nillion, Boundless, Pipe, Gensyn.</li>
    <li>Secure deployments on AWS, GCP & Hetzner VPS.</li>
  </ul>
  `,

  skills: `
  <h2>SKILLS FIREWALL</h2>
  <ul>
    <li>Cybersecurity Fundamentals</li>
    <li>Phishing Detection</li>
    <li>Network Security Basics</li>
    <li>Linux Security</li>
    <li>Blockchain Infrastructure Security</li>
    <li>Docker & Cloud Security Awareness</li>
  </ul>
  `,

  certs: `
  <h2>CERTIFICATION VAULT</h2>
  <ul>
    <li>Multicon W 2025 – TCET</li>
    <li>Wi-Fi Hacking & Cybersecurity Basics</li>
  </ul>
  <a href="https://drive.google.com/drive/folders/1hfliYwD9h-J8NXAxCcJA9Jt-Vu6Y8BM3" target="_blank">
  View All Certificates</a>
  `,

  experience: `
  <h2>EXPERIENCE SERVER ROOM</h2>
  <p><strong>Blockchain Node Operator – Independent</strong> (2019 – Present)</p>
  <ul>
    <li>Maintained validator nodes for decentralized networks.</li>
    <li>Secure cloud deployment and server hardening.</li>
    <li>Participated in incentivized testnets.</li>
  </ul>
  `,

  resume: `
  <h2>RESUME TERMINAL</h2>
  <a href="https://drive.google.com/file/d/1nIzg5jFt1ri5Nsv--qqui41NUwnGuyHQ/view?usp=drive_link" target="_blank">
  View Cybersecurity Resume</a>
  `
};

// ================== MOVEMENT + INTERACTION ==================

function updateAgent() {
  agent.style.left = pos.x + "px";
  agent.style.top = pos.y + "px";
}

document.addEventListener("keydown", e => {
  switch(e.key){
    case "w": pos.y -= 10; break;
    case "s": pos.y += 10; break;
    case "a": pos.x -= 10; break;
    case "d": pos.x += 10; break;
  }
  updateAgent();
});

// Click buildings to show your details
buildings.forEach(building => {
  building.onclick = () => {
    const zone = building.dataset.zone;
    terminal.innerHTML = ZONES[zone];
  };
});

// LOGIN SCREEN
document.getElementById('loginBtn').onclick = () => {
  document.getElementById('loginOverlay').style.display = "none";
};

updateAgent();
