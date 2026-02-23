export function getBlockComponent(
  modelTypeAlias: string | null | undefined,
  hydrateNever: boolean = false,
): Component | null {
  const component = defineAsyncComponent({
    loader: () => import(`~/components/blocks/${modelTypeAlias}.vue`).catch(() => {
      console.error(`failed importing component ${modelTypeAlias}`);
      return undefined;
    }),
    // https://github.com/nuxt/nuxt/blob/2a9122195823403381294ff49019e53fb4d47662/packages/nuxt/src/components/runtime/lazy-hydrated-component.ts#L105-L114
    hydrate: hydrateNever ? () => { } : undefined,
  });

  return component;
}
