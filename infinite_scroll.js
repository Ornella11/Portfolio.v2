document.querySelectorAll('.scroll').forEach(container => {
    const div = container.querySelector('div');
    const clonedContent = div.cloneNode(true);
    container.appendChild(clonedContent);

    const duration = parseFloat(getComputedStyle(container).getPropertyValue('--t'));
    const contentWidth = div.scrollWidth;
    div.style.width = `${contentWidth}px`;
    clonedContent.style.width = `${contentWidth}px`;

    div.style.animationDuration = `${duration}s`;
    clonedContent.style.animationDuration = `${duration}s`;
});















