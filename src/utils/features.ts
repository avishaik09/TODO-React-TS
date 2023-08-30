 export const saveTodos=(todo:TodoItemType[]):void => {
    localStorage.setItem("mytodos",JSON.stringify(todo))
 }
 export const getTodos=():TodoItemType[] => {
    const todos=localStorage.getItem("mytodos");
    return todos?JSON.parse(todos):""
 }

