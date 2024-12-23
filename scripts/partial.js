async function loadHTMLComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            document.getElementById(id).innerHTML = await response.text();
        } else {
            console.error(`Failed to load ${file}: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

export async function loadComponents() {
    await loadHTMLComponent('header', '../partial/header.html');
    await loadHTMLComponent('footer', '../partial/footer.html');
}