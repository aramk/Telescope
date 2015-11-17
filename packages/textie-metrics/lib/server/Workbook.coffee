class Workbook

  constructor: ->
    unless (@ instanceof Workbook) then return new Workbook()
    @SheetNames = []
    @Sheets = {}

  addSheet: (name, sheet) ->
    if @Sheets[name] then throw new Error "Sheet already added: #{name}"
    if sheet instanceof Worksheet then sheet = sheet.getSheet()
    @Sheets[name] = sheet
    @SheetNames.push(name)
