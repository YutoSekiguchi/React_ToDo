import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/index';
import { Home, Edit, Post } from './pages/index';


function App() {
  return (
    <div className="App">
      <Header title={'ToDoリスト'} />

      {/* urlのルートの設定（ルーター） */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
