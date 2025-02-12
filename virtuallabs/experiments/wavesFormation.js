// experiments/waves.js
import { initWavesSimulation } from "../simulations/wavesFormationSimulation.js";

export const waves = {
  id: "waves-formation",
  title: "Wave Formation",
  theory: `
    <h2>Wave Formation: The Dynamics of Ocean Waves</h2>
    <p>Ocean waves are generated primarily by wind blowing across the surface of the sea. The energy from the wind transfers to the water, forming ripples that grow into waves. The size and strength of waves depend on factors such as wind speed, duration, and the distance over which the wind blows (known as fetch).</p>
    <h3>Key Points:</h3>
    <ul>
      <li>Waves are generated by wind energy transferring to the ocean's surface.</li>
      <li>Wave height, speed, and length are influenced by wind strength and the distance it travels over water (fetch).</li>
      <li>As waves move closer to shore, they begin to interact with the ocean floor, causing them to slow down and increase in height before breaking.</li>
      <li>Understanding wave dynamics is critical for marine engineering, navigation, and coastal development.</li>
    </ul>
    <p>Studying wave formation helps us predict wave behavior and its impact on marine structures, coastal erosion, and ocean ecosystems.</p>
  `,
  procedure: `
    <h2>Experiment Procedure: Simulating Wave Formation</h2>
    <ol>
      <li>Fill a rectangular tank or container with water.</li>
      <li>Create a makeshift paddle using a flat object (like a ruler or small board).</li>
      <li>Gently push the paddle along the surface of the water to generate small waves.</li>
      <li>Increase the paddle speed to observe the effect on wave height and frequency.</li>
      <li>Place an object (like a small model boat or floating structure) in the tank to observe how waves interact with it.</li>
      <li>Record your observations about wave formation, height, and the interaction with the object.</li>
    </ol>
    <p>This simple setup helps to visualize how waves form and how their behavior changes based on different factors.</p>
  `,
  simulation: `
    <div id="waves-simulation">
      <!-- The simulation will be loaded here by the main script -->
    </div>
  `,
  assignment: `
    <h2>Wave Formation: Research and Analysis Assignment</h2>
    <ol>
      <li>Explain the process of wave formation and the factors that influence wave height and speed. Include relevant diagrams or illustrations to support your explanation.</li>
      <li>Investigate the impact of wave energy on coastal structures. Choose one type of structure (e.g., breakwaters, piers, or seawalls) and discuss how wave dynamics affect its design and durability.</li>
      <li>Design a small-scale experiment to test the impact of wave force on different materials. Include:
        <ul>
          <li>A clear hypothesis</li>
          <li>Materials needed</li>
          <li>Step-by-step procedure</li>
          <li>How you would measure and analyze the results</li>
        </ul>
      </li>
      <li>Research the role of waves in marine ecosystems. Write a short essay (400-500 words) on how waves influence the distribution of nutrients and marine life in coastal areas.</li>
    </ol>
    <p>Submit your completed assignment for review and feedback. Be prepared to discuss your findings in a group discussion.</p>
  `,

  initSimulation: initWavesSimulation,
};
