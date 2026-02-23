export default defineEventHandler((event) => {
    return {
        "language": "en",
        "modelTypeAlias": "homePage",
        "title": "HomePage Title",
        "blocks": [
            {
                "modelTypeAlias": "IntroBlock",
                "hydrateNever": true,
                "title": "TestBlock1 - hydrateNever = true",
                "intro": "this intro will not appear in the nuxt payload",
                "bloatedProperty": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            },
            {
                "modelTypeAlias": "IntroBlock",
                "hydrateNever": false,
                "title": "TestBlock2 - hydrateNever = false",
                "intro": "this intro will appear in the nuxt payload",
                "bloatedProperty": "Lorem Ipsum short",
            }
        ],
    };
})