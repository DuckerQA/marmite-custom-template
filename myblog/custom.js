// keep active button
document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const tagLinks = document.querySelectorAll('.tag-list .tag a');

    tagLinks.forEach(link => {
        const tagPath = link.getAttribute('href');
        if (currentPath === tagPath || currentPath === tagPath.replace('./', '/')) {
            link.classList.add('active');
        }
    });
});
//reset button of tag
document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const tagLinks = document.querySelectorAll('.tag-list a');

    tagLinks.forEach(tagLink => {
        if (tagLink.getAttribute('href') === `.${currentPath}`) {
            tagLink.classList.add('active');
        }

        tagLink.addEventListener('click', function(event) {
            if (tagLink.classList.contains('active')) {
                event.preventDefault();
                window.location.href = 'index.html'; 
            }
        });
    });
});