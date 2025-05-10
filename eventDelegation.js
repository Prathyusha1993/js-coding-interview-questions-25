// html
<ul id='parent'>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>

// js
document.getElementById('parent').addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        console.log('clicked', e.target.textContent);
    }
});