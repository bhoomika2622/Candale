
var x = document.getElementById("login");
var y = document.getElementById("signup");
var z = document.getElementById("btn");
var a = document.getElementById("social-icons")

const users = [
    { email: 'bhoomika1446.be22@chitkara.edu.in', password: 'Bhoomika2226' },
    { email: 'bhoomika26@gmail.com', password: 'Bhoomika2226' },
    { email: 'b@gmail.com', password: '1' },
  ];
  
  function login() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    const user = users.find((user) => user.email === emailInput && user.password === passwordInput);
    if (user) {

      window.location.href = 'index.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
  
  function signup() {
    const userIdInput = document.getElementById('userId').value;
    const emailInput = document.getElementById('signupEmail').value;
    const passwordInput = document.getElementById('signupPassword').value;
    const newUser = { userId: userIdInput, email: emailInput, password: passwordInput };
    users.push(newUser);

    window.location.href = 'index.html';
  }
  
function signup_page(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "87px";
    a.style.top = "365px";
    a.style.left = "75px";

}
function login_page(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
    a.style.top="330px";
    a.style.left="75px"
}