<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<main>
  <Header />
  <div class="content">
    <slot /> <!-- page content -->
  </div>
  <Footer />
</main>

<style>
  main {
    font-family: 'RetroFont', sans-serif;
    background: var(--global-color-background);
    color: var(--global-color-font-paragraph);
    min-height: 100vh;

    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
  }
</style>
