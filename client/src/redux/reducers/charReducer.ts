/* eslint-disable max-len */
const initState = {
  type: '',
  choosed: '',
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
          action: null, //special event (not required); open shop etc
        },
        {
          id: 412,
          dialog: 'player response/dialog 1',
          next: 3, //id of next npc dialog or 'exit' if exit
          action: null, //special event (not required); open shop etc
        }
      ]
    },
    {
      id: 2,
      npc: 'example char dialog number two',
      player: [
        {
          id: 52352,
          dialog: 'thanks for talk',
          next: 1, //id of next npc dialog or 'exit' if exit
          action: null, //special event (not required); open shop etc
        }
      ]
    },
    {
      id: 3,
      npc: 'example char dialog number two',
      player: [
        {
          id: 3155,
          dialog: 'thanks for talk',
          next: 'exit', //id of next npc dialog or 'exit' if exit
          action: null, //special event (not required); open shop etc
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
          action: null
        }
      ]
    },
  ]
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
    default:
      return state;
  }
};