import "./App.css";
import Alert from "./Components/Alert";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
      <Profile />
    </>
  );
}

export default App;
