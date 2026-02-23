export function stripSsrOnlyData(data: any): any {
  if (data === undefined) return;
  try {
    const clonedData = structuredClone(data); // deep clone
    // ssr: strip out hydrateNever block list data except for alias and hydrateNever flag
    clonedData.blocks?.forEach((cb: any) => {
      if (cb.hydrateNever) {
        for (const key in cb) {
          if (key !== 'modelTypeAlias' && key !== 'hydrateNever') {
            delete cb[key];
          }
        }
      }
    });

    return clonedData;
  }
  catch (error) {
    console.error(error);
    throw error;
  }
}
