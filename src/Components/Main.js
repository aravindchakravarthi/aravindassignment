import React, { useEffect, useState } from 'react'
import "../Css/Main.css"
import { FiSettings } from "react-icons/fi";
import { PiChatsBold } from "react-icons/pi";
import { TbCategory } from "react-icons/tb";
import { FaSortDown } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import { RiFilter3Fill } from "react-icons/ri";
import { TbSquarePlus } from "react-icons/tb";
import { MdImportExport } from "react-icons/md";

import "../Data/data"
import { datas } from '../Data/data';



const Main = (props) => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const filteredResults = datas.filter((data) =>
            (data.brand.toLowerCase()).includes(search.toLowerCase())
        );
        setSearchResults(filteredResults.reverse());
    }, [datas, search]);

    if (props.status) {
	return(
	
		<div className='main'>
			<div className='df jcsb mainhead'>
				<h3>Products</h3>
				<div className='df ritems'>
					<div>
						<input 
							type='search'
							placeholder='&#xf0e0; Search for..' 
							className='search' 
							value={search}
							onChange={(e)=> setSearch(e.target.value)}
						/></div>
					<div className='setting'><PiChatsBold /></div>
					<div className='setting'><FiSettings /></div>

				</div>
			</div>

			<div className='mainhead1 df jcsb'>
				<div className='df jcse litems'>
					<div className='maintext textdark df'><TbCategory /> All brands <FaSortDown /></div>
					<div className='maintext textdark df padl'>Desk <FaSortDown /></div>
					<div className='maintext textdark df padl'>Tags<FaSortDown /></div>
					<div className='maintext textdark df'><BiSortAlt2 /> Sort<FaSortDown /></div>
					<div className='maintext textdark df'><RiFilter3Fill /> Filter<FaSortDown /></div>
				</div>
				<div className='df ritems1'>
					<div className='maintext textdark df'><TbSquarePlus /> Meeting<FaSortDown /></div>
					<div className='maintext textdark df'><MdImportExport /> Import/Export<FaSortDown /></div>
				</div>
			</div>
			<div className='df title1'>
				<div className='title'>Brand</div>
				<div className='title'>Description</div>
				<div className='title'>Members</div>
				<div className='title'>Categories</div>
				<div className='title'>Tags</div>
				<div className='title'>Nextmeeting</div>
			</div>
			{searchResults.map((data) => {
				return (
					<div className='title1 df' id={data.id}>
						<div className='title'><input type='checkbox'/><img src={data.img}/>{data.brand}</div>
						<div className='title'>{data.descr}</div>
						<div className='title'><img className='img3' src={data.img2}/></div>
						<div className='title'>{data.category}</div>
						<div className='title'><div className='tag'>{data.tags}</div></div>
						<div className='title'>{data.next}</div>
					</div>
				)
			})}

		</div>
	)   
 } 
 else {
        return <h1 className='h11'>Click the Products in Folders, Only the given products is desined</h1>;
    }
}

export default Main
