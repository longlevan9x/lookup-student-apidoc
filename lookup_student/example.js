/**
 * @api {get} /student/view View a Student
 * @apiVersion 1.0.0
 * @apiName GetStudent
 * @apiGroup Student
 *
 * @apiDescription Compare Verisons
 *
 * @apiParam {Number} code Require, Mã sinh viên.
 *
 * @apiSuccess {Number}   code  The student code.
 */
function getStudent() { return; }

/**
 * @api {get} /student/ranking View Student ranking
 * @apiVersion 1.0.0
 * @apiName GetRanking
 * @apiGroup Student
 *
 * @apiDescription Compare Verisons
 *
 * @apiParam {Number} course_id Require, id khóa học cần lấy, mặc định lấy khóa gần nhất theo thời gian cập nhất db.
 *
 * @apiSuccess {Number}   code   The student code.
 *
 */
function getRanking() { return; }

/**
 * @api {get} /schedules List schedule with msv
 * @apiVersion 1.0.0
 * @apiName getSchedules
 * @apiGroup Student
 *
 * @apiDescription Compare Verisons
 *
 * @apiParam {Number} msv Require, Mã sinh viên.
 * @apiParam {String} semester Mặc định là học kỳ gần nhất.
 *
 */
function getSchedules() { return; }

/**
 * @api {get} /schedule/view View a schedule
 * @apiVersion 1.0.0
 * @apiName getSchedule
 * @apiGroup Schedule
 *
 * @apiDescription Compare Verisons
 *
 * @apiParam {Number} code Require, Mã lịch học.
 *
 */
function getSchedule() { return; }

/**
 * @api {get} /schedule/view List schedule exam with msv
 * @apiVersion 1.0.0
 * @apiName getScheduleExams
 * @apiGroup Schedule
 *
 * @apiDescription Compare Verisons
 *
 * @apiParam {Number} msv Require, Mã sinh viên.
 * @apiParam {String} semester Mặc định là học kỳ gần nhất.
 *
 */
function getScheduleExams() { return; }

/**
 * @api {get} /schedule-exam/view View a schedule exam
 * @apiVersion 1.0.0
 * @apiName getScheduleExam
 * @apiGroup Schedule
 *
 * @apiDescription Compare Verisons
 *
 * @apiParam {Number} code Require, Mã lịch thi.
 *
 */
function getScheduleExam() { return; }


/**
 * @api {get} /semester List semester
 * @apiVersion 1.0.0
 * @apiName getSemesters
 * @apiGroup semester
 *
 * @apiDescription Compare Verisons
 *
 */
function getSemesters() { return; }

/**
 * @api {get} /semester View semester
 * @apiVersion 1.0.0
 * @apiName getSemester
 * @apiGroup semester
 *
 * @apiDescription Compare Verisons
 * @apiParam {Number} id Require, Id học kỳ.
 *
 */
function getSemester() { return; }

