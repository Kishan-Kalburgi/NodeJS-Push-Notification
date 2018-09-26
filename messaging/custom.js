var FCM = require('fcm-node')
    
var serverKey = require('./service-account.json') //put the generated private key path here    

var fcm = new FCM(serverKey)

var message = { 
    //this may vary according to the message type 
        //(single recipient, multicast, topic, et cetera)
    to: 'ecsP0uw6aI8:APA91bGLGajaVNpht3JeoPTirvf3mway8CSBPMfBg4Vj0RXjZzi4lD3gM9XrwynBl-6L-pzoMcsE7lrkrlVM1-tWt5th040Xy9FWbqUYFxN75yNI63btSfG_3jMucKe9UMeqkqdTaX3R', 
    
    data: {
        title: 'DRRS', 
        body: 'This is for testing' 
    },
}

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!",err)
    } else {
        console.log("Successfully sent with response: ", response)
    }
})