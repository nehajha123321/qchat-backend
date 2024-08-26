/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAttendee = /* GraphQL */ `
  subscription OnCreateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onCreateAttendee(filter: $filter) {
      age
      createdAt
      email
      gender
      id
      mobile
      name
      scheduleAttendeesId
      updatedAt
      __typename
    }
  }
`;
export const onCreateQChatRequest = /* GraphQL */ `
  subscription OnCreateQChatRequest(
    $filter: ModelSubscriptionQChatRequestFilterInput
  ) {
    onCreateQChatRequest(filter: $filter) {
      additional_sites
      bot_status
      chatbot_logo_url
      chatbotname
      createdAt
      customer
      docs
      expiry_datetime
      guardrails
      id
      initial_text
      qchatform_status
      requester_email
      token
      updatedAt
      website
      __typename
    }
  }
`;
export const onCreateRegistration = /* GraphQL */ `
  subscription OnCreateRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onCreateRegistration(filter: $filter) {
      attendee {
        age
        createdAt
        email
        gender
        id
        mobile
        name
        scheduleAttendeesId
        updatedAt
        __typename
      }
      createdAt
      id
      registrationAttendeeId
      registrationScheduleId
      registration_status
      schedule {
        createdAt
        enddate
        endtime
        id
        location
        scheduleTrainingId
        schedule_status
        startdate
        starttime
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onCreateSchedule = /* GraphQL */ `
  subscription OnCreateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onCreateSchedule(filter: $filter) {
      attendees {
        nextToken
        __typename
      }
      createdAt
      enddate
      endtime
      id
      location
      scheduleTrainingId
      schedule_status
      startdate
      starttime
      trainer {
        nextToken
        __typename
      }
      training {
        category
        createdAt
        description
        duration
        id
        tags
        title
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      content
      createdAt
      done
      id
      priority
      updatedAt
      __typename
    }
  }
`;
export const onCreateTrainer = /* GraphQL */ `
  subscription OnCreateTrainer($filter: ModelSubscriptionTrainerFilterInput) {
    onCreateTrainer(filter: $filter) {
      age
      createdAt
      email
      gender
      id
      mobile
      name
      scheduleTrainerId
      updatedAt
      __typename
    }
  }
`;
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onCreateTraining(filter: $filter) {
      category
      createdAt
      description
      duration
      id
      tags
      title
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAttendee = /* GraphQL */ `
  subscription OnDeleteAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onDeleteAttendee(filter: $filter) {
      age
      createdAt
      email
      gender
      id
      mobile
      name
      scheduleAttendeesId
      updatedAt
      __typename
    }
  }
`;
export const onDeleteQChatRequest = /* GraphQL */ `
  subscription OnDeleteQChatRequest(
    $filter: ModelSubscriptionQChatRequestFilterInput
  ) {
    onDeleteQChatRequest(filter: $filter) {
      additional_sites
      bot_status
      chatbot_logo_url
      chatbotname
      createdAt
      customer
      docs
      expiry_datetime
      guardrails
      id
      initial_text
      qchatform_status
      requester_email
      token
      updatedAt
      website
      __typename
    }
  }
`;
export const onDeleteRegistration = /* GraphQL */ `
  subscription OnDeleteRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onDeleteRegistration(filter: $filter) {
      attendee {
        age
        createdAt
        email
        gender
        id
        mobile
        name
        scheduleAttendeesId
        updatedAt
        __typename
      }
      createdAt
      id
      registrationAttendeeId
      registrationScheduleId
      registration_status
      schedule {
        createdAt
        enddate
        endtime
        id
        location
        scheduleTrainingId
        schedule_status
        startdate
        starttime
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSchedule = /* GraphQL */ `
  subscription OnDeleteSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onDeleteSchedule(filter: $filter) {
      attendees {
        nextToken
        __typename
      }
      createdAt
      enddate
      endtime
      id
      location
      scheduleTrainingId
      schedule_status
      startdate
      starttime
      trainer {
        nextToken
        __typename
      }
      training {
        category
        createdAt
        description
        duration
        id
        tags
        title
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      content
      createdAt
      done
      id
      priority
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTrainer = /* GraphQL */ `
  subscription OnDeleteTrainer($filter: ModelSubscriptionTrainerFilterInput) {
    onDeleteTrainer(filter: $filter) {
      age
      createdAt
      email
      gender
      id
      mobile
      name
      scheduleTrainerId
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onDeleteTraining(filter: $filter) {
      category
      createdAt
      description
      duration
      id
      tags
      title
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAttendee = /* GraphQL */ `
  subscription OnUpdateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
    onUpdateAttendee(filter: $filter) {
      age
      createdAt
      email
      gender
      id
      mobile
      name
      scheduleAttendeesId
      updatedAt
      __typename
    }
  }
`;
export const onUpdateQChatRequest = /* GraphQL */ `
  subscription OnUpdateQChatRequest(
    $filter: ModelSubscriptionQChatRequestFilterInput
  ) {
    onUpdateQChatRequest(filter: $filter) {
      additional_sites
      bot_status
      chatbot_logo_url
      chatbotname
      createdAt
      customer
      docs
      expiry_datetime
      guardrails
      id
      initial_text
      qchatform_status
      requester_email
      token
      updatedAt
      website
      __typename
    }
  }
`;
export const onUpdateRegistration = /* GraphQL */ `
  subscription OnUpdateRegistration(
    $filter: ModelSubscriptionRegistrationFilterInput
  ) {
    onUpdateRegistration(filter: $filter) {
      attendee {
        age
        createdAt
        email
        gender
        id
        mobile
        name
        scheduleAttendeesId
        updatedAt
        __typename
      }
      createdAt
      id
      registrationAttendeeId
      registrationScheduleId
      registration_status
      schedule {
        createdAt
        enddate
        endtime
        id
        location
        scheduleTrainingId
        schedule_status
        startdate
        starttime
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSchedule = /* GraphQL */ `
  subscription OnUpdateSchedule($filter: ModelSubscriptionScheduleFilterInput) {
    onUpdateSchedule(filter: $filter) {
      attendees {
        nextToken
        __typename
      }
      createdAt
      enddate
      endtime
      id
      location
      scheduleTrainingId
      schedule_status
      startdate
      starttime
      trainer {
        nextToken
        __typename
      }
      training {
        category
        createdAt
        description
        duration
        id
        tags
        title
        updatedAt
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      content
      createdAt
      done
      id
      priority
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTrainer = /* GraphQL */ `
  subscription OnUpdateTrainer($filter: ModelSubscriptionTrainerFilterInput) {
    onUpdateTrainer(filter: $filter) {
      age
      createdAt
      email
      gender
      id
      mobile
      name
      scheduleTrainerId
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining($filter: ModelSubscriptionTrainingFilterInput) {
    onUpdateTraining(filter: $filter) {
      category
      createdAt
      description
      duration
      id
      tags
      title
      updatedAt
      __typename
    }
  }
`;
