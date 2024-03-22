import React, { useState } from 'react'
import "../Css/Sidebar.css"
import { SiAntdesign } from "react-icons/si";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { TbSquarePlus } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineFolder } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { TbHelp } from "react-icons/tb";


const Sidebar = (props) => {
	const [datas, setData] = useState(true);

	function handleData(data) {
		setData(data);
		props.onData(data);
	}


	return (
		<div className='sideconatiner'>
			<div className='df jcsb shead'>
				<div className='df'>
					<div>
						<img src='innovateHub.png' className='img1' />
					</div>
					<div className='headings'>
						<h5 className='textlight'>INC</h5>
						<div className='textdark'>InnovateHub</div>
					</div>
				</div>
				<div>
					<img src='img2.png' className='img2' />
				</div>
			</div>

			<div className='menus1'>
				<div className='df jcsb menu1'>
					<div className='df'>
						<SiAntdesign />
						<div className='textdark'>Design team</div>
					</div>
					<div className='x1'>
						x+1
					</div>
				</div>
				<div className='df jcsb menu1'>
					<div className='df'>
						<HiOutlineSpeakerphone />
						<div className='textdark'>Marketing Team</div>
					</div>
					<div className='x1'>
						x+2
					</div>
				</div>
				<div className='df jcsb menu1'>
					<div className='df'>
						<RiExpandLeftRightLine />
						<div className='textdark'>Development team</div>
					</div>
					<div className='x1'>
						x+3
					</div>
				</div>
			</div>
			<div className='menu1 df lastm'>
				<TbSquarePlus />
				<div>Create a team</div>
			</div>

			<div className='jcsb df folder'>
				<div className='textlight '>FOLDERS</div>
				<FaPlus className='textlight' />
			</div>

			<div className='menu1 df jcsb' onClick={() => handleData(true)}>
				<div className='df'><MdOutlineFolder />
					<div className='textdark'>Products</div>
				</div>
				<div><FaCaretDown className='downsvg' /></div>

			</div>
			<div className='menu1 df jcsb' onClick={() => handleData(false)}>
				<div className='df'><MdOutlineFolder />
					<div className='textdark'>Sales</div>
				</div>
				<div><FaCaretDown className='downsvg' /></div>

			</div>
			<div className='menu1 df jcsb' onClick={() => handleData(false)}>
				<div className='df'><MdOutlineFolder />
					<div className='textdark'>Design</div>
				</div>
				<div><FaCaretDown className='downsvg' /></div>

			</div>
			<div className='menu1 df jcsb' onClick={() => handleData(false)}>
				<div className='df'><MdOutlineFolder />
					<div className='textdark'>Office</div>
				</div>

			</div>
			<div className='menu1' onClick={() => handleData(false)}>
				<div className='df'><MdOutlineFolder />
					<div className='textdark'>Legal</div>
				</div>

			</div>
			<div className='menu1 invite'>
				<div className='df'>
					< MdOutlinePersonAddAlt />
					<div className='textdark'>Invite teammates</div>
				</div>
			</div>
			<div className='menu1'>
				<div className='df'>
					< TbHelp />
					<div className='textdark'>Help and first steps</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
