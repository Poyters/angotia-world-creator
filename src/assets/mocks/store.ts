/* eslint-disable max-len */
export const mockInitStore = { 
  char: {
    type: '',
    choosed: '',
    moveType: '',
    monologs: [
      {
        id: 535,
        content: 'xddddddddddd monolog 1'
      },
      {
        id: 31,
        content: 'Curabitur rutrum dolor vitae faucibus malesuada. Maecenas tincidunt tellus sed ultricies consequat. Maecenas aliquam varius lectus at convallis. Fusce pharetra pellentesque odio a ultrices.'
      }
    ],
    dialogs: [
      {
        id: 1,
        npc: 'Curabitur rutrum dolor vitae faucibus malesuada. Maecenas tincidunt tellus sed ultricies consequat. Maecenas aliquam varius lectus at convallis. Fusce pharetra pellentesque odio a ultrices.',
        player: [
          {
            id: 52352,
            dialog: 'Mauris at blandit leo, id fermentum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            next: 2, //id of next npc dialog or 'exit' if exit
            action: '', //special event (not required); open shop etc
            condition: 'TIME_MORE_THAN_21'
          },
          {
            id: 412,
            dialog: 'player response/dialog 1',
            next: 3, //id of next npc dialog or 'exit' if exit
            action: '', //special event (not required); open shop etc
            condition: ''
          }
        ]
      },
      {
        id: 2,
        npc: 'example char dialog number two',
        player: [
          {
            id: 52352,
            dialog: 'Show my ur shop',
            next: 1, //id of next npc dialog or 'exit' if exit
            action: 'OPEN_SHOP', //special event (not required); open shop etc
            condition: ''
          }
        ]
      },
      {
        id: 3,
        npc: 'example char dialog number two',
        player: [
          {
            id: 3155,
            dialog: 'Do not kill me, please!',
            next: 'exit', //id of next npc dialog or 'exit' if exit
            action: 'KILL_PLAYER', //special event (not required); open shop etc
            condition: ''
          }
        ]
      },
      {
        id: 4,
        npc: 'example char invalid dialog. Invalid connections',
        player: [
          {
            id: 52352,
            dialog: 'tfawf',
            next: 654,
            action: '',
            condition: ''
          }
        ]
      },
    ],
    temponaryPlayerDialogs: [],
    isAgressiveMob: false,
    charPic: ''
  },
  map: {
    size: {
        x: 8,
        y: 8
    },
    mapPic: "",
    blockMatrix: [],
    passage: {
        locations: [],
        matrix: []
    },
    building: {
        matrix: []
    },
    decoration: {
        matrix: []
    },
    subsoil: {
        matrix: []
    },
    npc: {
        matrix: [],
        dialogs: {}
    },
    mob: {
        matrix: [],
        types: {}
    },
    vertex: {
        matrix: [],
        weights: []
    }
  },
  ui: {
    actionNote: "Map has been loaded",
    mapName: 'board name',
    select: {
        type: "none", //none, square, field, mouse
        matrix: [],
    },
    net: {
        field: true,
        square: true
    },
    language: 'en',
    statisticPanelIsOpen: false
  }
};