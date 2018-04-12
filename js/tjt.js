//open navigation
$(function(){
  $("#open-nav").click(function() {
    $("#main").css("margin-left", "20%");
    $("#nav-bar").css("width", "20%");
    $("#nav-bar").css("display", "block");
    $("#open-nav").css("display", "none");
  });
});
//close navigation
$(function(){
  $("#close-nav").click(function() {
    $("#main").css("margin-left", "0%");
    $("#nav-bar").css("display", "none");
    $("#open-nav").css("display", "inline-block");
  });
});
//random footer text
var footerStrings = [
  "┬─┬ノ( º _ ºノ)",
  "(╯°□°）╯︵ ┻━┻",
  "(╯°□°）╯︵ ┻━┻",
  "¯\\_(ツ)_/¯",
  "ʕ•ᴥ•ʔ",
  "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)",
  "ლ(ಠ益ಠლ)",
  "(/) (°,,°) (/)",
  "(ʘᗩʘ')",
  "(づ￣ ³￣)づ",
  "(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)",
  "(◕‿◕✿)",
  "(ᵔᴥᵔ)",
  "┬┴┬┴┤ ͜ʖ ͡°) ├┬┴┬┴",
  "(ง ͠° ͟ل͜ ͡°)ง",
  "ヾ(⌐■_■)ノ♪",
  "ಠ╭╮ಠ",
  "♪~ ᕕ(ᐛ)ᕗ",
  "◉_◉",
  "(~˘▾˘)~",
  "\\ (•◡•) /",
  "You have entered secret debugging mode.",
  "Please stand-by",
  "Are you still there?",
  "More content loading...",
  "This is a test footer. Please Ignore.",
  "﴾͡๏̯͡๏﴿ O'RLY?",
  "Help! I'm trapped in the web!",
  "The cake is a lie.",
  "[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]",
  "Jeff was here!",
  "report torb pls",
  "I spent way too much time on making this random",
  "99 little bugs in the code, 99 little bugs. Take one down, patch it around, 127 little bugs in the code.",
  "secret text"
  ];
$(function(){
  $(".random-footer-text").html(footerStrings[Math.floor(Math.random()*footerStrings.length)]);
});
