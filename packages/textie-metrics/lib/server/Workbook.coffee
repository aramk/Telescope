class Workbook

  constructor: ->
    unless (@ instanceof Workbook) then return new Workbook()
    @SheetNames = []
    @Sheets = {}

  addSheet: (name, sheet) ->
    if @Sheets[name] then throw new Error "Sheet already added: #{name}"
    @Sheets[name] = sheet
    @SheetNames
