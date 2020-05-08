setTimeout(browsers, 1000);
function browsers() {
// Check for Internet Explorer and redirects to an error page
if(navigator.appName.indexOf("Internet Explorer")!=-1 || navigator.userAgent.match(/Trident.*rv[ :]*11\./))
{
  // This user uses Internet Explorer
  Swal.fire({
    icon: 'error',
    title:'Your browser isn\'t supported.',
    text: 'Internet Explorer isn\'t supported by Infonet HyperText.',
    showConfirmButton: false,
    confirmButtonText: 'Close',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
  })
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
  Swal.fire({
    icon: 'warning',
    title:'Opera support not tested',
    text: 'We haven\'t finished testing Opera yet',
    showConfirmButton: false,
    confirmButtonText: 'Close',
    timer: 10000,
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
   })
  
}
// Checks for old Internet Explorer
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
  browserName = "Microsoft Internet Explorer";
  // This user uses Internet Explorer
  Swal.fire({
    icon: 'error',
    title:'Your browser isn\'t supported.',
    text: 'Internet Explorer isn\'t supported by Infonet HyperText.',
    showConfirmButton: false,
    confirmButtonText: 'Close',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
  })
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
  Swal.fire({
    icon: 'error',
    title:'Your browser isn\'t supported.',
    text: 'Edge isn\'t supported by Infonet HyperText.',
    showConfirmButton: false,
    confirmButtonText: 'Close',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
  })
}
else
{
  Swal.fire({
    icon: 'warning',
    title:'We couldn\'t determine your browser',
    text: 'Chances are that your browser isn\'t supported. Continiue at your own risk.',
    showConfirmButton: false,
    confirmButtonText: 'Close',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
   })
}

// Check for unsupported browsers (newer Edge versions)
var ver = navigator.userAgent;
if (ver.indexOf('Edge') !== -1)
{
  Swal.fire({
    icon: 'error',
    title:'Your browser isn\'t supported.',
    text: 'Edge isn\'t supported by Infonet HyperText.',
    showConfirmButton: false,
    confirmButtonText: 'Close',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
  })
}
else
{
  // Not edge, skip
}
}