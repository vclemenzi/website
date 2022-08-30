<script lang="ts">
import Introduction from "./components/Introduction.svelte";
import Links from "./components/Links.svelte";
</script>

<main>
  <div>
    <Introduction /> <!-- Introduction Component -->
    <Links /> <!-- Links Component -->
  </div>
</main>

<style>
* {
  color: rgb(230, 216, 216);
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  text-align: center;
  margin-top: 25%;
}
</style>