'use client';

import Button from '@/components/atom/Button';
import {loginAtom} from '@/stores/loginStore';
import {useAtom} from 'jotai';

import {useEffect} from 'react';

// import Navbar from "@/components/common/Navbar";
// import { IcNext } from "@assets/icons";

export default function Home() {
	const [loginInfo, setLoginInfo] = useAtom(loginAtom);
	const clickHandler = () => {
		setLoginInfo((pre) => ({
			...pre,
			name: 'DH',
			token: '12321321',
		}));
	};

	useEffect(() => {
		console.log('!#!@@!#!@#', loginInfo);
	}, [loginInfo]);

	return (
		<main>
			{/* <Navbar /> */}
			<h1 className="h1">h111</h1>
			<h1 className="h2">22</h1>
			<h1 className="h3">33</h1>
			<h1 className="h4">4411</h1>

			<Button clickHandler={clickHandler} size="s">
				click
			</Button>

			{/* <IcNext color={"#45983a"} fill={"#45983a"} width="300px" height="300px" /> */}
		</main>
	);
}
