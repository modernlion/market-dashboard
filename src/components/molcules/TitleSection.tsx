import '@styles/components/molecule/titleSection.scss';
import React from 'react';
import {Text} from '../atom';

interface Props {
	title: string;
	desc: string;
}

function TitleSection({title, desc}: Props) {
	return (
		<div className="title__molcules__container">
			<Text variant="headline" size="sm">
				{title}
			</Text>

			{desc && (
				<Text variant="label" size="md" color="textSecondary">
					{desc}
				</Text>
			)}
		</div>
	);
}

export default TitleSection;
