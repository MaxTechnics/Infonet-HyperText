# Getting started with Infonet HyperText
## Step 1
The first step in creating a personalised version of Infonet HyperText, is to download the source code. We recommend downloading the master branch, but if you feel like it, you can get a beta or older version if you like. Be warned though, this documentation will only be 100% accurate with the current version!
## Step 2
Start with opening ``main.html`` (located in ``Data/Pages/``)
At the bottom, you will see something like this:
```html
<!-- Display iframes -->
<div>
    <!-- This is the iframe for left frame -->
    <iframe id="leftframe" class="iframe leftframe" src="" frameborder="0" scrolling="no" align="left"></iframe>
    <!-- This is the iframe for the right frame -->
    <iframe id="rightframe" class="iframe rightframe" src="" frameborder="0" scrolling="no" align="right"></iframe>
</div>
```
Choose which 2 pages you want to show where. Let's say we have ``site1.com`` and ``page2.html``. You can add local files and reference those. Put the links in the `src` tag. If you reference a local file in the same directory (`Pages`), be sure to add `./` in front of the link. For every directory you go up, you can add `../` (so going up 1 directory, then in the folder `thing`, and then reference `file.html` (so the directory is `Data/thing/file.html`) the tag should be `../thing/file.html`.

Okay so now the file looks something like this:
```html
<!-- Display iframes -->
<div>
    <!-- This is the iframe for left frame -->
    <iframe id="leftframe" class="iframe leftframe" src="https://site1.com/" frameborder="0" scrolling="no" align="left"></iframe>
    <!-- This is the iframe for the right frame -->
    <iframe id="rightframe" class="iframe rightframe" src="./page2.html/" frameborder="0" scrolling="no" align="right"></iframe>
</div>
```
Save the file and close it.
## Step 3
The left frame can be adjusted to alternatives by adding a parameter to the address bar. To change these, or remove them entirely, open `IHT.js` (located in ``Data/JS/IHT.js``)

Around line 80, you will find something like this:
```js
// Framemode parameter
var framemode = params.get('framemode');
if (framemode == 'contact') {
	document.getElementById('leftframe').src = './errorPage.html?msg=This part is unfinished';
}
else if (framemode == 'teacher') {
	document.getElementById('leftframe').src = './errorPage.html?msg=This part is unfinished';
}
else {
}
```
If you wish not to use alternative frames, you can remove these lines from the script and save them. Make sure you do not remove too many or too little lines or the entire script file will fail!
  
You can have as many or as little alternative modes as you like. In this example, let's use `frame1`, `frame2` and `frame3` as parameters for `page1.com`, `page2.com` and `page3.com` respectively.
 
Change the conditions in the **if** statements to frame1-frame3 and change the addresses. Add an ``else if`` block for each additional framemode. The code should look something like this:
```js
// Framemode parameter
var framemode = params.get('framemode');
if (framemode == 'frame1') {
	document.getElementById('leftframe').src = 'https://page1.com/';
}
else if (framemode == 'frame2') {
	document.getElementById('leftframe').src = 'https://page2.com/';
}
 else if (framemode == 'frame3') {
	document.getElementById('leftframe').src = 'https://page3.com/';
}
else {
}
```
If you only wish to have a single alternative framemode, remove all ``else if`` blocks and just leave the `if` and `else` block:
```js
// Framemode parameter
var framemode = params.get('framemode');
if (framemode == 'frame1') {
	document.getElementById('leftframe').src = 'https://page1.com/';
}
else {
}
```
There you go! You just set up your personal version of Infonet HyperText!
