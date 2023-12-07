const http = require('http');
const hostname = 'www.zan.com';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Best food delivery in ladakh / onlineZann.com</title>
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Bree+Serif&display=swap" rel="stylesheet">
      <link rel="stylesheet" media="screen and (max-width: 1280px)" href="phone.css">
  </head>
  
  <body>
      <nav id="navbar">
          <div id="logo">
              <img src="smart.jpeg" alt="Zann.com">
          </div>
          <ul>
              <li class="item"><a href="#home">Home</a></li>
              <li class="item"><a href="#service-container">Services</a></li>
              <li class="item"><a href="#client-section">Our Clients</a></li>
              <li class="item"><a href="#contact">Contact us</a></li>
          </ul>
      </nav>
  
      <section id="home">
          <h1 class="h-primary">Welcome To Shakeel's OnlineZann.com</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima voluptatem alias consectetur</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <button class="btn">submit now</button>
      </section>
      <section id="service-container">
          <h1 class="h-primary center">Our Services</h1>
          <div id="services">
              <div class="box">
                  <img src="1.png" alt="">
                  <h2 class="h-secondary center">Food Ordering</h2>
                  <p class="center">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, eveniet fugit praesentium
                      animi sapiente fuga nobis. Placeat, reprehenderit facere a, saepe,
                  </p>
  
              </div>
              <div class="box">
                  <img src="2.png" alt="">
                  <h2 class="h-secondary center">Delivery</h2>
                  <p class="center">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, eveniet fugit praesentium
                      animi sapiente fuga nobis. Placeat, reprehenderit facere a, saepe LOREM34
                  </p>
  
              </div>
              <div class="box">
                  <img src="3.png" alt="">
                  <h2 class="h-secondary center">Bulk Ordering</h2>
                  <p class="center">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, eveniet fugit praesentium
                      animi lorem34
                  </p>
  
              </div>
          </div>
      </section>
  
      <section id="client-section">
          <h1 class="h-primary center">Our Clients</h1>
          <div id="clients">
              <div class="client-items">
                  <img src="logo1.png" alt="apple">
              </div>
              <div class="client-items">
                  <img src="logo5.png" alt="apple">
              </div>
              <div class="client-items">
                  <img src="logo3.png" alt="apple">
              </div>
              <div class="client-items">
                  <img src="logo4.png" alt="apple">
              </div>
              <div class="client-items">
                  <img src="logo6.png" alt="apple">
              </div>
          </div>
      </section>
      <section id="contact">
          <h1 class="h-primary center">Contact Us</h1>
          <div id="contact-box">
              <form action="">
                  <div class="form-group">
                      <label for="name">Name: </label>
                      <input type="text" name="name" id="name" placeholder="Enter your name">
                  </div>
                  <div class="form-group">
                      <label for="name">Email: </label>
                      <input type="text" name="Email" id="Email" placeholder="Enter your Email">
                  </div>
                  <div class="form-group">
                      <label for="name">phone no.: </label>
                      <input type="text" name="phone no." id="Phone no." placeholder="Enter your phone no.">
                  </div>
                  <div class="form-group">
                      <label for="name">Feedback: </label>
                      <textarea name="Feedback" id="feedback" cols="40" rows="4"></textarea>
                  </div>
              </form>
          </div>
      </section>
      <footer>
          <div class="center">
              Copyright &copy; www.OnlineZann.com. All rights reserved!
          </div>
      </footer>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});