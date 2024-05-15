import { useState } from "react";

const Sample = () => {
  const [skills, setSkills] = useState([]);
  const [inputText, setInputText] = useState("");
  const [id, setId] = useState(0);

  const correctSkillNameList = [
    "Java",
    "Kotlin",
    "Mysql",
    "Python",
    "React",
    "Spring",
    "Swift",
    "Vue",
  ];

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    if (correctSkillNameList.includes(inputText)) {
      const newSkill = {
        name: inputText,
        id: id,
      };

      setSkills((prevList) => [...prevList, newSkill]);
      setId(id + 1);
    }

    setInputText("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onRemove = (id) => {
    const nextSkills = skills.filter((skill) => skill.id !== id);
    setSkills(nextSkills);
  };

  const skillList = skills.map((skill) => (
    <li
      key={skill.id}
      onDoubleClick={() => {
        onRemove(skill.id);
      }}
    >
      {skill.name}
    </li>
  ));

  const ImageComponent = (props) => (
    <div>
      <img
        key={props.skill.id}
        src={`${process.env.PUBLIC_URL}/images/${props.skill.name}.png`}
        alt={props.skill.name}
        onDoubleClick={() => {
          onRemove(props.skill.id);
        }}
      />
    </div>
  );

  const imageList = skills.map((skill) => <ImageComponent skill={skill} />);

  return (
    <div>
      <ul>{skillList}</ul>
      <input value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
      <button onClick={onClick}>추가</button>
      <br />
      {imageList}
    </div>
  );
};

export default Sample;