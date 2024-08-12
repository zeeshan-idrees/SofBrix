
import React, {useState }from 'react'
import Project1 from '../images/project1.webp'
import Project2 from '../images/project2.webp'
import Project3 from '../images/project3.webp'
import Project4 from '../images/project4.webp'
import Project5 from '../images/project5.webp'
import Project6 from '../images/project6.webp'




export default function Projects () {
    const projectsData = [
        { id: 1, title: 'SEO Reporting Tools', category: 'Branding', profile:Project1},
        { id: 5, title: 'Mobile App Design', category: 'Branding', profile:Project2},
        { id: 2, title: 'SEO Marketing Website', category: 'Marketing', profile:Project3},
        { id: 3, title: 'Marketing Trend 2022', category: 'Design' ,profile:Project4},
        { id: 3, title: 'Creative Fashion Designer', category: 'Design', profile:Project5},
        { id: 4, title: 'E-Commerce', category: 'Development', profile:Project6},
        // Add more projects as needed
      ];
      const [activeCategory, setActiveCategory] = useState('All');
      const [activeButton, setActiveButton] = useState('All');
     
      const handleFilterClick = (category) => {
        setActiveCategory(category);
        setActiveButton(category);
      };
    
      const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

     
  return (
    <div className='container-fluid bg-color text-light' id='project'>
     <h1 className='fs-5 opacity-75 text-center'>SELECTED WORK</h1>
     <h1 className='feature-heading text-center'>Our Latest Project</h1>

     <div className='buttons d-flex flex-wrap justify-content-center gap-2 mt-5'>
<button  className={activeButton === 'All' ?'first-btn btn' : 'btn p-btn'} onClick={() => handleFilterClick('All')}>All</button>
<button onClick={() => handleFilterClick('Branding')} className={activeButton === 'Branding' ?'first-btn btn' : 'btn p-btn'} >Branding</button>
            <button  onClick={() => handleFilterClick('Design')} className={activeButton === 'Design' ?'first-btn btn' : 'btn p-btn'}>Design</button>
            <button  onClick={() => handleFilterClick('Development')} className={activeButton === 'Development' ?'first-btn btn' : 'btn p-btn'}>Development</button>
            <button  onClick={() => handleFilterClick('Marketing')} className={activeButton === 'Marketing' ?'first-btn btn' : 'btn p-btn'}>Marketing</button>
     </div>

<div className="row mt-5 justify-content-around text-center">
 
  {filteredProjects.map(project => (
      <div className="col-lg-4 p-4 ">     
    
    <div className='img-overlay'><img src={project.profile} alt="" className='img-fluid images'/>
    <div className='btn-overlay fs-4 '><span className='btn-border'>Veiw Details</span></div>
    </div>
    <p className='fs-6 fw-light pt-3 opacity-75'>{project.category}</p>
  <h1 className='fs-4 '>{project.title}</h1></div>
 ))}
 
 

  
</div>
    </div>
  )
}
