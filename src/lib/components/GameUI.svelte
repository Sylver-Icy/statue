<script lang="ts">
  export let state;
  export let updateState;

  function randomize() {
    updateState((s) => {
      for (let y = 0; y < s.height; y++) {
        for (let x = 0; x < s.width; x++) {
          s.board[y][x] = Math.random() > 0.5 ? 1 : 0;
        }
      }
      return s;
    });
  }

  function clear() {
    updateState((s) => {
      for (let y = 0; y < s.height; y++) {
        for (let x = 0; x < s.width; x++) {
          s.board[y][x] = 0;
        }
      }
      return s;
    });
  }
</script>

<button on:click={randomize}>Randomize</button>
<button on:click={clear}>Clear</button>

<p>
  Alive Cells:
  {state.board.flat().filter(v => v === 1).length}
</p>