var currentTime = moment()
var currentHour = moment()
var hoursBlocks = []

var tableBodyEl = $('#tableBody')

for(i=9;i<18;i++){
    hoursBlocks.push(moment(i+":00","h:mm").format("hhA"))
}



console.log(hoursBlocks)

for(var i =0; i<hoursBlocks.length; i++){
    tableBodyEl.append(
        '<tr class="row"><td data-label="hour"class="hour">'+hoursBlocks[i]+'</td><td data-label="text"><textarea name="text-area"class="past"id="textArea"></textarea></td><td data-label="SaveButton"><button class="saveBtn">Save</button></td></tr>'
    )}