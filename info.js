var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var item3 = document.getElementById("item3");
var item4 = document.getElementById("item4");
var info3 = document.getElementById("info3");

item1.addEventListener("click", function(){
    info1.innerHTML = "Basketball is a competitive sport.";
    info2.innerHTML = "The objective of the game is to get more points than the other team.";
    info3.innerHTML = "In order to score a point you must throw the ball into the opposing teams hoop.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "Soccer is also a competitve sport like basketball.";
    info2.innerHTML = "unlike basketball you use your feet to kick the ball in soccer."; 
    info3.innerHTML = "In order to score a goal you must kick the ball into the opposing teams net.";
});
   item3.addEventListener("click", function(){
    info1.innerHTML = "Hockey is much like soccer in the sense that you must get points by hitting things into a goal.";
    info2.innerHTML = "unlike soccer hockey you must use a hockey stick to hit a puck.";
    info3.innerHTML = "You are also on ice much unlike soccer which is usually played on the grass.";
});
    item4.addEventListener("click", function(){
    info1.innerHTML = "Football is somewhat like basketball in the sense that you must throw a ball.";
    info2.innerHTML = "Unlike basketball you must get the ball into an end zone.";
    info3.innerHTML = "Also in football you can tackle the opposing team to make getting to the end zone harder.";
});    

