const projectData = {
  rf: {
    title: "RF Front-End of a Conversion Receiver",
    subtitle: "RF Systems — Politecnico di Milano",
    body: `
      <p>Evaluated a conversion-receiver RF front-end through circuit-level and system-level simulations of the LNA, mixer and local oscillator.</p>
      <h3>What I worked on</h3>
      <ul>
        <li>Used S-parameters and Smith Chart analysis at 4.25 GHz for transistor characterization and matching.</li>
        <li>Extracted LNA gain, noise figure, IP3 and 1-dB compression parameters from circuit simulations.</li>
        <li>Evaluated mixer conversion gain, noise temperature, IP3 and compression behavior.</li>
        <li>Used the extracted parameters in system-level simulations and studied EVM sensitivity to phase noise and image interference.</li>
      </ul>
      <p class="tech"><strong>Focus:</strong> RF front-end · LNA · Mixer · Smith Chart · S-parameters · EVM</p>`
  },

  "iot-forklift": {
    title: "Forklift Monitoring System",
    subtitle: "Internet of Things — Politecnico di Milano",
    body: `
      <p>Designed a smart monitoring architecture for electric forklifts operating across indoor and outdoor warehouse areas.</p>
      <h3>What I worked on</h3>
      <ul>
        <li>Combined GPS for outdoor positioning with UWB for precise indoor localization.</li>
        <li>Used IMU, wheel sensing and BLE proximity information for impact, motion, speed and distance monitoring.</li>
        <li>Selected ESP32-S3 as the processing unit and LoRa / Wi-Fi / Bluetooth for flexible connectivity.</li>
        <li>Used MQTT for event-based telemetry and periodic five-minute status updates through a gateway and broker architecture.</li>
      </ul>
      <p class="tech"><strong>Technologies:</strong> ESP32-S3 · GPS · UWB · IMU · LoRa · Wi-Fi · BLE · MQTT</p>`
  },

  "iot-nodered": {
    title: "Node-RED & MQTT Message Processing",
    subtitle: "Internet of Things — Politecnico di Milano",
    body: `
      <p>Built Node-RED flows around a local Mosquitto MQTT broker for message generation, storage, matching and controlled forwarding.</p>
      <h3>What I worked on</h3>
      <ul>
        <li>Generated timestamped random IDs every five seconds and published them through MQTT.</li>
        <li>Logged generated messages to CSV and subscribed to the same MQTT stream for downstream processing.</li>
        <li>Mapped incoming IDs to reference frames, reconstructed publish messages and processed acknowledgments.</li>
        <li>Implemented rate limiting and message-count controls required by the challenge.</li>
      </ul>
      <p class="tech"><strong>Technologies:</strong> Node-RED · MQTT · Mosquitto · JavaScript functions · CSV</p>`
  },

  "iot-parking": {
    title: "Smart Parking System with Energy Optimization",
    subtitle: "Internet of Things — Politecnico di Milano",
    body: `
      <p>Developed and simulated an energy-aware parking sensor node using ESP32, an HC-SR04 ultrasonic sensor and ESP-NOW communication.</p>
      <h3>What I worked on</h3>
      <ul>
        <li>Detected parking occupancy from ultrasonic distance measurements.</li>
        <li>Sent OCCUPIED / FREE state changes with ESP-NOW while avoiding unnecessary transmissions.</li>
        <li>Used deep sleep between sensing cycles to reduce power consumption.</li>
        <li>Analyzed sensor, transmission and sleep energy to estimate battery life and identify optimization opportunities.</li>
      </ul>
      <p class="tech"><strong>Technologies:</strong> ESP32 · HC-SR04 · ESP-NOW · Wokwi · Deep Sleep · Energy Analysis</p>`
  },

  radio: {
    title: "Mobile Radio Network Planning & Optimization",
    subtitle: "Mobile Radio Networks — Politecnico di Milano",
    body: `
      <p>Designed and optimized a wireless cellular deployment using Mixed Integer Linear Programming while balancing coverage, received power, throughput and cost.</p>
      <h3>What I worked on</h3>
      <ul>
        <li>Evaluated macro-only, micro-only and mixed macro/micro deployments.</li>
        <li>Ensured full test-point coverage and enforced a minimum throughput of 7 Mbps.</li>
        <li>Implemented the optimization model in AMPL.</li>
        <li>Found the mixed deployment to be the lowest-cost option, reducing cost by 42.66% versus the macro-only scenario.</li>
      </ul>
      <p class="tech"><strong>Focus:</strong> Cellular networks · MILP · AMPL · Coverage · Throughput · Cost optimization</p>`
  },

  microwave: {
    title: "Microwave Network Failure Analysis & Synthetic Data Generation",
    subtitle: "Network Measurement and Data Analysis Lab — Politecnico di Milano",
    body: `
      <p>Analyzed 15-minute microwave-link alarm patterns to classify IDU, ODU, cable and power failures using 164 alarm features.</p>
      <h3>What I worked on</h3>
      <ul>
        <li>Prepared a stratified train/test workflow using real network observations.</li>
        <li>Built and tuned Random Forest and XGBoost classifiers.</li>
        <li>Applied SMOTEN and CVAE synthetic-data generation to study class imbalance and cable-failure recovery.</li>
        <li>Compared 24 experiments and achieved a best Macro F1 of 0.969.</li>
      </ul>
      <p class="tech"><strong>Technologies:</strong> Python · Random Forest · XGBoost · SMOTEN · CVAE</p>`
  },

  llm: {
    title: "LLM-Based Question Answering for PoliMillionaire",
    subtitle: "Natural Language Processing — Politecnico di Milano",
    body: `
      <p>Built a local LLM question-answering pipeline for multiple-choice quiz categories using Qwen2.5-7B-Instruct.</p>
      <h3>What I worked on</h3>
      <ul>
        <li>Loaded Qwen2.5-7B-Instruct locally in Google Colab using 4-bit quantization.</li>
        <li>Formatted questions and answer options into controlled prompts and extracted A-D answer choices.</li>
        <li>Submitted model selections through the PoliMillionaire game API and recorded results across sessions.</li>
        <li>Analyzed limitations for time-sensitive news and exact mathematical reasoning, identifying RAG and calculator tooling as future improvements.</li>
      </ul>
      <p class="tech"><strong>Technologies:</strong> Python · Qwen2.5-7B-Instruct · Transformers · bitsandbytes · API integration</p>`
  }
};

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");

document.querySelectorAll("[data-project]").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.project;
    const p = projectData[key];
    if (!p) return;
    modalBody.innerHTML = `<p class="eyebrow">${p.subtitle}</p><h2>${p.title}</h2>${p.body}`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));
}
