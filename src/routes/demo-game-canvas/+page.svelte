<script lang="ts">
  import GameCanvas from "$lib/components/GameCanvas.svelte";
  import ExampleControlUI from "$lib/components/GameUI.svelte";

  const initialState = {
    width: 10,
    height: 10,
    board: Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => 0)
    )
  };
</script>

<div class="demo-root">
  <h1>GameCanvas Demo</h1>

  <GameCanvas {initialState} let:state let:updateState>
    <ExampleControlUI {state} {updateState} />
  </GameCanvas>
</div>

<style>
  .demo-root {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
</style>