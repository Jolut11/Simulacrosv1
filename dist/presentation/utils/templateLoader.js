export async function loadTemplate(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`No se pudo cargar la plantilla: ${path}`);
    }
    return await response.text();
}
//# sourceMappingURL=templateLoader.js.map