var WIN_WIDTH = 1024
var WIN_HEIGHT = 768
var RADIUS = 8
var MARGIN_LEFT = 60
var MARGIN_TOP = 30

const endtime = new Date(2017,11,25,0,0,0)
var curShowTimeSeconds = 0

window.onload = function (ev) {
    var canvas = document.getElementById("canvas")
    canvas.width = WIN_WIDTH
    canvas.height = WIN_HEIGHT

    var context = canvas.getContext("2d")
    curShowTimeSeconds = getCurrentShowTimeSeconds()
    render( context )
    setInterval(function () {
        render(context)
        update()
    },50)
}

function update() {
    var nextShowTimeSeconds = getCurrentShowTimeSeconds()
    var hours = parseInt(nextShowTimeSeconds/3600)
    var minutes = parseInt((nextShowTimeSeconds - hours*3600)/60)
    var seconds = parseInt(nextShowTimeSeconds%60)

    var nextHours = parseInt(curShowTimeSeconds/3600)
    var nextMinutes = parseInt((curShowTimeSeconds - hours*3600)/60)
    var nextSeconds = parseInt(curShowTimeSeconds%60)

    if(nextSeconds != seconds){
        curShowTimeSeconds = nextShowTimeSeconds
    }

}

function getCurrentShowTimeSeconds() {
    var curTime = new Date()
    var ret = endtime.getTime() - curTime.getTime()
    ret = Math.round(ret/1000)
    return ret >=0 ? ret : 0
}

function render( cxt ) {
    cxt.clearRect(0,0,WIN_WIDTH,WIN_HEIGHT)

    var hours = parseInt(curShowTimeSeconds/3600)
    var minutes = parseInt((curShowTimeSeconds - hours*3600)/60)
    var seconds = parseInt(curShowTimeSeconds%60)

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