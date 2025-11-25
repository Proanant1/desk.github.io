document.addEventListener('DOMContentLoaded', () => {
    // --- PORTFOLIO DATA (The Core Content) ---
    // Note: Links are now stored separately within the object for easier formatting.
    const PORTFOLIO_DATA = {
        'about': {
            title: 'CYBER COMMAND CENTER // ABOUT ME',
            content: `
> STATUS: ONLINE
> AGENT: ANANT PANDEY
> TITLE: Aspiring Cybersecurity Professional | Blockchain Infrastructure Specialist
> LOCATION: Mumbai, Maharashtra

// MISSION OBJECTIVE: CAREER TRANSITION
I transitioned from Mechatronics Engineering into Cybersecurity, driven by a deep interest in digital defense, network security, ethical hacking, and blockchain security. My engineering background provides a strong foundation in systems thinking, crucial for robust security architecture.

// CONTACT PROTOCOLS
> EMAIL: anantpandey620@gmail.com
> GITHUB: https://github.com/Proanant1

> END OF FILE.
`,
            links: {
                'GitHub Profile': 'https://github.com/Proanant1',
                'Email (anantpandey620@gmail.com)': 'mailto:anantpandey620@gmail.com'
            }
        },
        'projects': {
            title: 'THREAT ANALYSIS LAB // ACTIVE PROJECTS',
            content: `
// PROJECT 001: InfiniteTraceX
> CLASSIFICATION: Advanced Phishing URL Detector
> DESCRIPTION: A tool developed to identify and flag malicious phishing URLs using pattern analysis and machine learning concepts.

// PROJECT 002: Blockchain Node Infrastructure
> CLASSIFICATION: Infrastructure Security & Deployment
> DESCRIPTION: Setup, management, and hardening of secure blockchain validator nodes. Focus on low-latency, high-availability, and DDoS mitigation practices.

// PROJECT 003: Security-focused Node Operations
> CLASSIFICATION: Operational Security
> DESCRIPTION: Implementing rigorous firewall rules, access control, secure key management (HSMs/encrypted storage), and continuous monitoring to ensure node integrity and prevent unauthorized access.
`,
            links: {
                'InfiniteTraceX Demo': 'https://infinitetracex.netlify.app/'
            }
        },
        'skills': {
            title: 'SKILLS FIREWALL // DEFENSE PROTOCOLS',
            content: `
// L-1 DEFENSE PROTOCOLS (FUNDAMENTALS)
> Cybersecurity Fundamentals (NIST, CIA Triad)
> Phishing Detection & Analysis
> Network Security Basics (OSI, Subnetting, basic FW config)

// L-2 DEFENSE MODULES (ADVANCED)
> Linux Security (Hardening, Auditing, Shell scripting)
> Blockchain Infrastructure Security (Key management, attack vectors)
> Docker & Cloud Security Awareness (Basic container hardening, IAM concepts)
> END OF FILE.
`,
            links: {}
        },
        'certs': {
            title: 'CERTIFICATION VAULT // ACHIEVEMENTS',
            content: `
// CERTIFICATE NODE 001
> Multicon W 2025 – TCET

// CERTIFICATE NODE 002
> Wi-Fi Hacking & Cybersecurity Basics

// VIEW FULL ARCHIVE:
> ACCESSING DRIVE LINK...
`,
            links: {
                'Certificate Drive Folder': 'https://drive.google.com/drive/folders/1hfliYwD9h-J8NXAxCcJA9Jt-Vu6Y8BM3'
            }
        },
        'experience': {
            title: 'EXPERIENCE SERVER ROOM // DEPLOYMENT LOGS',
            content: `
// LOG 001: Blockchain Node Operator
> ROLE: Operational management of high-value validator nodes across multiple chains.
> FOCUS: Uptime, security patching, and minimizing attack surface.

// LOG 002: Validator Node Management
> TASKS: Implementation of robust monitoring systems (Prometheus/Grafana) and automated alert responses for security anomalies.

// LOG 003: Secure Deployment Practices (Cloud/VPS)
> METHODOLOGIES: Using secure shell access (SSH keys only), principle of least privilege (PoLP), and infrastructure as code (IaC) for consistent, secure deployments.
> END OF FILE.
`,
            links: {}
        },
        'education': {
            title: 'EDUCATION DATABASE // ACADEMIC PROFILE',
            content: `
// MAIN DATA STREAM
> DEGREE: Bachelor’s in Mechanical & Mechatronics Engineering
> INSTITUTION: [Your Institution Name]
> RELEVANCE: Provides strong analytical and systems-thinking skills, directly transferable to identifying vulnerabilities and designing robust security architectures.

// CAREER LOG
> Transition to Cybersecurity: Driven by self-study, practical projects, and a focus on securing digital and decentralized systems.
> END OF FILE.
`,
            links: {}
        },
        'resume': {
            title: 'RESUME TERMINAL // DOWNLOAD INITIATED',
            content: `
// INITIATING SECURE TRANSFER...
// FILE: ANANT_PANDEY_CYBERSEC_RESUME.PDF
> Please click the link below to view the official Cybersecurity Resume.
`,
            links: {
                'View Cybersecurity Resume': 'https://drive.google.com/file/d/1nIzg5jFt1ri5Nsv--qqui41NUwnGuyHQ/view?usp=drive_link'
            }
        }
    };


    // --- GLOBAL ELEMENTS & INITIALIZATION ---
    const loginScreen = document.getElementById('login-screen');
    const cityMapScreen = document.getElementById('city-map-screen');
    const loginTextElement = document.getElementById('login-text');
    const enterButton = document.getElementById('enter-button');
    const buildings = document.querySelectorAll('.building');
    const terminalModal = document.getElementById('terminal-modal');
    const terminalOutput = document.getElementById('terminal-output');
    const nodeName = document.getElementById('node-name');
    const audioToggle = document.getElementById('audio-toggle');
    const audio = new Audio('cyber-click.mp3'); 

    let audioEnabled = true;

    /**
     * Helper function to format terminal output, adding clickable links.
     * @param {string} content The main text content.
     * @param {object} links An object of {displayText: url} pairs.
     * @returns {string} HTML string with styled, clickable links.
     */
    function formatTerminalOutput(content, links) {
        let outputHTML = content.replace(/\n/g, '<br>'); // Preserve line breaks

        if (Object.keys(links).length > 0) {
            outputHTML += '<br><br>// ACCESS LINKS:<br>';
            for (const [text, url] of Object.entries(links)) {
                // Use a special neon link class
                outputHTML += `> <a href="${url}" target="_blank" class="terminal-link">${text}</a><br>`;
            }
        }
        return outputHTML;
    }

    // --- 1. LOGIN SIMULATION (Typing Effect) ---
    const loginSequence = [
        "INITIALIZING SECURE PROTOCOLS...",
        "DECRYPTING DATA STREAM...",
        "AUTHENTICATING USER: ANANT PANDEY...",
        "TARGET: PROANANT1 (ID_BLOCKCHAIN_INFRA)...",
        "ACCESS GRANTED.",
        "AWAITING COMMAND..."
    ];

    let sequenceIndex = 0;
    function typeLoginText() {
        if (sequenceIndex < loginSequence.length) {
            const line = loginSequence[sequenceIndex] + '\n';
            let charIndex = 0;
            const typingInterval = setInterval(() => {
                if (charIndex < line.length) {
                    loginTextElement.textContent += line[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                    sequenceIndex++;
                    typeLoginText();
                }
            }, 50);
        }
    }
    typeLoginText();


    // --- 2. TRANSITION TO CITY MAP ---
    enterButton.addEventListener('click', () => {
        loginScreen.classList.remove('active');
        cityMapScreen.classList.add('active');
        if (audioEnabled) audio.play();
    });


    // --- 3. BUILDING INTERACTION (Open Terminal) ---
    buildings.forEach(building => {
        building.addEventListener('click', () => {
            const section = building.getAttribute('data-section');
            openTerminal(section);
            if (audioEnabled) audio.play();
        });
    });

    function openTerminal(sectionKey) {
        const data = PORTFOLIO_DATA[sectionKey];

        // Format the content using the new helper function
        const formattedOutput = formatTerminalOutput(data.content, data.links);

        nodeName.textContent = data.title;
        terminalOutput.innerHTML = formattedOutput; // Use innerHTML to render the <a> tags
        terminalModal.style.display = 'block';
    }

    window.closeTerminal = function() {
        terminalModal.style.display = 'none';
        if (audioEnabled) audio.play();
    };

    // --- 4. AUDIO TOGGLE ---
    audioToggle.addEventListener('click', () => {
        audioEnabled = !audioEnabled;
        audioToggle.textContent = audioEnabled ? '🔊 SOUNDS: ON' : '🔇 SOUNDS: OFF';
    });


    // --- 5. CODE RAIN EFFECT (Canvas Drawing) ---
    const c = document.getElementById('code-rain-canvas');
    const ctx = c.getContext('2d');
    
    let w = c.width = window.innerWidth;
    let h = c.height = window.innerHeight;
    const columns = Math.floor(w / 20);
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=~`<>,./?';

    function drawCodeRain() {
        // Transparent black background to create the fade/trail effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#00ff41';
        ctx.font = '15px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = characters[Math.floor(Math.random() * characters.length)];
            const x = i * 20;
            const y = drops[i] * 20;

            ctx.fillText(text, x, y);

            // Sending the drop back to the top randomly
            if (y > h && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(drawCodeRain, 33); // Animation loop (approx 30 FPS)
    window.onresize = () => { // Handle window resize
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;
    }
});
