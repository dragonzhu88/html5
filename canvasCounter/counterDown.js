var WIN_WIDTH = 1024
var WIN_HEIGHT = 768
var RADIUS = 8
var MARGIN_LEFT = 60
var MARGIN_TOP = 30

window.onload = function (ev) {
    var canvas = document.getElementById("canvas")
    canvas.width = WIN_WIDTH
    canvas.height = WIN_HEIGHT

    var context = canvas.getContext("2d")

    render( context )
}

function render( cxt ) {
    var hours = 12
    var minutes = 34
    var seconds = 56

    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), cxt)
    renderDigit(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP,parseInt(hours%10), cxt)
    renderDigit(MARGIN_LEFT + 30*(RADIUS+1),MARGIN_TOP,10,cxt)
    renderDigit(MARGIN_LEFT + 39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt)
    renderDigit(MARGIN_LEFT + 54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt)
    renderDigit(MARGIN_LEFT + 69*(RADIUS+1),MARGIN_TOP,10,cxt)
    renderDigit(MARGIN_LEFT + 78*(RADIUS+1),MARGIN_TOP,parseInt(seconds/10),cxt)
    renderDigit(MARGIN_LEFT + 93*(RADIUS+1),MARGIN_TOP,parseInt(seconds%10),cxt)
}

function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = "#0000FF"

    for(var i=0; i < digit[num].length;i++){
        for(var j=0; j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){
                cxt.beginPath()
                cxt.arc(x + j*2*(RADIUS+1)+RADIUS+1, y+i*2*(RADIUS+1)+RADIUS+1,RADIUS, 0, 2*Math.PI)
                cxt.closePath()

                cxt.fill()
            }
        }
    }
}