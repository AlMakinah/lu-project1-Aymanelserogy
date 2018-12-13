#Dribble/loremPicsum like website built by REACT

This is a React website, presents  images
---
installation
---
first excute
```javascript
$ npm install
```
dependencies used

| Dependencies     | Version       |
| -------------    |:-------------:|
| react            | ^16.6.3       |
| react-dom        | ^16.6.3       |
| react-redux      | ^6.0.0        |
| react-router-dom | ^4.3.1        |
| react-scripts    | 2.1.1     	   |
| redux            | ^4.0.1        |

make sure that you have react and redux installed in your developer tools then excute
```javascript
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

what does the site do
---
The header contains a virsual search bar,
in addition to a Nav bar to navigate through the different pages of the website,
two links for signin and signup which are pressable to display the registering and sigining in forms and also the same display is activated by the two buttons at footer.

The landing page reffered to as dribbles in the nav bar in the header,
displays multiple frames posted,
each frame can be diplayed by either clicking on the picture or on the comment icon,
or liked ,  once the portal opens it is considered seen.

The displayed image in the portal can be saved of which will be reflected in the count in the header

The Designers page represents a list of disgners got from the API below,and a row of images represented got from lorem picsum
```javascript
https://randomuser.me/api/?results=10
```
The urls page representing the urls of which can be used to get different pictures and above all the urls, there is a rated picture representation of which changed randomly through the press of a button

css
---
The approch of CSS used was inverted triangle css
Class names was based as much as possible on BEM--(Block Elemnet Modifier) methodology,
elements that used if conditions in css only were done inline

Redux
---
Redux was used to tie the save button with the counter in the header of which represents the length of the array of the saved images

Raect-Router-Dom
---
Raect-Router-Dom was used to be able to navigate through the pages

Notes
---
The application contains three Portals
CSS was built from scratch
FontAwsome were used for icons


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).