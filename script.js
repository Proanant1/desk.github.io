const agent = document.getElementById('agent');
const terminal = document.getElementById('terminal');
const buildings = document.querySelectorAll('.building');

let pos = { x: 50, y: 50 };

const DATA = {
  command: `<h2>CYBER COMMAND CENTER</h2>
  <p>Anant Pandey - Aspiring Cybersecurity Professional</p>
  <p>Transitioned from Mechatronics to Cybersecurity with focus on digital defense.</p>`,

  threats: `<h2>THREAT ANALYSIS LAB</h2>
  <p><a href="https://infinitetracex.netlify.app/" target="_blank">InfiniteTraceX - Phishing Detector</a></p>`,

  skills: `<h2>SKILLS FIREWALL</h2><ul>
  <li>Network Security</li>
  <li>Linux Security</li>
  <li>Phishing Detection</li>
  <li>Blockchain Security</li></ul>`,

  certs: `<h2>CERTIFICATION VAULT</h2>
  <a href="https://drive.google.com/drive/folders/1hfliYwD9h-J8NXAxCcJA9Jt-Vu6Y8BM3" target="_blank">
  View Certificates</a>`,

  experience: `<h2>SERVER ROOM</h2>
  <p>Blockchain Node Operator (2019-Present)</p>`,

  resume: `<h2>RESUME TERMINAL</h2>
  <a href="https://drive.google.com/file/d/1nIzg5jFt1ri5Nsv--qqui41NUwnGuyHQ/view?usp=drive_link" target="_blank">
  View Resume</a>`
};

function updateAgent() {
  agent.style.left = pos.x + "px";
  agent.style.top = pos.y + "px";
}

document.addEventListener("keydown", e => {
  if (e.key === "w") pos.y -= 10;
  if (e.key === "s") pos.y += 10;
  if (e.key === "a") pos.x -= 10;
  if (e.key === "d") pos.x += 10;
  updateAgent();
});

buildings.forEach(b => {
  b.onclick = () => {
    terminal.innerHTML = DATA[b.dataset.zone];
  };
});

// LOGIN FIX
document.getElementById("loginBtn").onclick = () => {
  document.getElementById("loginOverlay").style.display = "none";
};

updateAgent();
