const cats = [
  {
    id: 1,
    title: '中医',
    subCats: [
      {
        name: '中医诊疗',
        pages: [
          { name: '在线问诊', url: '/doctor' },
          { name: '中医机构列表与介绍', url: '/clinic' },
          { name: '中医咨询', url: '/QnA' },
          { name: '中医常识', url: '/c_med_featured' },
          { name: '特色中医', url: '/c_med_knowledge' },
          { name: '视频课程', url: '/video_tutorial' },
          { name: '视频课程', url: '/video_tutorial' },
          { name: '中草药百科', url: '/herbal_wiki' },
        ]
      },
      {
        name: '中医咨询',
        pages: [{ name: '每日问答', url: 'http://www.google.ca' }]
      },
      {
        name: '中医保健',
        pages: [
          { name: '药膳食疗', url: 'http://www.google.ca' },
          { name: '疾病药膳', url: 'http://www.google.ca' },
          { name: '中医养生', url: 'http://www.google.ca' }
        ]
      },
      {
        name: '中医特色',
        pages: [
          { name: '中药方剂', url: 'http://www.google.ca' },
          { name: '推拿按摩', url: 'http://www.google.ca' },
          { name: '针灸', url: 'http://www.google.ca' },
          { name: '拔罐', url: 'http://www.google.ca' },
          { name: '刮痧', url: 'http://www.google.ca' },
          { name: '气功', url: 'http://www.google.ca' }
        ]
      },
      {
        name: '中医常识',
        pages: [
          { name: '认识中药', url: 'http://www.google.ca' },
          { name: '中药不良反应', url: 'http://www.google.ca' },
          { name: '中药煎煮', url: 'http://www.google.ca' },
          { name: '中药炮制', url: 'http://www.google.ca' },
          { name: '中药种贮', url: 'http://www.google.ca' },
          { name: '中医文化', url: 'http://www.google.ca' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '饮食',
    subCats: [
      {
        name: '饮食特色',
        pages: [
          { name: '中药方剂', url: 'http://www.google.ca' },
          { name: '推拿按摩', url: 'http://www.google.ca' },
          { name: '针灸', url: 'http://www.google.ca' },
          { name: '拔罐', url: 'http://www.google.ca' },
          { name: '刮痧', url: 'http://www.google.ca' },
          { name: '气功', url: 'http://www.google.ca' }
        ]
      },
      {
        name: '饮食诊疗',
        pages: [
          { name: '在线问诊', url: 'http://www.google.ca' },
          { name: '各科医生列表与介绍', url: 'http://www.google.ca' },
          { name: '医生预约', url: 'http://www.google.ca' },
          { name: '中医机构列表与介绍', url: 'http://www.google.ca' },
          { name: '中央药房', url: 'http://www.google.ca' }
        ]
      },
      {
        name: '饮食咨询',
        pages: [
          { name: '饮食问答', url: 'http://www.google.ca' },
          { name: '每日问答', url: 'http://www.google.ca' }
        ]
      },
      {
        name: '饮食保健',
        pages: [
          { name: '药膳食疗', url: 'http://www.google.ca' },
          { name: '疾病药膳', url: 'http://www.google.ca' },
          { name: '中医养生', url: 'http://www.google.ca' }
        ]
      },
      {
        name: '饮食常识',
        pages: [
          { name: '认识中药', url: 'http://www.google.ca' },
          { name: '中药不良反应', url: 'http://www.google.ca' },
          { name: '中药煎煮', url: 'http://www.google.ca' },
          { name: '中药炮制', url: 'http://www.google.ca' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: '健身',
    subCats: [
      {
        name: '健身健身',
        pages: [
          { name: '中药方剂', url: 'http://www.google.ca' },
          { name: '推拿按摩', url: 'http://www.google.ca' },
          { name: '针灸', url: 'http://www.google.ca' },
          { name: '拔罐', url: 'http://www.google.ca' },
          { name: '刮痧', url: 'http://www.google.ca' },
          { name: '气功', url: 'http://www.google.ca' }
        ]
      },
      {
        name: '健身诊疗',
        pages: [
          { name: '在线问诊', url: 'http://www.google.ca' },
          { name: '各科医生列表与介绍', url: 'http://www.google.ca' },
          { name: '医生预约', url: 'http://www.google.ca' },
          { name: '中医机构列表与介绍', url: 'http://www.google.ca' },
          { name: '中央药房', url: 'http://www.google.ca' }
        ]
      }
    ]
  },
  {
    id: 4,
    title: '美容',
    subCats: [
      {
        name: '美容美容美容',
        pages: [
          { name: '中药方剂', url: 'http://www.google.ca' },
          { name: '推拿按摩', url: 'http://www.google.ca' },
          { name: '针灸', url: 'http://www.google.ca' },
          { name: '拔罐', url: 'http://www.google.ca' },
          { name: '刮痧', url: 'http://www.google.ca' },
          { name: '气功', url: 'http://www.google.ca' }
        ]
      },
      {
        name: '饮食美容',
        pages: [
          { name: '在线问诊', url: 'http://www.google.ca' },
          { name: '各科医生列表与介绍', url: 'http://www.google.ca' },
          { name: '医生预约', url: 'http://www.google.ca' },
          { name: '中医机构列表与介绍', url: 'http://www.google.ca' },
          { name: '中央药房', url: 'http://www.google.ca' }
        ]
      }
    ]
  },
  {
    id: 5,
    title: '心理',
    subCats: [
      {
        name: '心理心理心理心理心理心理',
        pages: [
          { name: '中药方剂', url: 'http://www.google.ca' },
          { name: '推拿按摩', url: 'http://www.google.ca' },
          { name: '针灸', url: 'http://www.google.ca' },
          { name: '拔罐', url: 'http://www.google.ca' },
          { name: '刮痧', url: 'http://www.google.ca' },
          { name: '气功', url: 'http://www.google.ca' }
        ]
      },
      {
        name: '心理诊疗',
        pages: [
          { name: '在线问诊', url: 'http://www.google.ca' },
          { name: '各科医生列表与介绍', url: 'http://www.google.ca' },
          { name: '医生预约', url: 'http://www.google.ca' },
          { name: '中医机构列表与介绍', url: 'http://www.google.ca' },
          { name: '中央药房', url: 'http://www.google.ca' }
        ]
      }
    ]
  }
];

export default cats;
