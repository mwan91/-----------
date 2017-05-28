// Load required modules

var express = require("express");           // web framework external module
var serveStatic = require('serve-static');  // serve static files
var socketIo = require("socket.io");        // web socket external module

var path = require('path');
///////////////////메인페이지 170325 추가
var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var socketIo = require("socket.io");        // web socket external module

var serveStatic = require('serve-static');  // serve static files
/////////////////////////////////
//170401
var client = mysql.createConnection({
  //host: 'localhost',
  //port:3307,
  user: 'root',
  password: '1234',
  database: 'web'
});

var option = 
{
     key: fs.readFileSync(path.join(__dirname, resolveURL('fake-keys/privatekey.pem'))),
    cert: fs.readFileSync(path.join(__dirname, resolveURL('fake-keys/certificate.pem')))
  };
var http    = require("https");              // http server core module

var MySQLStore = require('express-mysql-session')(session);
var app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(session({
  secret : 'dsdfsdfwerwer!!!sdfsdfs', // session id 보안 아무 값이나 넣어도 된다.
  resave: false, //session Id를 접속할 때마다 새로 발급을 하지 말라
  saveUnintialized: true,//session을 사용하기 전까지는 발급을 하지 말라
  //위 사항은 권장 값이다. (여기까지 세션 처리)
  store: new MySQLStore({
  host: 'localhost',
  //port: 3307,
  user: 'root',
  password: '1234',
  database: 'web' //db name
    })
  })
);

app.use(express.static('public'));
var webServer = http.createServer(option, app).listen(8080);



//C:\Bitnami\wampstack-5.6.30-1\apache2\htdocs\WebInterview\server_example\public\css\vendor
app.get('/', function(req, res){
  console.log();
  if(req.session.name){
  var output = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta name="author" content="">

      <title>Creative - Start Bootstrap Theme</title>

      <!-- Bootstrap Core CSS -->
      <!-- <link href="css/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"> 원본-->

      <link href="css/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">

      <!-- Custom Fonts -->
      <link href="css/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
      <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

      <!-- Plugin CSS -->
      <link href="css/vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

      <!-- Theme CSS -->
      <link href="/css/creative.css" rel="stylesheet">

      <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
      <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
      <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
      <![endif]-->

  </head>

  <body id="page-top">

      <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                  </button>
                  <a class="navbar-brand page-scroll" href="#page-top">Online Interview</a> <!--왼쪽 상단 제목 -->
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <!-- 메뉴 바-->

                  <ul class="nav navbar-nav navbar-right">
                      <li>
                        ${req.session.name}님 환영합니다. ${req.session.check}
                      </li>

                      <li>
                          <a class="page-scroll" href="./logout">Log Out</a>
                      </li>

                      <li>
                          <a class="page-scroll" href="./register.html">Register</a>
                      </li>
                      <li>
                          <a class="page-scroll" href="./service">Services</a>
                      </li>
                      <li>
                          <a class="page-scroll" href="#portfolio">Portfolio</a>
                      </li>
                      <li>
                          <a class="page-scroll" href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
              <!-- /.navbar-collapse -->
          </div>
          <!-- /.container-fluid -->
      </nav>

      <header> <!-- 제목 -->
          <div class="header-content">
              <div class="header-content-inner">
                  <h1 id="homeHeading">Online Interview</h1> <!-- 제목 -->
                  <hr>

                  <a href="#services" class="btn btn-primary btn-xl page-scroll">Start</a>
              </div>
          </div>
      </header>

      <section id="services"> <!-- 기능 소개 제목-->
          <div class="container">
              <div class="row">
                  <div class="col-lg-12 text-center">
                      <h2 class="section-heading">At Your Service</h2>
                      <hr class="primary">
                  </div>
              </div>
          </div>
          <div class="container"> <!-- 4가지 기능 -->
              <div class="row">
                  <div class="col-lg-3 col-md-6 text-center">
                      <div class="service-box">
                          <i class="fa fa-4x fa-diamond text-primary sr-icons"></i>
                          <h3>실시간 1 : N 화상 면접</h3>
                          <p class="text-muted">면접자와 면접관들의 온라인 상에서 면접 기능</p>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6 text-center">
                      <div class="service-box">
                          <i class="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                          <h3>캔버스 기능</h3>
                          <p class="text-muted">You can use this theme as is, or you can make changes!</p>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6 text-center">
                      <div class="service-box">
                          <i class="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                          <h3>Up to Date</h3>
                          <p class="text-muted">We update dependencies to keep things fresh.</p>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6 text-center">
                      <div class="service-box">
                          <i class="fa fa-4x fa-heart text-primary sr-icons"></i>
                          <h3>Made with Love</h3>
                          <p class="text-muted">You have to make your websites with love these days!</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section class="no-padding" id="portfolio"> <!-- 그림 포트폴리오 -->
          <div class="container-fluid">
              <div class="row no-gutter popup-gallery">
                  <div class="col-lg-4 col-sm-6">
                      <a href="images/portfolio/fullsize/1.jpg" class="portfolio-box">
                          <img src="images/portfolio/thumbnails/1.jpg" class="img-responsive" alt="">
                          <div class="portfolio-box-caption">
                              <div class="portfolio-box-caption-content">
                                  <div class="project-category text-faded">
                                      Category
                                  </div>
                                  <div class="project-name">
                                      Project Name
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a href="images/portfolio/fullsize/2.jpg" class="portfolio-box">
                          <img src="images/portfolio/thumbnails/2.jpg" class="img-responsive" alt="">
                          <div class="portfolio-box-caption">
                              <div class="portfolio-box-caption-content">
                                  <div class="project-category text-faded">
                                      Category
                                  </div>
                                  <div class="project-name">
                                      Project Name
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a href="images/portfolio/fullsize/3.jpg" class="portfolio-box">
                          <img src="images/portfolio/thumbnails/3.jpg" class="img-responsive" alt="">
                          <div class="portfolio-box-caption">
                              <div class="portfolio-box-caption-content">
                                  <div class="project-category text-faded">
                                      Category
                                  </div>
                                  <div class="project-name">
                                      Project Name
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a href="images/portfolio/fullsize/4.jpg" class="portfolio-box">
                          <img src="images/portfolio/thumbnails/4.jpg" class="img-responsive" alt="">
                          <div class="portfolio-box-caption">
                              <div class="portfolio-box-caption-content">
                                  <div class="project-category text-faded">
                                      Category
                                  </div>
                                  <div class="project-name">
                                      Project Name
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a href="images/portfolio/fullsize/5.jpg" class="portfolio-box">
                          <img src="images/portfolio/thumbnails/5.jpg" class="img-responsive" alt="">
                          <div class="portfolio-box-caption">
                              <div class="portfolio-box-caption-content">
                                  <div class="project-category text-faded">
                                      Category
                                  </div>
                                  <div class="project-name">
                                      Project Name
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <a href="images/portfolio/fullsize/6.jpg" class="portfolio-box">
                          <img src="images/portfolio/thumbnails/6.jpg" class="img-responsive" alt="">
                          <div class="portfolio-box-caption">
                              <div class="portfolio-box-caption-content">
                                  <div class="project-category text-faded">
                                      Category
                                  </div>
                                  <div class="project-name">
                                      Project Name
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
              </div>
          </div>
      </section>


      <aside class="bg-dark"> <!-- 로그인 버튼 -->
          <div class="container text-center">
              <div class="call-to-action">
                  <h2>Start Online Interview!</h2>
                  <a href="./" class="btn btn-default btn-xl sr-button">Start</a>
              </div>
          </div>
      </aside>


      <!-- 로그인 페이지 사용 x
      <section class="bg-primary" id="about">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8 col-lg-offset-2 text-center">
                      <h2 class="section-heading">Log in Page</h2>
                          <div class="log-input">
                              <input type="text" name = "inputname" id = "inputname"/>
                          </div>
                      <hr class="light">
                      <button type="button"  class="page-scroll btn btn-default btn-xl sr-button">submit</a>
                  </div>
              </div>
          </div>
      </section>
      -->
      <section id="contact">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8 col-lg-offset-2 text-center">
                      <h2 class="section-heading">Let's Get In Touch!</h2>
                      <hr class="primary">
                      <p>Ready to start your next project with us?</p>
                  </div>
                  <div class="col-lg-4 col-lg-offset-2 text-center">
                      <i class="fa fa-phone fa-3x sr-contact"></i>
                      <p>010-6888-2720</p>
                  </div>
                  <div class="col-lg-4 text-center">
                      <i class="fa fa-envelope-o fa-3x sr-contact"></i>
                      <p><a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a></p>
                  </div>
              </div>
          </div>
      </section>

      <!-- jQuery -->
      <script src="js/vendor/jquery/jquery-3.1.1.min.js"></script>

      <!-- Bootstrap Core JavaScript -->
      <script src="js/vendor/bootstrap/js/bootstrap.min.js"></script>

      <!-- Theme JavaScript -->
      <script src="js/creative.min.js"></script>
      <script type="text/javascript"></script>
  </body>

  </html>
`
}

else{
var output = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Creative - Start Bootstrap Theme</title>

    <!-- Bootstrap Core CSS -->
    <!-- <link href="css/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"> 원본-->

    <link href="css/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="css/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

    <!-- Plugin CSS -->
    <link href="css/vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

    <!-- Theme CSS -->
    <link href="/css/creative.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body id="page-top">

    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="#page-top">Online Interview</a> <!--왼쪽 상단 제목 -->
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <!-- 메뉴 바-->

                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a class="page-scroll" href="./login">Log in</a>
                    </li>

                    <li>
                        <a class="page-scroll" href="./register.html">Register</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="./service">Services</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a class="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <header> <!-- 제목 -->
        <div class="header-content">
            <div class="header-content-inner">
                <h1 id="homeHeading">Online Interview</h1> <!-- 제목 -->
                <hr>

                <a href="#services" class="btn btn-primary btn-xl page-scroll">Start</a>
            </div>
        </div>
    </header>

    <section id="services"> <!-- 기능 소개 제목-->
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">At Your Service</h2>
                    <hr class="primary">
                </div>
            </div>
        </div>
        <div class="container"> <!-- 4가지 기능 -->
            <div class="row">
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-diamond text-primary sr-icons"></i>
                        <h3>실시간 1 : N 화상 면접</h3>
                        <p class="text-muted">면접자와 면접관들의 온라인 상에서 면접 기능</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                        <h3>캔버스 기능</h3>
                        <p class="text-muted">You can use this theme as is, or you can make changes!</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                        <h3>Up to Date</h3>
                        <p class="text-muted">We update dependencies to keep things fresh.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="service-box">
                        <i class="fa fa-4x fa-heart text-primary sr-icons"></i>
                        <h3>Made with Love</h3>
                        <p class="text-muted">You have to make your websites with love these days!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="no-padding" id="portfolio"> <!-- 그림 포트폴리오 -->
        <div class="container-fluid">
            <div class="row no-gutter popup-gallery">
                <div class="col-lg-4 col-sm-6">
                    <a href="images/portfolio/fullsize/1.jpg" class="portfolio-box">
                        <img src="images/portfolio/thumbnails/1.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="images/portfolio/fullsize/2.jpg" class="portfolio-box">
                        <img src="images/portfolio/thumbnails/2.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="images/portfolio/fullsize/3.jpg" class="portfolio-box">
                        <img src="images/portfolio/thumbnails/3.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="images/portfolio/fullsize/4.jpg" class="portfolio-box">
                        <img src="images/portfolio/thumbnails/4.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="images/portfolio/fullsize/5.jpg" class="portfolio-box">
                        <img src="images/portfolio/thumbnails/5.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <a href="images/portfolio/fullsize/6.jpg" class="portfolio-box">
                        <img src="images/portfolio/thumbnails/6.jpg" class="img-responsive" alt="">
                        <div class="portfolio-box-caption">
                            <div class="portfolio-box-caption-content">
                                <div class="project-category text-faded">
                                    Category
                                </div>
                                <div class="project-name">
                                    Project Name
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>


    <aside class="bg-dark"> <!-- 로그인 버튼 -->
        <div class="container text-center">
            <div class="call-to-action">
                <h2>Start Online Interview!</h2>
                <a href="./" class="btn btn-default btn-xl sr-button">Start</a>
            </div>
        </div>
    </aside>


    <!-- 로그인 페이지 사용 x
    <section class="bg-primary" id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">Log in Page</h2>
                        <div class="log-input">
                            <input type="text" name = "inputname" id = "inputname"/>
                        </div>
                    <hr class="light">
                    <button type="button"  class="page-scroll btn btn-default btn-xl sr-button">submit</a>
                </div>
            </div>
        </div>
    </section>
    -->
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="section-heading">Let's Get In Touch!</h2>
                    <hr class="primary">
                    <p>Ready to start your next project with us?</p>
                </div>
                <div class="col-lg-4 col-lg-offset-2 text-center">
                    <i class="fa fa-phone fa-3x sr-contact"></i>
                    <p>010-6888-2720</p>
                </div>
                <div class="col-lg-4 text-center">
                    <i class="fa fa-envelope-o fa-3x sr-contact"></i>
                    <p><a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a></p>
                </div>
            </div>
        </div>
    </section>

    <!-- jQuery -->
    <script src="js/vendor/jquery/jquery-3.1.1.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Theme JavaScript -->
    <script src="js/creative.min.js"></script>
    <script type="text/javascript"></script>
</body>

</html>
`
}
res.send(output);
});

app.get('/service', function(req, res){
  console.log();
  if(req.session.check == 'on'){
  var output = `<!DOCTYPE html>
<html lang="ko">

<head>

<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=unicode" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="user-scalable=no, width=device-width, height=device-height, initial-scale=1, maximum-scale=1">

<script type="text/javascript" src="css/sh_canvas.js"></script>
<script type="text/javascript"  src="css/Timer.js"></script>

<script type="text/javascript"  src="css/BandwidthHandler.js"></script>
<script type="text/javascript"  src="css/screen.js"></script>
<script type="text/javascript"  src="css/getScreenId.js"></script>
 
<script type="text/javascript"  src="css/firebase.js"></script>



        <style>
            video {
                -moz-transition: all 1s ease;
                -ms-transition: all 1s ease;
                -o-transition: all 1s ease;
                -webkit-transition: all 1s ease;
                transition: all 1s ease;
                vertical-align: top;
                width: 100%;
                height: 850px;
            }
            /*
            input {
                border: 1px solid #d9d9d9;
                border-radius: 1px;
                font-size: 2em;
                margin: .2em;
                width: 30%;
            }
            select {
                border: 1px solid #d9d9d9;
                border-radius: 1px;
                height: 50px;
                margin-left: 1em;
                margin-right: -12px;
                padding: 1.1em;
                vertical-align: 6px;
                width: 18%;
            }
            .setup {
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
                font-size: 102%;
                height: 47px;
                margin-left: -9px;
                margin-top: 8px;
                position: absolute;
            }
            p { padding: 1em; }
            li {
                border-bottom: 1px solid rgb(189, 189, 189);
                border-left: 1px solid rgb(189, 189, 189);
                padding: .5em;
            }*/

            
            
        </style>







<link rel="stylesheet" type="text/css" href="css/gm2.css"/> <!-- CSS속성적용 --> 

<title>사이트 주소</title>


</head>
<body>



<!-- 화면 전체 레이아웃 -->
<div class="room" data-room-mode="call" data-user-screenshare="false" data-right-side-on="false" data-subvideo-direction="0">
<div class="room-wrapper">

<!-- 왼쪽 레이아웃 -->
<div class="room-menu">
<div class="bo-detail1">
 <div class="canv">
 <canvas id="canvas" width="600" height="800">
</canvas>
</div>
<br/>
<div style="border-top:1px solid gray">

<input type="file" id="loadImg" >



<br/>mode : <span id="mode" ></span><br/>

<a href="#" onclick="changeMode(0)" class="makebu1">Pen</a>
<a href="#" onclick="changeMode(1)" class="makebu1">Line</a>
<a href="#" onclick="changeMode(2)" class="makebu1">Rect</a>
<a href="#" onclick="ccan()" class="makebu1">Delete</a>
<a href="#" onclick="save()" class="makebu1">Save</a>


<!-- 
<input type="button" value="pen" onclick="changeMode(0)">
<input type="button" value="line" onclick="changeMode(1)">
<input type="button" value="rect" onclick="changeMode(2)">
<input type="button" value="delete" onclick="ccan()"><br>
<input type="button" value="save" onclick="save()">

<textarea rows="" cols="" id="data"></textarea>
-->
  
 </div>
 </div>
</div>

<!-- 영상 부분 -->
<div class="room-main">
<div class="room-main-top">
<div class="bu">
<form>
      <p>
      <a href="#"><img src="com.png" width="50" height="37"></a>
      <a href="#"><img src="screen.png" width="50" height="37"></a>
      <a href="#"><img src="mic.png" width="50" height="37"></a>
      <a href="#"><img src="sound.png" width="50" height="37"></a>
      <a href="#"><img src="set.png" width="50" height="37"></a>
      <a href="#"><img src="end.png" width="50" height="37"></a>
      </p>
      </form>
</div>
<div class="ti">


<form name="timeform" action="">
<!-- 
   <div id="blinker" class="green_circle">
   </div>
     -->
   <div id="clock">
      <input name="timeleft" size="5" class="c1" type="text">
   </div>

   <div class="settimer">
   <!-- 
      Time:
      <input name="hours" value="" size="1" class="c2" type="text">
         -->
      Minute:
      <input name="minutes" value="" size="1" class="c2" type="text">
     <!-- 
      Warning(in minutes):
      <input name="warn" value="" size="1" class="c2" type="text">
         -->
         
      <a href="#" onclick="sw_start()" class="makebu2">Start</a>
      <a href="#" onclick="Stop()" class="makebu2">Stop</a>
      <a href="#" onclick="Reset()" class="makebu2">Reset</a>
      
      <!-- 
      <input name="start" value="Start" class="c2"
         onclick="sw_start()" type="button">
      <input name="stop" value="Stop" class="c2"
         onclick="Stop()" type="button">
      <input name="reset" value="Reset" class="c2"
         onclick="Reset()" type="button">
         
          -->
   </div>
</form>


</div>



<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
<script>
(function($) {

  $.fn.undoCountdown = function(options) {
    
    var defaults = {
      seconds: 5,
      term: '취소',
      showCountdown: true,
      onComplete: function() { return true; }
    };

    var settings = $.extend({}, defaults, options);

    return this.each(function() {

      var $button = $(this);
      var originalContent = $button.html();
      var seconds = settings.seconds;
      var term = settings.term;
      var showCountdown = settings.showCountdown;
      var interval;

      $button.click(function() {
        if (interval) {
          reset();
        }
        else {
          update();
          start();
        }
      });

      function start() {
        if (!interval) {
          interval = setInterval(update, 1000);
        }
      }

      function reset() {
        if (interval) {
          $button.html(originalContent);
          clearInterval(interval);
          interval = null;
          seconds = settings.seconds;
        }
      }

      function update() {
        if (showCountdown) {
          $button.html(term + " (" + seconds + ")");
        }
        else {
          $button.html(term);
        }

        if (seconds == 0) {
          settings.onComplete.call();

          if (interval) {
            clearInterval(interval);  
          }
        } 
        else {
          seconds--;
        }
      }

    });

  }

}(jQuery));


$("#undo").undoCountdown({
  seconds: 100,    //초 지정
  onComplete: function() {
    alert("면접 종료");
  }
});
</script>

</div>


<div class="room-con">
<div class="con1"> 
<ul class="bo-list-row">
            
        
        </ul>


</div>



</div>
</div>

<!-- 채팅 부분  -->

<div class="room-right-side">
     <input type="text" id="room-id">
                <button id="open-room">Open Room</button>
                <button id="join-room">Join Room</button>
                <button id="open-or-join-room">Auto Open Or Join Room</button>
  













        
    
        
      </div>


      






</div>
</div>


</body>
</html>

`
}

else{
var output = `<!DOCTYPE html>
<html lang="ko">

<head>

<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=unicode" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="user-scalable=no, width=device-width, height=device-height, initial-scale=1, maximum-scale=1">

<script type="text/javascript" src="css2/sh_canvas.js"></script>
<script type="text/javascript"  src="css2/Timer.js"></script>

<script type="text/javascript"  src="css2/BandwidthHandler.js"></script>
<script type="text/javascript"  src="css2/screen.js"></script>
<script type="text/javascript"  src="css2/getScreenId.js"></script>
 
<script type="text/javascript"  src="css2/firebase.js"></script>



        <style>
            video {
                -moz-transition: all 1s ease;
                -ms-transition: all 1s ease;
                -o-transition: all 1s ease;
                -webkit-transition: all 1s ease;
                transition: all 1s ease;
                vertical-align: top;
              
                width: 250px;
                height: 150%;
            }
            /*
            input {
                border: 1px solid #d9d9d9;
                border-radius: 1px;
                font-size: 2em;
                margin: .2em;
                width: 30%;
            }
            select {
                border: 1px solid #d9d9d9;
                border-radius: 1px;
                height: 50px;
                margin-left: 1em;
                margin-right: -12px;
                padding: 1.1em;
                vertical-align: 6px;
                width: 18%;
            }
            .setup {
                border-bottom-left-radius: 0;
                border-top-left-radius: 0;
                font-size: 102%;
                height: 47px;
                margin-left: -9px;
                margin-top: 8px;
                position: absolute;
            }
            p { padding: 1em; }
            li {
                border-bottom: 1px solid rgb(189, 189, 189);
                border-left: 1px solid rgb(189, 189, 189);
                padding: .5em;
            }*/

            
            
        </style>







<link rel="stylesheet" type="text/css" href="css2/gm.css"/> <!-- CSS속성적용 --> 

<title>사이트 주소</title>


</head>
<body>
  


<!-- 화면 전체 레이아웃 -->
<div class="room" data-room-mode="call" data-user-screenshare="false" data-right-side-on="false" data-subvideo-direction="0">
<div class="room-wrapper">

<!-- 왼쪽 레이아웃 -->
<div class="room-menu">
<div class="bo-detail1">
 <div class="canv">
 <canvas id="canvas" width="600" height="650">
</canvas>
</div>
<br/>
<div style="border-top:1px solid gray">

<input type="file" id="loadImg" >



<br/>mode : <span id="mode" ></span><br/>

<a href="#" onclick="changeMode(0)" class="makebu1">Pen</a>
<a href="#" onclick="changeMode(1)" class="makebu1">Line</a>
<a href="#" onclick="changeMode(2)" class="makebu1">Rect</a>
<a href="#" onclick="ccan()" class="makebu1">Delete</a>
<a href="#" onclick="save()" class="makebu1">Save</a>


<!-- 
<input type="button" value="pen" onclick="changeMode(0)">
<input type="button" value="line" onclick="changeMode(1)">
<input type="button" value="rect" onclick="changeMode(2)">
<input type="button" value="delete" onclick="ccan()"><br>
<input type="button" value="save" onclick="save()">

<textarea rows="" cols="" id="data"></textarea>
-->
  
 </div>
 </div>
</div>

<!-- 영상 부분 -->
<div class="room-main">
<div class="room-main-top">
<div class="bu">
<form>
      <p>
      <a href="#"><img src="com.png" width="50" height="37"></a>
      <a href="#"><img src="screen.png" width="50" height="37"></a>
      <a href="#"><img src="mic.png" width="50" height="37"></a>
      <a href="#"><img src="sound.png" width="50" height="37"></a>\
      <input type="text" id="room-id">
                <button id="open-room">Open Room</button>
                <button id="join-room">Join Room</button>

                <br><br>
      </p>
      </form>
</div>
<div class="ti">


<form name="timeform" action="">
<!-- 
   <div id="blinker" class="green_circle">
   </div>
     -->
   <div id="clock">
      <input name="timeleft" size="5" class="c1" type="text">
   </div>

   <div class="settimer">
   <!-- 
      Time:
      <input name="hours" value="" size="1" class="c2" type="text">
         -->
      Minute:
      <input name="minutes" value="" size="1" class="c2" type="text">
     <!-- 
      Warning(in minutes):
      <input name="warn" value="" size="1" class="c2" type="text">
         -->
         
      <a href="#" onclick="sw_start()" class="makebu2">Start</a>
      <a href="#" onclick="Stop()" class="makebu2">Stop</a>
      <a href="#" onclick="Reset()" class="makebu2">Reset</a>
      
      <!-- 
      <input name="start" value="Start" class="c2"
         onclick="sw_start()" type="button">
      <input name="stop" value="Stop" class="c2"
         onclick="Stop()" type="button">
      <input name="reset" value="Reset" class="c2"
         onclick="Reset()" type="button">
         
          -->
   </div>
</form>


</div>




</div>


<div class="room-con">
<div class="con1"> 

            <div id="videos-container"></div>
     

        <script src="/RTCMultiConnection.min.js"></script>
        <script src="/PubNubConnection.js"></script>
        <script src="/test.js"></script>
        <script src="https://cdn.webrtc-experiment.com:443/FileBufferReader.js"></script>

        <script src="https://cdn.webrtc-experiment.com/view/websocket.js"></script>

      
        <script src="https://cdn.webrtc-experiment.com/commits.js" async></script>
       

</div>

<div class="con3"><ul class="bo-list-row">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          <li>3번 화면</li>
  
        
        </ul></div>
<div class="con4"><ul class="bo-list-row">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          <li>4번 화면</li>
  
        
        </ul></div>
</div>
</div>

<!-- 채팅 부분  -->

<div class="room-right-side">
     <p>코딩 면접 버튼 </p>

</div>










        
    
        
      </div>


      






</div>
</div>


</body>
</html>

`
}
res.send(output);
});


app.get('/login',function(req,res){
  fs.readFile('login.html', 'utf8', function(error, data){
    res.send(data);
  });

});

app.get('/register.html', function (request, response) {

  fs.readFile('register.html', 'utf8', function (error, data) {

    response.send(data);
  });
});


app.post('/register.html', function (request, response) {

  var body = request.body;

  client.query('INSERT INTO member (username, password, email, tel, check1, check2) VALUES (?, ?, ?, ?, ?, ?)', [
      body.username, body.password, body.email, body.tel, body.check1, body.check2
        ], function () {

    response.redirect('/');
    console.log(body);
  });
});

app.post('/result',function(req,res){
  if(req.session.name){
    fs.readFile('main_page.html', 'utf8', function(error, data){
      //res.send(output);
      //res.send(req.session.name);
      res.redirect('/');
    });
      //res.send(req.session.name);
  }else{
    res.send('login Please');
  }

});


app.get('/logout',function(req,res){  //로그아웃처리
    delete req.session.name;
    req.session.save(function(){  //redirect로 인해 db 처리가 안될수도 있다. 콜백함수로 저장을 한뒤 redirect 시켜준다.
      res.redirect('/');
    });
});


app.post('/login',function(req,res){
  var body = req.body;

  var id = body.username;
  var pw = body.password;
  var ch = body.check1;
  //client.query('SELECT username,password FROM member WHERE username = ? and password = ?', [body.username, body.password],
    client.query('SELECT username,password, check1 FROM member',
    function(error, data){

        for(var i=0; i<data.length; i++){
          if(data[i].username == id){
            req.session.name = data[i].username;
            req.session.check = data[i].check1;
            console.log(data,data[i].username,data.length, id, pw, ch);
            console.log(req.session.check, '1');
            res.redirect('/');
            }

        }

        //res.redirect('/login');

      if(error){
        console.log("error", error);
        res.redirect('/');
      }

  });

  var user ={
    uid : body.username,
    upw : body.password,
    name : body.username
  };
    


  // if(id === user.uid && pw === user.upw){
  //   req.session.name = user.name;
  //   req.session.save(function(){
  //     //return req.session.name;
  //
  //     res.redirect('/');
  //   });
  // }else{
  //   res.send('login fail');
  // }
});


// Muaz Khan      - www.MuazKhan.com
// MIT License    - www.WebRTC-Experiment.com/licence
// Documentation  - github.com/muaz-khan/RTCMultiConnection

function resolveURL(url) {
    var isWin = !!process.platform.match(/^win/);
    if (!isWin) return url;
    return url.replace(/\//g, '\\');
}

// Please use HTTPs on non-localhost domains.
var isUseHTTPs = true;

// var port = 443;
var port = process.env.PORT || 9001;

var fs = require('fs');
var path = require('path');

// see how to use a valid certificate:
// https://github.com/muaz-khan/WebRTC-Experiment/issues/62


// force auto reboot on failures
var autoRebootServerOnFailure = false;


// skip/remove this try-catch block if you're NOT using "config.json"

// You don't need to change anything below

var server = require(isUseHTTPs ? 'https' : 'http');
var url = require('url');

function serverHandler(request, response) {
    try {
        var uri = url.parse(request.url).pathname,
            filename = path.join(process.cwd(), uri);

        if (filename && filename.search(/server.js|Scalable-Broadcast.js|Signaling-Server.js/g) !== -1) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            response.write('404 Not Found: ' + path.join('/', uri) + '\n');
            response.end();
            return;
        }

        var stats;

        try {
            stats = fs.lstatSync(filename);

            if (filename && filename.search(/demos/g) === -1 && stats.isDirectory()) {
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                response.write('<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=/demos/"></head><body></body></html>');
                response.end();
                return;
            }
        } catch (e) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            response.write('404 Not Found: ' + path.join('/', uri) + '\n');
            response.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) {
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });

            if (filename.indexOf(resolveURL('/demos/MultiRTC/')) !== -1) {
                filename = filename.replace(resolveURL('/demos/MultiRTC/'), '');
                filename += resolveURL('/demos/MultiRTC/index.html');
            } else if (filename.indexOf(resolveURL('/demos/')) !== -1) {
                filename = filename.replace(resolveURL('/demos/'), '');
                filename += resolveURL('/demos/index.html');
            } else {
                filename += resolveURL('/demos/index.html');
            }
        }

        var contentType = 'text/plain';
        if (filename.toLowerCase().indexOf('.html') !== -1) {
            contentType = 'text/html';
        }
        if (filename.toLowerCase().indexOf('.css') !== -1) {
            contentType = 'text/css';
        }
        if (filename.toLowerCase().indexOf('.png') !== -1) {
            contentType = 'image/png';
        }

        fs.readFile(filename, 'binary', function(err, file) {
            if (err) {
                response.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                response.write('404 Not Found: ' + path.join('/', uri) + '\n');
                response.end();
                return;
            }

            try {
                var demos = (fs.readdirSync('demos') || []);

                if (demos.length) {
                    var h2 = '<h2 style="text-align:center;display:block;"><a href="https://www.npmjs.com/package/rtcmulticonnection-v3"><img src="https://img.shields.io/npm/v/rtcmulticonnection-v3.svg"></a><a href="https://www.npmjs.com/package/rtcmulticonnection-v3"><img src="https://img.shields.io/npm/dm/rtcmulticonnection-v3.svg"></a><a href="https://travis-ci.org/muaz-khan/RTCMultiConnection"><img src="https://travis-ci.org/muaz-khan/RTCMultiConnection.png?branch=master"></a></h2>';
                    var otherDemos = '<section class="experiment" id="demos"><details><summary style="text-align:center;">Check ' + (demos.length - 1) + ' other RTCMultiConnection-v3 demos</summary>' + h2 + '<ol>';
                    demos.forEach(function(f) {
                        if (f && f !== 'index.html' && f.indexOf('.html') !== -1) {
                            otherDemos += '<li><a href="/demos/' + f + '">' + f + '</a> (<a href="https://github.com/muaz-khan/RTCMultiConnection/tree/master/demos/' + f + '">Source</a>)</li>';
                        }
                    });
                    otherDemos += '<ol></details></section><section class="experiment own-widgets latest-commits">';

                    file = file.replace('<section class="experiment own-widgets latest-commits">', otherDemos);
                }
            } catch (e) {}

            try {
                var docs = (fs.readdirSync('docs') || []);

                if (docs.length) {
                    var html = '<section class="experiment" id="docs">';
                    html += '<details><summary style="text-align:center;">RTCMultiConnection Docs</summary>';
                    html += '<h2 style="text-align:center;display:block;"><a href="http://www.rtcmulticonnection.org/docs/">http://www.rtcmulticonnection.org/docs/</a></h2>';
                    html += '<ol>';

                    docs.forEach(function(f) {
                        if (f.indexOf('DS_Store') == -1) {
                            html += '<li><a href="https://github.com/muaz-khan/RTCMultiConnection/tree/master/docs/' + f + '">' + f + '</a></li>';
                        }
                    });

                    html += '</ol></details></section><section class="experiment own-widgets latest-commits">';

                    file = file.replace('<section class="experiment own-widgets latest-commits">', html);
                }
            } catch (e) {}

            response.writeHead(200, {
                'Content-Type': contentType
            });
            response.write(file, 'binary');
            response.end();
        });
    } catch (e) {
        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        response.write('<h1>Unexpected error:</h1><br><br>' + e.stack || e.message || JSON.stringify(e));
        response.end();
    }
}

var app;

if (isUseHTTPs) {
    app = server.createServer(option, serverHandler);
} else {
    app = server.createServer(serverHandler);
}

function runServer() {
    app.on('error', function(e) {
        if (e.code == 'EADDRINUSE') {
            if (e.address === '0.0.0.0') {
                e.address = 'localhost';
            }

            var socketURL = (isUseHTTPs ? 'https' : 'http') + '://' + e.address + ':' + e.port + '/';

            console.log('------------------------------');
            console.log('\x1b[31m%s\x1b[0m ', 'Unable to listen on port: ' + e.port);
            console.log('\x1b[31m%s\x1b[0m ', socketURL + ' is already in use. Please kill below processes using "kill PID".');
            console.log('------------------------------');

            foo = new cmd_exec('lsof', ['-n', '-i4TCP:9001'],
                function(me, data) {
                    me.stdout += data.toString();
                },
                function(me) {
                    me.exit = 1;
                }
            );

            setTimeout(log_console, 250);
        }
    });

    app = app.listen(port, process.env.IP || '0.0.0.0', function(error) {
        var addr = app.address();

        if (addr.address === '0.0.0.0') {
            addr.address = 'localhost';
        }

        var domainURL = (isUseHTTPs ? 'https' : 'http') + '://' + addr.address + ':' + addr.port + '/';

        console.log('------------------------------');

        console.log('socket.io is listening at:');
        console.log('\x1b[31m%s\x1b[0m ', '\t' + domainURL);

        console.log('\n');

        console.log('Your web-browser (HTML file) MUST set this line:');
        console.log('\x1b[31m%s\x1b[0m ', 'connection.socketURL = "' + domainURL + '";');

        if (addr.address != 'localhost' && !isUseHTTPs) {
            console.log('Warning:');
            console.log('\x1b[31m%s\x1b[0m ', 'Please set isUseHTTPs=true to make sure audio,video and screen demos can work on Google Chrome as well.');
        }

        console.log('------------------------------');
        console.log('Need help? http://bit.ly/2ff7QGk');
    });

    require('./Signaling-Server.js')(app, function(socket) {
        try {
            var params = socket.handshake.query;

            // "socket" object is totally in your own hands!
            // do whatever you want!

            // in your HTML page, you can access socket as following:
            // connection.socketCustomEvent = 'custom-message';
            // var socket = connection.getSocket();
            // socket.emit(connection.socketCustomEvent, { test: true });

            if (!params.socketCustomEvent) {
                params.socketCustomEvent = 'custom-message';
            }

            socket.on(params.socketCustomEvent, function(message) {
                try {
                    socket.broadcast.emit(params.socketCustomEvent, message);
                } catch (e) {}
            });
        } catch (e) {}
    });
}

if (autoRebootServerOnFailure) {
    // auto restart app on failure
    var cluster = require('cluster');
    if (cluster.isMaster) {
        cluster.fork();

        cluster.on('exit', function(worker, code, signal) {
            cluster.fork();
        });
    }

    if (cluster.isWorker) {
        runServer();
    }
} else {
    runServer();
}
