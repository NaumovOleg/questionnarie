const gapi = window.gapi;

function start() {

    gapi.client.init({
        'apiKey': 'AIzaSyDRlP_xNuxnfRGhv_zNbZohGLJpV1zVaAc',
        // Your API key will be automatically added to the Discovery Document URLs.
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        // clientId and scope are optional if auth is not required.
        // 'redirect_uris': ["http://localhost:3000"],
        'clientId': '1001705151822-qme1fk5m2k70r73dea6bag79b5vob82b.apps.googleusercontent.com',
        scope: 'email profile https://www.googleapis.com/auth/calendar',
    }).then(function() {

        return gapi.client.calendar.calendarList.get({
            // calendarId:'keeperoleg26@gmail.com'
            // 'resourceName': '/users/me/calendarList/keeperoleg26@gmail.com',
            // 'requestMask.includeField': 'person.names'
        });
    }).then(function(response) {
        console.log('-------------dddd', response.result);
    }, function(reason) {
        console.log(JSON.stringify(reason));
        console.log('eeeeeeeeeeeeeeeeeee Error: ' +  reason);
    });
};

exports.google =  {start:  start,gapi:gapi }