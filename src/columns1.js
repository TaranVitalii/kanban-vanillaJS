'user strict';
const columns = [
  {
    id: 0,
    title: 'To Do',
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
// возвращает массив колонок
return columns;
}
window.getColumns=getColumns;