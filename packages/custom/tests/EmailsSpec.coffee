describe 'EmailsSpec', ->

  it 'can generate a notification code', ->
    startDate = moment.utc('2015-11-04T00:10:00+00:00')
    expect(Emails.getCode(startDate)).to.equal 'A1'
    expect(Emails.getCode(startDate.clone().add(1, 'hour'))).to.equal 'B1'
    expect(Emails.getCode(startDate.clone().add(23, 'hour'))).to.equal 'X1'
    expect(Emails.getCode(startDate.clone().add(24, 'hour'))).to.equal 'A1'
