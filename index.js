// Add your code here
function submitData(user, emailaddy){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
            name: user,
            email: emailaddy
        })
    }).then(res => res.json())
    .then(data => document.body.append(data.id))
    .catch(function(error){
        document.body.append(error.message)
    })
}
