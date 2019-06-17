/**
 * @api {get} /student/{student_code} Chi tiết sinh viên
 * @apiVersion 1.0.0
 * @apiName GetStudent
 * @apiGroup Student
 *
 * @apiDescription Compare Verisons
 *
 * @apiSuccess {string}   message  success
 * @apiSuccess {int}   status  1
 * @apiSuccess {Object}   result  Thông tin chi tiết sinh viên

 * @apiErrorExample Response Success:
 *      {
	message: "success",
	status: 1,
	result: {
		id: 1,
		code: "15103100001",
		name: "BIỆN XUÂN SƠN",
		class: "ĐH Tin 9A5 HN",
		branch_group: "Công nghệ Thông tin",
		branch: "Công nghệ Thông tin",
		status: "Đang học",
		day_admission: "22/09/2015",
		school_year: "2015-2019",
		education_level: "Đại học - Tín chỉ",
		gender: "Nam",
		type_education: "Chính quy đợt 1",
		area: 10,
		gpa_10: 6.26,
		gpa_4: 2.27,
		total_term: 165,
		created_at: "2019-06-03 22:19:22",
		updated_at: "2019-06-03 22:19:22",
		is_active: "1",
		course: 2015,
	}
}
 * @apiErrorExample Response Error:
 *      {
 *       message: "no data",
 *       status: 2,
 *       result: null,
 *     }
 */
function getStudent() { return; }

/**
 * @api {get} /student/{student_code}/check Kiểm tra thông tin sinh viên
 * @apiVersion 1.0.0
 * @apiName CheckStudent
 * @apiGroup Student
 *
 * @apiDescription Compare Verisons
 *
 * @apiSuccess {string}   message  success
 * @apiSuccess {int}   status  1
 * @apiSuccess {string}   result  Mã sinh viên

 * @apiErrorExample Response Error:
 *      {
 *       message: "no data",
 *       status: 2,
 *       result: "Mã sinh viên không tồn tại",
 *     }
 */
function checkStudent() { return; }

/**
 * @api {get} /student/{student_code}/schedules Danh sách lịch học của 1 sinh viên
 * @apiVersion 1.0.0
 * @apiName getSchedules
 * @apiGroup Student
 *
 * @apiDescription Compare Verisons
 *
 * @apiParam {String} semester Mặc định là học kỳ gần nhất. (2 (2018 - 2019))
 *
 * @apiSuccess {string}   message  success
 * @apiSuccess {int}   status  1
 * @apiSuccess {List_Object}  result  Danh sách lịch học của 1 sinh viên
 * @apiErrorExample Response Error:
 *      {
 *       message: "no data",
 *       status: 2,
 *       result: null,
 *     }
 *
 */
function getSchedules() { return; }

/**
 * @api {get} /student/{student_code}/schedules Danh sách lịch thi của 1 sinh viên
 * @apiVersion 1.0.0
 * @apiName getScheduleExams
 * @apiGroup Student
 *
 * @apiDescription Compare Verisons
 *
 * @apiParam {String} semester Mặc định là học kỳ gần nhất. (2 (2018 - 2019))
 *
 * @apiSuccess {string}   message  success
 * @apiSuccess {int}   status  1
 * @apiSuccess {List_Object}  result  Danh sách lịch thi của 1 sinh viên
 * @apiErrorExample Response Error:
 *      {
 *       message: "no data",
 *       status: 2,
 *       result: null,
 *     }
 *
 */
function getScheduleExams() { return; }

/**
 * @api {get} /schedule/{schedule_code} Chi tiết lịch học
 * @apiVersion 1.0.0
 * @apiName getSchedule
 * @apiGroup Schedule
 *
 * @apiDescription Compare Verisons
 *
 * @apiSuccess {string}   message  success
 * @apiSuccess {int}   status  1
 * @apiSuccess {Object}   result  Thông tin chi tiết lịch học
 * @apiErrorExample Response Error:
 *      {
 *       message: "no data",
 *       status: 2,
 *       result: null,
 *     }
 *
 */
function getSchedule() { return; }


/**
 * @api {get} /schedule-exam/{schedule_exam_code} Chi tiết lịch thi
 * @apiVersion 1.0.0
 * @apiName getScheduleExam
 * @apiGroup Schedule
 *
 * @apiDescription Compare Verisons
 *
 *
 * @apiSuccess {string}   message  success
 * @apiSuccess {int}   status  1
 * @apiSuccess {Object}   result  Thông tin chi tiết lịch thi
 * @apiErrorExample Response Error:
 *      {
 *       message: "no data",
 *       status: 2,
 *       result: null,
 *     }
 */
function getScheduleExam() { return; }


/**
 * @api {get} /semester Danh sách học kỳ
 * @apiVersion 1.0.0
 * @apiName getSemesters
 * @apiGroup semester
 *
 * @apiDescription Compare Verisons
 *
 * @apiSuccess {string}   message  success
 * @apiSuccess {int}   status  1
 * @apiSuccess {List_Object}   result  Danh sách học kỳ
 * @apiErrorExample Response Error:
 *      {
 *       message: "no data",
 *       status: 2,
 *       result: null,
 *     }
 *
 */
function getSemesters() { return; }

/**
 * @api {get} /semester/{id} Chi tiết học kỳ
 * @apiVersion 1.0.0
 * @apiName getSemester
 * @apiGroup semester
 *
 * @apiDescription Compare Verisons
 *
 * @apiSuccess {string}   message  success
 * @apiSuccess {int}   status  1 
 * @apiSuccess {Object}   result  Chi tiết học kỳ
 * @apiErrorExample Response Error:
 *      {
 *       message: "no data",
 *       status: 2,
 *       result: null,
 *     }
 *
 */
function getSemester() { return; }

/**
 * @api {get} /student/ranking Danh sách xếp hạng
 * @apiVersion 1.0.0
 * @apiName GetRanking
 * @apiGroup Student
 *
 * @apiDescription Compare Verisons
 *
 * @apiParam {Number} course_id Require, id khóa học cần lấy, mặc định lấy khóa gần nhất theo thời gian cập nhật db.
 *
 * @apiSuccess {Number}   code   The student code.
 * @apiErrorExample Response Error:
 *      {
 *       message: "no data",
 *       status: 2,
 *       result: null,
 *     }
 *
 */
function getRanking() { return; }


/**
 * @api {get} /crawl/student/{student_code} Crawl thông tin của 1 sinh viên
 * @apiVersion 1.0.0
 * @apiName CrawlStudent
 * @apiGroup Crawl
 * @apiDescription Compare Verisons
 * @apiSuccessExample Response Success:
 *      {
 *       message: "success",
 *       status: 1,
 *     }
 * @apiErrorExample Response Error:
 *      {
 *       message: "error",
 *       status: 2,
 *       result: null,
 *     }
 */
function crawlStudent() { return; }

/**
 * @api {get} /crawl/schedule/{student_code} Crawl lịch học của 1 sinh viên
 * @apiVersion 1.0.0
 * @apiName CrawlSchedule
 * @apiGroup Crawl
 * @apiDescription Compare Verisons
 * @apiSuccessExample Response Success:
 *      {
 *       message: "success",
 *       status: 1,
 *     }
 * @apiErrorExample Response Error:
 *      {
 *       message: "error",
 *       status: 2,
 *       result: null,
 *     }
 */
function crawlSchedule() { return; }

/**
 * @api {get} /crawl/schedule-exam/{student_code} Crawl lịch thi của 1 sinh viên
 * @apiVersion 1.0.0
 * @apiName CrawlSchedueExam
 * @apiGroup Crawl
 * @apiDescription Compare Verisons
 * @apiSuccessExample Response Success:
 *      {
 *       message: "success",
 *       status: 1,
 *     }
 * @apiErrorExample Response Error:
 *      {
 *       message: "error",
 *       status: 2,
 *       result: null,
 *     }
 */
function crawlSchedueExam() { return; }

/**
 * @api {get} /crawl/money-pay/{student_code} Crawl công nợ của 1 sinh viên
 * @apiVersion 1.0.0
 * @apiName CrawlMoneyPay
 * @apiGroup Crawl
 * @apiDescription Compare Verisons
 * @apiSuccessExample Response Success:
 *      {
 *       message: "success",
 *       status: 1,
 *     }
 * @apiErrorExample Response Error:
 *      {
 *       message: "error",
 *       status: 2,
 *       result: null,
 *     }
 */
function crawlMoneyPay() { return; }

/**
 * @api {get} /crawl/semester Crawl danh sách học kỳ của 1 sinh viên
 * @apiVersion 1.0.0
 * @apiName CrawlSemester
 * @apiGroup Crawl
 * @apiDescription Compare Verisons
 * @apiSuccessExample Response Success:
 *      {
 *       message: "success",
 *       status: 1,
 *     }
 * @apiErrorExample Response Error:
 *      {
 *       message: "error",
 *       status: 2,
 *       result: null,
 *     }
 */
function crawlSemester() { return; }