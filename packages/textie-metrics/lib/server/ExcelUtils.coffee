ExcelUtils =

  arrayBufferFromString: (str) ->
    ab = new ArrayBuffer(str.length)
    view = new Uint8Array(ab)
    for i in [0..view.length]
      view[i] = str.charCodeAt(i) & 0xFF
    ab

  datenum: (value, date1904) ->
    if date1904 then value += 1462
    epoch = Date.parse(value)
    (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)

return unless Meteor.isServer

XLSX = Npm.require('xlsx')

_.extend ExcelUtils,
  
  formatCell: (cell) ->
    type = cell.t
    value = cell.v
    unless type?
      switch typeof value
        when 'number' then type = 'n'
        when 'boolean' then type = 'b'
      if value instanceof Date
        type = 'n'
        cell.z = XLSX.SSF._table[14]
        cell.v = @datenum(value)
        # Alternative format.
        # type = 'd'
      type ?= 's'
      cell.t = type
    cell
