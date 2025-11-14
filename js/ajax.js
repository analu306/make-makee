const url = "https://jsonplaceholder.typicode.com/todos/1";
const output = document.getElementById("output");
const status = document.getElementById("status");
function setLoading(on) {
    status.innerHTML = on
    ? 'Carregano <span class= "spinner" aria-hidden="true"></span>'
    : "";
}
// --- exemplo com fetch (promises / async) ---
document
.getElementById("btn-fetch")
.addEventListener("click", async () => {
    output.textContent = "";
    setLoading(true);
    try{
        // fetch retorna uma Promise que resolve para Responder
        const res = await fetch(url, { method: "GET"});
        if (!res.ok) throw new Error("Status HTTP: " + res.status);
        const data = await res.json.son(); // parse JSON automaticamente
        output.texteConcent = JSON.stringify(data, null, 2);
    } catch (err) {
        output.textContent = "Erro: " + err.message;
        output.classList.add("error");
    } finally {
        setLoading(false);
    }
});