export async function loadTemplate(path: string): Promise<string> {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`No se pudo cargar la plantilla: ${path}`);
    }

    return await response.text();
}