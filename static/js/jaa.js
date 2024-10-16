<<<<<<< HEAD
// URL of the API endpoint
const url = 'http://172.20.42.70:5000';

// Fetch data from the Django server
fetch(url+'/candidates')
  .then(response => response.json())
  .then(data => {
    console.log('GET Response:', data);
    
    document.getElementById('Welcome').textContent=data;
  })
  .catch(error => {
    console.error('Error:', error);
  });
  


function re()
{
    if(document.getElementById('check1').checked && document.getElementById('check2').checked){
        var sc = document.getElementById('inpu').value;
        const postData = {
            'Voter': sc,
            'Position': "Chief Web Developer",
            'Candidate': 'Aditya MishraG'
          };
        
          
  // Data to be sent in the POST request
  
  // Options for the fetch request
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };

  

    // Make the POST request
    fetch(url + '/vote', options)
    .then(response => response.json())
    .then(data => {
        console.log('POST Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
          
    }

    else 
        alert('fill out every box')
=======
// URL of the API endpoint
const url = '';

// Fetch data from the Django server
fetch(url+'/candidates')
  .then(response => response.json())
  .then(data => {
    console.log('GET Response:', data);
    
    document.getElementById('Welcome').textContent=data;
  })
  .catch(error => {
    console.error('Error:', error);
  });
  


function re()
{
    if(document.getElementById('check1').checked && document.getElementById('check2').checked){
        var sc = document.getElementById('inpu').value;
        const postData = {
            'Voter': sc,
            'Position': "Chief Web Developer",
            'Candidate': 'Aditya Mishra'
          };
        
          
  // Data to be sent in the POST request
  
  // Options for the fetch request
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };

  

    // Make the POST request
    fetch(url + '/vote', options)
    .then(response => response.json())
    .then(data => {
        console.log('POST Response:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
          
    }

    else 
        alert('fill out every box')
>>>>>>> 84c84359cba9925775d9a7ae2e96bfd0cbeb6d59
}