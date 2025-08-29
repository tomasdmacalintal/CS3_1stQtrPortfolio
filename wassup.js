console.log("wassup mothertrucker")

rl = require('readline')
rli = rl.createInterface({
    input : process.stdin,
})
rli.on('line', get_inputs)
function get_inputs(line) {
    if(line !=="END")
        inputs.push(line)
    else
        rli.close()
}
var inputs = []

rli.on('close', get_the_channel)

function get_the_channel(line) {
    for (let i=0; i<inputs.length; i++){
        switch(inputs[i]){
            case "1":
                console.log("You")
                break;
            case "2":
                console.log("Are")
                break;
            case "3":
                console.log("My")
                break;
            case "4":
                console.log("Sunshine")
                break;
            default:
                console.log("what?")
        }
    }
}