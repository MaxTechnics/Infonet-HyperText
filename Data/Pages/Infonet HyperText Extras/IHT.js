// Infonet HyperText Script File
// Credits to Wout P. for making this file possible!

   //////////////////////////////////////////
  //  Infonet HyperText Update Notifier   //
 // Entirely written by Maxim Coppieters //
//////////////////////////////////////////
var currentVersion = 47
var latestVersion = 0
setTimeout(() => {
  if (latestVersion == currentVersion) {
    console.log("Up to date");
  }
  else if (latestVersion > currentVersion) {
    console.warn("Update available");
    Swal.fire({
      showClass: {
        popup: 'fadein'
      },
      hideClass: {
        popup: 'fadeout'
      },
      toast: true,
      position: 'top-end',
      icon: 'info',
      title: 'A new version is available',
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
    })
  }
  else if (latestVersion == 0) {
    console.error("Update server offline");
    Swal.fire({
      showClass: {
        popup: 'fadein'
      },
      hideClass: {
        popup: 'fadeout'
      },
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: 'Could not reach the update server',
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
    })
  }
  else if (latestVersion > 0 && latestVersion < currentVersion) {
    console.error("Error checking for updates");
    Swal.fire({
      showClass: {
        popup: 'fadein'
      },
      hideClass: {
        popup: 'fadeout'
      },
      toast: true,
      position: 'top-end',
      icon: 'warning',
      title: 'There was a problem checking for updates',
      showConfirmButton: false,
      timer: 10000,
      timerProgressBar: true,
    })
  }
  
}, 10000);

// Set theme
// Keep checking the time and adjust when needed.
var theme = setInterval(HyperTextTheme, 1000);
// Main Update script
function HyperTextTheme(){
	var d = new Date();
  var n = d.getHours();
  console.log('Theme Check Executed');
	if (n >= 0 && n < 1) {
  document.body.background = "../Images/Background/0.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
	else if (n >= 1 && n < 2){
  document.body.background = "../Images/Background/1.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 2 && n < 3){
  document.body.background = "../Images/Background/2.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 3 && n < 4){
  document.body.background = "../Images/Background/3.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 4 && n < 5){
  document.body.background = "../Images/Background/4.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 5 && n < 6){
  document.body.background = "../Images/Background/5.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 6 && n < 7){
  document.body.background = "../Images/Background/6.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 7 && n < 8){
  document.body.background = "../Images/Background/7.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 8 && n < 9){
  document.body.background = "../Images/Background/8.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 9 && n < 10){
  document.body.background = "../Images/Background/9.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 10 && n < 11){
  document.body.background = "../Images/Background/10.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 11 && n < 12){
  document.body.background = "../Images/Background/11.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 12 && n < 13){
  document.body.background = "../Images/Background/12.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 13 && n < 14){
  document.body.background = "../Images/Background/13.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 14 && n < 15){
  document.body.background = "../Images/Background/14.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 15 && n < 16){
  document.body.background = "../Images/Background/15.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 16 && n < 17){
  document.body.background = "../Images/Background/16.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 17 && n < 18){
  document.body.background = "../Images/Background/17.png";
  document.getElementById("Time").style.color = "black";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  document.getElementById("LoadingText").style.color = "black";
  }
  else if (n >= 18 && n < 19){
  document.body.background = "../Images/Background/18.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 19 && n < 20){
  document.body.background = "../Images/Background/19.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 20 && n < 21){
  document.body.background = "../Images/Background/20.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 21 && n < 22){
  document.body.background = "../Images/Background/21.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 22 && n < 23){
  document.body.background = "../Images/Background/22.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
  else if (n >= 23){
  document.body.background = "../Images/Background/23.png";
  document.getElementById("Time").style.color = "white";
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  //document.body.style.backgroundColor = "black";
  document.getElementById("LoadingText").style.color = "white";
  }
}

// Inspiration: change the stylesheet of swal when it gets dark
// document.getElementById('swal').setAttribute('href', 'Infonet%20HyperText%20Extras/Sweetalert2/default.css');

// Check for Internet Explorer and redirects to an error page
if(navigator.appName.indexOf("Internet Explorer")!=-1 || navigator.userAgent.match(/Trident.*rv[ :]*11\./))
{
  // This user uses Internet Explorer
  window.location = "BrowserErr.html";
}

// Check for unsupported browsers
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;
// Checks for Opera
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
  browserName = "Opera";
  // This user uses Opera
  // window.location = "BrowserErr.html";
}
// Checks for old Internet Explorer
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
  browserName = "Microsoft Internet Explorer";
  // This user uses Internet Explorer
  window.location = "BrowserErr.html";
}
// Checks for Chrome (can be triggered by newer Edge versions)
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
  browserName = "Chrome";
  // This user uses Google Chrome
  // window.location = "BrowserErr.html";
}
// Checks for Safari
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
  browserName = "Safari";
  // This user uses Safari
  // window.location = "BrowserErr.html";
}
// Checks for Firefox
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
  browserName = "Firefox";
  // This user uses Firefox
  // window.location = "BrowserErr.html";
}
// Checks for older Edge versions
else if ((verOffset=nAgt.indexOf("Edge"))!=-1) {
  browserName = "Edge";
  // This user uses Edge (experimental line)
  window.location = "BrowserErr.html";
}

// Check for unsupported browsers (newer Edge versions)
var ver = navigator.userAgent;
if (ver.indexOf('Edge') !== -1)
{
  window.location = "BrowserErr.html";
}
else
{
  // Not Edge, do nothing
}

// Disable context menu, CTRL+SHIFT+I, CTRL+SHIFT+J, CTRL+U
window.addEventListener('contextmenu', function (e) {
  // do something here... or how about nothing
  e.preventDefault();
}, false);

document.onkeydown = function (event)
{
  event = (event || window.event);
  if (event.keyCode == 123 || event.keyCode == 18)
  {
    return false;
  }
}
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false;
  }
}

// Change the loading text every x seconds
// List of messages to display
var text = ["Infonet HyperText", "Developer Release 47"];
var counter = 0;
var elem = document.getElementById("LoadingText");
var inst = setInterval(change, 900);

function change() {
  document.getElementById("LoadingText").innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

function logoClicked() {
    Swal.fire({
      title: 'Interactive guide',
      text: "Would you like to enter the Interactive Guide?",
      icon: 'warning',
      showCancelButton: true,
      /*confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',*/
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        guideActivateStage0();
      }
    })
}
function guideActivateStage0() {
  // Log the activation
  console.log("Interactive Guide Activation started. Stage 0 running");
  // Enable overlay
  document.getElementById('overlay').style.display = "block";
  // Log it
  console.log("Overlay enabled");
  // Change overlay color
  document.getElementById('overlay').style.background = "#0e0e0f";
  // Log it
  console.log("Overlay color set");
  // Start next stage
  setTimeout(guideActivateStage1, 30);
}
function guideActivateStage1() {
  // Log the activation
  console.log("Interactive Guide Activation Stage 2 Running");
  // Fade in the overlay
  fadeIn(document.getElementById('overlay'), 600);
  // Log it
  console.log("Overlay fadein triggered");
  // Start next stage
  setTimeout(guideActivateStage3, 600);
}
function guideActivateStage3() {
  // Log the activation
  console.log("Interactive Guide Activation Stage 3 Running");
  // Redirect to the Interactive Guide
  window.location.href = "../Interactive%20Guide/index.html";
}

// Define iframe height based on window size
function resize() {
  var heights = window.innerHeight;
  var frameheights = (heights * 0.9 - 4);
  document.getElementById("leftframe").style.height = frameheights + "px";
  document.getElementById("rightframe").style.height = frameheights + "px";
  // window.addEventListener('resize', () => { resize() }); Disabled, too resource intensive!
}

// Display date and time
function date_time()
{
  date = new Date;
  year = date.getFullYear();
  month = date.getMonth();
  months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec');
  d = date.getDate();
  day = date.getDay();
  days = new Array('Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za');
  h = date.getHours();
  if(h<10)
  {
    h = "0"+h;
  }
  m = date.getMinutes();
  if(m<10)
  {
    m = "0"+m;
  }
  s = date.getSeconds();
  if(s<10)
  {
    s = "0"+s;
  }
  result = ' '+days[day]+' '+d+' '+months[month]+' '+year+' - '+h+':'+m+':'+s+' ';
  document.getElementById('Time').innerHTML = result;
  setTimeout('date_time()','500');
  return true;
}

// SweetAlert2 Tips and Fun facts toast
function displayTip(){
  // Select random tip
  console.log('Tip system triggered');
  var tipArray = ['We have a Discord server', 'Infonet HyperText automatically refreshes', 'Check the status at infonet.statuspage.io', 'There is a hidden code', 'You can be a betatester if you want to', 'You can force a full reload by typing F three times', 'Infonet HyperText can be referred to as IHT', 'Suggestions can be sent to our Discord server', 'IHT will soon be available on GitHub', 'You can check your browser compatibility online', 'Have another tip? Send it over!', 'There is an interactive guide', 'Betatesters get credited', 'Infonet HyperText is Open Source', 'Infonet adjusts itself to your screen', 'Have a question? Send it to Infonet Team!', 'Feature releases are common!'];
  var tip = tipArray[Math.floor(Math.random() * tipArray.length)];
  console.log('Random tip selected');
  // Display toast
  Swal.fire({
    showClass: {
      popup: 'fadein'
    },
    hideClass: {
      popup: 'fadeout'
    },
    toast: true,
    position: 'top-end',
    icon: 'info',
    title: tip,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    //onOpen: (toast) => {
    //  toast.addEventListener('mouseenter', Swal.stopTimer)
    //  toast.addEventListener('mouseleave', Swal.resumeTimer)
    //}
  })
  console.log('Toast activated, job complete');
}

// The Infonet HyperText Hypervisor
// Loader and overlay fadeout
function removeFadeOut( el, speed ) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 0;
//  setTimeout(function() {
//      el.parentNode.removeChild(el);
//  }, speed);
}
// Overlay fadein for reload
function fadeIn( el, speed ) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 1;
//  setTimeout(function() {
//      el.parentNode.removeChild(el);
//  }, speed);
}

var loadStage0;
var loadStage2;
var IHTReload = setTimeout(IHTReloadStage0, 300000);
// Sets the minimal time in milliseconds before the page content is loaded. If it takes longer than set amount to load all elements, the loader will be displayed until all elements are loaded.
function StartInfonetHyperText() {
  console.log('Main System loading stage started.');
  console.log('Loading Stage 0 Initiated');
  removeFadeOut(document.getElementById('overlay'), 750);
  setTimeout(displayTip, 600);
  loadStage0 = setTimeout(showPageStage1, 2000);
}
// After loading has finished, Stage 1 gets triggered. It fades the loading elements out and activates Stage 2
function showPageStage1() {
  console.log('Loading Stage 1 Initiated');
  removeFadeOut(document.getElementById('loader'), 400);
  removeFadeOut(document.getElementById('LoadingText'), 400);
  document.getElementById('overlay').style.display = "none";
  loadStage2 = setTimeout(showPageStage2, 400);
}
// Stage 2 makes the final elements appear and plays the jingle
function showPageStage2() {
  console.log('Loading Stage 2 Initiated');
  document.getElementById('loader').style.display = "none";
  document.getElementById('LoadingText').style.display = "none";
  clearInterval(inst);
  document.getElementById("LoadedAudio").play();
  document.getElementById("PageContentDiv").style.display = "block";
  // Prevent dragging the logo
  document.getElementById('InfonetHyperTextLogo').setAttribute('draggable', false);
  document.getElementById("LoadingAudio").style.display = "none";
  setTimeout(() => {
    document.getElementById('LoadingAudio').remove();
  }, 5000);
  document.getElementById('preloader').remove();
  //var IHTReload = setTimeout(IHTReloadStage0, 900000);
  console.log('Infonet HyperText Loaded Successfully');
}

// Reload Infonet HyperText after a set amount of time with fadeouts.
function IHTReloadStage0() {
  console.log('Reloading System Running');
  console.log('Preparing for HyperText Reload...');
  clearInterval(theme);
  //document.body.background = "../Images/Background/12.png";
  //document.getElementById("Time").style.color = "black";
  //document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoDay.png";
  //document.body.style.backgroundColor = "white";
  removeFadeOut(document.getElementById('PageContentDiv'), 600);
  document.getElementById("LoadingText").style.color = "black";
  document.getElementById('overlay').style.display = "block";
  console.log('Preparation complete');
  setTimeout(IHTReloadStage1, 610);
}
function IHTReloadStage1() {
  console.log('Initiating HyperText Reload...');
  fadeIn(document.getElementById('overlay'), 600);
  document.getElementById('PageContentDiv').style.display = "none";
  setTimeout(IHTReloadStage2, 650);
}
function IHTReloadStage2() {
  console.log('Reload Stage 2 initiated. Restarting HyperText...');
  window.location.reload(true);
}

// Secret
class Deferred {
  constructor () {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }
}

function* iterateEvents (type) {
  let nextEvent = new Deferred()
  const onEvent = event => {
    nextEvent.resolve(event)
    nextEvent = new Deferred()
  }
  document.addEventListener(type, onEvent)
  try {
    while (true) {
      yield nextEvent.promise
    }
  } finally {
    document.removeEventListener(type, onEvent)
  }
}

class Buffer {
  static from (array) {
    const buffer = new Buffer(array.length)
    return buffer.push(...array)
  }

  constructor (length) {
    this.length = length
    this.data = Array(length).fill(undefined)
  }

  push (...values) {
    this.data.push(...values)
    this.data = this.data.slice(-this.length)
    return this
  }

  values () {
    return this.data.slice().values()
  }

  equals (buffer) {
    return this.data.every((value, index) => value === buffer.data[index])
  }
}

async function matchKeyboardSequence (sequence, timeoutTime, callback) {
  let pressed
  const clearPressed = () => pressed = new Buffer(sequence.length)
  clearPressed()

  let timeoutId
  const resetTimeout = () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      clearPressed()
      resetTimeout()
    }, timeoutTime)
  }
  resetTimeout()

  for await (event of iterateEvents('keydown')) {
    resetTimeout()
    if (pressed.push(event.keyCode).equals(sequence)) {
      clearPressed()
      callback()
    }
  }
}

const kernel = Buffer.from([38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13])
matchKeyboardSequence(kernel, 1000, () => kettle())

const reload = Buffer.from([70, 70, 70])
matchKeyboardSequence(reload, 1000, () => IHTReloadStage0())

// Secret Entered
function kettle() {
  console.log("kettle");
  var kaudio = new Audio('../Sound/ad322ffe0a88436296158a80d5d11baa.mp3');
  kaudio.play();
  Swal.fire({
    icon: 'success',
    title: 'OwO',
    text: 'You entered the secret code ^_^',
    showConfirmButton: true,
    confirmButtonColor: '#28a745',
    confirmButtonText: 'Show me the secrit!',
    timer: 10000,
    timerProgressBar: true,
    allowEnterKey: false,
    allowEscapeKey: false,
    allowOutsideClick: false,
    toast: false,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }).then((result) => {
    if (result.value) {
    kActivateStage0();
    }
  })

}

// Kettle mode activated
function kActivateStage0() {
  // Log the activation
  console.log("Kettle Mode activated. Stage 0 running");
  // Reset refresh delay
  clearTimeout(IHTReload);
  // Log it
  console.log("Refresh timer cleared");
  // Enable overlay
  document.getElementById('overlay').style.display = "block";
  // Log it
  console.log("Overlay enabled");
  // Start next stage
  setTimeout(kActivateStage1, 30);
}
function kActivateStage1() {
  // Log the activation
  console.log("Kettle Mode Stage 1 running");
  // Fade in the overlay
  fadeIn(document.getElementById('overlay'), 600);
  // Log it
  console.log("Overlay fadein triggered");
  // Start next stage
  setTimeout(kActivateStage2, 600);
}
function kActivateStage2() {
  // Log the activation
  console.log("Kettle Mode Stage 2 running");
  // Kill any existing audio process
  document.getElementById('LoadedAudio').pause();
  //document.getElementById('LoadedAudio').src = "";
  // Log it
  //console.log("Any existing WarpSpeed processes killed");
  // Set volume to 40%
  document.getElementById("LoadedAudio").volume = 0.4;
  // Log it
  console.log('Volume set');
  // Stop theme script
  clearInterval(theme);
  // Log it
  console.log("Theme script killed");
  // Change clock color
  document.getElementById("Time").style.color = "white";
  // Log it
  console.log("Clock color set");
  // Change logo color
  document.getElementById("InfonetHyperTextLogo").src = "../Images/HTLogo/HTLogoNight.png";
  // Log it
  console.log("Logo color set");
    // Choose random BG song out of this array
    var bgmArray = ['Graviton Flux - Singularity',
    'Renard - Send It To The Moon',
    'Big Giant Circles - Go For Distance', 
    'Otis McDonald - Richard\'s Stuff', 
    'Initial D - Deja Vu', 
    'Daniwell - Nyanyanyanyanyanyanya!', 
    'Rick Astley - Never Gonna Give You Up', 
    'Approaching Nirvana & Big Giant Circles - Reboot', 
    'Yeah Yeah Yeahs - Heads Will Roll', 
    'Bag Raiders - Shooting Stars', 
    'Queen - Don\'t stop me now', 
    'Illenium - Crawl Outta Love', 
    'Sub Urban - Cradles', 
    'Joakim Karud - Good Old Days', 
    'Nightcore - Rockefeller Street', 
    'a-ha - Take On Me', 
    'Andrew Applepie - I\'m so', 
    'Darude - Sandstorm', 
    'Harold Faltermeyer - Axel F', 
    'Noisestorm - Crab Rave', 
    'Nea - Some Say', 
    'Owl City - Fireflies', 
    'Gigi D\'Agostino - L\'Amour Toujours', 
    'Lemaitre - Axel F', 
    'Smash Mouth - All Star', 
    'Naz3nt - Coconut Mall', 
    'Eiffel 65 - Blue', 
    'Video Game Remixes - Wii Shop Channel', 
    'ODESZA - Loyal', 
    'MagnusTheMagnus - Keep On Lovin\'', 
    'MagnusTheMagnus - Area', 
    'The Dirty Tees - More Cowbell', 
    'United States Marine Band - Regimental Pride March', 
    'Initial D - Running in The 90s', 
    'Vicetone & Tony Igy - Astronomia', 
    'Yamboo - Kalinka', 
    'Wagner - Ride of the Valkries', 
    'Astrophysics - Bad Guy Synthwave Remix', 
    'Astrophysics - Astronomia Synthwave Remix',
    'Fortnite - Travis Scott Event',
    'The Living Tombstone - We are number one'];
    var bgm = bgmArray[Math.floor(Math.random() * bgmArray.length)];
    var bgmsrc = '../Sound/kettle/'+bgm+'.mp3';
    // Log it
    console.log("Random song selected");
    // Set the source to the random selected song
    document.getElementById('LoadedAudio').src = bgmsrc;
    // Log it
    console.log("Random song set");
    // Load/Buffer said song
    document.getElementById('LoadedAudio').load();
    // Log it
    console.log("Song buffered");
    console.log(bgm);
  // Make both iframes more transparent
  document.getElementById('leftframe').style.opacity = "0.35";
  document.getElementById('rightframe').style.opacity = "0.35";
  // Log it
  console.log("Iframe styles set");
  // Remove background
  document.body.background = "";
  // Log it
  console.log("Background removed");
  // Create new background with WarpSpeed
  new WarpSpeed("kettlebg", {"speed":0.4,"speedAdjFactor":0,"density":1,"shape":"square","warpEffect":false,"depthFade":true,"starSize":4,"backgroundColor":"hsl(263,45%,7%)","starColor":"#FFFFFF"});
  // Log it
  console.log("WarpSpeed activated");
  // Start next stage
  setTimeout(kActivateStage3, 1500);
  setTimeout(() => {
    kActivateStage5(bgm);
  }, 2000);
}
function kActivateStage3() {
  // Play it
  document.getElementById('LoadedAudio').play();
  // Log it
  console.log("Started playing");
  // Fade out the overlay
  removeFadeOut(document.getElementById('overlay'), 1000);
  // Log it
  console.log("Overlay fadeout triggered");
  // Start next stage
  setTimeout(kActivateStage4, 1100);
}
function kActivateStage4() {
  // Log the activation
  console.log("Kettle Mode activated. Stage 0 running");
  // Disable overlay
  document.getElementById('overlay').style.display = "none";
  // Log it
  console.log("Overlay disabled");
  // Reset and extend the reload timer
  var IHTReload = setTimeout(IHTReloadStage0, 1800000);
  // Log it
  console.log("Refresh timer set");

}
function kActivateStage5(bgm) {
    // Display toast with playing message
    var bgmmsg = 'Playing: '+bgm;
    Swal.fire({
      showClass: {
        popup: 'fadein'
      },
      hideClass: {
        popup: 'fadeout'
      },
      toast: true,
      position: 'top-end',
      icon: 'info',
      title: bgmmsg,
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
  // Final log
  console.log("Kettle mode job completed. Enjoy!");
}