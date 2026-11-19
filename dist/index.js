const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");
if (boton && titulo) {
    boton.addEventListener("click", () => {
        titulo.textContent = "¡TypeScript está funcionando!";
    });
}
export {};
//# sourceMappingURL=index.js.map