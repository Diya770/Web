
const gradparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
gradparent.addEventListener('click', function(event) {
    console.log('Grandparent clicked');
    event.stopPropagation(); // Prevents the event from bubbling up to parent
});
parent.addEventListener('click', function(event) {
    console.log('Parent clicked');
    event.stopPropagation(); // Prevents the event from bubbling up to grandparent
}); 
child.addEventListener('click', function(event) {
    console.log('Child clicked');
    event.stopPropagation(); // Prevents the event from bubbling up to parent
    
});