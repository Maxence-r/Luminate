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
        document.querySelectorAll('.image').forEach(img => img.remove());
        document.querySelector('.images').innerHTML = '';
        data.data.images.forEach(image => {
            let img = document.createElement('img');
            img.classList.add('image');
            img.src = image.url;
            img.onload = function() {
                console.log('loaded');
            }
            document.querySelector('.images').appendChild(img);
        });
        document.getElementById('input').value = '';
        document.getElementById('submit').classList.toggle('button--loading')
    })
    .catch(err => console.log(err));
});

document.querySelectorAll('.trending-item').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('input').value = this.innerText;
        document.getElementById('submit').click();
    })
})