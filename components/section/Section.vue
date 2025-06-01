<script setup lang="ts">
import type { Breakpoint } from "@/types/Ui";

const props = withDefaults(
  defineProps<{
    padding?: string;
    gap?: string;
    maxWidth?: Breakpoint;
    breakpoint?: Breakpoint;
    reversedOnBreaking?: boolean;
  }>(),
  {
    padding: "1.5rem",
    gap: "2rem",
    maxWidth: "xl",
    breakpoint: "md",
    reversedOnBreaking: true,
  },
);

const widthMap: Record<Breakpoint, string> = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
};

const computedMaxWidth = computed(() => widthMap[props.maxWidth] ?? "100%");
</script>

<template>
  <section
    :class="[
      'section',
      `breakpoint-${breakpoint}`,
      { 'reversed-on-breaking': reversedOnBreaking },
    ]"
  >
    <slot />
  </section>
</template>

<style lang="css">
.section {
  --container: 100%;
  --padding: v-bind(padding);
  --gap: v-bind(gap);
  --max-width: v-bind(computedMaxWidth);

  --side-width: minmax(
    0,
    calc(
      (
          min(var(--max-width), var(--container)) - var(--padding) * 2 -
            var(--gap)
        ) /
        2
    )
  );

  display: grid;
  grid-template-columns:
    var(--padding)
    1fr
    var(--side-width)
    var(--gap)
    var(--side-width)
    1fr
    var(--padding);
  gap: var(--gap) 0;

  @media (width >= 40rem) {
    --container: 40rem;
  }

  @media (width >= 48rem) {
    --container: 48rem;
  }

  @media (width >= 64rem) {
    --container: 64rem;
  }

  @media (width >= 80rem) {
    --container: 80rem;
  }
}

.section-bottom,
.section-left,
.section-right,
.section-top {
  grid-column: 3 / -3;
}

.section-bottom {
  order: 4;
}

.section-left {
  order: 2;
}

.section-right {
  order: 3;
}

.section-top {
  order: 1;
}

.reversed-on-breaking {
  .section-left {
    order: 3;
  }

  .section-right {
    order: 2;
  }
}

@media (width >= 40rem) {
  .breakpoint-sm {
    .section-left:has(+ .section-right) {
      grid-column: 3 / 4;
      order: 2;
    }

    .section-right {
      grid-column: 5 / -3;
      order: 3;
    }
  }
}

@media (width >= 48rem) {
  .breakpoint-md {
    .section-left:has(+ .section-right) {
      grid-column: 3 / 4;
      order: 2;
    }

    .section-right {
      grid-column: 5 / -3;
      order: 3;
    }
  }
}

@media (width >= 64rem) {
  .breakpoint-lg {
    .section-left:has(+ .section-right) {
      grid-column: 3 / 4;
      order: 2;
    }

    .section-right {
      grid-column: 5 / -3;
      order: 3;
    }
  }
}

@media (width >= 80rem) {
  .breakpoint-xl {
    .section-left:has(+ .section-right) {
      grid-column: 3 / 4;
      order: 2;
    }

    .section-right {
      grid-column: 5 / -3;
      order: 3;
    }
  }
}
</style>
