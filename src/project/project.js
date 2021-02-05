import React, { useEffect, useState } from 'react';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';
import './project.css';
const options = {
};

const Project=()=> {
	const [tag, setTag] = useState('all design');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === ('all design') ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
       
            		<div className="App resume contact" style={{padding:"80px 0px"}}>
			<div className="tags ">
				<TagButton style={{backgroundColor:"red"}} name="all design" tagActive={tag === 'all design' ? true : false}  handleSetTag={setTag} /> 
				<TagButton name="Ui/Ux Design" tagActive={tag === 'Ui/Ux Design' ? true : false} handleSetTag={setTag} /> 
				<TagButton name="graphic design" tagActive={tag === 'graphic design' ? true : false} handleSetTag={setTag} /> 
			</div>
			<SRLWrapper options={options}>
				<div className="container-protfollio ">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card ">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
            <button style={{background:"rgb(0, 219, 172)",marginLeft:"20px",marginBottom:"20px",padding:"10px 25px",border:"none",color:"white"}} className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Project;