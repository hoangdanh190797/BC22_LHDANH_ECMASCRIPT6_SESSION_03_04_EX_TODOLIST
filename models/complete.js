/*Vô là người ta input todo incomplete chưa không ai vô
đưa vào lại là đã complete
*/
import Todo from "./thingstodo";
//
class TodoComplete extends Todo {
  //
  constructor(...props) {
    super(...props);
  }
  //
  renderTodoList() {
      return
      `
        <li>Việc chưa làm</li>
      `
  }
}
export default TodoComplete;
