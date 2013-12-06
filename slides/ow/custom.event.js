// user.create.js
var resultEL = document.getElementById( 'result' );
document.addEventListener( 'user/create', function ( event ) {
    resultEL.innerHTML = event.detail.username;
} );

// another.file.js
document.addEventListener( 'user/create', function ( event ) {
    console.log( 'Event user/create triggered with: ' + event.detail.username );
} );

// another.file.again.js
document.addEventListener( 'user/create', function ( event ) {
    alert( 'Hey OttawaJS ' + event.detail.username + ' says hi!' );
} );

// user.js
var customEl = document.getElementById( 'custom' );
customEl.addEventListener( 'click', function ( event ) {
    var user = event.target.innerHTML;
    var customEvent = new CustomEvent( 'user/create', {
        detail: {
            username: user
        }
    });
    document.dispatchEvent( customEvent );
}, false );