'use client';

import $ from 'jquery';
import React, { useEffect } from 'react';

import '../spingamestyles.css';

// import Image from 'next/image';

// import spinGameRouletteImg from '../images/spin-game-roulette.png';
// import spinGameArrowImg from '../images/spin-game-arrow.png';
// import spinGameStarImg from '../images/spin-game-star.png';

// import spinGameStarRealImg from './spin-game-star.png';

// const spinGameRouletteImg = require('../images/spin-game-roulette.png').default;
// const spinGameArrowImg = require('../images/spin-game-arrow.png').default;
// const spinGameStarImg = require('../images/spin-game-star.png').default;


const rouletteThemeNameData = [
  'planets',
  'colors',
  'pets',
  'transportation',
  'genres of music',
  'body parts',
  'seasons',
  'types of drinks',
  'school subjects',
  'types of flowers',
];

const rouletteThemeIconData = [
  '🪐',
  '🎨',
  '🐶',
  '🚝',
  '🎶',
  '🧠',
  '🌿',
  '🥤',
  '📚',
  '💐',
];

// hide popups
// $('.roulette-spun-theme-popup-container').hide();

// hide roulette theme name div and make it follow mouse
// $('.roulette-theme-name-div').hide();

// $(document).on('mousemove', function(e:JQuery.MouseMoveEvent){
//     $('.roulette-theme-name-div').css({'top': e.pageY, 'left': e.pageX});
// });


let timeout: ReturnType<typeof setTimeout>;

let themeIconElementData: JQuery<HTMLElement>[];

// const themeIconElementData = $('.roulette-theme-icon').map(function(this:HTMLElement, i:number){
//     this.innerHTML = rouletteThemeIconData[i];

//     const jqueryObj = $(this);

//     jqueryObj.on('mouseenter', function(){

//         // $('.roulette-theme-name-div').show();
//         // $('.roulette-theme-name-div').text(rouletteThemeNameData[i]);
//         // console.log("showing");
//         clearTimeout(timeout); // Clear any existing timeout
//         // $('.roulette-theme-name-div').stop(true, true).fadeIn(200); // Show the element with fade effect
//         $('.roulette-theme-name-div').stop(true, true).show();
//         $('.roulette-theme-name-div').text(rouletteThemeNameData[i]);
//         $(".roulette-theme-name-div").width(0);
//         $(".roulette-theme-name-div").width( $(".roulette-theme-name-div")[0].scrollWidth);
//         $(".roulette-theme-name-div").height(0);
//         $(".roulette-theme-name-div").height( $(".roulette-theme-name-div")[0].scrollHeight);
//         // console.log("showing");

//     }).on('mouseleave', function(){
//         // console.log("hiding");
//         // $('.roulette-theme-name-div').hide();
//         timeout = setTimeout(function() {
//             // $('.roulette-theme-name-div').stop(true, true).fadeOut(200); // Hide the element with fade effect
//             $('.roulette-theme-name-div').stop(true, true).hide();
//             // console.log("hiding");
//         }, 400); // Delay the hide to allow for potential mouse enter
//     })

//     return jqueryObj;
// }).get();

function updateThemeIconPositions(deg:number){
    const radius = ((window.innerHeight + window.innerWidth)/2)/12;

    // console.log(radius);

    // console.log(themeIconElementData);
    
    // // Fixing the Bug by Ignoring it?
    // if (themeIconElementData === undefined){
    //     return;
    // }

    for (let i = 0; i < themeIconElementData.length; i++){
        const spinGameStar = $('.spin-game-star');

        const spinGameStarPos = spinGameStar.position();

        const spinGameStarWidth = spinGameStar.outerWidth();
        // const spinGameStarHeight = spinGameStar.outerHeight();
        const spinGameStarHeight = spinGameStarWidth;

        const centerX = spinGameStarPos.left + (spinGameStarWidth / 2);
        
        // Applies a slight offset to lower the icons slightly for visual appeal
        // Updated now it does not :)
        const centerY = spinGameStarPos.top + (spinGameStarHeight / 2);

        const themeIconWidth = themeIconElementData[i].outerWidth() as number;
        const themeIconHeight = themeIconElementData[i].outerHeight() as number;



        const elementDeg = deg + (i * (360 / themeIconElementData.length));

        const xOffset = radius * Math.cos(elementDeg * Math.PI / 180);
        const yOffset = radius * Math.sin(elementDeg * Math.PI / 180);

        // console.log(spinGameStarPos)

        const newCenterX = centerX + xOffset;
        const newCenterY = centerY + yOffset;

        const newLeft = newCenterX - (themeIconWidth / 2);
        const newTop = newCenterY - (themeIconHeight / 2);

        // console.log(newTop, newLeft)

        themeIconElementData[i].css({top: newTop, left: newLeft})

        // themeIconElementData[i].offset({top: spinGameStarPos.top, left: spinGameStarPos.left})

        // themeIconElementData[i].offset({top: spinGameStarPos.top + yOffset, left: spinGameStarPos.left + xOffset});
    }
}

// const [currentRouletteWheelDeg, setCurrentRouletteWheelDeg] = useState(0);

let currentRouletteWheelDeg = 0;

// updateThemeIconPositions(currentRouletteWheelDeg);

// window.addEventListener('resize', function(){
//     updateThemeIconPositions(currentRouletteWheelDeg);
// })

// function getCurrentRotation(el:HTMLElement){
//     const st = window.getComputedStyle(el, null);
//     const tm = st.getPropertyValue("-webkit-transform") ||
//              st.getPropertyValue("-moz-transform") ||
//              st.getPropertyValue("-ms-transform") ||
//              st.getPropertyValue("-o-transform") ||
//              st.getPropertyValue("transform") ||
//              "none";
//     if (tm != "none") {
//       const values:string[] = tm.split('(')[1].split(')')[0].split(',');
//       /*
//       a = values[0];
//       b = values[1];
//       angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
//       */
//       //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
//       const angle = Math.round(Math.atan2(parseFloat(values[1]),parseFloat(values[0])) * (180/Math.PI));
//       return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
//     }
//     return 0;
// }

// const ff = function(){
//     console.log("lol");

// }


const handleSpinButtonClick = function(this:HTMLElement){

    // console.log("hoi");

    if ($('.spin-game-roulette').data('spinning')){
        // alert("Please wait until the roulette is done spinning.");
        return;
    };

    $('.spin-game-roulette').data('spinning', true);

    $('.spin-game-spin-button').css({'background-color': 'gray', 'cursor': 'default'})

    let unadjustedCurrentSpeed = 2;
    let currentSpeed = 0;

    // let currentDeg = getCurrentRotation(document.querySelector('.spin-game-roulette'));

    $('.spin-game-roulette').animate({now: '+=1'}, {
        duration:10000*Math.random(),
        // step: function(now:number,fx:JQuery.Tween<HTMLElement>) {
        step: function() {
            unadjustedCurrentSpeed += 10000*Math.random();

            currentSpeed = Math.log(unadjustedCurrentSpeed);

            $('.spin-game-roulette').css('transform','rotate('+(currentSpeed + currentRouletteWheelDeg)+'deg)');

            updateThemeIconPositions(currentRouletteWheelDeg);
            
            // console.log('increasing speed to '+(currentSpeed)+' deg)');

            currentRouletteWheelDeg = (currentRouletteWheelDeg + currentSpeed) % 360;

        }
    });

    $('.spin-game-roulette').animate({now: '+=1'}, {
        duration:18000*Math.random(),
        // step: function(now:number,fx:JQuery.Tween<HTMLElement>) {
        step: function() {
            currentSpeed *= 0.985 + Math.random()*0.01;

            $('.spin-game-roulette').css('transform','rotate('+(currentSpeed + currentRouletteWheelDeg)+'deg)');

            updateThemeIconPositions(currentRouletteWheelDeg);

            // console.log('decreasing speed to '+(currentSpeed)+' deg)');

            currentRouletteWheelDeg = (currentRouletteWheelDeg + currentSpeed) % 360;
        },
        complete: function (){
            $('.spin-game-roulette').data('spinning', false)
            // console.log("STOP SPINNING: " + $('.spin-game-roulette').data('spinning'));

            // $('.spin-game-arrow').css('transform','rotate('+((currentRouletteWheelDeg + 270)%360)+'deg)');


            // skibidi trig calculation no one will EVER understand.
            let calculation = Math.round((((currentRouletteWheelDeg + 270)%360) / 360) * (rouletteThemeNameData.length));

            calculation = calculation > 0 ? calculation : rouletteThemeNameData.length;

            const spunIndex = rouletteThemeNameData.length - calculation;

            $('.roulette-spun-theme-popup-lower').text(rouletteThemeNameData[spunIndex]);
            // $('.roulette-spun-theme-popup-container').show();
            $('.roulette-spun-theme-popup-container').fadeIn();

            // $('.roulette-spun-theme-popup-upper').show();
            // $('.roulette-spun-theme-popup-lower').show();

            // themeIconElementData[spunIndex].css({'background-color': 'yellow'});

            // alert(((currentRouletteWheelDeg + 270)%360) + " degrees from current roulette wheel deg: " + rouletteThemeNameData[spunIndex]);

            $('.spin-game-spin-button').css('background-color', 'rgb(241, 119, 213)')
        }
    });


}



// $(document).ready(function(){
//     $('.spin-game-spin-button').on('click', function(this:HTMLElement){

//         if ($('.spin-game-roulette').data('spinning')){
//             // alert("Please wait until the roulette is done spinning.");
//             return;
//         };

//         $('.spin-game-roulette').data('spinning', true);

//         $(this).css({'background-color': 'gray', 'cursor': 'default'});

//         let unadjustedCurrentSpeed = 2;
//         let currentSpeed = 0;

//         // let currentDeg = getCurrentRotation(document.querySelector('.spin-game-roulette'));

//         $('.spin-game-roulette').animate({now: '+=1'}, {
//             duration:10000*Math.random(),
//             step: function(now:number,fx:JQuery.Tween<HTMLElement>) {
//                 unadjustedCurrentSpeed += 10000*Math.random();

//                 currentSpeed = Math.log(unadjustedCurrentSpeed);

//                 $('.spin-game-roulette').css('transform','rotate('+(currentSpeed + currentRouletteWheelDeg)+'deg)');

//                 updateThemeIconPositions(currentRouletteWheelDeg);
                
//                 // console.log('increasing speed to '+(currentSpeed)+' deg)');

//                 currentRouletteWheelDeg = (currentRouletteWheelDeg + currentSpeed) % 360;

//             }
//         });

//         $('.spin-game-roulette').animate({now: '+=1'}, {
//             duration:18000*Math.random(),
//             step: function(now:number,fx:JQuery.Tween<HTMLElement>) {
//                 currentSpeed *= 0.985 + Math.random()*0.01;

//                 $('.spin-game-roulette').css('transform','rotate('+(currentSpeed + currentRouletteWheelDeg)+'deg)');

//                 updateThemeIconPositions(currentRouletteWheelDeg);

//                 // console.log('decreasing speed to '+(currentSpeed)+' deg)');

//                 currentRouletteWheelDeg = (currentRouletteWheelDeg + currentSpeed) % 360;
//             },
//             complete: function (){
//                 $('.spin-game-roulette').data('spinning', false)
//                 // console.log("STOP SPINNING: " + $('.spin-game-roulette').data('spinning'));

//                 // $('.spin-game-arrow').css('transform','rotate('+((currentRouletteWheelDeg + 270)%360)+'deg)');


//                 // skibidi trig calculation no one will EVER understand.
//                 let calculation = Math.round((((currentRouletteWheelDeg + 270)%360) / 360) * (rouletteThemeNameData.length));

//                 calculation = calculation > 0 ? calculation : rouletteThemeNameData.length;

//                 const spunIndex = rouletteThemeNameData.length - calculation;

//                 $('.roulette-spun-theme-popup-lower').text(rouletteThemeNameData[spunIndex]);
//                 // $('.roulette-spun-theme-popup-container').show();
//                 $('.roulette-spun-theme-popup-container').fadeIn();

//                 // $('.roulette-spun-theme-popup-upper').show();
//                 // $('.roulette-spun-theme-popup-lower').show();

//                 // themeIconElementData[spunIndex].css({'background-color': 'yellow'});

//                 // alert(((currentRouletteWheelDeg + 270)%360) + " degrees from current roulette wheel deg: " + rouletteThemeNameData[spunIndex]);

//                 $('.spin-game-spin-button').css('background-color', 'rgb(241, 119, 213)')
//             }
//         });


//     });


//     $('.spin-game-spin-button').on('mouseenter', function(this:HTMLElement){
//         const spinning = $('.spin-game-roulette').data('spinning');

//         // console.log("enter: " + spinning);

//         if (spinning == undefined || spinning == false){
//             $(this).css({'cursor': 'pointer', 'background-color': 'rgb(244, 152, 222)'});
            
//         }
//     }).on('mouseleave', function(this:HTMLElement){

//         const spinning = $('.spin-game-roulette').data('spinning');

//         // console.log("leave: " + spinning)

//         if (spinning == undefined || spinning == false){
//             $(this).css({'cursor': 'default', 'background-color': 'rgb(241, 119, 213)'});
//         } else {
//             $(this).css({'cursor': 'default'});
//         }

//     })


//     $('.roulette-spun-theme-popup-close-button').on('click', function(){
//         // $('.roulette-spun-theme-popup-container').hide();
//         $('.roulette-spun-theme-popup-container').fadeOut(150);
//     });
// });



export default function SpinGame() {
  useEffect(() => {
    // $('#spinText').text('The spin is happening!');

    $('.roulette-theme-name-div').hide();

    // console.log("hi");

    $(document).on('mousemove', function(e:JQuery.MouseMoveEvent){
        const offset = $('.bg-black-container').offset();

        $('.roulette-theme-name-div').css({'top': e.pageY - offset.top, 'left': e.pageX - offset.left});
        // $('.roulette-theme-name-div').css({'top': e.clientY, 'left': e.clientX});
    });


    themeIconElementData = $('.roulette-theme-icon').map(function(this:HTMLElement, i:number){
      this.innerHTML = rouletteThemeIconData[i];
  
      const jqueryObj = $(this);
  
      jqueryObj.on('mouseenter', function(){
  
          // $('.roulette-theme-name-div').show();
          // $('.roulette-theme-name-div').text(rouletteThemeNameData[i]);
          // console.log("showing");
          clearTimeout(timeout); // Clear any existing timeout
          // $('.roulette-theme-name-div').stop(true, true).fadeIn(200); // Show the element with fade effect
          $('.roulette-theme-name-div').stop(true, true).show();
          $('.roulette-theme-name-div').text(rouletteThemeNameData[i]);
          $(".roulette-theme-name-div").width(0);
          $(".roulette-theme-name-div").width( $(".roulette-theme-name-div")[0].scrollWidth);
          $(".roulette-theme-name-div").height(0);
          $(".roulette-theme-name-div").height( $(".roulette-theme-name-div")[0].scrollHeight);
          // console.log("showing");
  
      }).on('mouseleave', function(){
          // console.log("hiding");
          // $('.roulette-theme-name-div').hide();
          timeout = setTimeout(function() {
              // $('.roulette-theme-name-div').stop(true, true).fadeOut(200); // Hide the element with fade effect
              $('.roulette-theme-name-div').stop(true, true).hide();
              // console.log("hiding");
          }, 400); // Delay the hide to allow for potential mouse enter
      })
  
      return jqueryObj;
    }).get();
  
    // function updateThemeIconPositions(deg:number){
    //     const radius = ((window.innerHeight + window.innerWidth)/2)/12;
    
    //     // console.log(radius);
    
    //     // console.log(themeIconElementData);
    
    //     for (let i = 0; i < themeIconElementData.length; i++){
    //         const spinGameStar = $('.spin-game-star');
    
    //         const spinGameStarPos = spinGameStar.position();
    
    //         const spinGameStarWidth = spinGameStar.outerWidth();
    //         const spinGameStarHeight = spinGameStar.outerHeight();
    
    //         const centerX = spinGameStarPos.left + (spinGameStarWidth / 2);
            
    //         // Applies a slight offset to lower the icons slightly for visual appeal
    //         const centerY = spinGameStarPos.top + (spinGameStarHeight / 2) + 20;
    
    //         const themeIconWidth = themeIconElementData[i].outerWidth();
    //         const themeIconHeight = themeIconElementData[i].outerHeight();
    
    
    
    //         const elementDeg = deg + (i * (360 / themeIconElementData.length));
    
    //         const xOffset = radius * Math.cos(elementDeg * Math.PI / 180);
    //         const yOffset = radius * Math.sin(elementDeg * Math.PI / 180);
    
    //         // console.log(spinGameStarPos)
    
    //         const newCenterX = centerX + xOffset;
    //         const newCenterY = centerY + yOffset;
    
    //         const newLeft = newCenterX - (themeIconWidth / 2);
    //         const newTop = newCenterY - (themeIconHeight / 2);
    
    //         // console.log(newTop, newLeft)
    
    //         themeIconElementData[i].css({top: newTop, left: newLeft})
    
    //         // themeIconElementData[i].offset({top: spinGameStarPos.top, left: spinGameStarPos.left})
    
    //         // themeIconElementData[i].offset({top: spinGameStarPos.top + yOffset, left: spinGameStarPos.left + xOffset});
    //     }
    // }
    
    // let currentRouletteWheelDeg = 0;
    
    updateThemeIconPositions(currentRouletteWheelDeg);
    
    window.addEventListener('resize', function(){
        updateThemeIconPositions(currentRouletteWheelDeg);
    })
    
    // function getCurrentRotation(el:HTMLElement){
    //     const st = window.getComputedStyle(el, null);
    //     const tm = st.getPropertyValue("-webkit-transform") ||
    //             st.getPropertyValue("-moz-transform") ||
    //             st.getPropertyValue("-ms-transform") ||
    //             st.getPropertyValue("-o-transform") ||
    //             st.getPropertyValue("transform") ||
    //             "none";
    //     if (tm != "none") {
    //       const values:string[] = tm.split('(')[1].split(')')[0].split(',');
    //       /*
    //       a = values[0];
    //       b = values[1];
    //       angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
    //       */
    //       //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
    //       const angle = Math.round(Math.atan2(parseFloat(values[1]),parseFloat(values[0])) * (180/Math.PI));
    //       return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    //     }
    //     return 0;
    //   }
    
    
    // $(document).ready(function(){

    
    
    // $('.spin-game-spin-button').on('click', handleSpinButtonClick);


    $('.spin-game-spin-button').on('mouseenter', function(this:HTMLElement){
        const spinning = $('.spin-game-roulette').data('spinning');

        // console.log("enter: " + spinning);

        if (spinning == undefined || spinning == false){
            $(this).css({'cursor': 'pointer', 'background-color': 'rgb(244, 152, 222)'});
            
        }
    }).on('mouseleave', function(this:HTMLElement){

        const spinning = $('.spin-game-roulette').data('spinning');

        // console.log("leave: " + spinning)

        if (spinning == undefined || spinning == false){
            $(this).css({'cursor': 'default', 'background-color': 'rgb(241, 119, 213)'});
        } else {
            $(this).css({'cursor': 'default'});
        }

    })


    $('.roulette-spun-theme-popup-close-button').on('click', function(){
        // $('.roulette-spun-theme-popup-container').hide();
        $('.roulette-spun-theme-popup-container').fadeOut(150);
    });


    // return () => {
    //     $('.spin-game-spin-button').off('click', handleSpinButtonClick);
    // };

    // });

  }, []);

  return (
    <div className="relative">
{/* display: none;
  
  position: fixed;

  top: 50%;
  left: 50%;

  margin-top: -15vh;
  margin-left: -25vw;

  height: 30vh;
  width: 50vw;

  background-color: rgb(50, 50, 50);
  
  border-radius: 20px;

  z-index: 10000000000; */}
  {/* flex justify-center bg-black relative */}

        <div className="bg-black-container">
            {/* <button onClick={ff}>hey there</button>
            <div>HI</div>
            <button onClick={ff}>hey there</button>
            <button onClick={ff}>hey there</button>
            <div>HI</div>
            <button onClick={ff}>hey there</button> */}

            <div className="slot-machine-container z-1000">

                <div className="slot-machine-container-upper z-1000">
                    {/* <img className="spin-game-roulette z-1000" src={spinGameRouletteImg} alt="roulette wheel"/>
                    <img className="spin-game-star z-1000" src={spinGameStarImg} alt="star"/>
                    <img className="spin-game-arrow z-1000" src={spinGameArrowImg} alt="arrow"/> */}

                    {/* <Image className="spin-game-roulette z-1000" src={spinGameRouletteImg} alt="roulette wheel"/>
                    <Image className="spin-game-star z-1000" src={spinGameStarImg} alt="star"/>
                    <Image className="spin-game-arrow z-1000" src={spinGameArrowImg} alt="arrow"/> */}

                    {/* <div className="responsive-image-wrapper"> */}

                    <img className="spin-game-roulette" src="/spin-game-roulette.png" alt="roulette wheel"/>
                    <img className="spin-game-star" src="/spin-game-star.png" alt="star"/>
                    <img className="spin-game-arrow" src="/spin-game-arrow.png" alt="arrow"/>

                    {/* </div> */}

                    <p className="roulette-theme-icon z-1001"></p>
                    <p className="roulette-theme-icon z-1001"></p>
                    <p className="roulette-theme-icon z-1001"></p>
                    <p className="roulette-theme-icon z-1001"></p>
                    <p className="roulette-theme-icon z-1001"></p>
                    <p className="roulette-theme-icon z-1001"></p>
                    <p className="roulette-theme-icon z-1001"></p>
                    <p className="roulette-theme-icon z-1001"></p>
                    <p className="roulette-theme-icon z-1001"></p>
                    <p className="roulette-theme-icon z-1001"></p>

                </div>

                <div className="slot-machine-container-lower z-1000">
                    <button className="spin-game-spin-button z-1000" onClick={handleSpinButtonClick}>SPIN</button>
                    {/* <button onClick={ff}>HAOIFH</button> */}
                </div>

            </div>


            <div className="roulette-theme-name-div"></div>

            <div className="roulette-spun-theme-popup-container">
                <div className="roulette-spun-theme-popup-upper">
                    <p className="roulette-spun-theme-popup-header">
                        Theme
                    </p>

                    <button className="roulette-spun-theme-popup-close-button">
                        ✖
                    </button>
                </div>

                <div className="roulette-spun-theme-popup-lower">
                    Seasons
                </div>
            </div>
        </div>



    </div>
  );
}

