//Class chứa những thuộc tính chung cho các loại việc làm
class Todo {
    constructor(id, todoType, content, status) {
        /*
            id:         id của mỗi việc làm khác nhau
            todoType:   dạng việc làm (hoàn thành/chưa hoàn thành)
              *1 là complete
              *2 là incomplete
            content:    nội dung việc làm
            status:     (prop này mình ghi dư, kiểu trạng thái hiện tại của công việc)
        */
      this.id = id;
      this.todoType = todoType;
      this.content = content;
      this.status = status;
    }
    //Xử lý hiển thị content todo
    renderTodoList() {
      //console.log("Render answers");
      //return về giao diện Todolist
    }
    //Xử lý Todolist complete/incomplete
    checkTodo() {
      //Kiểm tra Todo
    }
  }
  export default Todo;
  