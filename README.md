# react-native-relative-units

An simplest relative units module for react native. Design for scale pages in different devices, NOT FOR RESPONSIVE DESIGN.

## Install

```
npm install react-native-relative-units --save
```

## Using

```
var {bp, vw, vh} = require('react-native-relative-units')(/* Mockup page's width */);
```

## Example

```
var {bp, vw, vh} = require('react-native-relative-units')(375);

var styles = StyleSheet.create({
    viewport: {
        width: 375 * bp,    // 100% device width, same as width: 100 * wh
        height: 100 * vh,   // 100% device height
        marginTop: 20 * bp, // 20/375 device width
        borderWidth: 1      //  bp is not recommend in border 
    }
});
```
