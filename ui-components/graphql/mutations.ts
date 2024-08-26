/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAttendee = /* GraphQL */ `
  mutation CreateAttendee(
    $condition: ModelAttendeeConditionInput
    $input: CreateAttendeeInput!
  ) {
    createAttendee(condition: $condition, input: $input) {
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
export const createQChatRequest = /* GraphQL */ `
  mutation CreateQChatRequest(
    $condition: ModelQChatRequestConditionInput
    $input: CreateQChatRequestInput!
  ) {
    createQChatRequest(condition: $condition, input: $input) {
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
      regionQ
      __typename
    }
  }
`;
export const createRegistration = /* GraphQL */ `
  mutation CreateRegistration(
    $condition: ModelRegistrationConditionInput
    $input: CreateRegistrationInput!
  ) {
    createRegistration(condition: $condition, input: $input) {
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
export const createSchedule = /* GraphQL */ `
  mutation CreateSchedule(
    $condition: ModelScheduleConditionInput
    $input: CreateScheduleInput!
  ) {
    createSchedule(condition: $condition, input: $input) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
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
export const createTrainer = /* GraphQL */ `
  mutation CreateTrainer(
    $condition: ModelTrainerConditionInput
    $input: CreateTrainerInput!
  ) {
    createTrainer(condition: $condition, input: $input) {
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
export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $condition: ModelTrainingConditionInput
    $input: CreateTrainingInput!
  ) {
    createTraining(condition: $condition, input: $input) {
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
export const deleteAttendee = /* GraphQL */ `
  mutation DeleteAttendee(
    $condition: ModelAttendeeConditionInput
    $input: DeleteAttendeeInput!
  ) {
    deleteAttendee(condition: $condition, input: $input) {
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
export const deleteQChatRequest = /* GraphQL */ `
  mutation DeleteQChatRequest(
    $condition: ModelQChatRequestConditionInput
    $input: DeleteQChatRequestInput!
  ) {
    deleteQChatRequest(condition: $condition, input: $input) {
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
      regionQ
      __typename
    }
  }
`;
export const deleteRegistration = /* GraphQL */ `
  mutation DeleteRegistration(
    $condition: ModelRegistrationConditionInput
    $input: DeleteRegistrationInput!
  ) {
    deleteRegistration(condition: $condition, input: $input) {
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
export const deleteSchedule = /* GraphQL */ `
  mutation DeleteSchedule(
    $condition: ModelScheduleConditionInput
    $input: DeleteScheduleInput!
  ) {
    deleteSchedule(condition: $condition, input: $input) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
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
export const deleteTrainer = /* GraphQL */ `
  mutation DeleteTrainer(
    $condition: ModelTrainerConditionInput
    $input: DeleteTrainerInput!
  ) {
    deleteTrainer(condition: $condition, input: $input) {
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
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $condition: ModelTrainingConditionInput
    $input: DeleteTrainingInput!
  ) {
    deleteTraining(condition: $condition, input: $input) {
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
export const updateAttendee = /* GraphQL */ `
  mutation UpdateAttendee(
    $condition: ModelAttendeeConditionInput
    $input: UpdateAttendeeInput!
  ) {
    updateAttendee(condition: $condition, input: $input) {
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
export const updateQChatRequest = /* GraphQL */ `
  mutation UpdateQChatRequest(
    $condition: ModelQChatRequestConditionInput
    $input: UpdateQChatRequestInput!
  ) {
    updateQChatRequest(condition: $condition, input: $input) {
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
      regionQ
      __typename
    }
  }
`;
export const updateRegistration = /* GraphQL */ `
  mutation UpdateRegistration(
    $condition: ModelRegistrationConditionInput
    $input: UpdateRegistrationInput!
  ) {
    updateRegistration(condition: $condition, input: $input) {
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
export const updateSchedule = /* GraphQL */ `
  mutation UpdateSchedule(
    $condition: ModelScheduleConditionInput
    $input: UpdateScheduleInput!
  ) {
    updateSchedule(condition: $condition, input: $input) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
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
export const updateTrainer = /* GraphQL */ `
  mutation UpdateTrainer(
    $condition: ModelTrainerConditionInput
    $input: UpdateTrainerInput!
  ) {
    updateTrainer(condition: $condition, input: $input) {
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
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $condition: ModelTrainingConditionInput
    $input: UpdateTrainingInput!
  ) {
    updateTraining(condition: $condition, input: $input) {
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
