import '@styles/components/organism/table.scss';
import React from 'react';

import {Text} from '../atom';
import {getFormattedDate} from '@/utils/date';

const NUMBER_TYPE_CELL = ['phone', 'price', 'id'];

const DATE_KEY_LIST = ['createAt'];

interface dataObjProps<T> {
	[key: string]: string;
}

interface Props<T> {
	headList: string[];
	dataList: dataObjProps<T>[];
}

function Table<T>({headList, dataList}: Props<T>) {
	// const getCellMinWidth = (type: string) => {
	// 	if (NUMBER_TYPE_CELL.includes(type)) {
	// 		return 'width80';
	// 	}
	// };

	/* TODO: 동적으로 테이블 줄어들기를 설정하려면 basis, min,max-width 수정 필요 */
	return (
		<table className="table__container">
			<thead className="table__head">
				<tr>
					{headList?.map((cell) => (
						<th key={`head-cell-${cell}`}>
							<Text variant="label" size="md" weight="bold">
								{cell}
							</Text>
						</th>
					))}
				</tr>
			</thead>

			<tbody className="table__body">
				{dataList?.map((row, rowIdx) => {
					const objKeyList = Object.keys(row) as (keyof T)[];

					return (
						<tr key={`body-row-${rowIdx}}`}>
							{objKeyList.map((data, dataIdx) => {
								const key = String(data);
								const cellValue = DATE_KEY_LIST.includes(key) ? getFormattedDate(row[key]) : row[key];

								return (
									<td key={`body-data-${rowIdx}-${dataIdx}`}>
										<Text variant="label" size="md" weight="regular" textLine={1}>
											{cellValue || '-'}
										</Text>
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

export default Table;
