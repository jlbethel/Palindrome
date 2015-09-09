describe('palidrome', function () {
  it('will determine that a three letter word is a palindrome', function() {
    expect(palindrome('dad')).to.equal(true);
  });

  it('will return false if the word is not a palindrome', function() {
    expect(palindrome('chair')).to.equal(false);
  });

  it('will return true if a palindromic number is entered', function() {
    expect(palindrome('1221')).to.equal(true);
  });

  it('will return for a long word', function() {
    expect(palindrome('racecar')).to.equal(true);
  });

  it('will return true for a palindromic phrase', function() {
    expect(palindrome('echo ohce')).to.equal(true);
  });
});
