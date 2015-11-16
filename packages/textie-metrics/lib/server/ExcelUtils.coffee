ExcelUtils =

  getCellType: (value) ->
    type = null
    switch typeof value
      when 'number' then type = 'n'
      when 'boolean' then type = 'b'
    type ?= 's'
    type

  arrayBufferFromString: (str) ->
    encodedStr = unescape(encodeURIComponent(str))
    buffer = new ArrayBuffer(encodedStr.length)
    bytes = new Uint8Array(buffer)
    for i in [0..encodedStr.length]
      bytes[i] = encodedStr.charCodeAt(i)
    buffer

    # ab = new ArrayBuffer(str.length)
    # view = new Uint8Array(ab)
    # # for i in [0..view.length]
    # #   view[i] = str.charCodeAt(i) & 0xFF
    # # ab
    # for value, i in ab
    #   view[i] = ab[i]
    # ab

    # arrayBuffer = new ArrayBuffer(buffer.length)
    # view = new Uint8Array(arrayBuffer)
    # for value, i in buffer
    #   view[i] = buffer[i]
    # arrayBuffer
