define({ "api": [
  {
    "type": "get",
    "url": "/crawl/money-pay/{student_code}",
    "title": "Crawl công nợ của 1 sinh viên",
    "version": "1.0.0",
    "name": "CrawlMoneyPay",
    "group": "Crawl",
    "description": "<p>Compare Verisons</p>",
    "filename": "lookup_student/example.js",
    "groupTitle": "Crawl",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/crawl/money-pay/{student_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/crawl/schedule-exam/{student_code}",
    "title": "Crawl lịch thi của 1 sinh viên",
    "version": "1.0.0",
    "name": "CrawlSchedueExam",
    "group": "Crawl",
    "description": "<p>Compare Verisons</p>",
    "filename": "lookup_student/example.js",
    "groupTitle": "Crawl",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/crawl/schedule-exam/{student_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/crawl/schedule/{student_code}",
    "title": "Crawl lịch học của 1 sinh viên",
    "version": "1.0.0",
    "name": "CrawlSchedule",
    "group": "Crawl",
    "description": "<p>Compare Verisons</p>",
    "filename": "lookup_student/example.js",
    "groupTitle": "Crawl",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/crawl/schedule/{student_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/crawl/semester",
    "title": "Crawl danh sách học kỳ của 1 sinh viên",
    "version": "1.0.0",
    "name": "CrawlSemester",
    "group": "Crawl",
    "description": "<p>Compare Verisons</p>",
    "filename": "lookup_student/example.js",
    "groupTitle": "Crawl",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/crawl/semester"
      }
    ]
  },
  {
    "type": "get",
    "url": "/crawl/student/{student_code}",
    "title": "Crawl thông tin của 1 sinh viên",
    "version": "1.0.0",
    "name": "CrawlStudent",
    "group": "Crawl",
    "description": "<p>Compare Verisons</p>",
    "filename": "lookup_student/example.js",
    "groupTitle": "Crawl",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/crawl/student/{student_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/schedule/{schedule_code}",
    "title": "Chi tiết lịch học",
    "version": "1.0.0",
    "name": "getSchedule",
    "group": "Schedule",
    "description": "<p>Compare Verisons</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Thông tin chi tiết lịch học</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Error:",
          "content": " {\n  message: \"no data\",\n  status: 2,\n  result: null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Schedule",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/schedule/{schedule_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/schedule-exam/{schedule_exam_code}",
    "title": "Chi tiết lịch thi",
    "version": "1.0.0",
    "name": "getScheduleExam",
    "group": "Schedule",
    "description": "<p>Compare Verisons</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Thông tin chi tiết lịch thi</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Error:",
          "content": " {\n  message: \"no data\",\n  status: 2,\n  result: null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Schedule",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/schedule-exam/{schedule_exam_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/student/{student_code}/check",
    "title": "Kiểm tra thông tin sinh viên",
    "version": "1.0.0",
    "name": "CheckStudent",
    "group": "Student",
    "description": "<p>Compare Verisons</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Mã sinh viên</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Error:",
          "content": " {\n  message: \"no data\",\n  status: 2,\n  result: \"Mã sinh viên không tồn tại\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Student",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/student/{student_code}/check"
      }
    ]
  },
  {
    "type": "get",
    "url": "/student/ranking",
    "title": "View Student ranking",
    "version": "1.0.0",
    "name": "GetRanking",
    "group": "Student",
    "description": "<p>Compare Verisons</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Require, id khóa học cần lấy, mặc định lấy khóa gần nhất theo thời gian cập nhật db.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>The student code.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Error:",
          "content": " {\n  message: \"no data\",\n  status: 2,\n  result: null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Student",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/student/ranking"
      }
    ]
  },
  {
    "type": "get",
    "url": "/student/{student_code}",
    "title": "Chi tiết sinh viên",
    "version": "1.0.0",
    "name": "GetStudent",
    "group": "Student",
    "description": "<p>Compare Verisons</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Thông tin chi tiết sinh viên</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Success:",
          "content": "     {\n\tmessage: \"success\",\n\tstatus: 1,\n\tresult: {\n\t\tid: 1,\n\t\tcode: \"15103100001\",\n\t\tname: \"BIỆN XUÂN SƠN\",\n\t\tclass: \"ĐH Tin 9A5 HN\",\n\t\tbranch_group: \"Công nghệ Thông tin\",\n\t\tbranch: \"Công nghệ Thông tin\",\n\t\tstatus: \"Đang học\",\n\t\tday_admission: \"22/09/2015\",\n\t\tschool_year: \"2015-2019\",\n\t\teducation_level: \"Đại học - Tín chỉ\",\n\t\tgender: \"Nam\",\n\t\ttype_education: \"Chính quy đợt 1\",\n\t\tarea: 10,\n\t\tgpa_10: 6.26,\n\t\tgpa_4: 2.27,\n\t\ttotal_term: 165,\n\t\tcreated_at: \"2019-06-03 22:19:22\",\n\t\tupdated_at: \"2019-06-03 22:19:22\",\n\t\tis_active: \"1\",\n\t\tcourse: 2015,\n\t}\n}",
          "type": "json"
        },
        {
          "title": "Response Error:",
          "content": " {\n  message: \"no data\",\n  status: 2,\n  result: null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Student",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/student/{student_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/student/{student_code}/schedules",
    "title": "Danh sách lịch thi của 1 sinh viên",
    "version": "1.0.0",
    "name": "getScheduleExams",
    "group": "Student",
    "description": "<p>Compare Verisons</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Mặc định là học kỳ gần nhất. (2 (2018 - 2019))</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "List_Object",
            "optional": false,
            "field": "result",
            "description": "<p>Danh sách lịch thi của 1 sinh viên</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Error:",
          "content": " {\n  message: \"no data\",\n  status: 2,\n  result: null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Student",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/student/{student_code}/schedules"
      }
    ]
  },
  {
    "type": "get",
    "url": "/student/{student_code}/schedules",
    "title": "Danh sách lịch học của 1 sinh viên",
    "version": "1.0.0",
    "name": "getSchedules",
    "group": "Student",
    "description": "<p>Compare Verisons</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Mặc định là học kỳ gần nhất. (2 (2018 - 2019))</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "List_Object",
            "optional": false,
            "field": "result",
            "description": "<p>Danh sách lịch học của 1 sinh viên</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Error:",
          "content": " {\n  message: \"no data\",\n  status: 2,\n  result: null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Student",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/student/{student_code}/schedules"
      }
    ]
  },
  {
    "type": "get",
    "url": "/semester/{id}",
    "title": "Chi tiết học kỳ",
    "version": "1.0.0",
    "name": "getSemester",
    "group": "semester",
    "description": "<p>Compare Verisons</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Chi tiết học kỳ</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Error:",
          "content": " {\n  message: \"no data\",\n  status: 2,\n  result: null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "semester",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/semester/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/semester",
    "title": "Danh sách học kỳ",
    "version": "1.0.0",
    "name": "getSemesters",
    "group": "semester",
    "description": "<p>Compare Verisons</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "status",
            "description": "<p>1</p>"
          },
          {
            "group": "Success 200",
            "type": "List_Object",
            "optional": false,
            "field": "result",
            "description": "<p>Danh sách học kỳ</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Response Error:",
          "content": " {\n  message: \"no data\",\n  status: 2,\n  result: null,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "semester",
    "sampleRequest": [
      {
        "url": "http://www.lookupstudent.pikalong.top/api/v1/semester"
      }
    ]
  }
] });
