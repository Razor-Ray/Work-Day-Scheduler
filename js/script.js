var currentTime = moment()
var currentHour = moment().hour()
var hoursBlocks = []
var hoursBlock24hour = []
var bodyEl = $('.container')

for(i=9;i<18;i++){
    hoursBlocks.push(moment(i+":00","h:mm").format("hhA"));
    hoursBlock24hour.push(moment(i+":00","h:mm").format("H"))
}

for(var i =0; i<hoursBlocks.length; i++){
    bodyEl.append('<div id ="'+ hoursBlock24hour[i] +'"class="row time-block"><div class="col-md-1 hour">'+hoursBlocks[i] +'</div><textarea class="col-md-10 description"></textarea><button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button></div>')
}

function setTimeBlockClass() {
    var timeNow = moment().hour();
     $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));
        console.log(blockTime)
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}
setTimeBlockClass();