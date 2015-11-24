# Additional fields for mizzao:user-status.
schema = new SimpleSchema
  status:
    type: Object
    blackbox: true

Users.attachSchema(schema)
