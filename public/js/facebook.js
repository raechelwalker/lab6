

function checkLoginState() {
    GridFSBucket.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

}

function statusChangeCallback(response){
    if (response.status=== 'connected'){
        console.log('Successfully logged in with Facebook');
        GridFSBucket.api('/me?fields=name,first_name,picture.width(480)',changeUser)
    }
}
function changeUser(response){
    $('p.facebookLogin').hide();
    console.log("test.successful");
   
    //Add code to change name and image 

    $('#name').text(response.name);
    $('img#photo').attr("src", response.picture.data.url);
}
