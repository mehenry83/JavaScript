
/**
 *
 *
 * @category    Midterm
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        3.5.2020
 * @grade
 **/

let Blueit = {

    siteApiUrl: '',

    upBtn1: null,
    downBtn1: null,

    init: function () {
        Blueit.siteApiUrl = "https://cislinux.hfcc.edu/~crbanks1";

        Blueit.upBtn1 = document.getElementById('up1');
        Blueit.upBtn1.onclick = Blueit.handleUpClick;
        Blueit.downBtn1 = document.getElementById('down1');
        Blueit.downBtn1.onclick = Blueit.handleDownClick;

        Blueit.upBtn2 = document.getElementById('up2');
        Blueit.upBtn2.onclick = Blueit.handleUpClick;
        Blueit.downBtn2 = document.getElementById('down2');
        Blueit.downBtn2.onclick = Blueit.handleDownClick;

        Blueit.upBtn3 = document.getElementById('up3');
        Blueit.upBtn3.onclick = Blueit.handleUpClick;
        Blueit.downBtn3 = document.getElementById('down3');
        Blueit.downBtn3.onclick = Blueit.handleDownClick;

        Blueit.upBtn4 = document.getElementById('up4');
        Blueit.upBtn4.onclick = Blueit.handleUpClick;
        Blueit.downBtn4 = document.getElementById('down4');
        Blueit.downBtn4.onclick = Blueit.handleDownClick;
    },
    handleUpClick: function( e )
    {
        Blueit.sendVoteToApi( e.target.id, 1 );
    },
    handleDownClick: function( e )
    {
        Blueit.sendVoteToApi( e.target.id, -1 );
    },
    try {
    sendVoteToApi: function( buttonId, Value )
    {
        // Value can be 1 or negative one
        $.ajax( Blueit.siteApiUrl, {action:"vote", pid:buttonId, val:Value} );
    }} catch {error};,
    sendNewPostToApi: function( dataObj )
    {
        $.ajax( Blueit.siteApiUrl, {action:"post", pid:buttonId, val:Value, data:dataObj} );
    }
};



window.onload = Blueit.init;