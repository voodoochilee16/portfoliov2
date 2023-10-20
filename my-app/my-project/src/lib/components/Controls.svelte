<script>
    import {
      count,
      color,
      innerRadius,
      outerRadius,
      starScale,
    } from '$lib/components/state'
  </script>
  
  <div class="container">
    <label>Count: {$count}
      <input type="range" min={0} max={15000} step="100" bind:value={$count}/>
    </label>
    <label>innerRadius: {$innerRadius}
      <input type="range" min={0} max={1000} step="25" bind:value={$innerRadius}/>
    </label>
    <label>outerRadius: {$outerRadius}
      <input type="range" min={0} max={1000} step="25" bind:value={$outerRadius}/>
    </label>
    <label>starScale: {$starScale}
      <input type="range" min={0.1} max={2} step="0.1" bind:value={$starScale}/>
    </label>
    <label>Color:
      <input type="color" bind:value={$color}/>
    </label>
  </div>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    label:has(input[type="range"]) {
      flex-direction: column;
      align-items: stretch;
    }
  </style>