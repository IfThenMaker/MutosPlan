import data from './himeguri';
import jinColorData from './jinColor';
import syugoColorData from './syugoColor';
import bodyColorData from './bodyColor';

import syugoIndex from './syugoIndex';
import syugokashinData from './syugokashinData';


const dateData = ({ birthday }) => {
  const mo = birthday.slice(5, 7);
  // console.log('nmi', mo.slice(0, 1));
  return {
    year: birthday.slice(0, 4),
    month: mo.slice(1, 2) === '0' ? mo : mo.replace('0', ''),
    day: birthday.slice(8, 10),
  };
};

export const teikeimeiCalc = ({ birthday }) => {
  const { year, month, day } = dateData({ birthday });
  const kihon = data[year].month[month];
  const mesu = (() => {
    let kari = Number(kihon) + Number(day) - 8;
    if (kari > 60) {
      kari -= 60;
    }
    return kari;
  })();
  const himeguri = mesu % 10;
  return jinColorData[himeguri];
};

export const syugokashinCalc = ({ birthday, teikeimeiNum }) => {
  const { year, month, day } = dateData({ birthday });
  const ydata = syugokashinData[year];
  const date = `${`00${month}`.slice(-2)}/${`00${day}`.slice(-2)}`;
  const kashinsu = ydata[date];
  const kashin = syugoIndex[kashinsu][teikeimeiNum].syugoNum;
  return syugoColorData[kashin];
};

export const bodykashinCalc = ({ birthday }) => {
  const { year, month, day } = dateData({ birthday });
  const strSum = (word) => {
    const arr = word.split('');
    let sum = 0;
    arr.forEach((item) => {
      sum += Number(item);
    });
    return sum;
  };
  let f = strSum(year) + strSum(month) + strSum(day);
  if (f >= 10) {
    f = Math.floor(f / 10) + (f % 10);
  }
  if (f >= 10) {
    f = Math.floor(f / 10) + (f % 10);
  }
  return bodyColorData[f];
};
