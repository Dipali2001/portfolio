function popBadge(element) {
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    } else {
        element.classList.add('active');
        setTimeout(() => {
            element.classList.remove('active');
        }, 5000);
    }
}

