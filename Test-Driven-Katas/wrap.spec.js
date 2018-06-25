const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 20)).to.equal("");
  });


it('takes a string and breaks into lines,each line not longer the column number',()=>{
  const str="Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."
  const fixedstr="Lorem ipsum dolor"+"\n"
  +"sit eu amet, elit na"+"\n"
  +"magna sem amet nulla"+"\n"
  +"vel purus ac ligula."


  expect(wrap(str, 20)).to.equal(fixedstr);
});

});
