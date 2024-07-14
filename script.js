document.addEventListener('DOMContentLoaded', function() {
    const occupationSelect = document.getElementById('occupations');
    const elementsToChange = document.querySelectorAll('.color-change');
    const selectsToChange = document.querySelectorAll('select');
    const root = document.documentElement;

    occupationSelect.addEventListener('change', function() {
        let newColor;
        switch (this.value) {
            case 'Generalist':
                newColor = '#DA702C';
                break;
            case 'Developer':
                newColor = '#4385BE';
                break;
            case 'Designer':
                newColor = '#3AA99F';
                break;
            case 'Writer':
                newColor = '#8B7EC8';
                break;
            case 'Artist':
                newColor = '#CE5D97';
                break;
            case 'Musician':
                newColor = '#D0A215';
                break;
            default:
                newColor = '#DA702C';
        }
        root.style.setProperty('--link-color', newColor);
        elementsToChange.forEach(element => {
            element.style.color = newColor;
        });
        selectsToChange.forEach(select => {
            const encodedColor = encodeURIComponent(newColor);
            select.style.backgroundImage = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="${encodedColor}" stroke="black" stroke-width="2" d="M7.247 11.14 2.451 5.658C2.1 5.234 2.407 4.5 3.002 4.5h9.996c.595 0 .902.734.551 1.158l-4.796 5.482c-.345.394-.958.394-1.304 0z"/></svg>')`;
        });
    });
});
