# Angotia World Creator

Angotia World Creator (AWC) is tool for game developers or World Creators to creating fully functionally boards and characters for Angotia game. AWC provides professional UI and rapid work from browser. User can easly create board that is compress to svg (all graphic of board) and json file which contains all actions like, mobs, npcs, passage to another locations, blocked fields etc.

## Changelog

### Version 1.1.0 (planned April 2021)
- Rename Angotia Map Creator to Angotia World Creator
- Fix go to features menu item in help view
- Delete express api
- Handling empty matrix errors
- Treat dialogs that point to themselves as invalid
- Load panels update data in real-time. It makes each user of program data version stick to each other


### Version 1.0.0 (17 July 2020)
- Add multiple options to save maps and chars (production DB or local json)
- Add possibility to update production chars and maps
- User can accept popups by press `Enter` button on keyboard
- Convert matrix map data type (AWC environment) to locations data type (production)
- User can exit popups by press `Exit` button on keyboard
- Translate all notifications
- Change passage graphice
- Redesign and rewrite menu (AMC, ACC)
- Add Mobs types: king, boss, lider, special, casual
- Add Speaking Environment to Character creation
- Redesign and rewrine notifications system. For know it could show multiple notes at once (AMC, ACC)
- Fix wrong rendering layers at loading from JSON file
- Add missing notifications
- Add attack speed to statistics panel
- Protect before a lack of translations
- Create Settings Panel (AMC, ACC)
- Add missings translations
- Add user visibility range at map
- Create guard for max size added images
- Create SE map layer


### Version beta 1.0.0 (10 March 2020)
- Add conditionally dialogs
- User can add actions to player or dialog
- User can create, edit and delete a whole dialog or only player response
- Create Angotia Char Creator (ACC) view
- Connect ACC to Notifications System
- User can add or replace Char graphice
- Introduce languages versions: Polish, English
- User can determine whether mob is aggressive or not aggressive
- User can create, edit or delete monologs for Mobs and Npcs
- Create dialogs validator - marks by red border invalid dialogs
- Create dialogs guide - marks by blue border connected dialogs
- User can determine Npcs type
- User can import own images
- Center map after loading
- Redesign scrollbars
- Create passage map layer
- Add report issue button
- User can load and edit existing map from JSON file
- User can set and edit board name
- Create features and help view
- Handle not found page error
- App can handle images larger that one square
- Add passages
- User can save map to JSON file
- User can add background image


### Version alpha 1.0.0 (8 September 2019)
- Switch to web app 
- Switch map visualization from divs to canvas
- Add vertex weights
- Shows alt messages on menu items
- Add version mark
- User can add images to board
- Create Files Panel
- Create layers menu
- User can block and unblock squares
- Create Notification System
- User can draw selection by mouse
- User can unselect area
- Redesign and rewrite entry panel
- Add nets to map
- User can swithc nets view
- User can add background image
- Create fullscreen mode
- Create three ways select option
- Create layers system


### Prototype 1.0.0 (December 2018)
- Create entry panel 
- Create base routing to /creator
- Add menu bar
- Generate map by divs
- Set up desktop version project in electron
