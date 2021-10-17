let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let lengths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let active = 0;
    let month = 0;
    for (var i = 0; i < lengths[0]; i++) {
        let li = document.createElement('li');
        li.innerHTML = i + 1;
        li.classList.add('day');
        li.addEventListener('click', function(e) {
            e.target.classList.add('active');
            document.getElementsByClassName('day')[active].classList.remove('active');
            active = parseInt(e.target.innerHTML) - 1;
        });
        document.getElementById('days').appendChild(li);
    }
    document.getElementsByClassName('day')[active].classList.add('active');
 
  document.getElementById('getFacts').addEventListener('click', function() {
    fetch(`http://numbersapi.com/${month + 1}/${active + 1}/date?json`)
  .then(response => response.json())
  .then(data => document.getElementById('facts').innerHTML = data.text)
  .catch(error => document.getElementById('facts').innerHTML = 'Incorrect Birthday');
  })
  document.getElementById('prev').addEventListener('click', function() {
      if (month === 0) {
          month = 11;
      } else {
          month -= 1;
      }
      document.getElementById('month').innerHTML = months[month];
  })
  document.getElementById('next').addEventListener('click', function() {
      if (month === 11) {
          month = 0;
      } else {
          month += 1;
      }
      document.getElementById('month').innerHTML = months[month];
  })