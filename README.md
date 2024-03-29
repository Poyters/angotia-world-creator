# Angotia World Creator

Angotia World Creator *(AWC)* is tool for game developers or World Creators to creating fully functionally boards and characters for Angotia game. AWC provides professional UI and rapid work from browser everywhere. 

## Purpose of Angotia World Creator
1. Provides a tools to create Mobs, NPCs, Maps, Items and so on for Game Creators or game players
2. Each resource in AWC can be prompt to be added to production environemt of the game. It creates the feel of "living game", where a new maps and another sources are added in the meantime. Also it build a confident around the players that they are making the game

## Run everywhere
AWC works in the most modern browsers, like:
1. Google Chrome
2. Mozilla Firefox
3. Safari
4. Edge
5. Opera

## Multi language
AWC provides the interface in the following languages:
1. English
2. Polish
3. French *(partial)*


## Technology behind the Angotia World Creator
### Frontend & related
- **React** - Fast and easy library for UI.
- **Redux** - Application state management tool. I chose it naturally, because Redux has a brilliant support for a huge projects.
- **I18n** - Tool for internalization with the most community and functionalities.
- **Localstorage** - A natural choice to store the data between browser sessions.
- **HTML5 Canvas** - Built-in solution for paiting canvases.
- **TypeScript** - I need to keep the data and types consistent.
- **Apollo** - Consuming Angotia Resources API

### Authentication
- **Keycloak** - I chose it because of the many customisation options and the ability to self-host so as not to be tied to one service provider.

### Others
- **Angotia SDK** - It is a Software Development Kit created from scratch that provides common functions between Angotia microservices, such as contract, interfaces, tools and so on. I create it to do not copy same utils and data between microservices, and to have a singile source of truth in terms of contract, interfaces.

## Core concepts of Angotia World Creator

### Modules
According to DDD rules I divided the code of Angotia World Creator into a three smaller modules: *Map, Char, Item*. Thanks to that, each module has it's own context, design and specific rules.

### Drawing on the screen
Drawing and rendering the map is based on matrix data structures and is built into HTML5 Canvas. The map is divided into several layers (transitions, blocked fields, characters, etc.). Each layer has its representation in a multidimensional array (matrix), for example a 3x3 map:

```
[
    [
        [],[],[],
    ],
    [
        [],[],[],
    ],
    [
        [],[],[],
    ]
]
```

Each cell represents a one space on the map which is also constructed of 4 smaller fields. Such field can contain information about current source. To keep the data structure lighter, the cell contains only id to specific resource.

To do some operations on layers/maps, the program takes an advantage of base Matrix Math like: adding, multiplication etc.

### Exporting and data compression
Finally, each layer is merged and the programme creates a map file that contains a shorter version of the map representation (to keep the files lighter). In addition, some layers are merged into one and, based on this, we render only one image.

In the end, we get a map built from several images (merged layers) and the required data, such as blocked spaces, transitions and character positions. This allows the largest maps, such as 5000x5000 pixels, to weigh around **30-50 kilobytes**.

### Saving & approving new products flow
Any user can propose their own map, character or item. To accomplish this, the user can upload and save the map locally *(a txt file on their device)* or, by logging into a Poyters account (Keycloak service), upload the proposed item to the Angotia ecosystem for further approval by an Angotia Administrator.

All of the proposed data need to be reviewed and then approved or rejected by Angotia Administrator in Angotia Resources Admin Panel.

The new product before sending to AR automatically rewieved, so it does not contain any map errors, illegal map collisions and so on. Also, user before pushing the product to approve, can see a final preview of the map.

![alt text](./docs/images/AWC-and-AQM-saving-process.png)

In AWC we have a three saving process: *production, json, account*.

#### Production
During creation of map, char and items user has an ability to export product to Angotia Admins for accept. If they accept a result product they came in Angotia game at the same time; without any game breaks *(hotreloads)*.

#### Json (locally)
Each product can be saved to json file on user personal computer. Also can be loaded from json file and than, for instance exported to Angotia Admins.

#### Account
Option allows user add own images and save them on his account *(or in browser memory - IndexDB)*, then export product to Angotia Admins or save to JSON. Added user images will not be able to be used by other users until the product is approved by Angotia administrators *(transition to a production environment)*.

## Set up
1. Clone repository
2. `npm i` in root directory
3. Publish all local packages (e.g poyters-components and angotia-sdk)
4. `npm run yalc:add` to connect pull Angotia SDK from yalc sources

