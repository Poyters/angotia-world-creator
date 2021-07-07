import { hasInvalidConditions } from './hasInvalidConditions';
import { IDialog } from '../../interfaces/dialogs.interface';


describe('hasInvalidConditions script', () => {
  const fakeDialog: IDialog = {
    id: '1',
    npc: 'Fusce pharetra pellentesque odio a ultrices.',
    player: [
      {
        id: '52352',
        dialog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        next: '2', // id of next npc dialog or 'exit' if exit
        action: '', // special event (not required); open shop etc
        condition: 'TIME_MORE_THAN_21'
      },
      {
        id: '412',
        dialog: 'player response/dialog 1',
        next: '3', // id of next npc dialog or 'exit' if exit
        action: '', // special event (not required); open shop etc
        condition: ''
      }
    ],
    connectedDialogs: []
  };

  const invalidFakeDialog: IDialog = {
    id: '1',
    npc: 'Fusce pharetra pellentesque odio a ultrices.',
    player: [
      {
        id: '52352',
        dialog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        next: '2', // id of next npc dialog or 'exit' if exit
        action: '', // special event (not required); open shop etc
        condition: 'TIME_MORE_THAN_21'
      },
      {
        id: '412',
        dialog: 'player response/dialog 1',
        next: '3', // id of next npc dialog or 'exit' if exit
        action: '', // special event (not required); open shop etc
        condition: 'TIME_MORE_THAN_22'
      }
    ],
    connectedDialogs: []
  };

  it('Should be function', () => {
    expect(typeof hasInvalidConditions).toBe('function');
  });

	it('Give valid dialog', () => {
    hasInvalidConditions(fakeDialog);
  });

  it('Give invalid dialog', () => {
    expect(hasInvalidConditions(invalidFakeDialog)).toBe(true);
  });

  it('Give undefined', () => {
    expect(hasInvalidConditions(undefined)).toBe(false);
  });
});