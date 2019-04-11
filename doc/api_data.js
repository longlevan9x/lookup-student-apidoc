define({ "api": [
  {
    "type": "get",
    "url": "/schedule/view",
    "title": "View a schedule",
    "version": "1.0.0",
    "name": "getSchedule",
    "group": "Schedule",
    "description": "<p>Compare Verison .</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Require, Mã lịch học.</p>"
          }
        ]
      }
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Schedule",
    "sampleRequest": [
      {
        "url": "http://localhost/tracuuthongtin-php/api/v1/schedule/view"
      }
    ]
  },
  {
    "type": "get",
    "url": "/schedule-exam/view",
    "title": "View a schedule exam",
    "version": "1.0.0",
    "name": "getScheduleExam",
    "group": "Schedule",
    "description": "<p>Compare Verison .</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Require, Mã lịch thi.</p>"
          }
        ]
      }
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Schedule",
    "sampleRequest": [
      {
        "url": "http://localhost/tracuuthongtin-php/api/v1/schedule-exam/view"
      }
    ]
  },
  {
    "type": "get",
    "url": "schedule/view",
    "title": "List schedule exam with msv",
    "version": "1.0.0",
    "name": "getScheduleExams",
    "group": "Schedule",
    "description": "<p>Compare Verison .</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msv",
            "description": "<p>Require, Mã sinh viên.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Mặc định là học kỳ gần nhất.</p>"
          }
        ]
      }
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Schedule",
    "sampleRequest": [
      {
        "url": "http://localhost/tracuuthongtin-php/api/v1schedule/view"
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
    "description": "<p>Compare Verison</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Require, id khóa học cần lấy, mặc định lấy khóa gần nhất theo thời gian cập nhất db.</p>"
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
    "filename": "lookup_student/example.js",
    "groupTitle": "Student",
    "sampleRequest": [
      {
        "url": "http://localhost/tracuuthongtin-php/api/v1/student/ranking"
      }
    ]
  },
  {
    "type": "get",
    "url": "/student/view",
    "title": "View a Student",
    "version": "1.0.0",
    "name": "GetStudent",
    "group": "Student",
    "description": "<p>Compare Verison</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>Require, Mã sinh viên.</p>"
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
    "filename": "lookup_student/example.js",
    "groupTitle": "Student",
    "sampleRequest": [
      {
        "url": "http://localhost/tracuuthongtin-php/api/v1/student/view"
      }
    ]
  },
  {
    "type": "get",
    "url": "/schedules",
    "title": "List schedule with msv",
    "version": "1.0.0",
    "name": "getSchedules",
    "group": "Student",
    "description": "<p>Compare Verison .</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msv",
            "description": "<p>Require, Mã sinh viên.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "semester",
            "description": "<p>Mặc định là học kỳ gần nhất.</p>"
          }
        ]
      }
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "Student",
    "sampleRequest": [
      {
        "url": "http://localhost/tracuuthongtin-php/api/v1/schedules"
      }
    ]
  },
  {
    "type": "get",
    "url": "/semester",
    "title": "View semester",
    "version": "1.0.0",
    "name": "getSemester",
    "group": "semester",
    "description": "<p>Compare Verison .</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Require, Id học kỳ.</p>"
          }
        ]
      }
    },
    "filename": "lookup_student/example.js",
    "groupTitle": "semester",
    "sampleRequest": [
      {
        "url": "http://localhost/tracuuthongtin-php/api/v1/semester"
      }
    ]
  },
  {
    "type": "get",
    "url": "/semester",
    "title": "List semester",
    "version": "1.0.0",
    "name": "getSemesters",
    "group": "semester",
    "description": "<p>Compare Verison .</p>",
    "filename": "lookup_student/example.js",
    "groupTitle": "semester",
    "sampleRequest": [
      {
        "url": "http://localhost/tracuuthongtin-php/api/v1/semester"
      }
    ]
  }
] });
