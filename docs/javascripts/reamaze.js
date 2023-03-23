const scriptTag = document.createElement("script");
scriptTag.src = "https://cdn.reamaze.com/assets/reamaze.js";
document.body.appendChild(scriptTag);

{/* <script type="text/javascript" async src="https://cdn.reamaze.com/assets/reamaze.js"></script> */}

var _support = _support || { 'ui': {}, 'user': {} };
_support['account'] = 'general';
_support['contact_custom_fields'] = _support['contact_custom_fields'] || {};
_support['contact_custom_fields']['rmz_form_id_45253'] = {
  'user_group': {
    pos: 1679554573799,
    type: 'dropdown',
    value: ['Yes', 'No'],
    required: true,
    placeholder: 'Are you an Akvo staff?',
    defaultValue: 'undefined',
  },
  'organization': {
    pos: 1679554573800,
    type: 'text',
    value: '',
    required: true,
    placeholder: 'What is the name of your organization?',
    dependantField: 'user_group',
    dependantOptions: ['No'],
  },
  'hub': {
    pos: 1679554573801,
    type: 'dropdown',
    value: ['East-Africa', 'West-Africa', 'Europe', 'Asia', 'Americas', 'South-East Asia and Pacific'],
    required: true,
    placeholder: 'Which hub do you usually work with?',
    defaultValue: 'undefined',
  },
  'issue': {
    pos: 1679554573802,
    type: 'dropdown',
    value: ['I have a bug', 'I have a billing question', 'I have a question about how a feature works', 'I would like to request a feature', 'I want to know more about the product', 'other'],
    required: true,
    placeholder: 'What do you need help with?',
    defaultValue: 'undefined',
  },
  'product': {
    pos: 1679554573803,
    type: 'dropdown',
    value: ['RSR', 'FLOW', 'LUMEN', 'CADDISFLY', 'SITES'],
    required: false,
    placeholder: 'Which product do you need help with?',
    defaultValue: 'undefined',
  },
  'instance': {
    pos: 1679554573804,
    type: 'text',
    value: '',
    required: false,
    placeholder: 'What is the name of your Akvo Flow instace? (xxx.akvoflow.org))',
    dependantField: 'product',
    dependantOptions: ['FLOW'],
  },
  'survey': {
    pos: 1679554573805,
    type: 'text',
    value: '',
    required: false,
    placeholder: 'What is the name of the folder and the survey?',
    dependantField: 'product',
    dependantOptions: ['FLOW'],
  },
  'project_id': {
    pos: 1679554573806,
    type: 'text',
    value: '',
    required: false,
    placeholder: 'Project ID',
    dependantField: 'product',
    dependantOptions: ['RSR'],
  }
};
