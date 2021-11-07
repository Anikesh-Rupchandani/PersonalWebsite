//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const people = [];
function menu(){

    var a= document.getElementById('hoo');
    if(a.style.display==="block"){
        a.style.display="none";
    }
    else{
        a.style.display="block";
    }
}
function myfunctio() {
    var dots= document.getElementById("dot");
    var moretext= document.getElementById("mor");
    var btntext= document.getElementById("mybt");
    if(dots.style.display==="none"){
        dots.style.display="inline";
        btntext.innerHTML="Read more";
        moretext.style.display="none";



    }
    else{
        dots.style.display="none";
        btntext.innerHTML="Read less";
        moretext.style.display="inline";
    }}

    function myfunction3() {
        var dots= document.getElementById("dots3");
        var moretext= document.getElementById("more3");
        var btntext= document.getElementById("mybtn3");
        if(dots.style.display==="none"){
            dots.style.display="inline";
            btntext.innerHTML="Read more";
            moretext.style.display="none";



        }
        else{
            dots.style.display="none";
            btntext.innerHTML="Read less";
            moretext.style.display="inline";
        }}
        function myfunction4() {
            var dots= document.getElementById("dots4");
            var moretext= document.getElementById("more4");
            var btntext= document.getElementById("mybtn4");
            if(dots.style.display==="none"){
                dots.style.display="inline";
                btntext.innerHTML="Read more";
                moretext.style.display="none";



            }
            else{
                dots.style.display="none";
                btntext.innerHTML="Read less";
                moretext.style.display="inline";
            }}
            function myfunction5() {
                var dots= document.getElementById("dots5");
                var moretext= document.getElementById("more5");
                var btntext= document.getElementById("mybtn5");
                if(dots.style.display==="none"){
                    dots.style.display="inline";
                    btntext.innerHTML="Read more";
                    moretext.style.display="none";



                }
                else{
                    dots.style.display="none";
                    btntext.innerHTML="Read less";
                    moretext.style.display="inline";
                }}
                function myfunction6() {
                    var dots= document.getElementById("dots6");
                    var moretext= document.getElementById("more6");
                    var btntext= document.getElementById("mybtn6");
                    if(dots.style.display==="none"){
                        dots.style.display="inline";
                        btntext.innerHTML="Read more";
                        moretext.style.display="none";



                    }
                    else{
                        dots.style.display="none";
                        btntext.innerHTML="Read less";
                        moretext.style.display="inline";
                    }}
                function myfunction() {
                    var dots= document.getElementById("dots");
                    var moretext= document.getElementById("more");
                    var btntext= document.getElementById("mybtn");
                    if(dots.style.display==="none"){
                        dots.style.display="inline";
                        btntext.innerHTML="Read more";
                        moretext.style.display="none";



                    }
                    else{
                        dots.style.display="none";
                        btntext.innerHTML="Read less";
                        moretext.style.display="inline";
                    }}




app.get("/", function(req, res) {



  res.render("home", { newListItems: people});

});

app.post("/", function(req, res){

//  const person = req.body.newname;


  //  people.push(person);

  //  res.redirect("/");

});



app.get("/AnikeshRupchandani", function(req, res){
  res.render("AnikeshRupchandani");
});
app.get("/UtkarshPratapSingh", function(req, res){
  res.render("UtkarshPratapSingh");
});
app.get("/AyushTiwari", function(req, res){
  res.render("AyushTiwari");
});
app.get("/PriyanshiParida", function(req, res){
  res.render("PriyanshiParida");
});
app.get("/VaddadiJayaKumar", function(req, res){
  res.render("VaddadiJayaKumar");
});
app.get("/AnikeshRupchandani/Aboutanikesh", function(req, res){
  res.render("Aboutanikesh");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
