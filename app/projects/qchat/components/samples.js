//Initial Request
const first = {
  userMessage: "provide various schemes for farmers",
  clientToken: "a0ad56c2-88ac-44ff-9779-9bb45674edf2",
};

//Second Request
const second = {
  conversationId: "6d097ab7-745c-43c4-967d-c7c359a35c8c",
  parentMessageId: "2dae246e-f51f-4f26-adf5-099fb037dd37",
  userMessage: "Also, what are the key benefits",
  clientToken: "a283d43f-8e22-46be-aa64-32773bd1259f",
};

//Third Request...
const third = {
  conversationId: "6d097ab7-745c-43c4-967d-c7c359a35c8c",
  parentMessageId: "fe14f875-6a41-41c5-931a-4cdcc8824dde",
  userMessage: "hi",
  clientToken: "f899231d-3d2c-4c05-afca-8ea03278a825",
};

const Resp1 = {
  conversationId: "6d097ab7-745c-43c4-967d-c7c359a35c8c",
  failedAttachments: [],
  sourceAttributions: [
    {
      citationNumber: 1,
      snippet:
        "\nThe schemes like PMKBY, e-NAM,\nPMKSY, KCC, SMAM etc. have benefitted the\nfarmers in various steps of agriculture and en-\nhanced the ease of farming.\n\n\nThe post harvest loss of agricultural\nproduce is a limiting factor and challenge in\nenhancing the farmers&rsquo; income. To address this\nchallenge, the government has recently an-\nnounced an Agriculture Infrastructure Fund of\nRs.1 lakh crore for funding Agriculture Infra-\nstructure projects at farm gate and aggrega-\ntion points for affordable and financially vi-\nable Post Harvest Management infrastructure.\n\n\nIn the recent years, government has\nmajor focus in agriculture sector and the\nMoA&amp;FW is working continuously with holistic\napproach after addressing the fundamental\nproblems of farmers.  The impact of farmer\ncentric initiatives, schemes and policies of gov-\nernment is reflected in the livelihood of farmers\nand overall growth of agriculture sector.\n\n\nDr Sanjay Kumar Joshi\n\n\nOctober-December, 2021        Vol.55     No.1\n\n\nEDITORIAL\n\n\n\n\n\n\n\nOctober- December 2021 3\n\n\nPaddy Residue\nManagement\nAnkit Sharma and Amandeep Singh Brar\n\n\nRice wheat is the pre-dominant cropping",
      textMessageSegments: [
        { beginOffset: 71, endOffset: 220 },
        { beginOffset: 220, endOffset: 358 },
      ],
      title: "Intensive-Agriculture-October-December-2021.pdf",
      url: "https://cmsagri.digifootprint.in/wp-content/uploads/2024/02/Intensive-Agriculture-October-December-2021.pdf",
    },
    {
      citationNumber: 2,
      snippet:
        "\nThe schemes like PMKBY, e-NAM,\nPMKSY, KCC, SMAM etc. have benefitted the\nfarmers in various steps of agriculture and en-\nhanced the ease of farming.\n\n\nThe post harvest loss of agricultural\nproduce is a limiting factor and challenge in\nenhancing the farmers&rsquo; income. To address this\nchallenge, the government has recently an-\nnounced an Agriculture Infrastructure Fund of\nRs.1 lakh crore for funding Agriculture Infra-\nstructure projects at farm gate and aggrega-\ntion points for affordable and financially vi-\nable Post Harvest Management infrastructure.\n\n\nIn the recent years, government has\nmajor focus in agriculture sector and the\nMoA&amp;FW is working continuously with holistic\napproach after addressing the fundamental\nproblems of farmers.  The impact of farmer\ncentric initiatives, schemes and policies of gov-\nernment is reflected in the livelihood of farmers\nand overall growth of agriculture sector.\n\n\nDr Sanjay Kumar Joshi\n\n\nOctober-December, 2021        Vol.55     No.1\n\n\nEDITORIAL\n\n\n\n\n\n\n\nOctober- December 2021 3\n\n\nPaddy Residue\nManagement\nAnkit Sharma and Amandeep Singh Brar\n\n\nRice wheat is the pre-dominant cropping",
      textMessageSegments: [
        { beginOffset: 71, endOffset: 220 },
        { beginOffset: 220, endOffset: 358 },
      ],
      title: "Intensive-Agriculture-October-December-2021_0_0_1.pdf",
      url: "https://cmsagri.digifootprint.in/wp-content/uploads/2024/02/Intensive-Agriculture-October-December-2021_0_0_1.pdf",
    },
    {
      citationNumber: 3,
      snippet:
        "\nsome cost revisions and additional components.  It is \n\n\nnow under implementation in 676 districts of 29 \n\n\nStates &amp; 3 UTs of the country. The scheme promotes \n\n\ndecentralized farmer-driven and farmer accountable \n\n\nextension system through an insti tutional \n\n\narrangement for technology dissemination in the \n\n\nform of an Agricultural Technology Management \n\n\nAgency (ATMA) at district level. Under the scheme \n\n\ngrants-in-aid  released to tates with an objective are S\n\n\nto support State Governments efforts of revitalization \n\n\nof the extension system and making available the \n\n\nlatest agricultural technologies in different thematic \n\n\nareas to increase agricultural production through \n\n\nextension activities  viz.  Farmers Training, , ,\n\n\nDemonstrations, Exposure visits, Kisan Mela, \n\n\nMobilization of Farmers Groups and Setting up of \n\n\nFarm Schools. Through these activities, latest \n\n\nagriculture technologies are disseminated to farmers \n\n\nof the country.\n\n\n{ 160 } \n\n\n\n\n\n\n\n5.112 Overall 433.57 lakh farmers have been  \n\n\nbenefitted so far since inception of  Scheme through \n\n\nvarious extension activities like Exposure Visits, \n\n\nTrainings, Demonstrations, Farm Schools &amp; Kisan \n\n\nMelas. Over 2.3 lakh Commodity based Farmer \n\n\nInterest Group (CIGs)/ FIGs have been mobilized",
      textMessageSegments: [
        { beginOffset: 358, endOffset: 537 },
        { beginOffset: 552, endOffset: 662 },
        { beginOffset: 662, endOffset: 834 },
        { beginOffset: 834, endOffset: 991 },
      ],
      title: "SIA-2017-Final-web-upload.pdf",
      url: "https://cmsagri.digifootprint.in/wp-content/uploads/2024/02/SIA-2017-Final-web-upload.pdf",
    },
  ],
  systemMessage:
    "Here are the various schemes for farmers according to your source data: \n\nThe schemes like PMKBY, e-NAM, PMKSY, KCC, SMAM etc. have benefitted the farmers in various steps of agriculture and enhanced the ease of farming. The government has also announced an Agriculture Infrastructure Fund of Rs. 1 lakh crore for funding Agriculture Infrastructure projects. The Agricultural Technology Management Agency (ATMA) scheme promotes decentralized farmer-driven extension system through institutional arrangements for technology dissemination. Overall 433.57 lakh farmers have been benefitted so far since inception of ATMA Scheme through various extension activities. The Pradhan Mantri Fasal Bima Yojana is a crop insurance scheme that is being implemented on an 'Area Approach basis' in 676 districts of 29 States & 3 UTs of the country. Various other crop insurance schemes introduced over the years include Weather Based Crop Insurance Scheme, Coconut Palm Insurance Scheme and Modified NAIS.",
  systemMessageId: "2dae246e-f51f-4f26-adf5-099fb037dd37",
  userMessageId: "b51146fb-818a-4a43-b8dd-9d45ea8d59af",
};

const resp2 = {
  conversationId: "6d097ab7-745c-43c4-967d-c7c359a35c8c",
  failedAttachments: [],
  sourceAttributions: [
    {
      citationNumber: 1,
      snippet:
        "\nThe schemes like PMKBY, e-NAM,\nPMKSY, KCC, SMAM etc. have benefitted the\nfarmers in various steps of agriculture and en-\nhanced the ease of farming.\n\n\nThe post harvest loss of agricultural\nproduce is a limiting factor and challenge in\nenhancing the farmers&rsquo; income. To address this\nchallenge, the government has recently an-\nnounced an Agriculture Infrastructure Fund of\nRs.1 lakh crore for funding Agriculture Infra-\nstructure projects at farm gate and aggrega-\ntion points for affordable and financially vi-\nable Post Harvest Management infrastructure.\n\n\nIn the recent years, government has\nmajor focus in agriculture sector and the\nMoA&amp;FW is working continuously with holistic\napproach after addressing the fundamental\nproblems of farmers.  The impact of farmer\ncentric initiatives, schemes and policies of gov-\nernment is reflected in the livelihood of farmers\nand overall growth of agriculture sector.\n\n\nDr Sanjay Kumar Joshi\n\n\nOctober-December, 2021        Vol.55     No.1\n\n\nEDITORIAL\n\n\n\n\n\n\n\nOctober- December 2021 3\n\n\nPaddy Residue\nManagement\nAnkit Sharma and Amandeep Singh Brar\n\n\nRice wheat is the pre-dominant cropping",
      textMessageSegments: [{ beginOffset: 358, endOffset: 446 }],
      title: "Intensive-Agriculture-October-December-2021.pdf",
      url: "https://cmsagri.digifootprint.in/wp-content/uploads/2024/02/Intensive-Agriculture-October-December-2021.pdf",
    },
    {
      citationNumber: 2,
      snippet:
        "\nThe schemes like PMKBY, e-NAM,\nPMKSY, KCC, SMAM etc. have benefitted the\nfarmers in various steps of agriculture and en-\nhanced the ease of farming.\n\n\nThe post harvest loss of agricultural\nproduce is a limiting factor and challenge in\nenhancing the farmers&rsquo; income. To address this\nchallenge, the government has recently an-\nnounced an Agriculture Infrastructure Fund of\nRs.1 lakh crore for funding Agriculture Infra-\nstructure projects at farm gate and aggrega-\ntion points for affordable and financially vi-\nable Post Harvest Management infrastructure.\n\n\nIn the recent years, government has\nmajor focus in agriculture sector and the\nMoA&amp;FW is working continuously with holistic\napproach after addressing the fundamental\nproblems of farmers.  The impact of farmer\ncentric initiatives, schemes and policies of gov-\nernment is reflected in the livelihood of farmers\nand overall growth of agriculture sector.\n\n\nDr Sanjay Kumar Joshi\n\n\nOctober-December, 2021        Vol.55     No.1\n\n\nEDITORIAL\n\n\n\n\n\n\n\nOctober- December 2021 3\n\n\nPaddy Residue\nManagement\nAnkit Sharma and Amandeep Singh Brar\n\n\nRice wheat is the pre-dominant cropping",
      textMessageSegments: [{ beginOffset: 358, endOffset: 446 }],
      title: "Intensive-Agriculture-October-December-2021_0_0_1.pdf",
      url: "https://cmsagri.digifootprint.in/wp-content/uploads/2024/02/Intensive-Agriculture-October-December-2021_0_0_1.pdf",
    },
  ],
  systemMessage:
    "The key benefits of various schemes for farmers include: \n\n- Schemes like PMKBY, e-NAM, PMKSY, KCC, SMAM etc. have benefitted farmers in various steps of agriculture and enhanced ease of farming. \n\n- The assistance provided under the PM-Kisan scheme has helped farmers for purchasing crucial agri-inputs and liberated them from the clutches of money lenders. \n\n- These schemes have tremendously supported farmers and raised their self-confidence. \n\n",
  systemMessageId: "fe14f875-6a41-41c5-931a-4cdcc8824dde",
  userMessageId: "ddd766f7-f6ab-41c4-92b6-d753b16d885c",
};

const resp3 = {
  conversationId: "6d097ab7-745c-43c4-967d-c7c359a35c8c",
  failedAttachments: [],
  sourceAttributions: [],
  systemMessage: "Hello!",
  systemMessageId: "ca94dd51-ed25-4ca0-b860-3dbf9ee2cf7b",
  userMessageId: "ab317dcc-b5a5-4bb0-921d-819d95e7230e",
};
