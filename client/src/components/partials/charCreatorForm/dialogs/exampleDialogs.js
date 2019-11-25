export const exampleDialogs = [
  {
    id: 1,
    npc: 'example char dialog',
    player: [
      {
        id: 52352,
        dialog: 'player response/dialog 1',
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
    id: 2,
    npc: 'example char dialog number two',
    player: [
      {
        id: 3155,
        dialog: 'thanks for talk',
        next: 'exit', //id of next npc dialog or 'exit' if exit
        action: null, //special event (not required); open shop etc
      }
    ]
  }
];