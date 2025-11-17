// SETTING THE HEIGHT FOR ALL THE BARS
document.querySelectorAll('.bar__bar').forEach(bar => {
    bar.style.height = bar.dataset.height + 'px'
})