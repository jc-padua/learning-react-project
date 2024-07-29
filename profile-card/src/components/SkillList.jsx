import React from 'react';

function SkillList({ skills }) {
  return (
    <div className="skill-list-container">
      {skills.map(skill => (
        <Skills
          key={skill.skillName}
          skill={skill.skillName}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
}

function Skills(props) {
  return (
    <div
      className="skill-container"
      style={{ backgroundColor: `${props.color}` }}
    >
      <small>{props.skill}</small>
      <span>
        {props.level == 'beginner' && '👶🏻'}
        {props.level == 'intermediate' && '👍🏻'}
        {props.level == 'advanced' && '💪🏻'}
      </span>
    </div>
  );
}

export default SkillList;
