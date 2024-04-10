# Slow web component performance

An example app to show how slow the performance is when using a lot of angular web components.

![Example](doc/example.apng)

# Problem

When rendering a lot of web components at once. For example when using `.innerHml` it takes a long time before they show up on the mage.
Meanwhile, the whole page is unresponsive. When not using components the elements are rendered almost instantly.

## Running

This project uses angular elements. To run the project either run `npm run start` to get the live reloading shell.

Or build the project using `npm run build`, and then serve using `npm run serve:prod`. 

