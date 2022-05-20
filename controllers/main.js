/*  Bài này trong ES6
    Phần Class (OOP)
    Hướng xử lý như bài TestingOnline:
        +Dữ liệu của todolist chưa được build:
        _Do chưa build nên giờ đau hết cả đầu, ví dụ đã
        build xong sẵn thì có các props sẵn dể xử lý, giờ
        dữ liệu đâu ra mà build;

        + Đối tượng ở đây là công việc (thing to do)
        + Dạng công việc được chia làm 2 dạng:
            .hoàn thành         -complete
            .chưa hoàn thành    -incomplete
        + Dữ liệu, mình sẽ dùng API để cho quen
        + Sử dụng kỹ thuật Asyn-Await để xử lý bất đồng bộ
        + 
    - Làm gì không biết nhớ import nó vào!

    Data: Done!
    Service: Done! getTodoList();
    Models:
        thingstodo: Done (dư 1 props status)
        complete: ---
        incomplete: ---
*/
import TodoComplete from "../models/complete";
import { getTodoList } from "../services/services";
//
init();
let todol = [];
//
//Xử lý Asyn-
function init() {
    //B1: Gọi hàm getQuestions call API lấy data
    getTodoList()
      .then((result) => {
        console.log(result);
        //Xử lý dùng data để tạo ra các đối tượng Question
        //questions = generateQuestion(result.data);
        //console.log(questions);
        //Hiển thị danh sách câu hỏi ra giao diện
        //renderQuestion(questions);
      })
      .catch((error) => {
        console.log(error);
      });
  }
