import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Sidebar.css';

function ProfileButton({ user }) {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = (e) => {
			console.log(e.target);
			if (e.target === document.querySelector('.profile-items fade-in-slide-down')) return;
			if (e.target === document.querySelector('#profile-dropdown-user-info')) return;
			if (e.target === document.querySelector('#account-item')) return;
			if (e.target === document.querySelector('#logout-item')) return;
			if (e.target === document.querySelector('#dropdown-username')) return;
			if (e.target === document.querySelector('#dropdown-email')) return;
			setShowMenu(false);
		};

		document.addEventListener('click', closeMenu);

		return () => document.removeEventListener('click', closeMenu);
	}, [showMenu]);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	return (
		<>
			<div className='profile-dropdown'>
				<button className='sidebar-user-button' onClick={openMenu}>
					<i className='fas fa-user-circle' />
					<h3 id='sidebar-username'>{user.username}</h3>
				</button>
				{showMenu && (
					<ul className='profile-items fade-in-slide-down'>
						<li id='account-item'>
							Account
							<div id='profile-dropdown-user-info'>
								<div id='dropdown-username'>{user.username}</div>
								<div id='dropdown-email'>{user.email}</div>
							</div>
						</li>
						<li id='logout-item'>
							<button id='sidebar-link' onClick={logout}>
								Sign Out {user.username}
							</button>
						</li>
					</ul>
				)}
			</div>
		</>
	);
}

export default ProfileButton;
