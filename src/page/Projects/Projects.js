import { React, useState } from 'react';
import './projects.css';
import PersonalProjects from '../../component/PersonalProjects/PersonalProjects'
import ProfessionalProjects from '../../component/ProfessionalProjects/ProfessionalProjects'

function Projects() {
    const [activeProject, setActiveProject] = useState('professional');

    const handleProjectChange = (Project) => {
        setActiveProject(Project);
    };
    return (
        <div className='m-auto w-2/3 mt-8 '>
            <div className='w-1/2 m-auto flex justify-center divide-x text-lg   divide-gray-800 border border-gray-800 bg-body mb-2'>
                <button
                    className={activeProject === 'professional' ? 'text-[#4bffa5]' : 'text-[#9D9D9D]'}
                    onClick={() => handleProjectChange('professional')}
                >
                    Professional
                </button>
                <button
                    className={activeProject === 'personal' ? 'text-[#4bffa5]' : 'text-[#9D9D9D]'}
                    onClick={() => handleProjectChange('personal')}
                >
                    Personal
                </button>
            </div>
            <div >
                {activeProject === 'professional' ? <ProfessionalProjects /> : <PersonalProjects />}
            </div>
        </div>
    )
}

export default Projects