import { findConnectedDialog } from './findConnectedDialog';
import { IDialog } from '../../interfaces/dialogs';
import charConfig from '../../configs/charConfig.json';


describe("findConnectedDialog script", () => {
  const dataSet: IDialog[] = [
    {
      id: '1',
      npc: 'Maecenas aliquam varius lectus at convallis.',
      player: [
        {
          id: '52352',
          dialog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          next: '2',
          action: '',
          condition: 'TIME_MORE_THAN_21'
        },
        {
          id: '412',
          dialog: 'player response/dialog 1',
          next: '3', 
          action: '',
          condition: ''
        }
      ],
      connectedDialogs: []
    },
    {
      id: '2',
      npc: 'example char dialog number two',
      player: [
        {
          id: '52352',
          dialog: 'Show my ur shop',
          next: '1',
          action: 'OPEN_SHOP', 
          condition: 'INVALID'
        }
      ],
      connectedDialogs: []
    },
    {
      id: '3',
      npc: 'example char dialog number two',
      player: [
        {
          id: 'afwaw23',
          dialog: 'Show my ur shop',
          next: '1',
          action: 'OPEN_SHOP', 
          condition: ''
        }
      ],
      connectedDialogs: []
    },
    {
      id: '4',
      npc: 'example char dialog number two',
      player: [
        {
          id: 'afwaw23',
          dialog: 'Show my ur shop',
          next: '654',
          action: 'OPEN_SHOP', 
          condition: ''
        }
      ],
      connectedDialogs: []
    }
  ];

  const dataSet1: IDialog[] = [
    {
      id: '4',
      npc: 'example char dialog number two',
      player: [
        {
          id: 'afwaw23',
          dialog: 'Show my ur shop',
          next: '4',
          action: 'OPEN_SHOP', 
          condition: ''
        }
      ],
      connectedDialogs: []
    }
  ];

  it('Should be function', () => {
    expect(typeof findConnectedDialog).toBe('function');
  });

	it('Works without crashes', () => {
    findConnectedDialog(dataSet, '1');
  });

  it('Give valid dialog; beginId: 1', () => {
    expect(findConnectedDialog(dataSet, '1')).toEqual(['2', '3']);
  });

  it('Give valid dialog; beginId: 3', () => {
    expect(findConnectedDialog(dataSet, '3')).toEqual(['1']);
  });

  it('Give invalid dialog; beginId: 4', () => {
    expect(findConnectedDialog(dataSet, '4')).toEqual(['654', `${charConfig.invalidPrefix}4`]);
  });

  it('Give invalid dialog; beginId: 2/ conditions', () => {
    expect(findConnectedDialog(dataSet, '2')).toEqual(['1', `${charConfig.invalidPrefix}2`]);
  });

  it('Dialog points to itself; one dialog', () => {
    expect(findConnectedDialog(dataSet1, '4')).toEqual([`${charConfig.invalidPrefix}4`]);
  });
});