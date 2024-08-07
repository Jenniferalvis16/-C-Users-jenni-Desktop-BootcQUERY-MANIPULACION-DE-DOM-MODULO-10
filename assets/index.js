// Manipulación del primer div "text1"
document.getElementById('text1').addEventListener('mouseenter', function() {
    document.getElementById('text2').style.display = 'block';
});

document.getElementById('text1').addEventListener('mouseleave', function() {
    document.getElementById('text2').style.display = 'none';
});

// Manipulación del div "caja2" para agrandar la imagen
document.getElementById('caja2').addEventListener('mouseenter', function() {
    document.getElementById('img').style.transform = 'scale(2)';
});

document.getElementById('caja2').addEventListener('mouseleave', function() {
    document.getElementById('img').style.transform = 'scale(1)';
});

// Manipulación del tercer div "caja3" para agrandar la letra
document.getElementById('caja3').addEventListener('dblclick', function() {
    this.style.fontSize = 'larger';
});

