'user strict';
const columns = [
  {
    id: 0,
    title: 'ToDo',
  },
  {
    id: 1,
    title: 'In Progress',
  },
  {
    id: 2,
    title: 'Done',
  }
];


export function getColumns(){
  let columnsArr = [];
  for (let i=0 ; i<columns.length ; i++ ) { 
    let columnsId = columns[i].id;
  
  columnsArr.push(columnsId);
 
 }
  return columnsArr;
}

