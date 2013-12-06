// user.create.js
var resultEL = document.getElementById( 'result' );
document.addEventListener( 'user/create', function ( event ) {
    resultEL.innerHTML = event.detail.username;
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