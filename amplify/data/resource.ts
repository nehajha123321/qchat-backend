import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rules below
specify that owners, authenticated via your Auth resource can "create",
"read", "update", and "delete" their own records. Public users,
authenticated via an API key, can only "read" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      done: a.boolean(),
      priority: a.enum(["low", "medium", "high"]),
    })
    .authorization([a.allow.private()]),
  Training: a
    .model({
      title: a.string(),
      description: a.string(),
      duration: a.string(),
      category: a.string(),
      tags: a.string().array(),
    })
    .authorization([a.allow.private()]),
  Trainer: a
    .model({
      name: a.string(),
      gender: a.string(),
      age: a.integer(),
      email: a.string(),
      mobile: a.string(),
    })
    .authorization([a.allow.private()]),
  Attendee: a
    .model({
      name: a.string(),
      gender: a.string(),
      age: a.integer(),
      email: a.string(),
      mobile: a.string(),
    })
    .authorization([a.allow.private()]),
  Schedule: a
    .model({
      training: a.hasOne("Training"),
      trainer: a.hasMany("Trainer"),
      startdate: a.date(),
      starttime: a.datetime(),
      enddate: a.date(),
      endtime: a.datetime(),
      location: a.string(),
      schedule_status: a.enum(["Draft", "Scheduled", "Cancelled", "Completed"]),
      attendees: a.hasMany("Attendee"),
    })
    .authorization([a.allow.private()]),
  Registration: a
    .model({
      attendee: a.hasOne("Attendee"),
      schedule: a.hasOne("Schedule"),
      registration_status: a.enum(["Registered", "OnHold", "Confirmed"]),
    })
    .authorization([a.allow.private()]),
  QChatRequest: a
    .model({
      customer: a.string().required(),
      website: a.url().required(),
      additional_sites: a.url().array(),
      chatbotname: a.string(),
      chatbot_logo_url: a.string(),
      initial_text: a.string(),
      guardrails: a.string(),
      acceptTnC: a.boolean().required(),
      docs: a.string().array(),
      token: a.string(),
      bot_status: a.enum(["Active", "Expired", "Disabled"]),
      qchatform_status: a.enum(["Submitted", "Completed", "Error"]),
      regionQ: a.enum(["NORTH_VIRGINIA", "OREGON"]),
      expiry_datetime: a.datetime(),
      requester_email: a.email(),
      applicationIdQ: a.string(),
      indexedPages: a.string(),
    })
    .authorization([a.allow.private()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    /* defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    }, */
  },
});
