import React, { useState } from 'react'

import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './todo.model'

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const todoAddHandler = (text: string) => {
      // 아래의 방법으로도 하나의 방법이지만 깔끔한 방법은 아니다.
      // 이론적으로 리액트는 상태 업데이트를 일정한 시간에 시행하며 이 업데이트가
      // 시행될때 여기 있는 Todo값이 가장 최신 상태가 아닐 수도 있다.
      // 이것을 보장하기 위해서 대신 이 상태 업데이트 하는 함수의 함수를 전달 한다.
      // 이 함수는 할일들을 불러오고 새로운 상태를 리턴하게 될것이다.
      // setTodos([...todos, {id: Math.random().toString(), text: text}]);

      setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}]);
    };

    const todoDeleteHandler = (todoId: string) => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.id !== todoId);
      });
    };

    return (
        <div className="App">
            {/* A component that adds todos */}
            <NewTodo onAddTodo={todoAddHandler} />
            <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
        </div>
    );
};

export default App
