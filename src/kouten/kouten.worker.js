// import jyunData from './datas/jyunsu';
import etoData from './datas/eto';
import jyunkashinData from './datas/jyunkashin';
import setuData from './datas/setu';
import jyunsuData from './datas/jyunsu';
import junsetuYou from './datas/jyunsetuYou';
import junsetuIn from './datas/jyunsetuIn';
import himeguriData from './datas/himeguri';
import kaminashiData from './datas/kaminashi';
import goujyunData from './datas/goujyun';
import unseiData from './datas/unsei';


//   pass num return 12nums array
//   genEtoArr
const genTwelveArr = (num) => {
  const arr = [num];
  let counter = num;
  const intArr = Array.from({ length: 11 }, (v, k) => k + 1);
  // console.log('int', intArr);
  intArr.forEach(() => {
    if (counter < 12) {
      counter += 1;
    } else {
      counter = 1;
    }
    arr.push(counter);
  });
  return arr;
};

//   pass num return 10nums array
//   genGetuArr
const genTenArr = (num) => {
  const arr = [num];
  let counter = num;
  const intArr = Array.from({ length: 11 }, (v, k) => k + 1);
  // console.log('int', intArr);
  intArr.forEach(() => {
    if (counter < 10) {
      counter += 1;
    } else {
      counter = 1;
    }
    arr.push(counter);
  });
  return arr;
};

//   check setu from date string return checed date string
//   genNenJyunsu genJyunsuArr
const setuChecker = (dateStr) => {
  const dt = new Date(dateStr);
  const y = dt.getYear() + 1900;
  const m = dt.getMonth() + 1;
  const setu = setuData[String(y)];
  // const result = { year: true, month: true };
  let ny = y;
  let nm = m;
  const nd = dt.getDate();
  //   yearCheck
  const setuYear = new Date(`${y}-2-${setu.startDate}`);
  if (dt < setuYear) { ny -= 1; }
  //   month chack
  const setuMonth = new Date(`${y}-${m}-${setu.tuki[m]}`);
  if (dt < setuMonth) { nm = (nm - 1) !== 0 ? (nm - 1) : 12; }
  return `${ny}-${nm}-${nd}`;
  // console.log('sn', setuMonth);
  // console.log(typeof y);
  // console.log('date', y, m, d);
  // console.log(result);
};


//   return todays jyunsu object {year: , month: ,}
//   genGetuArr genJyunkashinArr inyoChecker
const genJyunsu = () => {
  const date = new Date();
  const year = date.getYear() + 1894;
  const dateStr = `${year}-${date.getMonth() + 1}-${date.getDate()}`;
  // console.log(dateStr);
  const checedYear = Number(setuChecker(dateStr).slice(0, 4));
  // console.log(checedYear);
  return jyunsuData[checedYear % 10];
};

// console.log('jyunsu', genJyunsu());


/*
  -------- kouten.Table.nen  ----------
*/
export const genNenArr = () => {
  const date = new Date();
  const year = date.getYear() + 1894;
  return [...Array(year + 12).keys()].slice(year);
};

// pass first year return 12etos array
export const genEtoArr = ({ firstYear }) => {
  const mod = ((Number(firstYear) - 5) % 12) + 1;
  const arr = genTwelveArr(mod);
  return arr.map((m) => etoData[m]);
};

export const genNenJyunsuArr = () => (
  genTenArr(genJyunsu().year)
);


/*
  -------- kouten.Table.getu  ----------
*/
export const genGetuArr = () => {
  const tukiSt = genTenArr(genJyunsu().month).indexOf(1) + 1;
  return genTwelveArr(tukiSt);
  // const nenDef = 13 - genNenJyunsuArr().indexOf(1);
  // const tukiArr = genTwelveArr(genJyunsu().month + (nenDef === 13 ? 1 : nenDef));
  // console.log(genJyunsu());
  // console.log('tukiSt', tukiSt);
  // console.log('tuki', tukiArr);
  // return Array.from({ length: 12 }, (v, k) => k + 1);
};

export const genGetuEtoArr = () => genGetuArr().map(
  (m) => etoData[m],
);

export const genGetuJyunsuArr = () => (
  genTenArr(genJyunsu().month)
);

// export const genGetuArr = () => {
//   const jyunsu = genJyunsu();
//   const jyunArr = genTenArr(jyunsu.year);
//   console.log('nenArr', jyunsu);
//   // const def = junsu.year - jyunsu.month;
//   // const monSt = def > 0 ? jyunsu.month +
//   const monStart = genTenArr(jyunsu.month).slice(0, 10).indexOf(1) + 1;
//   console.log('mon', monStart);
//   return genTwelveArr(monStart);
//   const stMonth = () => {
//     let def = jyunsu.year - jyunsu.month;
//     if (def < 0) { def = 11 - def; }
//     return def;
//   };
//   return genTwelveArr(stMonth());
// };


/*
  -------- kouten.Table.kashin  ----------
*/
export const genJyunkashinArr = ({ teikeimei }) => {
  const jyunsu = genJyunsu().year;
  //   create kashinsu array
  const kashinsuArr = genTenArr(jyunsu);
  const kashinData = jyunkashinData[teikeimei];
  const kashinArr = kashinsuArr.map((num) => kashinData[String(num)]);
  return kashinArr;
};


/*
  -------- kouten.Table.omeguri  ----------
*/
const inyoChecker = ({ seinen, seibetu }) => {
  const checkedDate = setuChecker(seinen);
  const y = checkedDate.slice(0, 4);
  const check = jyunsuData[Number(y) % 10].year % 2;
  // console.log(jyunsuData[Number(y) % 10]);
  let inyo = true;
  if (check && seibetu === 'female') { inyo = false; }
  if (!check && seibetu === 'male') { inyo = false; }
  return inyo;
};

const genTukijyunsu = ({ seinen }) => {
  const checkedDate = setuChecker(seinen);
  const y = checkedDate.slice(0, 4);
  return jyunsuData[Number(y) % 10].month;
};

export const genDaijyunArr = ({ seinen, seibetu }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  const date = new Date(seinen);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // console.log(month, day);
  // console.log(inyo);
  // console.log('tuki', tukijyunsu);
  const jyunsetu = inyo ? junsetuYou : junsetuIn;
  const setusu = Number(jyunsetu[month][day]);
  // console.log('sese', setusu);
  const setuArr = Array.from({ length: 12 }, (v, k) => {
    const res = `${setusu + (k - 1) * 10 > 0
      ? setusu + (k - 1) * 10 : 0} ~ ${setusu - 1 + k * 10}歳`;
    return res === '0 ~ 0歳' ? '0歳' : res;
  });
  const tukiArr = genGetuArr();
  console.log('tukiarr', tukiArr);
  const newArr = tukiArr.map((i) => setuArr[i - 1]);
  // console.log('nn', newArr);
  return setuArr;
};

const genGetuRevArr = () => {
  const arr = [1]
  const adarr = Array.from({ length: 11 }, (v, k) => k + 2).reverse();
  // console.log(arr.concat(adarr));
  return arr.concat(adarr);

  // console.log(arr, adarr);
};

export const genDaijyunEtoArr = ({ seinen, seibetu }) => {
  const inyo = inyoChecker({ seinen, seibetu });
  const you = genGetuEtoArr();
  const inn = genGetuRevArr().map((m) => etoData[m]);
  return inyo ? you : inn;
};


/*
  -------- kouten.Table.kaminashi  ----------
*/
const dateData = ({ seinen }) => {
  const mo = seinen.slice(5, 7);
  return {
    year: seinen.slice(0, 4),
    month: mo.slice(1, 2) === '0' ? mo : mo.replace('0', ''),
    day: seinen.slice(8, 10),
  };
};

const genTeikeimei = ({ seinen }) => {
  // console.log('b', seinen);
  const { year, month, day } = dateData({ seinen });
  const kihon = himeguriData[year].month[month];
  // console.log('kihon', kihon);
  const mesu = () => {
    let kari = Number(kihon) + Number(day) - 8;
    if (kari > 60) {
      kari -= 60;
    }
    return kari;
  };
  return mesu();
};

export const genKaminashiNeniArr = ({ seinen }) => {
  const teikeimei = genTeikeimei({ seinen });
  // console.log(teikeimei);
  let kaminashi = {};
  if (teikeimei <= 10) {
    kaminashi = kaminashiData[1];
  } else if (teikeimei <= 20) {
    kaminashi = kaminashiData[2];
  } else if (teikeimei <= 30) {
    kaminashi = kaminashiData[3];
  } else if (teikeimei <= 40) {
    kaminashi = kaminashiData[4];
  } else if (teikeimei <= 50) {
    kaminashi = kaminashiData[5];
  } else if (teikeimei <= 60) {
    kaminashi = kaminashiData[6];
  }
  // console.log(kaminashi.eto);
  const EtoArr = genEtoArr({ firstYear: genNenArr()[0] });
  // console.log(EtoArr);
  const etoNashiArr = EtoArr.map((v) => (
    kaminashi.eto.indexOf(v) > -1 ? 'nen' : ' '
  ));
  // console.log(etoNashiArr);
  return etoNashiArr;
};

export const genKaminashiTukiArr = ({ seinen }) => {
  const teikeimei = genTeikeimei({ seinen });
  // console.log(teikeimei);
  let kaminashi = {};
  if (teikeimei <= 10) {
    kaminashi = kaminashiData[1];
  } else if (teikeimei <= 20) {
    kaminashi = kaminashiData[2];
  } else if (teikeimei <= 30) {
    kaminashi = kaminashiData[3];
  } else if (teikeimei <= 40) {
    kaminashi = kaminashiData[4];
  } else if (teikeimei <= 50) {
    kaminashi = kaminashiData[5];
  } else if (teikeimei <= 60) {
    kaminashi = kaminashiData[6];
  }
  // console.log(kaminashi.tuki);
  const tukiArr = genGetuArr();
  // console.log(tukiArr);
  const NashiArr = tukiArr.map((v) => (
    kaminashi.tuki.indexOf(v) > -1 ? 'tuki' : ' '
  ));
  // console.log(NashiArr);
  return NashiArr;
};

const genNenjyunsu = ({ seinen }) => {
  const checkedDate = setuChecker(seinen);
  const y = checkedDate.slice(0, 4);
  return jyunsuData[Number(y) % 10].year;
};


/*
  -------- kouten.Table.goujyun  ----------
*/
export const genGoujyunArr = ({ seinen }) => {
  const teikeisu = genTeikeimei({ seinen });
  const nenjyun = genNenjyunsu({ seinen });
  const tukijyun = genTukijyunsu({ seinen });
  const nichijyun = teikeisu % 10 ? teikeisu % 10 : 10;
  const nenJyunsuArr = genNenJyunsuArr();
  // console.log(nenjyun, tukijyun, nichijyun);
  // console.log(nenJyunsuArr);
  const gd = goujyunData;
  const checker = (i) => {
    const res = [];
    if (i === gd[nenjyun]) { res.push('nen'); }
    if (i === gd[tukijyun]) { res.push('tuki'); }
    if (i === gd[nichijyun]) { res.push('nichi'); }
    // if (!res.length) { res = ''; }
    // console.log('re', i, res);
    return res;
  };
  const result = nenJyunsuArr.map((i) => checker(i));
  return result;
};


/*
  -------- kouten.chart  ----------
*/
export const genKashinData = ({ teikeimei }) => {
  // console.log('kashindata', teikeimei);
  const kashinArr = genJyunkashinArr({ teikeimei });
  const dataArr = kashinArr.map((v) => (
    Number(v.ten.slice(0, 1))
  //   {
  //   colmn: i + 1,
  //   kashin: Number(v.ten.slice(0, 1)),
  // }
  ));
  // console.log(dataArr);
  return dataArr;
};

export const genNenData = ({ teikeimei }) => {
  const firstYear = { firstYear: genNenArr()[0] };
  const etoArr = genEtoArr(firstYear);
  // console.log('eto', etoArr);
  const data = unseiData[teikeimei];
  // console.log('data', data);
  return etoArr.map((k) => Number(data[k]));
};

export const genGetuData = ({ teikeimei }) => {
  const etoArr = genGetuEtoArr();
  const data = unseiData[teikeimei];
  return etoArr.map((k) => Number(data[k]));
};

export const genOmeguriData = ({ teikeimei, seinen, seibetu }) => {
  const etoArr = genDaijyunEtoArr({ seinen, seibetu });
  const data = unseiData[teikeimei];
  return etoArr.map((k) => Number(data[k]));
};

// const conDic = (arr, dic, index) => {
//   const ndic = dic;
//   arr.forEach((item, i) => {
//     ndic.colmn = i+1
//   });
//
//
// };

export const genUnseiData = ({ teikeimei, seinen, seibetu }) => {
  const kashinData = genKashinData({ teikeimei });
  const nenData = genNenData({ teikeimei });
  const getuData = genGetuData({ teikeimei });
  const omeguriData = genOmeguriData({ teikeimei, seinen, seibetu });
  const dataArr = Array.from({ length: 12 }, (v, k) => ({ colmn: k + 1 }));
  kashinData.forEach((item, i) => {
    dataArr[i].kashin = item;
  });
  nenData.forEach((item, i) => {
    dataArr[i].nen = item;
  });
  getuData.forEach((item, i) => {
    dataArr[i].getu = item;
  });
  omeguriData.forEach((item, i) => {
    dataArr[i].omeguri = item;
  });
  // console.log('dr', dataArr);
  return dataArr;
};








//   creage nenjyunsu from date string
const genNenJyunsu = (strDate) => {
  const checkedDate = setuChecker(strDate);
  const y = checkedDate.slice(0, 4);
  return jyunsuData[Number(y) % 10];
};





export const genJyunsuArr = () => {
  const genJyunsu = () => {
    const setuCh = (dt, year) => {
      const y = dt.getYear() + 1894;
      const m = dt.getMonth() + 1;
      const d = dt.getDate();
      const tdate = new Date(`${y}-${m}-${d}`);
      const dstar = `${year}-${2}-${setuData[String(year)].startDate}`;
      const cdate = new Date(dstar);
      return tdate >= cdate;
    };
    const date = new Date('2013-02-03');
    let year = date.getYear() + 1894;

    //   check true year by setu
    const setuCheck = setuCh(date, year);
    if (!setuCheck) { year -= 1; }
    return jyunsuData[year % 10];
  };
  return genTenArr(genJyunsu().year);
};

//   for omeguri
export const daijyunun = ({ seinen, seibetu }) => {
  // const check = genNenJyunsu(seinen);
  const jyunsuArr = genJyunsuArr();
  // const c = genJyunkashinArr({teikeimei: 'åŽ³å±±å‘½'});
  // console.log('jyunsuArr', jyunsuArr);
  // const check = setuChecker('1912-02-5');
  // const nenJyunsu =
  // console.log('se', check);
};












//
// const setuChecker = (dateStr) => {
//   const dt = new Date(dateStr);
//   const y = dt.getYear() + 1900;
//   const m = dt.getMonth() + 1;
//   const setu = setuData[String(y)];
//   // const result = { year: true, month: true };
//   let ny = y;
//   let nm = m;
//   const nd = dt.getDate();
//   //   yearCheck
//   const setuYear = new Date(`${y}-2-${setu.startDate}`);
//   if (dt < setuYear) { ny -= 1; }
//   //   month chack
//   const setuMonth = new Date(`${y}-${m}-${setu.tuki[m]}`);
//   if (dt < setuMonth) { nm = (nm - 1) !== 0 ? (nm - 1) : 12; }
//   return `${ny}-${nm}-${nd}`;
//   // console.log('sn', setuMonth);
//   // console.log(typeof y);
//   // console.log('date', y, m, d);
//   // console.log(result);
// };
















// const genYouArr = (num) => {
//   const arr = [num];
//   let counter = num;
//   const intArr = Array.from({ length: 9 }, (v, k) => k + 1);
//   // console.log('int', intArr);
//   intArr.forEach(() => {
//     if (counter < 10) {
//       counter += 1;
//     } else {
//       counter = 1;
//     }
//     arr.push(counter);
//   });
//   console.log(arr);
//   return arr;
// };


const genInArr = (num) => {
  const arr = [num];
  let counter = num;
  const intArr = Array.from({ length: 9 }, (v, k) => k + 1);
  // console.log('int', intArr);
  intArr.forEach(() => {
    if (counter <= 1) {
      counter = 10;
    } else {
      counter -= 1;
    }
    arr.push(counter);
  });
  console.log(arr);
  return arr;
};


export const nenjyun = () => {
  console.log('tukijyun', jyunData);

};


// genYouArr(10);
// genInArr(5);
