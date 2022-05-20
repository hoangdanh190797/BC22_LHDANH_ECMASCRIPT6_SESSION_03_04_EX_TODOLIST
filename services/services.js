export function getTodoList(){
    return axios.get("../data/todolist.json")
}