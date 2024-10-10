import dayjs from 'dayjs';

import {DATE_FORMAT} from '@/constants';

export const getFormattedDate = (date: Date | string, format: string = DATE_FORMAT) => {
	return dayjs(date).format(format);
};
