import UserList from "./components/userList";
import Content from "./components/posts.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <UserList />
      <Content />
    </div>
  );
}

export default App;