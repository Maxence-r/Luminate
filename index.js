document.getElementById('submit').addEventListener('click', function() {
    let input = document.getElementById('input').value;
    fetch(`https://disco.padlet.com/api/aiart?q=${input}&user_id=1`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        document.querySelectorAll('.img').forEach(img => img.remove());
        data.data.images.forEach(image => {
            let img = document.createElement('img');
            img.classList.add('img');
            img.src = image.url;
            img.onload = function() {
                console.log('loaded');
            }
            document.getElementById('images').appendChild(img);
        });
    })
    .catch(err => console.log(err));
});