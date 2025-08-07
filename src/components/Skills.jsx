import {
  FaPython,
  FaJava,
  FaJsSquare,
  FaGitAlt,
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import {
  SiMysql,
  SiMongodb,
  SiFlask,
  SiDjango,
  SiScikitlearn,
  SiOpencv,
  SiHuggingface
} from 'react-icons/si';

const categorizedSkills = {
  'Programming Languages': [
    { label: 'Python', icon: <FaPython size={32} /> },
    { label: 'Java', icon: <FaJava size={32} /> },
    { label: 'JavaScript', icon: <FaJsSquare size={32} /> },
  ],
  'Frameworks': [
    { label: 'React', icon: <FaReact size={32} /> },
    { label: 'Node.js', icon: <FaNodeJs size={32} /> },
    { label: 'Flask', icon: <SiFlask size={32} /> },
    { label: 'Django', icon: <SiDjango size={32} /> },
    { label: 'JavaFX', icon: <FaJava size={32} /> },
  ],
  'Libraries': [
    { label: 'Scikit-learn', icon: <SiScikitlearn size={32} /> },
    { label: 'OpenCV', icon: <SiOpencv size={32} /> },
    { label: 'Hugging Face', icon: <SiHuggingface size={32} /> },
  ],
  'Databases': [
    { label: 'MySQL', icon: <SiMysql size={32} /> },
    { label: 'MongoDB', icon: <SiMongodb size={32} /> },
  ],
  'Version Control': [
    { label: 'Git', icon: <FaGitAlt size={32} /> },
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-gray-100" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="space-y-6">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flip-card w-20 h-20"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="flip-inner">
                      <div className="flip-front">
                        {skill.label}
                      </div>
                      <div className="flip-back">
                        {skill.icon}
                        {/* <p className="text-sm mt-2">{skill.label}</p> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
