XLSX = Npm.require('xlsx')

class Worksheet

  constructor: ->
    @_sheet = {}

  # Adds an array of arrays representing the rows and columns of the worksheet. Each object should
  # be in the cell format.
  addData: (data) ->
    range = {s: {c: 10000000, r: 10000000}, e: {c: 0, r: 0}}
    _.each data, (row, rowIndex) =>
      _.each row, (value, colIndex) =>
        if range.s.r > rowIndex then range.s.r = rowIndex
        if range.s.c > colIndex then range.s.c = colIndex
        if range.e.r < rowIndex then range.e.r = rowIndex
        if range.e.c < colIndex then range.e.c = colIndex
        return unless value?
        cellRef = XLSX.utils.encode_cell {c: colIndex, r: rowIndex}
        cell = {v: value}
        ExcelUtils.formatCell(cell)
        @_sheet[cellRef] = cell
    @_sheet['!ref'] = XLSX.utils.encode_range(range)

  getSheet: -> @_sheet
