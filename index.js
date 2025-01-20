document.addEventListener("DOMContentLoaded", () => { //This event listner will be added to the whole DOM page.
    //Here we can add our game logic.
    let ball = document.getElementById("ping-pong-ball"); //Targetting the ball element.
    let table = document.getElementById("ping-pong-table");

    //Here the ballxand bally are helping us to set a starting point of the ball w.r.t table
    let ballX = 10; //coordinate of the top of the ball w.r.t top of the table
    let ballY = 10; //distance from the left of the ball w.r.t left of the table

    let dx = 2; //Displacement factor in x-direction, 2 -> means you will displace 2px in +x direction, -2 -> means you will displace in -x direction.
    let dy = 2; //Displacement factor in y-direction, 2 -> means you will displace 2px in +y direction, -2 -> means you will displace in -y direction.

    //Intializing the intial position of the ball
    ball.style.left = (`${ballX}px`);
    ball.style.top = (`${ballY}px`);

    setInterval(function exec() { //In setInterval callback function the given callback is executed after passed timmer in miliseconds.
        /**
         * So what we are saying here is that after every 1 milisecond increase te ballx with the dx quantity
         */
        ballX += dx;
        ballY += dy;
        ball.style.left = (`${ballX}px`);
        ball.style.top = (`${ballY}px`);

        // if(ballX > 680 || ballX <= 0)     dx *= -1; //If the ballX value is greater than 500px value then change the direction. Or infact if the ball goes less than 0 then too we need to change the direction. And in the table width we to need to subtract our ball width.
        // if(ballY > 380 || ballY <= 0)     dy *= -1; //If the ballY value is greater than 400px value then change the direction. Or infact if the ball goes less than 0 then too we need to change the direction. And in the table height we to need to subtract our ball height.

        if(ballX > table.offsetWidth - ball.offsetWidth || ballX <=0)  dx *= -1;
        if(ballY > table.offsetHeight - ball.offsetHeight || ballY <=0)  dy *= -1;
    }, 4);

}); 