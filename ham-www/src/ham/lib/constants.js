import BigNumber from 'bignumber.js/bignumber';

export const SUBTRACT_GAS_LIMIT = 100000;

const ONE_MINUTE_IN_SECONDS = new BigNumber(60);
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60);
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24);
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365);

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
};

export const addressMap = {
  uniswapFactory : "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95",
  uniswapFactoryV2: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
  YFI : "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
  YYCRV: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
  WETH : "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  UNIRouter : "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  BZRX: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",//Once again, 0x hasn't been changed from mkr's one.
  SNX: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
  LEND: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
  HAMYYCRV: "0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726",
}
