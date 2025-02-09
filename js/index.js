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
$('.roulette-theme-name-div').hide();

$(document).on('mousemove', function(e){
    $('.roulette-theme-name-div').css({'top': e.pageY, 'left': e.pageX});
});


let timeout;

const themeIconElementData = $('.roulette-theme-icon').map(function(i){
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

function updateThemeIconPositions(deg){
    const radius = ((window.innerHeight + window.innerWidth)/2)/12;

    // console.log(radius);

    // console.log(themeIconElementData);

    for (let i = 0; i < themeIconElementData.length; i++){
        const spinGameStar = $('.spin-game-star');

        const spinGameStarPos = spinGameStar.position();

        const spinGameStarWidth = spinGameStar.outerWidth();
        const spinGameStarHeight = spinGameStar.outerHeight();

        const centerX = spinGameStarPos.left + (spinGameStarWidth / 2);
        
        // Applies a slight offset to lower the icons slightly for visual appeal
        const centerY = spinGameStarPos.top + (spinGameStarHeight / 2) + 20;

        const themeIconWidth = themeIconElementData[i].outerWidth();
        const themeIconHeight = themeIconElementData[i].outerHeight();



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

let currentRouletteWheelDeg = 0;

updateThemeIconPositions(currentRouletteWheelDeg);

window.addEventListener('resize', function(){
    updateThemeIconPositions(currentRouletteWheelDeg);
})

function getCurrentRotation(el){
    const st = window.getComputedStyle(el, null);
    const tm = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "none";
    if (tm != "none") {
      const values = tm.split('(')[1].split(')')[0].split(',');
      /*
      a = values[0];
      b = values[1];
      angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
      */
      //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
      const angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
      return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    }
    return 0;
  }


$(document).ready(function(){
    $('.spin-game-spin-button').on('click', function(){

        if ($('.spin-game-roulette').data('spinning')){
            // alert("Please wait until the roulette is done spinning.");
            return;
        };

        $('.spin-game-roulette').data('spinning', true);

        $(this).css({'background-color': 'gray', 'cursor': 'default'});

        let unadjustedCurrentSpeed = 2;
        let currentSpeed = 0;

        // let currentDeg = getCurrentRotation(document.querySelector('.spin-game-roulette'));

        $('.spin-game-roulette').animate({now: '+=1'}, {
            duration:10000*Math.random(),
            step: function(now,fx) {
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
            step: function(now,fx) {
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


    });


    $('.spin-game-spin-button').on('mouseenter', function(){
        const spinning = $('.spin-game-roulette').data('spinning');

        // console.log("enter: " + spinning);

        if (spinning == undefined || spinning == false){
            $(this).css({'cursor': 'pointer', 'background-color': 'rgb(244, 152, 222)'});
            
        }
    }).on('mouseleave', function(){

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
});

