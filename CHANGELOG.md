## Changelog

### Version 1.4.0 (28 October 2023)

- AWC-303, Add LoadingBar
- AWC-308, Update npm packages

### Version 1.3.1 (07 July 2021)

- AWC-301, Fix a lack of passage destination

### Version 1.3.0 (07 July 2021)

- AWC-296, Fix some wrong specifements of chars
- AWC-294, Rename subsoil to terrain
- AWC-264, Add more unit tests to matrix transformations and user creation
- AWC-287, Rewrite and redesign Export to Angotia Admins option
- AWC-288, Create Production Map Data interface
- AWC-290, Replace any types by actual ones
- AWC-284, Update React Router DOM

### Version 1.2.0 (16 June 2021)

- AWC-221, Rewrite current translation system to i18n
- AWC-219, Add more EsLint rules
- AWC-291, Delete adding blobs to internal images cache during transforming content list to matrix (make loading map faster about 70%)
- AWC-285, Create application logs mechanism
- AWC-204, Convert all static map layers to one canvas
- AWC-285, Enable open characters by opening special AWC url
- AWC-282, Enable open specific map by id
- AWC-258, Clear all data before create map or char
- AWC-257, Optimize entry panel api requests. Decrease transferred data
- AWC-263, Rewrite a whole load panel to the newest version of React and speed up loading entry panel
- AWC-278, Change blue decoration color to more bright
- Create accept license popup during exporting product to Angotia Resources Admins
- Refactor conditional empty string
- Fix a lack of Character Sprite export error
- Add readonly map size to Map Creator settings panel
- Create loading popup for items from Private account
- Save production map id to external map file type, so we can update map by downloaded json file
- Fix update map issue after first creation. Earlier, exported to Angotia map couldn't was updated till reload it
- Protect before load invalid char and map, by JSON file or from production database
- Create Creation Error system. Real-time map and char validation checker
- Write a whole project documentation (product docs and for developers)
- Fix not appearing images at first load (Firefox)
- Fix canvas flashes after layer update
- Fix no-show passage problem after first iteration
- Add local User ID
- Switch from production to requested data type in Angotia Catalogs API

### Version 1.1.0 (24 September 2020)

- Rename Angotia Map Creator to Angotia World Creator
- Fix go to features menu item in help view
- Delete express api
- Handling empty matrix errors
- Treat dialogs that point to themselves as invalid
- Load panels update data in real-time. It makes each user of program data version stick to each other
- Fix changing dialog id during the creation process
- A new dialog requires at least one player response
- Fix come back to map creator problem. Right know, always user come back to drawed map
- Fix a lack of first mouse selection issue
- Add Map Creation Rules view
- Validate Locations (passage and weight vertex) during parsing process
- Delete explicit image blobs in matrices (internal map data) and keep only one copy of each blob with internal Ids. It makes updation matrices faster about 20% and decrease weight of internal map data about 50%

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

### Prototype 1.0.0 (30 December 2018)

- Create entry panel
- Create base routing to /creator
- Add menu bar
- Generate map by divs
- Set up desktop version project in electron
