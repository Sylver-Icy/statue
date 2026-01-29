<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export type GameState = {
    board: number[][];
    width: number;
    height: number;
  };

  export let initialState: GameState;

  let state: GameState = structuredClone(initialState);

  const dispatch = createEventDispatcher();

  // Central mutation gateway
  function updateState(mutator: (s: GameState) => GameState) {
    state = mutator(structuredClone(state));
    dispatch("change", state);
  }
</script>

<div class="game-canvas-root">
  <!-- GameUI -->
  <div class="game-ui">
    {#each state.board as row}
      <div class="row">
        {#each row as cell}
          <div
            class="cell"
            style="background:{cell === 1 ? '#4ade80' : '#1f2933'}"
          />
        {/each}
      </div>
    {/each}
  </div>

  <!-- ControlUI Slot -->
  <div class="control-ui">
    <slot {state} {updateState} />
  </div>
</div>

<style>
  .game-canvas-root {
    display: flex;
    gap: 2rem;
  }

  .game-ui {
    display: inline-block;
    padding: 10px;
    background: #0f172a;
  }

  .row {
    display: flex;
  }

  .cell {
    width: 25px;
    height: 25px;
    border: 1px solid #020617;
  }

  .control-ui {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px;
  background: #020617;
  border-radius: 8px;
}
</style>