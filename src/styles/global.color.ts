export const globalColors = {
	grey10: '#ffffff',
	grey15: '#fdfdfd',
	grey20: '#fafafa',
	grey25: '#f7f7f7',
	grey30: '#f3f3f3',
	grey35: '#f1f1f1',
	grey40: '#ebebeb',
	grey45: '#e3e3e3',
	grey50: '#d4d4d4',
	grey55: '#cccccc',
	grey60: '#b5b5b5',
	grey65: '#8a8a8a',
	grey70: '#616161',
	grey80: '#4a4a4a',
	grey90: '#303030',
	grey100: '#1a1a1a',

	lightblue10: '#fbfdff',
	lightblue15: '#f2f9ff',
	lightblue20: '#eaf4ff',
	lightblue25: '#e0f0ff',
	lightblue30: '#d5ebff',
	lightblue35: '#cae6ff',
	lightblue40: '#c0e1ff',
	lightblue45: '#a8d8ff',
	lightblue50: '#91d0ff',
	lightblue55: '#51c0ff',
	lightblue60: '#0094d5',
	lightblue65: '#007cb4',
	lightblue70: '#00679b',
	lightblue80: '#00527c',
	lightblue90: '#003a5a',
	lightblue100: '#002133',

	green10: '#f8fffb',
	green15: '#e3ffed',
	green20: '#cdfee1',
	green25: '#b4fed2',
	green30: '#92fec2',
	green35: '#63fdb0',
	green40: '#38faa3',
	green45: '#35ee9b',
	green50: '#32e193',
	green55: '#2ed389',
	green60: '#32a06e',
	green65: '#29845a',
	green70: '#136f45',
	green80: '#0c5132',
	green90: '#083d25',
	green100: '#092a1b',

	blue10: '#fcfdff',
	blue15: '#eef2ff',
	blue20: '#dee5ff',
	blue25: '#cdd8ff',
	blue30: '#bccbff',
	blue35: '#acbeff',
	blue40: '#9bb1ff',
	blue45: '#8aa4ff',
	blue50: '#7997ff',
	blue55: '#698aff',
	blue60: '#587dff',
	blue65: '#5072e8',
	blue70: '#3e59b5',
	blue80: '#2a3d7c',
	blue90: '#25356b',
	blue100: '#001633',

	red10: '#fffbfb',
	red15: '#fff6f6',
	red20: '#ffedec',
	red25: '#fee9e8',
	red30: '#fee2e1',
	red35: '#fedad9',
	red40: '#fed3d1',
	red45: '#fec3c1',
	red50: '#fdb0ac',
	red55: '#fd817a',
	red60: '#ef4d2f',
	red65: '#e51c00',
	red70: '#b5260b',
	red80: '#8e1f0b',
	red90: '#5f1507',
	red100: '#2f0a04',

	orange10: '#fffdfa',
	orange15: '#fff7ee',
	orange20: '#fff1e3',
	orange25: '#ffebd5',
	orange30: '#ffe4c6',
	orange35: '#ffddb6',
	orange40: '#ffd6a4',
	orange45: '#ffc06e',
	orange50: '#ffa938',
	orange55: '#ff9200',
	orange60: '#f38303',
	orange65: '#dd7a01',
	orange70: '#a96404',
	orange80: '#825101',
	orange90: '#3e2b02',
	orange100: '#371e03',

	yellow10: '#fffdf6',
	yellow15: '#fffaea',
	yellow20: '#fff5d5',
	yellow25: '#ffefc0',
	yellow30: '#ffeaab',
	yellow35: '#ffe595',
	yellow40: '#ffe080',
	yellow45: '#ffda6b',
	yellow50: '#ffd556',
	yellow55: '#e6c04d',
	yellow60: '#ccaa45',
	yellow65: '#bfa041',
	yellow70: '#998034',
	yellow80: '#736027',
	yellow90: '#594b1e',
	yellow100: '#4c3e15',

	teal10: '#fafffe',
	teal15: '#e7fcf8',
	teal20: '#d7fbf3',
	teal25: '#c0f9ef',
	teal30: '#a5f7e9',
	teal35: '#90f4e3',
	teal40: '#92edde',
	teal45: '#82e3d1',
	teal50: '#74dbc8',
	teal55: '#17c7a7',
	teal60: '#13a389',
	teal65: '#0e8470',
	teal70: '#086b5a',
	teal80: '#095346',
	teal90: '#06382f',
	teal100: '#05241e',

	purple10: '#fdfdff',
	purple15: '#f8f7ff',
	purple20: '#f3f1ff',
	purple25: '#efecff',
	purple30: '#e9e5ff',
	purple35: '#e4deff',
	purple40: '#dfd9ff',
	purple45: '#d4ccff',
	purple50: '#c7bcff',
	purple55: '#aa95ff',
	purple60: '#9474ff',
	purple65: '#8051ff',
	purple70: '#7126ff',
	purple80: '#5700d1',
	purple90: '#3b0093',
	purple100: '#1c004f',

	magenta10: '#fffdff',
	magenta15: '#fff5ff',
	magenta20: '#fdeffd',
	magenta25: '#fee7fe',
	magenta30: '#fcdffc',
	magenta35: '#fbd7fb',
	magenta40: '#fbcffb',
	magenta45: '#f9bef9',
	magenta50: '#f8b1f8',
	magenta55: '#f68df6',
	magenta60: '#e156e1',
	magenta65: '#c530c5',
	magenta70: '#9f269f',
	magenta80: '#791a79',
	magenta90: '#561056',
	magenta100: '#340634',
};

export const globalStyles = {
	bg: {
		bg: globalColors.grey10,
		bgAlt: globalColors.grey20,

		bgSurface: globalColors.grey10,
		bgSurfaceHover: globalColors.grey25,
		bgSurfaceActive: globalColors.grey30,
		bgSurfaceSelected: globalColors.grey35,
		bgSurfaceDisabled: globalColors.grey20,
		bgSurfaceSuccess: globalColors.teal15,
		bgSurfaceWarning: globalColors.yellow15,
		bgSurfaceErorr: globalColors.red20,
		bgSurfaceInfo: globalColors.lightblue20,

		bgFill: globalColors.yellow50,
		bgFillHover: globalColors.yellow55,
		bgFillDisabled: globalColors.grey35,

		bgFillSecondary: globalColors.grey10,
		bgFillSecondaryHover: globalColors.grey20,
		bgFillSecondaryInverse: globalColors.grey100,
		bgFillSecondaryInverseHover: globalColors.grey80,

		bgFillTertiary: globalColors.grey35,
		bgFillTertiaryHover: globalColors.grey40,
		bgFillTertiarySuccess: globalColors.green50,
		bgFillTertiaryWarning: globalColors.orange50,

		bgFillErorr: globalColors.red55,
		bgFillInfo: globalColors.blue60,
	},
	text: {
		text: globalColors.grey100,
		textSecondary: globalColors.grey70,
		textTertiary: globalColors.grey65,
		textQuaternary: globalColors.grey60,

		textDisabled: globalColors.grey50,
		textInverse: globalColors.grey10,
		textOnBgHover: globalColors.grey45,
		textInfo: globalColors.lightblue80,
		textSuccess: globalColors.green60,
		textWarning: globalColors.orange60,
		textError: globalColors.red60,
		textEmphasis: globalColors.blue70,
		textLink: globalColors.blue70,
		textLinkHover: globalColors.blue80,
		textLinkInverse: globalColors.blue45,
	},
	icon: {
		icon: globalColors.grey100,
		iconHover: globalColors.grey90,
		iconSelected: globalColors.yellow50,
		iconDisabled: globalColors.grey55,
		iconSecondary: globalColors.grey65,
		iconSecondaryHover: globalColors.grey70,
		iconInfo: globalColors.lightblue60,
		iconSuccess: globalColors.green60,
		iconWarning: globalColors.orange60,
		iconError: globalColors.red60,
		iconInverse: globalColors.grey10,
	},

	border: {
		border: globalColors.grey45,
		borderInverse: globalColors.grey10,
		borderHover: globalColors.grey55,
		borderDisabled: globalColors.grey40,
		borderSecondary: globalColors.grey40,
		borderTertiary: globalColors.grey55,
		borderInfo: globalColors.lightblue45,
		borderSuccess: globalColors.green30,
		borderWarning: globalColors.orange45,
		borderError: globalColors.red60,
		borderFocus: globalColors.grey100,
	},
	material: {
		materialDimmer: '1a1a1a85',
	},
};

// const grey10 = '#ffffff';
// const grey15 = '#fdfdfd';
// const grey20 = '#fafafa';
// const grey25 = '#f7f7f7';
// const grey30 = '#f3f3f3';
// const grey35 = '#f1f1f1';
// const grey40 = '#ebebeb';
// const grey45 = '#e3e3e3';
// const grey50 = '#d4d4d4';
// const grey55 = '#cccccc';
// const grey60 = '#b5b5b5';
// const grey65 = '#8a8a8a';
// const grey70 = '#616161';
// const grey80 = '#4a4a4a';
// const grey90 = '#303030';
// const grey100 = '#1a1a1a';

// const lightblue10 = '#fbfdff';
// const lightblue15 = '#f2f9ff';
// const lightblue20 = '#eaf4ff';
// const lightblue25 = '#e0f0ff';
// const lightblue30 = '#d5ebff';
// const lightblue35 = '#cae6ff';
// const lightblue40 = '#c0e1ff';
// const lightblue45 = '#a8d8ff';
// const lightblue50 = '#91d0ff';
// const lightblue55 = '#51c0ff';
// const lightblue60 = '#0094d5';
// const lightblue65 = '#007cb4';
// const lightblue70 = '#00679b';
// const lightblue80 = '#00527c';
// const lightblue90 = '#003a5a';
// const lightblue100 = '#002133';

// const green10 = '#f8fffb';
// const green15 = '#e3ffed';
// const green20 = '#cdfee1';
// const green25 = '#b4fed2';
// const green30 = '#92fec2';
// const green35 = '#63fdb0';
// const green40 = '#38faa3';
// const green45 = '#35ee9b';
// const green50 = '#32e193';
// const green55 = '#2ed389';
// const green60 = '#32a06e';
// const green65 = '#29845a';
// const green70 = '#136f45';
// const green80 = '#0c5132';
// const green90 = '#083d25';
// const green100 = '#092a1b';

// const blue10 = '#fcfdff';
// const blue15 = '#eef2ff';
// const blue20 = '#dee5ff';
// const blue25 = '#cdd8ff';
// const blue30 = '#bccbff';
// const blue35 = '#acbeff';
// const blue40 = '#9bb1ff';
// const blue45 = '#8aa4ff';
// const blue50 = '#7997ff';
// const blue55 = '#698aff';
// const blue60 = '#587dff';
// const blue65 = '#5072e8';
// const blue70 = '#3e59b5';
// const blue80 = '#2a3d7c';
// const blue90 = '#25356b';
// const blue100 = '#001633';

// const red10 = '#fffbfb';
// const red15 = '#fff6f6';
// const red20 = '#ffedec';
// const red25 = '#fee9e8';
// const red30 = '#fee2e1';
// const red35 = '#fedad9';
// const red40 = '#fed3d1';
// const red45 = '#fec3c1';
// const red50 = '#fdb0ac';
// const red55 = '#fd817a';
// const red60 = '#ef4d2f';
// const red65 = '#e51c00';
// const red70 = '#b5260b';
// const red80 = '#8e1f0b';
// const red90 = '#5f1507';
// const red100 = '#2f0a04';

// const orange10 = '#fffdfa';
// const orange15 = '#fff7ee';
// const orange20 = '#fff1e3';
// const orange25 = '#ffebd5';
// const orange30 = '#ffe4c6';
// const orange35 = '#ffddb6';
// const orange40 = '#ffd6a4';
// const orange45 = '#ffc06e';
// const orange50 = '#ffa938';
// const orange55 = '#ff9200';
// const orange60 = '#f38303';
// const orange65 = '#dd7a01';
// const orange70 = '#a96404';
// const orange80 = '#825101';
// const orange90 = '#3e2b02';
// const orange100 = '#371e03';

// const yellow10 = '#fffdf6';
// const yellow15 = '#fffaea';
// const yellow20 = '#fff5d5';
// const yellow25 = '#ffefc0';
// const yellow30 = '#ffeaab';
// const yellow35 = '#ffe595';
// const yellow40 = '#ffe080';
// const yellow45 = '#ffda6b';
// const yellow50 = '#ffd556';
// const yellow55 = '#e6c04d';
// const yellow60 = '#ccaa45';
// const yellow65 = '#bfa041';
// const yellow70 = '#998034';
// const yellow80 = '#736027';
// const yellow90 = '#594b1e';
// const yellow100 = '#4c3e15';

// const teal10 = '#fafffe';
// const teal15 = '#e7fcf8';
// const teal20 = '#d7fbf3';
// const teal25 = '#c0f9ef';
// const teal30 = '#a5f7e9';
// const teal35 = '#90f4e3';
// const teal40 = '#92edde';
// const teal45 = '#82e3d1';
// const teal50 = '#74dbc8';
// const teal55 = '#17c7a7';
// const teal60 = '#13a389';
// const teal65 = '#0e8470';
// const teal70 = '#086b5a';
// const teal80 = '#095346';
// const teal90 = '#06382f';
// const teal100 = '#05241e';

// const purple10 = '#fdfdff';
// const purple15 = '#f8f7ff';
// const purple20 = '#f3f1ff';
// const purple25 = '#efecff';
// const purple30 = '#e9e5ff';
// const purple35 = '#e4deff';
// const purple40 = '#dfd9ff';
// const purple45 = '#d4ccff';
// const purple50 = '#c7bcff';
// const purple55 = '#aa95ff';
// const purple60 = '#9474ff';
// const purple65 = '#8051ff';
// const purple70 = '#7126ff';
// const purple80 = '#5700d1';
// const purple90 = '#3b0093';
// const purple100 = '#1c004f';

// const magenta10 = '#fffdff';
// const magenta15 = '#fff5ff';
// const magenta20 = '#fdeffd';
// const magenta25 = '#fee7fe';
// const magenta30 = '#fcdffc';
// const magenta35 = '#fbd7fb';
// const magenta40 = '#fbcffb';
// const magenta45 = '#f9bef9';
// const magenta50 = '#f8b1f8';
// const magenta55 = '#f68df6';
// const magenta60 = '#e156e1';
// const magenta65 = '#c530c5';
// const magenta70 = '#9f269f';
// const magenta80 = '#791a79';
// const magenta90 = '#561056';
// const magenta100 = '#340634';

// common
const navHeight = '60px';
const sidebarWidth = '240px';

// space
const space0 = '0px';
const space50 = '2px';
const space100 = '4px';
const space150 = '6px';
const space200 = '8px';
const space250 = '10px';
const space300 = '12px';
const space350 = '14px';
const space400 = '16px';
const space450 = '18px';
const space500 = '20px';
const space600 = '24px';
const space650 = '26px';
const space700 = '28px';
const space800 = '32px';
const space900 = '36px';
const space1000 = '40px';
const space1100 = '44px';
const space1200 = '48px';
const space1600 = '64px';
const space2000 = '80px';

const spacePageMargin = 'space400';
const spaceCardPadding = 'space400';
const spaceButtonGroupGap = 'space200';
const spaceCardGap = 'space400';
const spaceTableCellPadding = 'space200';

//radius
const radiusNone = '0px';
const radius3Xs = '2px';
const radius2Xs = '4px';
const radiusXs = '6px';
const radiusMd = '8px';
const radiusLg = '12px';
const radiusXl = '16px';
const radius2Xl = '20px';
const radius3Xl = '24px';
const radiusFull = '100%';

// grid
const xm = '599px';
const sm = '879px';
const md = '1199px';
const lg = '1440px';
const fluid = '1440px';

const shadowSm = '0px 1px 4px 0px rgba(26, 26, 26, 0.1)';
const shadowMd = '0px 2px 8px 0px rgba(26, 26, 26, 0.1)';
const shadowLg = '0px 4px 16px 0px rgba(26, 26, 26, 0.1)';
const shadowXl = '0px 6px 24px 0px rgba(26, 26, 26, 0.1)';
const shadow2Xl = '0px 8px 32px 0px rgba(26, 26, 26, 0.1)';
