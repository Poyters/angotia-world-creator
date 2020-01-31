/* eslint-disable max-len */
const initState = {
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
        },
        {
          id: 412,
          dialog: 'player response/dialog 1',
          next: 3, //id of next npc dialog or 'exit' if exit
          action: '', //special event (not required); open shop etc
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
          action: ''
        }
      ]
    },
  ],
  temponaryPlayerDialogs: []
};


export const charReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CHANGE_CHAR_TYPE':
      return {
        ...state,
        type: action.charType
      };
    case 'CHANGE_CHAR':
      return {
        ...state,
        choosed: action.char
      };
    case 'CHANGE_MONOLOGS':
      return {
        ...state,
        monologs: action.monologs
      };
    case 'CHANGE_DIALOGS':
      return {
        ...state,
        dialogs: action.dialogs
      };
    case 'CHANGE_TEMPONARY_PLAYER_DIALOGS':
      return {
        ...state,
        temponaryPlayerDialogs: action.temponaryDialogs
      };
    default:
      return state;
  }
};