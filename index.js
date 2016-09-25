(function() {

var SHOW_POLL_DELAY_SECONDS = 5;

window.addEventListener("load", function() {
    var videoEl = document.getElementById("video-player");
    var pollEl = document.getElementById("s4-poll");
    var yesButton = document.getElementById("s4-poll-yes");
    var noButton = document.getElementById("s4-poll-no");

    function onTimeupdate(e) {
        var showPoll = videoEl.currentTime >= SHOW_POLL_DELAY_SECONDS;

        if(showPoll) {
            pollEl.classList.add("show-poll");
            videoEl.removeEventListener("timeupdate", onTimeupdate);
        }
    }

    function answeredPoll(answeredYes) {
        pollEl.classList.add("answered-poll");
        yesButton.disabled = true;
        noButton.disabled = true;
        pollEl.classList.add("answered-" + (answeredYes ? "yes" : "no"));
    }

    videoEl.addEventListener("timeupdate", onTimeupdate);
    yesButton.addEventListener("click", answeredPoll.bind(null, true));
    noButton.addEventListener("click", answeredPoll.bind(null, false));
});

})();
