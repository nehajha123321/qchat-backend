/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttendee = /* GraphQL */ `
  query GetAttendee($id: ID!) {
    getAttendee(id: $id) {
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
export const getQChatRequest = /* GraphQL */ `
  query GetQChatRequest($id: ID!) {
    getQChatRequest(id: $id) {
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
export const getRegistration = /* GraphQL */ `
  query GetRegistration($id: ID!) {
    getRegistration(id: $id) {
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
export const getSchedule = /* GraphQL */ `
  query GetSchedule($id: ID!) {
    getSchedule(id: $id) {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const getTrainer = /* GraphQL */ `
  query GetTrainer($id: ID!) {
    getTrainer(id: $id) {
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
export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
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
export const listAttendees = /* GraphQL */ `
  query ListAttendees(
    $filter: ModelAttendeeFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAttendees(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listQChatRequests = /* GraphQL */ `
  query ListQChatRequests(
    $filter: ModelQChatRequestFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listQChatRequests(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listRegistrations = /* GraphQL */ `
  query ListRegistrations(
    $filter: ModelRegistrationFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRegistrations(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        registrationAttendeeId
        registrationScheduleId
        registration_status
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listSchedules = /* GraphQL */ `
  query ListSchedules(
    $filter: ModelScheduleFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSchedules(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTodos(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        content
        createdAt
        done
        id
        priority
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTrainers = /* GraphQL */ `
  query ListTrainers(
    $filter: ModelTrainerFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTrainers(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTrainings(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
