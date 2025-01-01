import { defineComponent, ref } from "vue";
import { pwaInfo } from "virtual:pwa-info";
import { pwaAssetsHead } from "virtual:pwa-assets/head";
import { useHead } from "#imports";
export default defineComponent({
  setup() {
    const meta = ref({ link: [] });
    useHead(meta);
    if (pwaAssetsHead.themeColor)
      meta.value.meta = [{ name: "theme-color", content: pwaAssetsHead.themeColor.content }];
    if (pwaAssetsHead.links.length)
      meta.value.link.push(...pwaAssetsHead.links);
    if (pwaInfo) {
      const { webManifest } = pwaInfo;
      if (webManifest) {
        const { href, useCredentials } = webManifest;
        if (useCredentials) {
          meta.value.link.push({
            rel: "manifest",
            href,
            crossorigin: "use-credentials"
          });
        } else {
          meta.value.link.push({
            rel: "manifest",
            href
          });
        }
      }
    }
    return () => null;
  }
});
