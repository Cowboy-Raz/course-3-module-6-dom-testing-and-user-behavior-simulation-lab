// Add an element to the DOM
function addElementToDOM(containerId, content) {
    const container = document.getElementById(containerId);
    const p = document.createElement('p');
    p.textContent = content;
    container.appendChild(p);
}

// Remove an element from the DOM
function removeElementFromDOM(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.remove();
    }
}

// Simulate a button click and update the DOM
function simulateClick(containerId, content) {
    const container = document.getElementById(containerId);
    const p = document.createElement('p');
    p.textContent = content;
    container.appendChild(p);
}

// Handle form submission and update the DOM
function handleFormSubmit(formId, containerId) {
    const input = document.getElementById('user-input');
    const errorMessage = document.getElementById('error-message');

    if (!input.value) {
        errorMessage.textContent = 'Input cannot be empty';
        errorMessage.classList.remove('hidden');
        return;
    }

    const container = document.getElementById(containerId);
    const p = document.createElement('p');
    p.textContent = input.value;
    container.appendChild(p);

    errorMessage.classList.add('hidden');
    errorMessage.textContent = '';
}

module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit,
};