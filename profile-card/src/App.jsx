import './App.css';
import Avatar from './components/Avatar';
import Intro from './components/Intro';
import SkillList from './components/SkillList';
import skills from './data/skills';

function App() {
  return (
    <div className="container">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList skills={skills} />
        </div>
      </div>
    </div>
  );
}

export default App;
