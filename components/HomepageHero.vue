<template>
  <section class="relative ui-grid min-h-screen">
    <div class="paint" />

    <div class="col-start-3 col-end-9 prose max-w-none self-center py-24">
      <h1 class="text-6xl text-base-content">Bienvenue sur mon site !</h1>

      <p>Je suis Mathilde, plus connue sous Dailytopas sur Instagram.</p>

      <p>
        Après plusieurs années sur Instagram, j’avais envie de partager un peu
        plus que la plateforme ne le permet.
      </p>

      <p>
        Vous me trouverez souvent en train de lire, m’occuper de plantes,
        câliner mon chat Nasty, ou en train de découvrir les moindres recoins de
        Paris.
      </p>

      <div class="not-prose flex gap-4">
        <NuxtLink class="btn btn-primary">Ma boutique</NuxtLink>
        <NuxtLink class="btn btn-secondary">Mon Blog</NuxtLink>
      </div>
    </div>

    <div
      class="col-start-11 col-end-17 grid min-h-screen grid-cols-3 gap-6 py-24"
    >
      <div v-for="i in 5" :key="i" class="card aspect-[12/16] bg-red-200"></div>
    </div>
  </section>
</template>

<style lang="css">
.paint {
  position: absolute;
  z-index: calc(20 * -1);
  top: calc(var(--spacing) * 0);
  inset-inline: calc(var(--spacing) * 0);

  width: 100%;
  height: 50vh;

  opacity: 0.5;
  background: no-repeat center center / cover;
  background-image: url("/images/geordanna-cordero-5NE6mX0WVfQ-unsplash.webp");

  mask-image: linear-gradient(white, transparent);
}
</style>
