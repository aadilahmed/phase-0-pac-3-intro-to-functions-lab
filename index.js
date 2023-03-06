function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const whisperMessage = "I can't hear you!";
    const shoutMessage = "YES INDEED!";
    const dinnerMessage = "I would love to!";

    if(string === string.toLowerCase()) {
        return whisperMessage;
    }
    else if(string === string.toUpperCase()) {
        return shoutMessage;
    }
    else if(string === "Let\'s have dinner together!") {
        return dinnerMessage;
    }
}