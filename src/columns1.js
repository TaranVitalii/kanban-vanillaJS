// функция просто возвращает массив колонок
export  async function getColumns(){
       const columnsURL = 'http://localhost:8089/api/column';
      const response = await fetch(columnsURL );
      const columns = await response.json();
      return columns;
}
