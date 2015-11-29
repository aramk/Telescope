# Additional fields for mizzao:user-status.
schema = new SimpleSchema
  status:
    type: Object
    blackbox: true
    optional: true

Users.attachSchema(schema)
